"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  animation?: "reveal" | "fadeUp" | "words";
  stagger?: number;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function SplitText({
  children,
  as: Tag = "div",
  animation = "fadeUp",
  stagger = 0.08,
  duration = 1.0,
  delay = 0,
  className = "",
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const text = el.textContent || "";
    const words = text.split(/\s+/);

    if (animation === "words") {
      el.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden"><span class="split-word inline-block">${word}</span></span>`
        )
        .join(" ");

      const wordEls = el.querySelectorAll(".split-word");

      gsap.fromTo(
        wordEls,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration,
          ease: "expo.out",
          stagger,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    } else if (animation === "reveal") {
      el.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden"><span class="split-word inline-block">${word}</span></span>`
        )
        .join(" ");

      const wordEls = el.querySelectorAll(".split-word");

      gsap.fromTo(
        wordEls,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration,
          ease: "expo.out",
          stagger,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    } else {
      // fadeUp - animate the whole element
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === el) t.kill();
      });
    };
  }, [animation, stagger, duration, delay, once]);

  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
