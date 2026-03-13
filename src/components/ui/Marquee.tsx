"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  speed = 40,
  direction = "left",
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const xPercent = direction === "left" ? -50 : 0;
    const fromPercent = direction === "left" ? 0 : -50;

    tweenRef.current = gsap.fromTo(
      track,
      { xPercent: fromPercent },
      {
        xPercent,
        duration: speed,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      tweenRef.current?.kill();
    };
  }, [speed, direction]);

  const handleMouseEnter = () => {
    if (pauseOnHover && tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.5 });
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });
    }
  };

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={trackRef} className="flex w-max gap-12">
        {children}
        {children}
      </div>
    </div>
  );
}
