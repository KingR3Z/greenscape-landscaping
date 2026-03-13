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
                color: '#aaaaaa',
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

          {/* Image column — bleeds past sidebar like Cedar Springs */}
          <div ref={imageColRef} className="relative" style={{ marginRight: 'calc(var(--sidebar-width) * -1)' }}>
            <div className="about-image-wrap relative overflow-hidden" style={{ clipPath: 'inset(0 100% 0 0)' }}>
              <Image
                src={aboutData.image}
                alt="GreenScape landscaping project"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* 5-star badge — white text on image like Cedar Springs */}
              <div
                className="about-badge absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-center gap-2"
                style={{ opacity: 0 }}
              >
                <span
                  className="font-display text-white"
                  style={{ fontSize: 'clamp(48px, 5vw, 72px)', fontWeight: 300, lineHeight: 1 }}
                >
                  5
                </span>
                <div className="flex flex-col">
                  <span className="text-white text-sm flex items-center gap-1">
                    star
                    <span className="flex text-white">★★★★★</span>
                  </span>
                  <span className="text-white text-sm">landscapes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
