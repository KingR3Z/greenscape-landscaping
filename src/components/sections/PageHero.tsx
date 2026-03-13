'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  compact?: boolean;
}

export default function PageHero({ title, subtitle, image, compact = false }: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Title reveal
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: 'power3.out' }
        );
      }

      // Subtitle reveal
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: compact ? '60vh' : '80vh', minHeight: compact ? '400px' : '500px' }}
    >
      {/* Background image */}
      <div ref={imageRef} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-end h-full"
        style={{ padding: 'var(--container-padding)', paddingBottom: '80px' }}
      >
        <h1
          ref={titleRef}
          className="font-display text-white"
          style={{
            fontSize: 'var(--h1-size)',
            fontWeight: 'var(--h1-weight)',
            letterSpacing: 'var(--h1-letter-spacing)',
            lineHeight: 'var(--h1-line-height)',
            opacity: 0,
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            ref={subtitleRef}
            className="text-white/60 text-lg mt-4 max-w-xl"
            style={{ opacity: 0 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
