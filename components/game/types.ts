export interface Obstacle {
    id: number;
    x: number;
    topHeight: number;
    gap: number;
    speed: number;
}

export interface Star {
    x: number;
    y: number;
    radius: number;
    speed: number;
}

export interface GameState {
    obstacles: Obstacle[];
    stars: Star[];
    animationFrame: number;
    startTime: number;
    baseSpeed: number;
}

export interface RocketState {
    y: number;
    velocity: number;
}