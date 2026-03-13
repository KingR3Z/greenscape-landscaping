'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroData } from '@/data/homepage';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onSlideChange?: (currentImage: string, nextImage: string) => void;
}

const heroImages = [
  '/images/hero-bg.jpg',
  '/images/projects/project-01.jpg',
  '/images/projects/project-02.jpg',
  '/images/projects/project-03.jpg',
  '/images/projects/project-04.jpg',
  '/images/projects/project-05.jpg',
];

export default function Hero({ onSlideChange }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasAnimated = useRef(false);

  // Notify parent about current/next images for sidebar blur
  useEffect(() => {
    const nextIdx = (activeIndex + 1) % heroImages.length;
    onSlideChange?.(heroImages[activeIndex], heroImages[nextIdx]);
  }, [activeIndex, onSlideChange]);

  const goToSlide = useCallback((newIndex: number) => {
    if (isTransitioning || newIndex === activeIndex) return;
    setIsTransitioning(true);

    const currentSlide = slideRefs.current[activeIndex];
    const nextSlide = slideRefs.current[newIndex];
    if (!currentSlide || !nextSlide) { setIsTransitioning(false); return; }

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(newIndex);
        setIsTransitioning(false);
      },
    });

    // Crossfade with slight scale
    tl.to(currentSlide, { opacity: 0, scale: 1.05, duration: 1.2, ease: 'power2.inOut' })
      .set(nextSlide, { opacity: 1, scale: 1, zIndex: 2 }, 0)
      .fromTo(nextSlide, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.inOut' }, 0)
      .set(currentSlide, { zIndex: 0 });
  }, [activeIndex, isTransitioning]);

  // Auto-rotation
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveIndex(prev => {
        const next = (prev + 1) % heroImages.length;
        goToSlide(next);
        return prev; // goToSlide handles the state update
      });
    }, 5000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [goToSlide]);

  // Entrance animation
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      // Headline reveal
      const lines = headlineRef.current?.querySelectorAll('.hero-line');
      if (lines) {
        gsap.fromTo(
          lines,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: 'power3.out', delay: 2.4 }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = sectionRef.current?.querySelector('.hero-images-container');
      if (container) {
        gsap.to(container, {
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
      style={{ height: '100vh', minHeight: '100vh' }}
    >
      {/* Background images with carousel */}
      <div className="hero-images-container absolute inset-0 w-full h-[120%] -top-[10%]">
        {heroImages.map((img, i) => (
          <div
            key={img}
            ref={(el) => { slideRefs.current[i] = el; }}
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: i === 0 ? 1 : 0,
              zIndex: i === 0 ? 2 : 0,
            }}
          >
            <Image
              src={img}
              alt={`GreenScape portfolio ${i + 1}`}
              fill
              className="object-cover"
              priority={i < 2}
              sizes="100vw"
            />
          </div>
        ))}
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
    </section>
  );
}
