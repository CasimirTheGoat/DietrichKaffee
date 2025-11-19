'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroRotatorProps {
  images: string[];
  interval?: number;
  transitionDuration?: number;
}

export default function HeroRotator({
  images,
  interval = 6000,
  transitionDuration = 600
}: HeroRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(images.length).fill(false));

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isPaused]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const handleImageError = (index: number) => {
    console.warn(`Failed to load hero image: ${images[index]}`);
  };
  return (
    <div
      className="absolute inset-0 bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-live="off"
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity ${
            !imagesLoaded[index] ? 'opacity-0' : ''
          }`}
          style={{
            opacity: index === currentIndex && imagesLoaded[index] ? 1 : 0,
            transitionDuration: `${transitionDuration}ms`
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover w-full h-full"
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
            priority={index === 0}
            onLoad={() => handleImageLoad(index)}
            onError={() => handleImageError(index)}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
