'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blueprintRevealData } from '@/data/homepage';
import CTALink from '@/components/ui/CTALink';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function BlueprintReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word opacity reveal scrubbed to scroll
      if (textRef.current) {
        const words = textRef.current.querySelectorAll('.word');
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'top 10%',
              scrub: 1,
            },
          }
        );
      }

      // Blueprint image scale reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.1, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'center center',
              scrub: 1,
            },
          }
        );
      }

      // CTA fade in
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const words = blueprintRevealData.heading.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
      id="process"
      style={{ width: 'calc(100% + var(--sidebar-width, 0px))' }}
    >
      <div className="relative" style={{ minHeight: '90vh' }}>
        {/* Blueprint image as background — centered, extends behind sidebar */}
        <div
          ref={imageRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <Image
            src={blueprintRevealData.image}
            alt="Garden architectural design blueprint"
            width={1920}
            height={1000}
            className="w-[90%] h-auto max-h-[80vh] object-contain"
            sizes="100vw"
            style={{ opacity: 0.7 }}
          />
        </div>

        {/* Decorative circles overlay — matching Cedar Springs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute rounded-full border border-[#bbb]/40"
            style={{ width: '22vw', height: '22vw', top: '10%', left: '25%' }}
          />
          <div
            className="absolute rounded-full border border-[#bbb]/40"
            style={{ width: '18vw', height: '18vw', top: '8%', left: '48%' }}
          />
          <div
            className="absolute rounded-full border border-[#bbb]/40"
            style={{ width: '26vw', height: '26vw', bottom: '5%', left: '20%' }}
          />
          <div
            className="absolute rounded-full border border-[#bbb]/40"
            style={{ width: '30vw', height: '30vw', top: '15%', right: '-5%' }}
          />
        </div>

        {/* Text content — faded, overlaid on blueprint like Cedar Springs */}
        <div
          className="relative z-10 flex flex-col justify-center"
          style={{
            minHeight: '90vh',
            paddingLeft: 'var(--container-padding)',
            paddingRight: 'var(--container-padding)',
            paddingTop: '120px',
            paddingBottom: '120px',
          }}
        >
          <h2
            ref={textRef}
            className="font-display mb-16 max-w-4xl"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 80px)',
              fontWeight: 300,
              letterSpacing: '-1.5px',
              lineHeight: 1.15,
              color: '#212123',
            }}
          >
            {words.map((word, i) => (
              <span key={i} className="word inline-block mr-[0.3em]" style={{ opacity: 0.15 }}>
                {word}
              </span>
            ))}
          </h2>

          <div ref={ctaRef} style={{ opacity: 0 }}>
            <CTALink label={blueprintRevealData.cta.label} href={blueprintRevealData.cta.href} />
          </div>
        </div>
      </div>
    </section>
  );
}
