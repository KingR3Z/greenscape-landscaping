"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { footerData } from "@/data/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FooterTaglines() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const taglinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      if (taglinesRef.current) {
        const lines = taglinesRef.current.querySelectorAll("h3");
        gsap.fromTo(
          lines,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: taglinesRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-white"
      style={{
        paddingTop: "clamp(100px, 12vw, 200px)",
        paddingBottom: "clamp(80px, 8vw, 140px)",
      }}
    >
      <div className="container-custom">
        <div ref={taglinesRef}>
          {footerData.taglines.map((line, i) => (
            <h3
              key={i}
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 400,
                letterSpacing: "-1.28px",
                lineHeight: 1.17,
                color: "#212123",
                opacity: 0,
              }}
            >
              {line}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}
