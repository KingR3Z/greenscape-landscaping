'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    title: 'Garden Design',
    desc: 'Custom layouts, planting schemes, and 3D visualisations tailored to your space and lifestyle.',
    icon: '🌿',
  },
  {
    num: '02',
    title: 'Full Landscaping',
    desc: 'Complete garden builds from groundwork to the finishing touches. Drainage, turf, planting — the lot.',
    icon: '🏗️',
  },
  {
    num: '03',
    title: 'Paving & Patios',
    desc: 'Natural stone, porcelain, and block paving installed to perfection. Bespoke patterns that last decades.',
    icon: '🪨',
  },
  {
    num: '04',
    title: 'Tree Surgery',
    desc: 'Crown reduction, felling, stump grinding, and hedge trimming by certified arborists.',
    icon: '🌳',
  },
  {
    num: '05',
    title: 'Lawn Care',
    desc: 'Seeding, turfing, aeration, and seasonal treatment plans for a lawn that makes neighbours jealous.',
    icon: '🌱',
  },
  {
    num: '06',
    title: 'Maintenance',
    desc: 'Ongoing garden care, seasonal clean-ups, and commercial grounds maintenance contracts.',
    icon: '✂️',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current?.querySelectorAll('.animate-in') || [], {
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Cards stagger in
      gsap.from('.service-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        opacity: 0,
        y: 60,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-[#0C1F0E]">
      <div className="container-custom">
        <div ref={headingRef} className="mb-16 max-w-2xl">
          <span className="animate-in block text-[#FFB300] text-sm font-medium tracking-widest uppercase mb-4">What We Do</span>
          <h2
            className="animate-in text-4xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-display), serif' }}
          >
            Every Detail,<br />Thoughtfully Crafted
          </h2>
          <p className="animate-in text-white/50 text-lg mt-6 leading-relaxed">
            From the first sketch to the final plant, every project is designed to transform your outdoor space into something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card group relative border border-white/10 rounded-2xl p-8 hover:border-[#1B5E20]/50 hover:bg-[#1B5E20]/5 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20]/0 to-[#FFB300]/0 group-hover:from-[#1B5E20]/10 group-hover:to-[#FFB300]/5 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-[#FFB300]/40 text-sm font-mono">{s.num}</span>
                </div>
                <h3
                  className="text-xl text-white font-semibold mb-3 group-hover:text-[#C8E6C9] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-display), serif' }}
                >
                  {s.title}
                </h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
