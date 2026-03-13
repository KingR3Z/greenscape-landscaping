'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: 'How much does a website cost?', a: 'Every project is unique. Our engagements typically start at $5,000 for smaller sites and scale based on complexity, features, and timeline. We provide a detailed proposal after our discovery call.' },
  { q: 'What is the typical timeline?', a: 'Most projects take between 4 to 8 weeks from kickoff to launch. Larger enterprise projects may take 10-12 weeks. We always agree on milestones upfront.' },
  { q: 'What does your design process look like?', a: 'We follow a four-phase process: Discovery, Strategy, Design & Build, and Launch & Optimise. Each phase has defined deliverables and client approval gates.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. We offer monthly retainer packages for maintenance, updates, performance monitoring, and continuous optimisation after launch.' },
  { q: 'Can you work with our existing brand guidelines?', a: 'Absolutely. We regularly work within established brand systems and can also help extend or refine your brand identity for the digital space.' },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggle = (i: number) => {
    const next = openIndex === i ? null : i;
    // Collapse current
    if (openIndex !== null && answersRef.current[openIndex]) {
      gsap.to(answersRef.current[openIndex], { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
    }
    // Expand next
    if (next !== null && answersRef.current[next]) {
      gsap.to(answersRef.current[next], { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' });
    }
    setOpenIndex(next);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-black">
      <div className="container-custom max-w-3xl mx-auto">
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item border-t border-white/10 last:border-b">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-white text-lg font-medium pr-4">{faq.q}</span>
                <span className="text-accent text-2xl shrink-0">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div
                ref={(el) => { answersRef.current[i] = el; }}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <p className="text-white/50 pb-6 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
