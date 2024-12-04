"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RocketIcon, Timer, Trophy, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Obstacle {
    id: number;
    x: number;
    topHeight: number;
}

export function RocketGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [showGame, setShowGame] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [bestTime, setBestTime] = useState(0);

    const rocketRef = useRef({
        y: 0,
        velocity: 0,
    });

    const gameStateRef = useRef({
        obstacles: [] as Obstacle[],
        animationFrame: 0,
        startTime: 0,
    });

    const GRAVITY = 0.5;
    const JUMP_FORCE = -10;
    const OBSTACLE_SPEED = 3;
    const OBSTACLE_GAP = 200;
    const OBSTACLE_WIDTH = 60;
    const ROCKET_SIZE = 40;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 0.8;
            rocketRef.current.y = canvas.height / 2;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    const startGame = () => {
        if (!canvasRef.current) return;

        setGameStarted(true);
        setGameOver(false);
        setCurrentTime(0);

        rocketRef.current = {
            y: canvasRef.current.height / 2,
            velocity: 0,
        };

        gameStateRef.current = {
            obstacles: [],
            animationFrame: 0,
            startTime: Date.now(),
        };

        gameLoop();
    };

    const gameLoop = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!canvas || !ctx) return;

        // Clear canvas
        ctx.fillStyle = 'rgba(8, 8, 28, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update rocket position
        rocketRef.current.velocity += GRAVITY;
        rocketRef.current.y += rocketRef.current.velocity;

        // Draw rocket
        ctx.fillStyle = '#9333EA';
        ctx.beginPath();
        ctx.moveTo(100, rocketRef.current.y);
        ctx.lineTo(100 + ROCKET_SIZE, rocketRef.current.y + ROCKET_SIZE / 2);
        ctx.lineTo(100, rocketRef.current.y + ROCKET_SIZE);
        ctx.closePath();
        ctx.fill();

        // Update and draw obstacles
        if (gameStateRef.current.animationFrame % 100 === 0) {
            const topHeight = Math.random() * (canvas.height - OBSTACLE_GAP - 100) + 50;
            gameStateRef.current.obstacles.push({
                id: Date.now(),
                x: canvas.width,
                topHeight,
            });
        }

        gameStateRef.current.obstacles = gameStateRef.current.obstacles.filter(obstacle => {
            obstacle.x -= OBSTACLE_SPEED;

            // Draw top obstacle
            ctx.fillStyle = '#6366F1';
            ctx.fillRect(obstacle.x, 0, OBSTACLE_WIDTH, obstacle.topHeight);

            // Draw bottom obstacle
            ctx.fillRect(
                obstacle.x,
                obstacle.topHeight + OBSTACLE_GAP,
                OBSTACLE_WIDTH,
                canvas.height - (obstacle.topHeight + OBSTACLE_GAP)
            );

            // Check collision
            if (
                100 < obstacle.x + OBSTACLE_WIDTH &&
                100 + ROCKET_SIZE > obstacle.x &&
                (rocketRef.current.y < obstacle.topHeight ||
                    rocketRef.current.y + ROCKET_SIZE > obstacle.topHeight + OBSTACLE_GAP)
            ) {
                endGame();
            }

            return obstacle.x > -OBSTACLE_WIDTH;
        });

        // Check boundaries
        if (rocketRef.current.y < 0 || rocketRef.current.y > canvas.height) {
            endGame();
            return;
        }

        // Update time
        setCurrentTime(Math.floor((Date.now() - gameStateRef.current.startTime) / 1000));

        gameStateRef.current.animationFrame++;
        if (!gameOver) {
            requestAnimationFrame(gameLoop);
        }
    };

    const endGame = () => {
        setGameOver(true);
        setGameStarted(false);
        if (currentTime > bestTime) {
            setBestTime(currentTime);
        }
    };

    const handleInput = (isPressed: boolean) => {
        if (gameStarted && !gameOver) {
            rocketRef.current.velocity = isPressed ? JUMP_FORCE : 0;
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

    const handleBack = () => {
        setShowGame(false);
        setGameStarted(false);
        setGameOver(false);
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <AnimatePresence>
                {!showGame && (
                    <motion.button
                        onClick={() => setShowGame(true)}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200" />
                        <div className="relative px-6 py-3 bg-background rounded-lg leading-none flex items-center">
                            <RocketIcon className="w-6 h-6 text-primary animate-float" />
                            <span className="ml-2 text-foreground">Play Game</span>
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showGame && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
                    >
                        <div className="relative w-full h-full max-w-7xl mx-auto px-4">
                            <div className="absolute top-4 left-4 z-10">
                                <button
                                    onClick={handleBack}
                                    className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Home
                                </button>
                            </div>

                            <div className="absolute top-4 right-4 flex items-center gap-4 text-foreground">
                                <div className="flex items-center gap-2">
                                    <Timer className="w-4 h-4" />
                                    <span>{currentTime}s</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-primary" />
                                    <span>{bestTime}s</span>
                                </div>
                            </div>

                            {!gameStarted && !gameOver && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                                >
                                    <h2 className="text-2xl font-bold mb-4">Ready to Play?</h2>
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
                            )}

                            <canvas
                                ref={canvasRef}
                                className="w-full h-4/5 mt-16"
                                onTouchStart={() => handleInput(true)}
                                onTouchEnd={() => handleInput(false)}
                            />

                            {gameOver && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                                >
                                    <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
                                    <p className="mb-4">Time: {currentTime}s</p>
                                    <button
                                        onClick={startGame}
                                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                                    >
                                        Play Again
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}