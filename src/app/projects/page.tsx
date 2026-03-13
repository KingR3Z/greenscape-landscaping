"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import { featuredProjects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gridRef.current!.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="our projects"
        subtitle="Award-winning landscapes across London & the South East"
        image="/images/projects/project-01.jpg"
      />

      {/* Projects Grid */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={`/projects/${project.id}`}
                className="project-card group block relative overflow-hidden"
                data-cursor="view"
                style={{ opacity: 0 }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content overlay */}
                <div className="mt-4 mb-8">
                  <h3
                    className="font-display text-[#212123] group-hover:text-[#212123]/80 transition-colors"
                    style={{
                      fontSize: "clamp(20px, 2vw, 28px)",
                      fontWeight: 300,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm mt-2">{project.location}</p>
                </div>
              </a>
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
              ready to start your project?
            </h2>
            <a
              href="/contact"
              className="cta-link text-lg text-[#212123]"
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
