"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import CTALink from "@/components/ui/CTALink";

gsap.registerPlugin(ScrollTrigger);

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
  const contentRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll(".career-animate");
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: contentRef.current, start: "top 75%" },
          }
        );
      }

      if (rolesRef.current) {
        const roles = rolesRef.current.querySelectorAll(".role-card");
        gsap.fromTo(
          roles,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: rolesRef.current, start: "top 75%" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="careers"
        subtitle="Join the team behind London's most beautiful landscapes"
        image="/images/projects/project-08.jpg"
      />

      {/* Intro Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div ref={contentRef} className="max-w-3xl">
            <h2
              className="career-animate font-display mb-8"
              style={{
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 300,
                letterSpacing: "-0.5px",
                color: "#212123",
                opacity: 0,
              }}
            >
              we&apos;re always looking for exceptional talent
            </h2>
            <p className="career-animate text-[#6B6B6B] text-base leading-relaxed mb-5" style={{ opacity: 0 }}>
              GreenScape is built on the talent of our people. We bring together designers, architects, engineers, and craftspeople who share a passion for creating extraordinary outdoor spaces.
            </p>
            <p className="career-animate text-[#6B6B6B] text-base leading-relaxed" style={{ opacity: 0 }}>
              We invest heavily in our team&apos;s development, offering industry-leading training, competitive salaries, and the opportunity to work on some of the most exciting landscape projects in the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white pb-20">
        <div className="container-custom">
          <h2
            className="font-display mb-12"
            style={{
              fontSize: "clamp(24px, 2.5vw, 36px)",
              fontWeight: 300,
              letterSpacing: "-0.5px",
              color: "#212123",
            }}
          >
            open positions
          </h2>

          <div ref={rolesRef} className="space-y-0">
            {openPositions.map((role, i) => (
              <div
                key={i}
                className="role-card border-t border-[#212123]/10 py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-8 items-start"
                style={{ opacity: 0 }}
              >
                <div>
                  <h3
                    className="font-display"
                    style={{ fontSize: "20px", fontWeight: 400, color: "#212123" }}
                  >
                    {role.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm mt-1">
                    {role.type} · {role.location}
                  </p>
                </div>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {role.description}
                </p>
                <a
                  href="/contact"
                  className="text-[#212123] text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
                  data-cursor="link"
                >
                  Apply →
                </a>
              </div>
            ))}
            <div className="border-t border-[#212123]/10" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white pb-20">
        <div className="container-custom">
          <div className="pt-12">
            <h2
              className="font-display mb-6"
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 300,
                letterSpacing: "-0.5px",
                color: "#212123",
              }}
            >
              don&apos;t see your role?
            </h2>
            <CTALink label="Send Us Your CV" href="/contact" />
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
