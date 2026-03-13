'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroData } from '@/data/homepage';
import { mainNav } from '@/data/navigation';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const socialsRef = useRef<HTMLUListElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      const lines = headlineRef.current?.querySelectorAll('.hero-line');
      if (lines) {
        gsap.fromTo(
          lines,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.2,
            ease: 'power3.out',
            delay: 2.4,
          }
        );
      }

      // Social icons fade in
      if (socialsRef.current) {
        gsap.fromTo(
          socialsRef.current.querySelectorAll('li'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, delay: 3.0, ease: 'power3.out' }
        );
      }

      // Scroll indicator
      if (scrollRef.current) {
        gsap.fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, delay: 3.2, ease: 'power2.out' }
        );
      }

      // Parallax on scroll
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - var(--sidebar-width, 0px) * 0)' , minHeight: '100vh' }}
    >
      {/* Background image with parallax */}
      <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src={heroData.image}
          alt="Luxury landscape at dusk"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* SR-only heading for SEO */}
      <h1 className="sr-only">{heroData.srOnly}</h1>

      {/* Main headline - bottom left */}
      <h2
        ref={headlineRef}
        className="absolute bottom-16 md:bottom-20 left-0 z-10 font-display"
        style={{
          paddingLeft: 'var(--container-padding)',
          fontSize: 'var(--h1-size)',
          fontWeight: 'var(--h1-weight)',
          letterSpacing: 'var(--h1-letter-spacing)',
          lineHeight: 'var(--h1-line-height)',
          color: '#ffffff',
        }}
      >
        {heroData.headline.map((line, i) => (
          <span key={i} className="hero-line block" style={{ opacity: 0 }}>
            {line}
          </span>
        ))}
      </h2>

      {/* Social icons - bottom right */}
      <ul
        ref={socialsRef}
        className="absolute bottom-16 md:bottom-20 z-10 flex items-center gap-5"
        style={{ right: 'calc(var(--sidebar-width) + var(--container-padding))' }}
      >
        {mainNav.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className="text-white/80 hover:text-white text-sm transition-colors duration-300"
              data-cursor="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Scroll indicator - right side */}
      <div
        ref={scrollRef}
        className="absolute right-8 lg:right-[calc(var(--sidebar-width)+30px)] bottom-1/3 z-10 flex flex-col items-center gap-3"
        style={{ opacity: 0, writingMode: 'vertical-rl' }}
      >
        <span className="text-white/60 text-xs tracking-[0.2em] uppercase">scroll</span>
        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" className="mt-1">
          <path d="M6 0v22M1 17l5 5 5-5" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
        </svg>
      </div>
    </section>
  );
}
