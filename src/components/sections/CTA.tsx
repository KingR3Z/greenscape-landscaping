'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/ui/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB300]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom text-center cta-content relative z-10">
        <span className="block text-[#C8E6C9] text-sm font-medium tracking-widest uppercase mb-4">Ready to Start?</span>
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight"
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          Your Dream Garden Is One Conversation Away
        </h2>
        <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Book your free consultation today. We&apos;ll visit your space, listen to your ideas, and show you what&apos;s possible.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            variant="primary"
            className="!bg-white !text-[#1B5E20] hover:!bg-[#FFB300] hover:!text-[#0C1F0E]"
          >
            Book Free Consultation
          </MagneticButton>
          <MagneticButton
            variant="outline"
            className="!border-white/30 !text-white hover:!bg-white hover:!text-[#1B5E20]"
          >
            Call 020 1234 5678
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
