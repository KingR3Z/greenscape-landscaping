'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featuredProjects } from '@/data/projects';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const projects = featuredProjects;

  const goToSlide = useCallback(
    (newIndex: number) => {
      if (isAnimating || newIndex === activeIndex) return;
      setIsAnimating(true);

      const currentSlide = slideRefs.current[activeIndex];
      const nextSlide = slideRefs.current[newIndex];
      if (!currentSlide || !nextSlide) {
        setIsAnimating(false);
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          setActiveIndex(newIndex);
          setIsAnimating(false);
        },
      });

      // Fade out current text
      tl.to(currentSlide.querySelectorAll('.slide-text'), {
        opacity: 0,
        y: -30,
        stagger: 0.03,
        duration: 0.4,
        ease: 'power2.in',
      });

      // Crossfade images
      tl.to(currentSlide, { opacity: 0, duration: 0.6, ease: 'power2.inOut' }, '-=0.2');
      tl.set(nextSlide, { opacity: 1, zIndex: 2 });

      // Reveal next text
      tl.fromTo(
        nextSlide.querySelectorAll('.slide-text'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

      // Reset previous
      tl.set(currentSlide, { zIndex: 0 });
    },
    [activeIndex, isAnimating]
  );

  const goNext = useCallback(() => {
    const next = (activeIndex + 1) % projects.length;
    goToSlide(next);
  }, [activeIndex, goToSlide, projects.length]);

  const goPrev = useCallback(() => {
    const prev = (activeIndex - 1 + projects.length) % projects.length;
    goToSlide(prev);
  }, [activeIndex, goToSlide, projects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  // Heading animation
  useEffect(() => {
    if (!headingRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white" id="projects">
      {/* Section heading */}
      <div className="container-custom pt-20 pb-8">
        <h2
          ref={headingRef}
          className="font-display"
          style={{
            fontSize: 'var(--h1-size)',
            fontWeight: 'var(--h1-weight)',
            letterSpacing: 'var(--h1-letter-spacing)',
            lineHeight: 'var(--h1-line-height)',
            color: '#212123',
            opacity: 0,
          }}
        >
          Featured Project
        </h2>
      </div>

      {/* Carousel */}
      <div
        ref={slidesContainerRef}
        className="relative w-full overflow-hidden"
        style={{ height: '85vh', minHeight: '600px' }}
        data-cursor="view"
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => { slideRefs.current[i] = el; }}
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: i === 0 ? 1 : 0,
              zIndex: i === 0 ? 2 : 0,
            }}
            data-cursor={i === activeIndex ? 'view' : i === (activeIndex + 1) % projects.length ? 'next' : undefined}
          >
            {/* Background image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i < 2}
              loading={i < 2 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

            {/* Slide content — simplified like Cedar Springs (label + title only) */}
            <div
              className="absolute inset-0 flex flex-col justify-end"
              style={{ padding: 'var(--container-padding)', paddingBottom: '100px' }}
            >
              <span className="slide-text text-white/60 text-sm tracking-[0.15em] uppercase mb-3 font-display">
                Featured Project
              </span>
              <h3
                className="slide-text font-display text-white"
                style={{
                  fontSize: 'var(--h2-size)',
                  fontWeight: 'var(--h2-weight)',
                  letterSpacing: 'var(--h2-letter-spacing)',
                  lineHeight: 'var(--h2-line-height)',
                }}
              >
                {project.title}
              </h3>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <div className="absolute bottom-6 left-0 z-10 flex items-center gap-6" style={{ paddingLeft: 'var(--container-padding)' }}>
          <button
            onClick={goPrev}
            className="text-white/80 hover:text-white transition-colors duration-300"
            data-cursor="link"
            aria-label="Previous project"
          >
            <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
              <path d="M0 8h30M8 1L1 8l7 7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          {/* Dot navigation */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-[2px] transition-all duration-500 ${
                  i === activeIndex ? 'w-8 bg-white' : 'w-4 bg-white/40'
                }`}
                data-cursor="link"
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="text-white/80 hover:text-white transition-colors duration-300"
            data-cursor="link"
            aria-label="Next project"
          >
            <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
              <path d="M2 8h30M24 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
