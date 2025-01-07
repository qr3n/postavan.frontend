import React, { useEffect, useRef } from 'react';

interface CanvasImageProps {
    src: string; // Путь к изображению
    width: number; // Ширина canvas
    height: number; // Высота canvas
    alt?: string; // Альтернативный текст
    className?: string; // Классы для стилизации
    style?: React.CSSProperties; // Inline-стили
}

export const CanvasImage: React.FC<CanvasImageProps> = ({ src, width, height, alt = '', className, style }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const img = new Image();
        img.src = src;
        img.alt = alt;
        img.onload = () => {
            // Очищаем канвас перед рендерингом
            context.clearRect(0, 0, width, height);
            // Рисуем изображение на канвасе
            context.drawImage(img, 0, 0, width, height);
        };

        img.onerror = (error) => {
            console.error('Ошибка загрузки изображения:', error);
        };
    }, [src, width, height, alt]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className={className}
            style={style}
            aria-label={alt}
        />
    );
};

export default CanvasImage;
