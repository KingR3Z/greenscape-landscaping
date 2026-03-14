"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import Image from "next/image";
import { featuredProjects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      const sections = pageRef.current!.querySelectorAll(".project-section");
      sections.forEach((section) => {
        const texts = section.querySelectorAll(".project-text-reveal");
        const img = section.querySelector(".project-img-reveal");

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

        if (img) {
          gsap.fromTo(
            img,
            { opacity: 0, scale: 1.05 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 70%" },
            }
          );
        }
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      {/* Page Title */}
      <section className="bg-white" style={{ paddingTop: "170px", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
        <div className="container-custom">
          <h1
            className="font-display"
            style={{
              fontSize: "var(--h1-size)",
              fontWeight: 300,
              letterSpacing: "var(--h1-letter-spacing)",
              lineHeight: "var(--h1-line-height)",
              color: "#212123",
            }}
          >
            featured projects
          </h1>
        </div>
      </section>

      {/* Alternating Project Sections */}
      <div ref={pageRef}>
        {featuredProjects.map((project, i) => {
          const isDark = i % 3 === 2;
          const imageLeft = i % 2 === 0;
          const bg = isDark ? "#212123" : "#ffffff";
          const textColor = isDark ? "#ffffff" : "#212123";
          const labelColor = isDark ? "#A0A1A5" : "#606065";

          return (
            <section
              key={project.id}
              className="project-section"
              style={{ backgroundColor: bg }}
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-2"
                style={{ minHeight: "70vh" }}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${imageLeft ? "order-1" : "order-1 lg:order-2"}`}
                  style={{ minHeight: "400px" }}
                >
                  <div className="project-img-reveal absolute inset-0" style={{ opacity: 0 }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`flex flex-col justify-center ${imageLeft ? "order-2" : "order-2 lg:order-1"}`}
                  style={{
                    padding: "clamp(40px, 6vw, 100px) clamp(30px, 5vw, 80px)",
                  }}
                >
                  <p
                    className="project-text-reveal"
                    style={{
                      fontSize: "var(--cta-text-size)",
                      fontWeight: 400,
                      letterSpacing: "0.48px",
                      color: labelColor,
                      marginBottom: "16px",
                      opacity: 0,
                    }}
                  >
                    Featured Project
                  </p>
                  <h2
                    className="font-display project-text-reveal"
                    style={{
                      fontSize: "var(--h2-size)",
                      fontWeight: 400,
                      letterSpacing: "var(--h2-letter-spacing)",
                      lineHeight: "var(--h2-line-height)",
                      color: textColor,
                      marginBottom: "32px",
                      opacity: 0,
                    }}
                  >
                    {project.title}
                  </h2>
                  <div className="project-text-reveal" style={{ opacity: 0 }}>
                    <a
                      href={`/projects/${project.id}`}
                      className="cta-link"
                      style={{
                        fontSize: "var(--cta-text-size)",
                        letterSpacing: "0.48px",
                        color: textColor,
                      }}
                      data-cursor="link"
                    >
                      <span>View Project</span>
                      <span className="cta-separator" />
                      <span className="cta-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="bg-white" style={{ padding: "clamp(60px, 8vw, 120px) 0" }}>
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
              ready to start your project?
            </h2>
            <a
              href="/contact"
              className="cta-link"
              style={{
                fontSize: "var(--cta-text-size)",
                letterSpacing: "0.48px",
                color: "#212123",
              }}
              data-cursor="link"
            >
              <span>Get In Touch</span>
              <span className="cta-separator" />
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
