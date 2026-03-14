"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import Image from "next/image";
import CTALink from "@/components/ui/CTALink";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "Competitive salary with annual reviews and performance bonuses",
  "Access to industry-leading training and professional development",
  "Company vehicle benefits and latest tools & equipment",
  "Work on award-winning, high-profile landscape projects",
  "Supportive team culture with regular social events",
];

const openPositions = [
  {
    title: "Senior Landscape Designer",
    type: "Full-time",
    location: "London Studio",
    description: "Lead the design of high-end residential landscape projects across London and the South East.",
  },
  {
    title: "Landscape Architect",
    type: "Full-time",
    location: "London Studio",
    description: "Create detailed construction documents and 3D renderings for luxury garden projects.",
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Field-based",
    description: "Oversee the construction phase of our most ambitious landscape projects.",
  },
  {
    title: "Stonemason",
    type: "Full-time",
    location: "Field-based",
    description: "Craft bespoke stone features, walls, and paving for our premium landscape installations.",
  },
];

export default function CareersPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      const sections = pageRef.current!.querySelectorAll(".career-section");
      sections.forEach((section) => {
        const elements = section.querySelectorAll(".career-animate");
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 75%" },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout navVariant="light">
      {/* Full-Bleed Hero */}
      <section className="relative" style={{ height: "100vh", minHeight: "600px" }}>
        <Image
          src="/images/projects/project-08.jpg"
          alt="Join our team"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ padding: "clamp(40px, 6vw, 100px) clamp(30px, 5vw, 80px)" }}
        >
          <p
            style={{
              fontSize: "var(--cta-text-size)",
              fontWeight: 400,
              letterSpacing: "0.48px",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            We Work Together. We Learn Together. We Grow Together.
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "var(--h1-size)",
              fontWeight: 300,
              letterSpacing: "var(--h1-letter-spacing)",
              lineHeight: "var(--h1-line-height)",
              color: "#ffffff",
              marginBottom: "24px",
            }}
          >
            together, we are greenscape
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "28.8px",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "600px",
            }}
          >
            Ever wonder who is behind the stunning landscapes? It&apos;s a talented team of
            designers, builders, and craftspeople united by a shared passion for creating
            extraordinary outdoor spaces.
          </p>
        </div>
      </section>

      <div ref={pageRef}>
        {/* Benefits Section */}
        <section className="career-section bg-white section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: heading */}
              <div>
                <h2
                  className="career-animate font-display"
                  style={{
                    fontSize: "var(--h1-size)",
                    fontWeight: 300,
                    letterSpacing: "var(--h1-letter-spacing)",
                    color: "rgba(33,33,35,0.06)",
                    opacity: 0,
                  }}
                >
                  working together has its advantages
                </h2>
              </div>
              {/* Right: benefits list with dividers */}
              <div>
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="career-animate"
                    style={{
                      borderBottom: "1px solid rgba(33,33,35,0.1)",
                      padding: "clamp(16px, 2vw, 24px) 0",
                      opacity: 0,
                    }}
                  >
                    <p style={{ fontSize: "16px", lineHeight: "28.8px", color: "#212123" }}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="career-section bg-white pb-20">
          <div className="container-custom">
            <h2
              className="career-animate font-display mb-12"
              style={{
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 300,
                letterSpacing: "-0.5px",
                color: "#212123",
                opacity: 0,
              }}
            >
              open positions
            </h2>

            <div className="space-y-0">
              {openPositions.map((role, i) => (
                <div
                  key={i}
                  className="career-animate border-t border-[#A0A1A5] py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-8 items-start"
                  style={{ opacity: 0 }}
                >
                  <div>
                    <h3
                      className="font-display"
                      style={{ fontSize: "20px", fontWeight: 400, color: "#212123" }}
                    >
                      {role.title}
                    </h3>
                    <p className="text-[#606065] text-sm mt-1">
                      {role.type} · {role.location}
                    </p>
                  </div>
                  <p className="text-[#606065] text-sm leading-relaxed">
                    {role.description}
                  </p>
                  <a
                    href="/contact"
                    className="cta-link text-sm text-[#212123]"
                    data-cursor="link"
                  >
                    <span>Apply</span>
                    <span className="cta-separator" />
                    <span className="cta-arrow">→</span>
                  </a>
                </div>
              ))}
              <div className="border-t border-[#A0A1A5]" />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="career-section bg-white pb-20">
          <div className="container-custom">
            <div className="pt-12">
              <h2
                className="career-animate font-display mb-6"
                style={{
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: 300,
                  letterSpacing: "-0.5px",
                  color: "#212123",
                  opacity: 0,
                }}
              >
                don&apos;t see your role?
              </h2>
              <div className="career-animate" style={{ opacity: 0 }}>
                <CTALink label="Send Us Your CV" href="/contact" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
