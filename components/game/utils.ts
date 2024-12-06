import { type Obstacle } from './types';

export const GRAVITY = 0.5;
export const THRUST = -8;
export const MAX_VELOCITY = 15;
export const MIN_OBSTACLE_GAP = 160;
export const MAX_OBSTACLE_GAP = 240;
export const OBSTACLE_WIDTH = 80;
export const ROCKET_SIZE = 40;
export const SPEED_INCREASE_RATE = 0.005;
export const SPAWN_INTERVAL = 120;

export function drawRocket(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    customSprite?: HTMLImageElement | null
) {
    if (customSprite) {
        ctx.drawImage(
            customSprite,
            x - ROCKET_SIZE / 2,
            y - ROCKET_SIZE / 2,
            ROCKET_SIZE,
            ROCKET_SIZE
        );
        return;
    }

    // Default rocket drawing
    ctx.fillStyle = '#9333EA';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 20, y + ROCKET_SIZE);
    ctx.lineTo(x + ROCKET_SIZE, y + ROCKET_SIZE / 2);
    ctx.lineTo(x - 20, y);
    ctx.closePath();
    ctx.fill();

    // Draw flame
    ctx.fillStyle = '#F97316';
    ctx.beginPath();
    ctx.moveTo(x - 20, y + ROCKET_SIZE / 4);
    ctx.lineTo(x - 35, y + ROCKET_SIZE / 2);
    ctx.lineTo(x - 20, y + (ROCKET_SIZE * 3) / 4);
    ctx.closePath();
    ctx.fill();
}

export function drawObstacle(
    ctx: CanvasRenderingContext2D,
    x: number,
    height: number,
    isTop: boolean
) {
    const gradient = ctx.createLinearGradient(x, 0, x + OBSTACLE_WIDTH, 0);
    gradient.addColorStop(0, '#4F46E5');
    gradient.addColorStop(1, '#7C3AED');
    ctx.fillStyle = gradient;

    if (isTop) {
        ctx.fillRect(x, 0, OBSTACLE_WIDTH, height);
    } else {
        ctx.fillRect(x, height, OBSTACLE_WIDTH, ctx.canvas.height - height);
    }
}

export function checkCollision(
    rocketX: number,
    rocketY: number,
    obstacleX: number,
    obstacleTopHeight: number,
    gap: number
): boolean {
    const rocketRight = rocketX + ROCKET_SIZE;
    const rocketBottom = rocketY + ROCKET_SIZE;
    const obstacleRight = obstacleX + OBSTACLE_WIDTH;
    const gapBottom = obstacleTopHeight + gap;

    return (
        rocketRight > obstacleX &&
        rocketX < obstacleRight &&
        (rocketY < obstacleTopHeight || rocketBottom > gapBottom)
    );
}

export function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}