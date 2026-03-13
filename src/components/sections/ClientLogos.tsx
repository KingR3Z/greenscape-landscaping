'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const clients = ['Nike', 'Apple', 'Google', 'Tesla', 'Spotify', 'Airbnb', 'Nike', 'Apple', 'Google', 'Tesla', 'Spotify', 'Airbnb'];

export default function ClientLogos() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2;
      gsap.to(track, {
        x: -totalWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding bg-neutral-950 overflow-hidden border-y border-white/10">
      <div className="container-custom mb-8">
        <p className="text-white/40 text-sm uppercase tracking-widest text-center">Trusted by industry leaders</p>
      </div>
      <div className="relative">
        <div ref={trackRef} className="flex items-center gap-16 whitespace-nowrap w-max">
          {clients.map((name, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-bold text-white/20 hover:text-white/50 transition-colors duration-300 select-none"
              style={{ fontFamily: 'var(--font-display), serif' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
