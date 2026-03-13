'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { name: 'Luminary Finance', category: 'Fintech', year: '2025' },
  { name: 'Verdant Health', category: 'Healthcare', year: '2025' },
  { name: 'Atlas Ventures', category: 'Real Estate', year: '2024' },
  { name: 'Nova Retail', category: 'eCommerce', year: '2024' },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.showcase-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-black">
      <div className="container-custom">
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-16"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          Selected Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="showcase-card group cursor-pointer">
              <div className="aspect-[4/3] bg-neutral-800 rounded-2xl mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500" />
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl text-white font-semibold">{p.name}</h3>
                <span className="text-white/40 text-sm">{p.year}</span>
              </div>
              <p className="text-accent text-sm mt-1">{p.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
