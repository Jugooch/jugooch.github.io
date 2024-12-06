"use client";

import { useEffect, useRef, useState } from 'react';
import { getStroke } from 'perfect-freehand';
import { motion } from 'framer-motion';
import {
    Paintbrush,
    Eraser,
    Download,
    Undo,
    Redo,
    Save,
    PaintBucket,
    Trash2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Point {
    x: number;
    y: number;
}

interface CharacterCanvasProps {
    onSave: (imageData: string) => void;
}

export function CharacterCanvas({ onSave }: CharacterCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [tool, setTool] = useState<'brush' | 'eraser' | 'fill'>('brush');
    const [color, setColor] = useState('#9333EA');
    const [size, setSize] = useState(5);
    const [currentPath, setCurrentPath] = useState<Point[]>([]);
    const [history, setHistory] = useState<ImageData[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 400;
        canvas.height = 400;

        // Initialize with transparent background
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        saveCurrentState();
    }, []);

    const saveCurrentState = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        setHistory(prev => [...prev.slice(0, historyIndex + 1), imageData]);
        setHistoryIndex(prev => prev + 1);
    };

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        if (tool === 'fill') return; // Don't start drawing if using fill tool

        setIsDrawing(true);
        const point = getPoint(e);
        setCurrentPath([point]);
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing || tool === 'fill') return;

        const point = getPoint(e);
        setCurrentPath(prev => [...prev, point]);

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        ctx.strokeStyle = color;
        ctx.lineWidth = size;

        if (tool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
        } else {
            ctx.globalCompositeOperation = 'source-over';
        }

        const stroke = getStroke(currentPath, {
            size: size,
            thinning: 0.5,
            smoothing: 0.5,
            streamline: 0.5,
        });

        ctx.beginPath();
        ctx.moveTo(stroke[0][0], stroke[0][1]);

        for (let i = 1; i < stroke.length; i++) {
            ctx.lineTo(stroke[i][0], stroke[i][1]);
        }

        ctx.stroke();
    };

    const endDrawing = () => {
        if (isDrawing) {
            setIsDrawing(false);
            setCurrentPath([]);
            saveCurrentState();
        }
    };

    const getPoint = (e: React.MouseEvent | React.TouchEvent): Point => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };

        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
        const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

        return {
            x: x * scaleX,
            y: y * scaleY
        };
    };

    const floodFill = (startX: number, startY: number, fillColor: string) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
        const pixels = imageData.data;

        // Get the color we're trying to replace
        const startPos = (startY * imageData.width + startX) * 4;
        const startR = pixels[startPos];
        const startG = pixels[startPos + 1];
        const startB = pixels[startPos + 2];
        const startA = pixels[startPos + 3];

        // Convert fill color from hex to RGB
        const fillRGB = {
            r: parseInt(fillColor.slice(1, 3), 16),
            g: parseInt(fillColor.slice(3, 5), 16),
            b: parseInt(fillColor.slice(5, 7), 16),
            a: 255
        };

        // Don't fill if we're trying to fill with the same color
        if (startR === fillRGB.r && startG === fillRGB.g &&
            startB === fillRGB.b && startA === fillRGB.a) {
            return;
        }

        const stack = [[startX, startY]];

        while (stack.length > 0) {
            const [x, y] = stack.pop()!;
            const pos = (y * imageData.width + x) * 4;

            if (x < 0 || x >= imageData.width || y < 0 || y >= imageData.height) continue;
            if (pixels[pos] !== startR || pixels[pos + 1] !== startG ||
                pixels[pos + 2] !== startB || pixels[pos + 3] !== startA) continue;

            // Fill the pixel
            pixels[pos] = fillRGB.r;
            pixels[pos + 1] = fillRGB.g;
            pixels[pos + 2] = fillRGB.b;
            pixels[pos + 3] = fillRGB.a;

            // Add neighboring pixels to stack
            stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
        }

        ctx.putImageData(imageData, 0, 0);
        saveCurrentState();
    };

    const handleCanvasClick = (e: React.MouseEvent) => {
        if (tool === 'fill') {
            const point = getPoint(e);
            floodFill(Math.floor(point.x), Math.floor(point.y), color);
        }
    };

    const undo = () => {
        if (historyIndex <= 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        setHistoryIndex(prev => prev - 1);
        ctx.putImageData(history[historyIndex - 1], 0, 0);
    };

    const redo = () => {
        if (historyIndex >= history.length - 1) return;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        setHistoryIndex(prev => prev + 1);
        ctx.putImageData(history[historyIndex + 1], 0, 0);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;

        // Clear to transparent instead of white
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        saveCurrentState();
    };

    const downloadImage = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = 'space-character.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    const saveCharacter = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        onSave(canvas.toDataURL('image/png'));
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap justify-center items-center mb-4 gap-2"> {/* Use flex-wrap here */}
                <div className="flex flex-wrap items-center gap-2">
                    <button
                        onClick={() => setTool('brush')}
                        className={cn(
                            "p-2 rounded-lg transition-colors",
                            tool === 'brush' ? "bg-primary text-primary-foreground" : "bg-card hover:bg-card/80"
                        )}
                    >
                        <Paintbrush className="w-5 h-5"/>
                    </button>
                    <button
                        onClick={() => setTool('fill')}
                        className={cn(
                            "p-2 rounded-lg transition-colors",
                            tool === 'fill' ? "bg-primary text-primary-foreground" : "bg-card hover:bg-card/80"
                        )}
                    >
                        <PaintBucket className="w-5 h-5"/>
                    </button>
                    <button
                        onClick={() => setTool('eraser')}
                        className={cn(
                            "p-2 rounded-lg transition-colors",
                            tool === 'eraser' ? "bg-primary text-primary-foreground" : "bg-card hover:bg-card/80"
                        )}
                    >
                        <Eraser className="w-5 h-5"/>
                    </button>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-lg"
                    />
                    <input
                        type="range"
                        min="1"
                        max="20"
                        value={size}
                        onChange={(e) => setSize(parseInt(e.target.value))}
                        className="w-32"
                    />
                </div>
                <div className="flex flex-wrap gap-2 items-center"> {/* Wrap this flex container as well */}
                    <button
                        onClick={clearCanvas}
                        className="p-2 rounded-lg bg-destructive text-destructive-foreground hover:opacity-90 transition-colors"
                        title="Clear Canvas"
                    >
                        <Trash2 className="w-5 h-5"/>
                    </button>
                    <button
                        onClick={undo}
                        disabled={historyIndex <= 0}
                        className="p-2 rounded-lg bg-card hover:bg-card/80 disabled:opacity-50 transition-colors"
                    >
                        <Undo className="w-5 h-5"/>
                    </button>
                    <button
                        onClick={redo}
                        disabled={historyIndex >= history.length - 1}
                        className="p-2 rounded-lg bg-card hover:bg-card/80 disabled:opacity-50 transition-colors"
                    >
                        <Redo className="w-5 h-5"/>
                    </button>
                </div>
            </div>

            <div className="relative border border-border rounded-lg overflow-hidden max-w-full mx-auto"
                 style={{width: '100%', height: 'auto', maxHeight: '80vh'}}>
                <canvas
                    ref={canvasRef}
                    className="w-full h-full touch-none bg-transparent"
                    style={{
                        aspectRatio: '1 / 1',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        height: 'auto',
                        background: 'repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px'
                    }}
                    onClick={handleCanvasClick}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={endDrawing}
                    onMouseLeave={endDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={endDrawing}
                />
            </div>

            <div className="flex justify-end gap-2">
                <button
                    onClick={downloadImage}
                    className="px-4 py-2 rounded-lg bg-card hover:bg-card/80 transition-colors inline-flex items-center gap-2"
                >
                    <Download className="w-4 h-4"/>
                    Download
                </button>
                <button
                    onClick={saveCharacter}
                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-colors inline-flex items-center gap-2"
                >
                    <Save className="w-4 h-4"/>
                    Save & Use
                </button>
            </div>
        </div>
    );
}