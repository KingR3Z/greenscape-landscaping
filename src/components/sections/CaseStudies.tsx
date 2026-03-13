'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    title: 'Luminary Finance',
    desc: 'A complete digital transformation for a leading fintech startup, increasing user engagement by 340%.',
    metrics: ['+340% Engagement', '2.1s Load Time', '$4.2M Revenue'],
  },
  {
    title: 'Verdant Health',
    desc: 'Redesigning the patient portal for one of the UK\'s fastest-growing telehealth platforms.',
    metrics: ['+120% Sign-ups', '98% Satisfaction', '50% Fewer Support Tickets'],
  },
  {
    title: 'Atlas Ventures',
    desc: 'A luxury real-estate brand brought to life with immersive 3D property showcases.',
    metrics: ['+85% Leads', '4.8s Avg. Session', '12x ROI'],
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        opacity: 0,
        x: 60,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="case-studies" className="section-padding bg-black">
      <div className="container-custom">
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-16"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          Case Studies
        </h2>
        <div className="space-y-12">
          {cases.map((c, i) => (
            <div key={i} className="case-card grid md:grid-cols-2 gap-8 border border-white/10 rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] bg-neutral-800" />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl text-white font-semibold mb-3" style={{ fontFamily: 'var(--font-display), serif' }}>{c.title}</h3>
                <p className="text-white/50 mb-6 leading-relaxed">{c.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {c.metrics.map((m, j) => (
                    <span key={j} className="text-xs bg-white/5 text-accent border border-white/10 rounded-full px-4 py-1.5">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
