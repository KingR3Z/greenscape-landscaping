'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 150, suffix: '+', label: 'Projects' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: 'x', label: 'Average ROI' },
  { value: 24, suffix: 'h', label: 'Response Time' },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = countersRef.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stat.suffix;
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-neutral-950 border-y border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <span
                ref={(el) => { countersRef.current[i] = el; }}
                className="text-5xl md:text-7xl font-bold text-white block mb-2"
                style={{ fontFamily: 'var(--font-display), serif' }}
              >
                0{stat.suffix}
              </span>
              <span className="text-white/40 text-sm uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
