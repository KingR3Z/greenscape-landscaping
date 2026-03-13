"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  direction?: "left" | "right" | "bottom" | "top";
  duration?: number;
  width?: number;
  height?: number;
}

export default function RevealImage({
  src,
  alt,
  className = "",
  direction = "left",
  duration = 1.2,
  width,
  height,
}: RevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const clipFrom: Record<string, string> = {
      left: "inset(0 100% 0 0)",
      right: "inset(0 0 0 100%)",
      bottom: "inset(100% 0 0 0)",
      top: "inset(0 0 100% 0)",
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { clipPath: clipFrom[direction], scale: 1.2 },
        {
          clipPath: "inset(0 0% 0 0%)",
          scale: 1,
          duration,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [direction, duration]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        style={{ clipPath: "inset(0 100% 0 0)" }}
      />
    </div>
  );
}
