"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASE = {
  smooth: "power3.out",
  expo: "expo.out",
  expoInOut: "expo.inOut",
  bounce: "back.out(1.4)",
  elastic: "elastic.out(1, 0.5)",
};

export const DURATION = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  verySlow: 1.8,
};

export function createFadeUp(
  element: Element,
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    trigger?: Element;
    start?: string;
  }
) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: options?.y ?? 60 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? DURATION.normal,
      ease: EASE.smooth,
      delay: options?.delay ?? 0,
      scrollTrigger: {
        trigger: options?.trigger ?? element,
        start: options?.start ?? "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}

export function createStaggerGrid(
  container: Element,
  items: Element[],
  options?: {
    stagger?: number;
    y?: number;
    duration?: number;
  }
) {
  return gsap.fromTo(
    items,
    { opacity: 0, y: options?.y ?? 40, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: options?.duration ?? DURATION.normal,
      ease: EASE.smooth,
      stagger: options?.stagger ?? 0.12,
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    }
  );
}

export function createParallax(
  element: Element,
  options?: { speed?: number; trigger?: Element }
) {
  return gsap.to(element, {
    yPercent: options?.speed ?? -20,
    ease: "none",
    scrollTrigger: {
      trigger: options?.trigger ?? element,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
}

export function createClipReveal(
  element: Element,
  options?: {
    direction?: "up" | "left" | "right";
    duration?: number;
    trigger?: Element;
    start?: string;
  }
) {
  const dir = options?.direction ?? "up";
  const fromClip =
    dir === "up" ? "inset(100% 0 0 0)" :
    dir === "left" ? "inset(0 100% 0 0)" :
    "inset(0 0 0 100%)";

  return gsap.fromTo(
    element,
    { clipPath: fromClip },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: options?.duration ?? 1.4,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: options?.trigger ?? element,
        start: options?.start ?? "top 70%",
        toggleActions: "play none none none",
      },
    }
  );
}

export { gsap, ScrollTrigger };
