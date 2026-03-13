'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const extras = [
  'Content Strategy',
  'Analytics & Reporting',
  'Conversion Optimisation',
  'Social Media',
  'Email Marketing',
];

export default function OtherServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.extra-item', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-neutral-950">
      <div className="container-custom max-w-3xl mx-auto">
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-16"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          Also Available
        </h2>
        <div className="space-y-0">
          {extras.map((item, i) => (
            <div
              key={i}
              className="extra-item flex items-center justify-between py-6 border-t border-white/10 last:border-b group cursor-pointer hover:pl-4 transition-all duration-300"
            >
              <span className="text-white text-xl group-hover:text-accent transition-colors duration-300">{item}</span>
              <span className="text-white/20 group-hover:text-accent transition-colors duration-300">&rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
