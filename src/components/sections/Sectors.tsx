'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectors = ['Technology', 'Finance', 'Healthcare', 'Retail', 'Real Estate', 'Education'];

export default function Sectors() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sector-item', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-neutral-950">
      <div className="container-custom">
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-16"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {sectors.map((s, i) => (
            <div
              key={i}
              className="sector-item group border border-white/10 p-8 hover:bg-white/5 transition-colors duration-300 cursor-pointer"
            >
              <span className="text-accent text-sm font-mono block mb-2">0{i + 1}</span>
              <h3
                className="text-xl md:text-2xl text-white font-semibold group-hover:text-accent transition-colors duration-300"
                style={{ fontFamily: 'var(--font-display), serif' }}
              >
                {s}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
