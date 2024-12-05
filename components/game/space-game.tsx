"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Timer, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {
    GRAVITY,
    THRUST,
    MAX_VELOCITY,
    MIN_OBSTACLE_GAP,
    MAX_OBSTACLE_GAP,
    OBSTACLE_WIDTH,
    SPEED_INCREASE_RATE,
    SPAWN_INTERVAL,
    drawRocket,
    drawObstacle,
    checkCollision
} from './utils';
import type { GameState, RocketState, Star, Obstacle } from './types';

export function SpaceGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [showStart, setShowStart] = useState(true);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const rocketRef = useRef<RocketState>({
        y: 0,
        velocity: 0,
    });

    const gameStateRef = useRef<GameState>({
        obstacles: [],
        stars: [],
        animationFrame: 0,
        startTime: 0,
        baseSpeed: 5,
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - 80;
            rocketRef.current.y = canvas.height / 2;

            gameStateRef.current.stars = Array(100).fill(null).map(() => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                speed: Math.random() * 2 + 1,
            }));
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    const startGame = () => {
        if (!canvasRef.current) return;

        setShowStart(false);
        setGameStarted(true);
        setGameOver(false);
        setCurrentTime(0);

        rocketRef.current = {
            y: canvasRef.current.height / 2,
            velocity: 0,
        };

        gameStateRef.current = {
            obstacles: [],
            stars: gameStateRef.current.stars,
            animationFrame: 0,
            startTime: Date.now(),
            baseSpeed: 5,
        };

        gameLoop();
    };

    const endGame = () => {
        setGameOver(true);
        setGameStarted(false);
        setShowStart(false);
    };

    const resetGame = () => {
        setShowStart(true);
        setGameOver(false);
        setGameStarted(false);
        setCurrentTime(0);
    };

    const handleInput = (isPressed: boolean) => {
        if (gameStarted && !gameOver) {
            rocketRef.current.velocity = isPressed ? THRUST : 0;
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                handleInput(true);
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                handleInput(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [gameStarted, gameOver]);

    const gameLoop = () => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Ensure canvas is non-null

        const ctx = canvas.getContext('2d');
        if (!ctx) return; // Ensure context is non-null

        ctx.fillStyle = 'rgb(8, 8, 28)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw stars
        gameStateRef.current.stars.forEach(star => {
            star.x -= star.speed * (gameStateRef.current.baseSpeed / 5);
            if (star.x < 0) {
                star.x = canvas.width;
                star.y = Math.random() * canvas.height;
            }

            ctx.fillStyle = `rgba(255, 255, 255, ${star.speed / 3})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        // Increase game speed
        gameStateRef.current.baseSpeed += SPEED_INCREASE_RATE;

        // Update rocket position
        rocketRef.current.velocity = Math.max(
            Math.min(rocketRef.current.velocity + GRAVITY, MAX_VELOCITY),
            -MAX_VELOCITY
        );
        rocketRef.current.y += rocketRef.current.velocity;

        drawRocket(ctx, 100, rocketRef.current.y);

        // Update and draw obstacles
        if (gameStateRef.current.animationFrame % SPAWN_INTERVAL === 0) {
            const gap = MIN_OBSTACLE_GAP + Math.random() * (MAX_OBSTACLE_GAP - MIN_OBSTACLE_GAP);
            const topHeight = Math.random() * (canvas.height - gap - 100) + 50;
            gameStateRef.current.obstacles.push({
                id: Date.now(),
                x: canvas.width,
                topHeight,
                gap,
                speed: gameStateRef.current.baseSpeed,
            });
        }

        gameStateRef.current.obstacles = gameStateRef.current.obstacles.filter(obstacle => {
            obstacle.x -= obstacle.speed;

            drawObstacle(ctx, obstacle.x, obstacle.topHeight, true);
            drawObstacle(ctx, obstacle.x, obstacle.topHeight + obstacle.gap, false);

            if (checkCollision(100, rocketRef.current.y, obstacle.x, obstacle.topHeight, obstacle.gap)) {
                endGame();
            }

            return obstacle.x > -OBSTACLE_WIDTH;
        });

        if (rocketRef.current.y < 0 || rocketRef.current.y > canvas.height) {
            endGame();
            return;
        }

        setCurrentTime(Math.floor((Date.now() - gameStateRef.current.startTime) / 1000));

        gameStateRef.current.animationFrame++;
        if (!gameOver) {
            requestAnimationFrame(gameLoop);
        }
    };

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border h-20">
                <div className="container h-full mx-auto px-4 flex justify-between items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4" />
                        <span>{currentTime}s</span>
                    </div>
                </div>
            </div>

            <div className="h-[calc(100vh-80px)]">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                    onTouchStart={() => handleInput(true)}
                    onTouchEnd={() => handleInput(false)}
                />

                {showStart && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <h2 className="text-2xl font-bold mb-4">Space Runner</h2>
                            <p className="mb-6 text-muted-foreground">
                                Press spacebar or tap screen to control the rocket
                            </p>
                            <button
                                onClick={startGame}
                                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                            >
                                Start Game
                            </button>
                        </motion.div>
                    </div>
                )}

                {gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
                            <p className="mb-4">Time: {currentTime}s</p>
                            <button
                                onClick={resetGame}
                                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                            >
                                Play Again
                            </button>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}