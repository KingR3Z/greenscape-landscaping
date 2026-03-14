"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const currentMode = useRef<string>("");

  const updateCursorMode = useCallback((mode: string) => {
    if (mode === currentMode.current) return;
    currentMode.current = mode;

    if (!ringRef.current || !dotRef.current || !labelRef.current) return;

    if (mode === "view" || mode === "next") {
      setCursorLabel(mode === "view" ? "View" : "Next");
      gsap.to(ringRef.current, {
        width: 80,
        height: 80,
        borderColor: "rgba(255, 255, 255, 0.6)",
        backgroundColor: "rgba(33, 33, 35, 0.85)",
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(dotRef.current, { opacity: 0, duration: 0.15 });
      gsap.to(labelRef.current, { opacity: 1, duration: 0.2, delay: 0.1 });
    } else if (mode === "link") {
      setCursorLabel("");
      gsap.to(ringRef.current, {
        width: 60,
        height: 60,
        borderColor: "rgba(33, 33, 35, 0.4)",
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(dotRef.current, { opacity: 1, duration: 0.15 });
      gsap.to(labelRef.current, { opacity: 0, duration: 0.15 });
    } else {
      setCursorLabel("");
      gsap.to(ringRef.current, {
        width: 40,
        height: 40,
        borderColor: "rgba(10, 10, 10, 0.3)",
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(dotRef.current, { opacity: 1, duration: 0.15 });
      gsap.to(labelRef.current, { opacity: 0, duration: 0.15 });
    }
  }, []);

  useEffect(() => {
    if (!dotRef.current || !ringRef.current) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const xDot = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor]");
      if (cursorEl) {
        const mode = cursorEl.getAttribute("data-cursor") || "link";
        updateCursorMode(mode);
      }
    };

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      const relatedTarget = (e as MouseEvent).relatedTarget as HTMLElement | null;
      const cursorEl = target.closest("[data-cursor]");

      if (cursorEl && (!relatedTarget || !cursorEl.contains(relatedTarget))) {
        const newCursorEl = relatedTarget?.closest("[data-cursor]");
        if (newCursorEl) {
          const mode = newCursorEl.getAttribute("data-cursor") || "link";
          updateCursorMode(mode);
        } else {
          updateCursorMode("default");
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible, updateCursorMode]);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor fixed top-0 left-0 z-[10000] pointer-events-none rounded-full"
        style={{
          width: 8,
          height: 8,
          backgroundColor: "#0a0a0a",
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
      <div
        ref={ringRef}
        className="custom-cursor fixed top-0 left-0 z-[10000] pointer-events-none rounded-full flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          border: "1.5px solid rgba(10, 10, 10, 0.3)",
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <span
          ref={labelRef}
          className="text-white text-xs font-medium uppercase tracking-wider"
          style={{ opacity: 0, pointerEvents: "none" }}
        >
          {cursorLabel}
        </span>
      </div>
    </>
  );
}
