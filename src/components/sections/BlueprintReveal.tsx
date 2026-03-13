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
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word opacity reveal scrubbed to scroll
      if (textRef.current) {
        const words = textRef.current.querySelectorAll('.word');
        gsap.fromTo(
          words,
          { opacity: 0.08 },
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

      // Blueprint image scale + clip reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.15, clipPath: 'inset(8% 8% 8% 8%)' },
          {
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
              end: 'bottom 40%',
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
    <section ref={sectionRef} className="bg-white" id="process">
      <div className="container-custom section-padding">
        <h2
          ref={textRef}
          className="font-display mb-16 max-w-3xl"
          style={{
            fontSize: 'var(--h2-size)',
            fontWeight: 'var(--h2-weight)',
            letterSpacing: 'var(--h2-letter-spacing)',
            lineHeight: 'var(--h2-line-height)',
            color: '#212123',
          }}
        >
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em]" style={{ opacity: 0.08 }}>
              {word}
            </span>
          ))}
        </h2>

        <div ref={ctaRef} className="mb-16" style={{ opacity: 0 }}>
          <CTALink label={blueprintRevealData.cta.label} href={blueprintRevealData.cta.href} />
        </div>
      </div>

      {/* Blueprint image with scale reveal */}
      <div className="overflow-hidden">
        <div ref={imageRef} className="w-full" style={{ clipPath: 'inset(8% 8% 8% 8%)' }}>
          <Image
            src={blueprintRevealData.image}
            alt="Garden architectural design blueprint"
            width={1920}
            height={1000}
            className="w-full h-auto object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
