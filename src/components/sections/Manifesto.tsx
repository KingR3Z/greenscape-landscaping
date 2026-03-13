'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ManifestoProps {
  text: string;
  dark?: boolean;
  id?: string;
}

export default function Manifesto({ text, dark = false, id }: ManifestoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      const words = textRef.current!.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const words = text.split(' ');

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section-padding ${dark ? 'bg-[#0C1F0E]' : 'bg-[#F5F5F0]'}`}
    >
      <div className="container-custom max-w-5xl">
        <p
          ref={textRef}
          className={`text-2xl md:text-4xl lg:text-5xl font-light leading-snug ${
            dark ? 'text-white' : 'text-[#0C1F0E]'
          }`}
          style={{ fontFamily: 'var(--font-display), serif' }}
        >
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
