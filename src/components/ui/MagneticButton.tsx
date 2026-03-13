"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  variant = "primary",
  size = "md",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const bgRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: "power3.out",
    });
    if (textRef.current) {
      gsap.to(textRef.current, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
    if (textRef.current) {
      gsap.to(textRef.current, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      });
    }
    // Shrink hover bg
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    // Expand hover bg
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (onClick) {
        onClick();
        return;
      }
      // Smooth scroll for hash links
      if (href?.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [href, onClick]
  );

  // Ripple effect on click
  const handleRipple = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position: absolute; border-radius: 50%; pointer-events: none;
      width: ${size}px; height: ${size}px;
      left: ${e.clientX - rect.left - size / 2}px;
      top: ${e.clientY - rect.top - size / 2}px;
      background: rgba(255,255,255,0.2); transform: scale(0); z-index: 0;
    `;
    const inner = buttonRef.current.querySelector(".btn-inner");
    if (inner) {
      inner.appendChild(ripple);
      gsap.to(ripple, {
        scale: 2.5,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      });
    }
  }, []);

  const baseClasses =
    "magnetic-wrap rounded-full font-medium inline-flex items-center justify-center relative overflow-hidden";
  const variants = {
    primary: "bg-[#1B5E20] text-[#fafafa]",
    outline: "border border-[#1B5E20]/20 text-[#0C1F0E]",
    ghost: "text-[#0C1F0E]",
  };
  const hoverBgColors = {
    primary: "#FFB300",
    outline: "#1B5E20",
    ghost: "transparent",
  };
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4.5 text-lg",
  };

  const Tag = href ? "a" : "button";

  return (
    <div
      ref={buttonRef}
      className="magnetic-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      data-cursor="link"
    >
      <Tag
        href={href}
        onClick={(e: React.MouseEvent<HTMLAnchorElement & HTMLButtonElement>) => {
          handleClick(e);
          handleRipple(e);
        }}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {/* Animated hover background */}
        {variant !== "ghost" && (
          <span
            ref={bgRef}
            className="absolute inset-0 rounded-full z-0"
            style={{
              backgroundColor: hoverBgColors[variant],
              transform: "scale(0)",
              transformOrigin: "center",
            }}
          />
        )}
        <span
          ref={textRef}
          className="relative z-10 flex items-center gap-2 transition-colors duration-300"
          style={{
            // Text turns white on hover for outline variant
          }}
        >
          {children}
        </span>
      </Tag>
    </div>
  );
}
