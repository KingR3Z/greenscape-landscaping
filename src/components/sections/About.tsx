'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '@/data/homepage';
import CTALink from '@/components/ui/CTALink';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text column animations
      if (textColRef.current) {
        const elements = textColRef.current.querySelectorAll('.about-animate');
        gsap.fromTo(
          elements,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
            },
          }
        );
      }

      // Image reveal
      if (imageColRef.current) {
        const img = imageColRef.current.querySelector('.about-image-wrap');
        if (img) {
          gsap.fromTo(
            img,
            { clipPath: 'inset(0 100% 0 0)', scale: 1.1 },
            {
              clipPath: 'inset(0 0% 0 0)',
              scale: 1,
              duration: 1.4,
              ease: 'expo.inOut',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 55%',
              },
            }
          );
        }

        // Badge
        const badge = imageColRef.current.querySelector('.about-badge');
        if (badge) {
          gsap.fromTo(
            badge,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 55%',
              },
            }
          );
        }
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white section-padding" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text column */}
          <div ref={textColRef} className="flex flex-col justify-center">
            <h2
              className="about-animate font-display mb-6"
              style={{
                fontSize: 'var(--h1-size)',
                fontWeight: 'var(--h1-weight)',
                letterSpacing: 'var(--h1-letter-spacing)',
                lineHeight: 'var(--h1-line-height)',
                color: '#212123',
              }}
            >
              {aboutData.heading.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>

            <h3
              className="about-animate font-display mb-8"
              style={{
                fontSize: 'var(--h3-size)',
                fontWeight: 'var(--h3-weight)',
                letterSpacing: 'var(--h3-letter-spacing)',
                color: '#212123',
              }}
            >
              {aboutData.subheading}
            </h3>

            {aboutData.paragraphs.map((p, i) => (
              <p
                key={i}
                className="about-animate text-[#6B6B6B] text-base leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}

            <div className="about-animate mt-4">
              <CTALink label={aboutData.cta.label} href={aboutData.cta.href} />
            </div>
          </div>

          {/* Image column */}
          <div ref={imageColRef} className="relative">
            <div className="about-image-wrap relative overflow-hidden" style={{ clipPath: 'inset(0 100% 0 0)' }}>
              <Image
                src={aboutData.image}
                alt="GreenScape landscaping project"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* 5-star badge */}
            <div
              className="about-badge absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-sm px-5 py-4 shadow-lg"
              style={{ opacity: 0 }}
            >
              <span
                className="text-5xl font-display"
                style={{ fontWeight: 300, color: '#212123', lineHeight: 1 }}
              >
                5
              </span>
              <div className="flex flex-col">
                <span className="text-sm text-[#212123] flex items-center gap-1">
                  star
                  <span className="text-[#FFB300] flex">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </span>
                </span>
                <span className="text-sm text-[#212123]">landscapes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
