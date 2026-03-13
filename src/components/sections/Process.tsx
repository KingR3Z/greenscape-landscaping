'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We visit your property, understand your vision, and assess the space. Free of charge, no obligation.',
    icon: '💬',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Detailed plans, 3D renders, and planting schemes. You see exactly what your garden will look like before we break ground.',
    icon: '📐',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Our skilled team brings the design to life — on time, on budget, with minimal disruption to your daily routine.',
    icon: '⚒️',
  },
  {
    num: '04',
    title: 'Aftercare',
    desc: 'We don\'t disappear after handover. Seasonal maintenance plans and ongoing support to keep your garden thriving.',
    icon: '🌻',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from('.process-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Steps slide in from left
      gsap.from('.process-step', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        opacity: 0,
        x: -60,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Progress line grows
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleY: 0 }, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'bottom 70%',
            scrub: 1,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="section-padding bg-white">
      <div className="container-custom">
        <div className="process-heading mb-16 text-center">
          <span className="block text-[#1B5E20] text-sm font-medium tracking-widest uppercase mb-4">How It Works</span>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#0C1F0E]"
            style={{ fontFamily: 'var(--font-display), serif' }}
          >
            From Vision to Reality
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical progress line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#e5e5e5] hidden md:block">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-b from-[#1B5E20] to-[#FFB300] origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="process-step flex items-start gap-8 py-10 border-b border-black/5 last:border-b-0">
                {/* Step indicator */}
                <div className="relative shrink-0 hidden md:flex">
                  <div className="w-16 h-16 rounded-full bg-[#C8E6C9]/30 flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#FFB300] font-mono text-sm font-bold">{step.num}</span>
                    <h3
                      className="text-2xl md:text-3xl text-[#0C1F0E] font-semibold"
                      style={{ fontFamily: 'var(--font-display), serif' }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#656565] text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
