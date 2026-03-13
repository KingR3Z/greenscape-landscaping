'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'GreenScape completely transformed our tired back garden into an absolute paradise. The attention to detail was incredible — from the stone selection to the planting scheme. We practically live outdoors now.',
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    location: 'Richmond, Surrey',
    stars: 5,
  },
  {
    quote: 'Professional from start to finish. The 3D design stage meant we knew exactly what we were getting. The team were punctual, tidy, and the final result exceeded our expectations. Worth every penny.',
    name: 'James & Emma Thornton',
    role: 'Property Developers',
    location: 'Kensington, London',
    stars: 5,
  },
  {
    quote: 'We\'ve used GreenScape for three separate projects now. Their maintenance team keeps everything looking pristine year-round. The best landscapers we\'ve ever worked with, hands down.',
    name: 'Dr. Priya Patel',
    role: 'Estate Owner',
    location: 'Guildford, Surrey',
    stars: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        opacity: 0,
        y: 50,
        scale: 0.95,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#0C1F0E]">
      <div className="container-custom">
        <div className="testimonial-heading mb-16 text-center">
          <span className="block text-[#FFB300] text-sm font-medium tracking-widest uppercase mb-4">Testimonials</span>
          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: 'var(--font-display), serif' }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card relative border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <svg key={si} className="w-5 h-5 text-[#FFB300]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/70 text-base leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-auto">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-white/30 text-sm">{t.role}</p>
                <p className="text-[#C8E6C9]/40 text-xs mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
