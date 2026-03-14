"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import Image from "next/image";
import CTALink from "@/components/ui/CTALink";

gsap.registerPlugin(ScrollTrigger);

const valueProps = [
  {
    title: "four-season care",
    description: "From spring plantings to winter protection, our comprehensive programme keeps your landscape thriving through every season.",
  },
  {
    title: "five-star experience",
    description: "A dedicated care team who knows your garden intimately, providing consistent quality and personalised attention at every visit.",
  },
  {
    title: "exclusive perks",
    description: "Priority scheduling, seasonal enhancements, and preferred rates on additional landscape improvements as a care programme member.",
  },
];

const serviceList = [
  ["Spring and autumn clean ups", "Pruning and trimming"],
  ["Lawn care", "Seasonal planting"],
  ["Gardening", "Pool cleaning and maintenance"],
  ["Plant health care", "Mulching"],
  ["Irrigation", "Landscape enhancements"],
];

export default function PropertyCarePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      const sections = pageRef.current!.querySelectorAll(".care-section");
      sections.forEach((section) => {
        const elements = section.querySelectorAll(".care-animate");
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
    <InnerPageLayout>
      {/* Full-Bleed Hero */}
      <section className="relative" style={{ height: "100vh", minHeight: "600px" }}>
        <Image
          src="/images/projects/project-06.jpg"
          alt="Property care"
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
            Premium residential property care
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
            keep your everyday getaway looking its best
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "28.8px",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "600px",
            }}
          >
            Your landscape is a living investment that grows more beautiful with time — but only with the right care.
            Our Property Care programme ensures your outdoor space always looks its absolute best.
          </p>
        </div>
      </section>

      <div ref={pageRef}>
        {/* Three Value Propositions */}
        <section className="care-section bg-white section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {valueProps.map((prop, i) => (
                <div key={i} className="care-animate" style={{ opacity: 0 }}>
                  <h3
                    className="font-display mb-4"
                    style={{
                      fontSize: "var(--h3-size)",
                      fontWeight: 400,
                      letterSpacing: "var(--h3-letter-spacing)",
                      color: "#212123",
                    }}
                  >
                    {prop.title}
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "28.8px", color: "#606065" }}>
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service List — 2-column with dividers */}
        <section className="care-section bg-white pb-20">
          <div className="container-custom">
            <h2
              className="care-animate font-display mb-12"
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 300,
                letterSpacing: "-0.5px",
                color: "#212123",
                opacity: 0,
              }}
            >
              included in our services
            </h2>

            <div className="space-y-0">
              {serviceList.map((row, i) => (
                <div
                  key={i}
                  className="care-animate grid grid-cols-1 md:grid-cols-2 border-t border-[#A0A1A5]"
                  style={{ opacity: 0 }}
                >
                  <div
                    className="py-5"
                    style={{
                      fontSize: "16px",
                      lineHeight: "28.8px",
                      color: "#212123",
                      borderRight: "1px solid transparent",
                    }}
                  >
                    {row[0]}
                  </div>
                  <div
                    className="py-5 md:pl-8"
                    style={{
                      fontSize: "16px",
                      lineHeight: "28.8px",
                      color: "#212123",
                    }}
                  >
                    {row[1]}
                  </div>
                </div>
              ))}
              <div className="border-t border-[#A0A1A5]" />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="care-section bg-white pb-20">
          <div className="container-custom">
            <div className="pt-12">
              <h2
                className="care-animate font-display mb-6"
                style={{
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: 300,
                  letterSpacing: "-0.5px",
                  color: "#212123",
                  opacity: 0,
                }}
              >
                let us care for your landscape
              </h2>
              <div className="care-animate" style={{ opacity: 0 }}>
                <CTALink label="Get In Touch" href="/contact" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
