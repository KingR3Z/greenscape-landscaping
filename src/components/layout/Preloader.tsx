"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const hasRun = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (hasRun.current) return;
    if (!containerRef.current || !textRef.current) return;
    hasRun.current = true;

    const container = containerRef.current;
    const text = textRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        if (container) container.style.display = "none";
        onCompleteRef.current?.();
      },
    });

    tl.fromTo(
      text,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .to(text, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        delay: 0.6,
        ease: "power2.inOut",
      })
      .to(container, {
        yPercent: -100,
        duration: 0.8,
        ease: "expo.inOut",
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-white"
    >
      <h1
        ref={textRef}
        className="text-4xl md:text-6xl tracking-tight font-display"
        style={{
          color: "#212123",
          fontWeight: 300,
          letterSpacing: "-1.76px",
          opacity: 0,
        }}
      >
        GreenScape
      </h1>
    </div>
  );
}
