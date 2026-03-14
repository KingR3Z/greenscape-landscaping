"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
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
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      if (missionRef.current) {
        const elements = missionRef.current.querySelectorAll(".mission-fade");
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: missionRef.current, start: "top 70%" },
          }
        );
      }

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
      {/* Intro Section — split layout like Cedar Springs */}
      <section className="bg-white" style={{ paddingTop: "170px" }}>
        <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "60vh" }}>
          {/* Left: text */}
          <div className="flex flex-col justify-center" style={{ padding: "clamp(40px, 6vw, 100px) clamp(30px, 5vw, 80px)" }}>
            <h1
              className="about-fade font-display"
              style={{
                fontSize: "var(--h1-size)",
                fontWeight: 300,
                letterSpacing: "var(--h1-letter-spacing)",
                lineHeight: "var(--h1-line-height)",
                color: "#212123",
                marginBottom: "16px",
                opacity: 0,
              }}
            >
              about us
            </h1>
            <p
              className="about-fade font-display"
              style={{
                fontSize: "var(--h3-size)",
                fontWeight: 400,
                letterSpacing: "var(--h3-letter-spacing)",
                color: "#212123",
                marginBottom: "32px",
                opacity: 0,
              }}
            >
              The UK&apos;s landscape resort company
            </p>
            <p
              className="about-fade"
              style={{
                fontSize: "16px",
                lineHeight: "28.8px",
                color: "#212123",
                maxWidth: "500px",
                marginBottom: "16px",
                opacity: 0,
              }}
            >
              GreenScape was founded on a simple belief: that the best outdoor spaces are those designed around how you actually live. We don&apos;t just create gardens — we create extensions of your home that bring joy every single day.
            </p>
            <p
              className="about-fade"
              style={{
                fontSize: "16px",
                lineHeight: "28.8px",
                color: "#212123",
                maxWidth: "500px",
                opacity: 0,
              }}
            >
              From our studio in London, we serve clients across Surrey, Kent, Buckinghamshire, Berkshire and the surrounding areas. Every project is handled by our in-house team of designers, architects, and skilled craftspeople.
            </p>
          </div>
          {/* Right: image with awards stat overlay */}
          <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
            <Image
              src="/images/about-landscape.jpg"
              alt="About GreenScape"
              fill
              className="object-cover"
              sizes="50vw"
            />
            {/* Gradient overlay + award stat */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20" />
            <div className="absolute bottom-12 left-12">
              <span
                className="font-display block text-white"
                style={{ fontSize: "clamp(64px, 8vw, 120px)", fontWeight: 300, lineHeight: 1, letterSpacing: "-2px" }}
              >
                100+
              </span>
              <span className="text-white/80 text-sm tracking-widest uppercase block mt-2">
                landscape awards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values — Dark section */}
      <section style={{ backgroundColor: "#212123" }}>
        <div ref={missionRef} className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "60vh" }}>
          {/* Left: Image */}
          <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
            <Image
              src="/images/projects/project-07.jpg"
              alt="Our mission"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          {/* Right: Text */}
          <div className="flex flex-col justify-center" style={{ padding: "clamp(40px, 6vw, 100px) clamp(30px, 5vw, 80px)" }}>
            <p
              className="mission-fade"
              style={{
                fontSize: "var(--cta-text-size)",
                fontWeight: 400,
                letterSpacing: "0.48px",
                color: "#A0A1A5",
                marginBottom: "16px",
                opacity: 0,
              }}
            >
              Our Mission & Values
            </p>
            <h2
              className="mission-fade font-display"
              style={{
                fontSize: "var(--h2-size)",
                fontWeight: 400,
                letterSpacing: "var(--h2-letter-spacing)",
                lineHeight: "var(--h2-line-height)",
                color: "#ffffff",
                marginBottom: "32px",
                opacity: 0,
              }}
            >
              we believe your home should be your favourite place in the world
            </h2>
            <p
              className="mission-fade"
              style={{
                fontSize: "16px",
                lineHeight: "28.8px",
                color: "#A0A1A5",
                marginBottom: "16px",
                opacity: 0,
              }}
            >
              We take on a limited number of projects each year, ensuring every client receives our complete attention. The result? Landscapes that are thoughtfully designed, expertly engineered, and beautifully built.
            </p>
            <div className="mission-fade" style={{ opacity: 0 }}>
              <CTALink label="View Our Projects" href="/projects" variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white">
        <div className="container-custom py-20">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item text-center" style={{ opacity: 0 }}>
                <span
                  className="font-display text-[#212123] block"
                  style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, letterSpacing: "-1px" }}
                >
                  {stat.number}
                </span>
                <span className="text-[#606065] text-sm tracking-wider uppercase mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
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
                <p className="text-[#606065] text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white pb-20">
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
              let&apos;s create something beautiful
            </h2>
            <CTALink label="Start Your Project" href="/contact" />
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
