'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ctaData } from '@/data/homepage';
import CTALink from '@/components/ui/CTALink';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function FullCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Text reveals
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.cta-line');
        gsap.fromTo(
          lines,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
            },
          }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ minHeight: '80vh', width: 'calc(100% + var(--sidebar-width, 0px))' }}>
      {/* Background image with parallax */}
      <div ref={imageRef} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <Image
          src={ctaData.image}
          alt="Stunning landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-end min-h-[80vh]"
        style={{ padding: 'var(--container-padding)', paddingBottom: '80px' }}
      >
        <h2
          ref={headlineRef}
          className="font-display text-white mb-8"
          style={{
            fontSize: 'var(--h1-size)',
            fontWeight: 'var(--h1-weight)',
            letterSpacing: 'var(--h1-letter-spacing)',
            lineHeight: 'var(--h1-line-height)',
          }}
        >
          {ctaData.heading.map((line, i) => (
            <span key={i} className="cta-line block" style={{ opacity: 0 }}>
              {line}
            </span>
          ))}
        </h2>

        <div ref={ctaRef} style={{ opacity: 0 }}>
          <CTALink label={ctaData.cta.label} href={ctaData.cta.href} variant="light" />
        </div>
      </div>
    </section>
  );
}
