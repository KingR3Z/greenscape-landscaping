"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import CTALink from "@/components/ui/CTALink";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "discovery",
    description:
      "We begin every project with a site visit and in-depth consultation. We listen carefully to how you use your space, what inspires you, and how you envision your outdoor life. This is where the magic starts.",
    image: "/images/projects/project-01.jpg",
  },
  {
    number: "02",
    title: "design",
    description:
      "Our design team creates a comprehensive landscape plan, from concept sketches to detailed 3D renderings. We refine every detail with you until the design perfectly reflects your vision.",
    image: "/images/projects/project-02.jpg",
  },
  {
    number: "03",
    title: "engineering",
    description:
      "Before a single shovel hits the ground, our team engineers every element — drainage systems, structural foundations, lighting plans, and irrigation. We leave nothing to chance.",
    image: "/images/projects/project-03.jpg",
  },
  {
    number: "04",
    title: "construction",
    description:
      "Our skilled in-house team brings the design to life with meticulous attention to detail. We manage every aspect of the build, keeping you informed at every stage.",
    image: "/images/projects/project-04.jpg",
  },
  {
    number: "05",
    title: "handover",
    description:
      "We walk you through every feature of your new landscape, provide a comprehensive care guide, and ensure everything is perfect before we hand over the keys to your outdoor paradise.",
    image: "/images/projects/project-05.jpg",
  },
];

export default function ProcessPage() {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stepsRef.current) return;
    const ctx = gsap.context(() => {
      const steps = stepsRef.current!.querySelectorAll(".process-step");
      steps.forEach((step) => {
        const elements = step.querySelectorAll(".step-animate");
        gsap.fromTo(
          elements,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
            },
          }
        );

        const img = step.querySelector(".step-image");
        if (img) {
          gsap.fromTo(
            img,
            { clipPath: "inset(0 100% 0 0)", scale: 1.1 },
            {
              clipPath: "inset(0 0% 0 0)",
              scale: 1,
              duration: 1.4,
              ease: "expo.inOut",
              scrollTrigger: {
                trigger: step,
                start: "top 60%",
              },
            }
          );
        }
      });
    }, stepsRef);
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="our process"
        subtitle="From first meeting to final handover, every step is intentional"
        image="/images/blueprint.png"
      />

      {/* Intro */}
      <section className="bg-white section-padding pb-8">
        <div className="container-custom max-w-3xl">
          <p className="text-[#6B6B6B] text-lg leading-relaxed">
            Every GreenScape project follows a proven five-stage process. It&apos;s
            designed to give you confidence at every step — from the first sketch
            to the moment you step into your completed landscape.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white">
        <div ref={stepsRef} className="container-custom">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`process-step grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 ${
                i < processSteps.length - 1 ? "border-b border-[#212123]/10" : ""
              }`}
            >
              {/* Text — alternates sides */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span
                  className="step-animate font-display text-[#aaa] block mb-4"
                  style={{ fontSize: "14px", letterSpacing: "0.15em", opacity: 0 }}
                >
                  STEP {step.number}
                </span>
                <h2
                  className="step-animate font-display mb-6"
                  style={{
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 300,
                    letterSpacing: "-0.5px",
                    color: "#212123",
                    opacity: 0,
                  }}
                >
                  {step.title}
                </h2>
                <p
                  className="step-animate text-[#6B6B6B] text-base leading-relaxed"
                  style={{ opacity: 0 }}
                >
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div
                  className="step-image relative overflow-hidden"
                  style={{ clipPath: "inset(0 100% 0 0)" }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white section-padding">
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
              ready to begin?
            </h2>
            <CTALink label="Start Your Project" href="/contact" />
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
