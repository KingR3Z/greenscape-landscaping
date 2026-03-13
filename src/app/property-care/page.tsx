"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import CTALink from "@/components/ui/CTALink";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Garden Maintenance",
    description: "Regular, scheduled care for lawns, borders, hedges and planted areas. We keep your landscape looking its best year-round.",
    image: "/images/projects/project-01.jpg",
  },
  {
    title: "Seasonal Planting",
    description: "Refreshing seasonal displays and border planting schemes that ensure colour and interest throughout the year.",
    image: "/images/projects/project-02.jpg",
  },
  {
    title: "Irrigation Management",
    description: "Professional management of irrigation systems including seasonal adjustments, repairs, and winterisation.",
    image: "/images/projects/project-03.jpg",
  },
  {
    title: "Lighting & Features",
    description: "Maintenance and seasonal adjustment of landscape lighting, water features, and outdoor amenities.",
    image: "/images/projects/project-04.jpg",
  },
];

export default function PropertyCarePage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (introRef.current) {
        const els = introRef.current.querySelectorAll(".intro-animate");
        gsap.fromTo(
          els,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: introRef.current, start: "top 75%" },
          }
        );
      }

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".service-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 75%" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="property care"
        subtitle="Protecting your investment, preserving your paradise"
        image="/images/projects/project-06.jpg"
      />

      {/* Intro */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div ref={introRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <h2
              className="intro-animate font-display"
              style={{
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 300,
                letterSpacing: "-0.5px",
                color: "#212123",
                lineHeight: 1.2,
                opacity: 0,
              }}
            >
              a beautiful landscape deserves ongoing care
            </h2>
            <div className="space-y-5">
              <p className="intro-animate text-[#6B6B6B] text-base leading-relaxed" style={{ opacity: 0 }}>
                Your landscape is a living investment that grows more beautiful with time — but only with the right care. Our Property Care programme ensures your outdoor space always looks its absolute best.
              </p>
              <p className="intro-animate text-[#6B6B6B] text-base leading-relaxed" style={{ opacity: 0 }}>
                Each programme is tailored to your specific landscape, with regular visits from our dedicated care team who know your garden intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white pb-20">
        <div className="container-custom">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="service-card" style={{ opacity: 0 }}>
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3
                  className="font-display mb-3"
                  style={{
                    fontSize: "clamp(20px, 2vw, 28px)",
                    fontWeight: 300,
                    letterSpacing: "-0.3px",
                    color: "#212123",
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white pb-20">
        <div className="container-custom">
          <div className="border-t border-[#212123]/10 pt-12">
            <h2
              className="font-display mb-6"
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 300,
                letterSpacing: "-0.5px",
                color: "#212123",
              }}
            >
              let us care for your landscape
            </h2>
            <CTALink label="Get In Touch" href="/contact" />
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
