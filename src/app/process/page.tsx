"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import Image from "next/image";
import CTALink from "@/components/ui/CTALink";

gsap.registerPlugin(ScrollTrigger);

const designSteps = [
  {
    number: "01",
    title: "initial consultation & site visit",
    description: "We begin every project with a detailed site visit and in-depth consultation. We listen carefully to how you use your space, what inspires you, and how you envision your outdoor life.",
  },
  {
    number: "02",
    title: "comprehensive site survey",
    description: "Our team conducts a thorough survey of your property — topography, drainage, soil conditions, existing structures, and utilities. This data forms the foundation of every design decision.",
  },
  {
    number: "03",
    title: "2d design & cost estimate",
    description: "We create detailed concept plans and accurate cost estimates, refining the design with your input. You'll know exactly what to expect before we move to the next phase.",
  },
  {
    number: "04",
    title: "3d visualisation & refinement",
    description: "See your garden come to life with photorealistic 3D renderings. We refine every detail — materials, planting, lighting — until the design perfectly reflects your vision.",
  },
  {
    number: "05",
    title: "material selection & contract finalisation",
    description: "We guide you through selecting premium materials and finalise the project contract. Every specification is documented so there are no surprises during construction.",
  },
];

const buildSteps = [
  {
    number: "01",
    title: "project scheduling & kickoff",
    description: "Your dedicated project manager creates a detailed timeline and coordinates all trades. We keep you informed at every stage with regular updates and site meetings.",
  },
  {
    number: "02",
    title: "permits, working drawings & project details",
    description: "We handle all permits and create detailed working drawings for every element. Our engineering team ensures structural integrity and compliance with all regulations.",
  },
  {
    number: "03",
    title: "construction completion & client training",
    description: "Our skilled in-house team brings the design to life with meticulous attention to detail. We walk you through every feature and provide a comprehensive maintenance guide.",
  },
];

function ProcessCard({ step, index, isDark }: { step: typeof designSteps[0]; index: number; isDark: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const textColor = isDark ? "#ffffff" : "#212123";
  const mutedColor = isDark ? "#A0A1A5" : "#606065";
  const borderColor = isDark ? "rgba(255,255,255,0.15)" : "rgba(33,33,35,0.1)";

  return (
    <div
      className="process-card flex flex-col justify-between"
      style={{
        borderBottom: `1px solid ${borderColor}`,
        paddingBottom: "clamp(24px, 3vw, 40px)",
        paddingTop: index < 3 ? "0" : "clamp(24px, 3vw, 40px)",
        opacity: 0,
      }}
    >
      <div>
        <span
          className="font-display block mb-4"
          style={{
            fontSize: "clamp(48px, 4vw, 64px)",
            fontWeight: 300,
            color: isDark ? "rgba(255,255,255,0.08)" : "rgba(33,33,35,0.06)",
            letterSpacing: "-1px",
          }}
        >
          {step.number}
        </span>
        <h3
          className="font-display mb-3"
          style={{
            fontSize: "clamp(18px, 1.5vw, 24px)",
            fontWeight: 400,
            color: textColor,
            letterSpacing: "-0.36px",
          }}
        >
          {step.title}
        </h3>
        {expanded && (
          <p
            style={{
              fontSize: "16px",
              lineHeight: "28.8px",
              color: mutedColor,
              marginBottom: "16px",
            }}
          >
            {step.description}
          </p>
        )}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="self-end mt-4 transition-transform duration-300"
        style={{
          color: mutedColor,
          fontSize: "24px",
          lineHeight: 1,
          transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
        }}
        data-cursor="link"
        aria-label={expanded ? "Collapse" : "Expand"}
      >
        +
      </button>
    </div>
  );
}

export default function ProcessPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      const sections = pageRef.current!.querySelectorAll(".process-grid-section");
      sections.forEach((section) => {
        const cards = section.querySelectorAll(".process-card");
        const texts = section.querySelectorAll(".section-text-reveal");

        gsap.fromTo(
          texts,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 70%" },
          }
        );

        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 65%" },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      {/* Hero — split layout like Cedar Springs */}
      <section className="bg-white" style={{ paddingTop: "170px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "60vh" }}>
          {/* Left: text */}
          <div className="flex flex-col justify-center" style={{ padding: "clamp(40px, 6vw, 100px) clamp(30px, 5vw, 80px)" }}>
            <h1
              className="font-display"
              style={{
                fontSize: "var(--h1-size)",
                fontWeight: 300,
                letterSpacing: "var(--h1-letter-spacing)",
                lineHeight: "var(--h1-line-height)",
                color: "#212123",
                marginBottom: "24px",
              }}
            >
              the proven process
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "28.8px",
                color: "#212123",
                maxWidth: "500px",
              }}
            >
              Every GreenScape project follows a proven process. It&apos;s designed to give you
              confidence at every step — from the first sketch to the moment you step into your
              completed landscape.
            </p>
          </div>
          {/* Right: image */}
          <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
            <Image
              src="/images/projects/project-05.jpg"
              alt="Our proven process"
              fill
              className="object-cover"
              sizes="50vw"
            />
            {/* Badge overlay */}
            <div
              className="absolute bottom-8 right-8 flex items-center gap-3 px-6 py-4"
              style={{ background: "rgba(255,255,255,0.95)" }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#212123">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: "14px", color: "#212123", fontWeight: 500 }}>5 star landscapes</span>
            </div>
          </div>
        </div>
      </section>

      <div ref={pageRef}>
        {/* Design Phase — White bg */}
        <section className="process-grid-section bg-white section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
              <div>
                <h2
                  className="font-display section-text-reveal"
                  style={{
                    fontSize: "var(--h1-size)",
                    fontWeight: 300,
                    letterSpacing: "var(--h1-letter-spacing)",
                    color: "rgba(33,33,35,0.06)",
                    opacity: 0,
                  }}
                >
                  next-level design
                </h2>
              </div>
              <div>
                <p
                  className="section-text-reveal"
                  style={{
                    fontSize: "var(--cta-text-size)",
                    fontWeight: 400,
                    letterSpacing: "0.48px",
                    color: "#212123",
                    marginBottom: "16px",
                    opacity: 0,
                  }}
                >
                  Creative, tailored, outdoor spaces that exceed expectations
                </p>
                <p
                  className="section-text-reveal"
                  style={{
                    fontSize: "16px",
                    lineHeight: "28.8px",
                    color: "#606065",
                    opacity: 0,
                  }}
                >
                  Our design process blends artistic vision with technical precision.
                  Every garden is unique, and our approach ensures yours is crafted
                  with intention and care from start to finish.
                </p>
              </div>
            </div>

            {/* 3-column grid of design steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designSteps.map((step, i) => (
                <ProcessCard key={step.number} step={step} index={i} isDark={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Build Phase — Dark bg */}
        <section className="process-grid-section section-padding" style={{ backgroundColor: "#212123" }}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
              <div>
                <h2
                  className="font-display section-text-reveal"
                  style={{
                    fontSize: "var(--h1-size)",
                    fontWeight: 300,
                    letterSpacing: "var(--h1-letter-spacing)",
                    color: "rgba(255,255,255,0.06)",
                    opacity: 0,
                  }}
                >
                  built to last
                </h2>
              </div>
              <div>
                <p
                  className="section-text-reveal"
                  style={{
                    fontSize: "var(--cta-text-size)",
                    fontWeight: 400,
                    letterSpacing: "0.48px",
                    color: "#ffffff",
                    marginBottom: "16px",
                    opacity: 0,
                  }}
                >
                  Expert construction, uncompromising quality
                </p>
                <p
                  className="section-text-reveal"
                  style={{
                    fontSize: "16px",
                    lineHeight: "28.8px",
                    color: "#A0A1A5",
                    opacity: 0,
                  }}
                >
                  Our in-house construction team brings decades of experience to every project.
                  We manage every detail so you can focus on enjoying the transformation.
                </p>
              </div>
            </div>

            {/* 3-column grid of build steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {buildSteps.map((step, i) => (
                <ProcessCard key={step.number} step={step} index={i} isDark={true} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="border-t border-[#A0A1A5] pt-12">
            <h2
              className="font-display mb-6"
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 300,
                letterSpacing: "-0.5px",
                color: "#212123",
              }}
            >
              ready to begin?
            </h2>
            <CTALink label="Start Your Project" href="/contact" />
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
