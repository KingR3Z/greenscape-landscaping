"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import CTALink from "@/components/ui/CTALink";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "James Hartley", role: "Founder & Lead Designer", image: "/images/projects/project-03.jpg" },
  { name: "Sophie Chen", role: "Senior Landscape Architect", image: "/images/projects/project-04.jpg" },
  { name: "Marcus Williams", role: "Head of Construction", image: "/images/projects/project-05.jpg" },
  { name: "Emma Richardson", role: "Project Manager", image: "/images/projects/project-06.jpg" },
];

const stats = [
  { number: "200+", label: "Projects Completed" },
  { number: "12", label: "Years Experience" },
  { number: "35+", label: "Industry Awards" },
  { number: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Story section animation
      if (storyRef.current) {
        const elements = storyRef.current.querySelectorAll(".about-fade");
        gsap.fromTo(
          elements,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 70%" },
          }
        );
      }

      // Stats animation
      if (statsRef.current) {
        const items = statsRef.current.querySelectorAll(".stat-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
          }
        );
      }

      // Team animation
      if (teamRef.current) {
        const cards = teamRef.current.querySelectorAll(".team-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: teamRef.current, start: "top 75%" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="about greenscape"
        subtitle="Creating outdoor living spaces since 2012"
        image="/images/about-landscape.jpg"
      />

      {/* Story Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="about-fade font-display mb-8"
                style={{
                  fontSize: "clamp(32px, 3.5vw, 52px)",
                  fontWeight: 300,
                  letterSpacing: "-1px",
                  lineHeight: 1.15,
                  color: "#212123",
                  opacity: 0,
                }}
              >
                we believe your home should be your favourite place in the world
              </h2>
            </div>

            <div className="space-y-6">
              <p className="about-fade text-[#6B6B6B] text-base leading-relaxed" style={{ opacity: 0 }}>
                GreenScape was founded on a simple belief: that the best outdoor spaces are those designed around how you actually live. We don&apos;t just create gardens — we create extensions of your home that bring joy every single day.
              </p>
              <p className="about-fade text-[#6B6B6B] text-base leading-relaxed" style={{ opacity: 0 }}>
                From our studio in London, we serve clients across Surrey, Kent, Buckinghamshire, Berkshire and the surrounding areas. Every project is handled by our in-house team of designers, architects, and skilled craftspeople.
              </p>
              <p className="about-fade text-[#6B6B6B] text-base leading-relaxed" style={{ opacity: 0 }}>
                We take on a limited number of projects each year, ensuring every client receives our complete attention. The result? Landscapes that are thoughtfully designed, expertly engineered, and beautifully built.
              </p>
              <div className="about-fade pt-4" style={{ opacity: 0 }}>
                <CTALink label="View Our Projects" href="/projects" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#212123]">
        <div className="container-custom py-20">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item text-center" style={{ opacity: 0 }}>
                <span
                  className="font-display text-white block"
                  style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300 }}
                >
                  {stat.number}
                </span>
                <span className="text-white/50 text-sm tracking-wider uppercase mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image
          src="/images/projects/project-07.jpg"
          alt="GreenScape landscape project"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Team Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2
            className="font-display mb-16"
            style={{
              fontSize: "clamp(32px, 3.5vw, 52px)",
              fontWeight: 300,
              letterSpacing: "-1px",
              color: "#212123",
            }}
          >
            the team
          </h2>

          <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="team-card" style={{ opacity: 0 }}>
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: "18px", fontWeight: 400, color: "#212123" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#6B6B6B] text-sm mt-1">{member.role}</p>
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
              let&apos;s create something beautiful
            </h2>
            <CTALink label="Start Your Project" href="/contact" />
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
