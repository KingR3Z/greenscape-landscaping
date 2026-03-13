'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Kensington Courtyard',
    category: 'Garden Design',
    description: 'A complete transformation of a neglected 40m² courtyard into a contemporary entertaining space with raised planters and ambient lighting.',
    beforeColor: '#8B7355',
    afterColor: '#2E7D32',
    stats: { area: '40m²', duration: '3 weeks', year: '2025' },
  },
  {
    title: 'Surrey Family Garden',
    category: 'Full Landscaping',
    description: 'Multi-zone family garden with Indian sandstone patio, artificial lawn play area, mature planting borders, and a bespoke timber pergola.',
    beforeColor: '#9E9E9E',
    afterColor: '#1B5E20',
    stats: { area: '120m²', duration: '6 weeks', year: '2025' },
  },
  {
    title: 'Richmond Terrace',
    category: 'Paving & Patios',
    description: 'Porcelain paving with integrated LED strip lighting, a sunken firepit area, and contemporary planting in corten steel raised beds.',
    beforeColor: '#A0887A',
    afterColor: '#388E3C',
    stats: { area: '65m²', duration: '4 weeks', year: '2024' },
  },
  {
    title: 'Hampstead Estate',
    category: 'Tree Surgery & Design',
    description: 'Crown lifting and selective thinning of 8 mature oaks, followed by understorey planting to create a woodland garden feel.',
    beforeColor: '#6D4C41',
    afterColor: '#43A047',
    stats: { area: '200m²', duration: '2 weeks', year: '2024' },
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.project-card', {
        scrollTrigger: { trigger: '.project-grid', start: 'top 70%' },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="section-padding bg-[#F5F5F0]">
      <div className="container-custom">
        <div className="portfolio-heading mb-16">
          <span className="block text-[#1B5E20] text-sm font-medium tracking-widest uppercase mb-4">Our Work</span>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#0C1F0E] leading-tight"
            style={{ fontFamily: 'var(--font-display), serif' }}
          >
            Recent Transformations
          </h2>
          <p className="text-[#656565] text-lg mt-6 max-w-xl leading-relaxed">
            Every garden tells a story. Here are some of our favourites — from bare soil to breathtaking outdoor living spaces.
          </p>
        </div>

        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
              onMouseEnter={() => setActiveProject(i)}
            >
              {/* Before/After visual */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div
                  className="absolute inset-0 transition-all duration-700"
                  style={{ backgroundColor: project.beforeColor }}
                />
                <div
                  className="absolute inset-0 transition-all duration-700 group-hover:opacity-100 opacity-0"
                  style={{ backgroundColor: project.afterColor }}
                />
                {/* Before/After labels */}
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  <span className="px-3 py-1 bg-black/60 text-white text-xs rounded-full backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-500">Before</span>
                  <span className="px-3 py-1 bg-[#1B5E20]/80 text-white text-xs rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">After</span>
                </div>
                {/* Category badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 text-[#1B5E20] text-xs font-medium rounded-full backdrop-blur-sm">{project.category}</span>
                </div>
                {/* Placeholder text */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="text-white/30 text-sm group-hover:text-white/50 transition-colors duration-500 tracking-wider uppercase">[Project Photo]</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3
                  className="text-xl md:text-2xl font-semibold text-[#0C1F0E] mb-3 group-hover:text-[#1B5E20] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-display), serif' }}
                >
                  {project.title}
                </h3>
                <p className="text-[#656565] leading-relaxed mb-6">{project.description}</p>

                {/* Stats */}
                <div className="flex gap-6 pt-4 border-t border-black/5">
                  {Object.entries(project.stats).map(([key, val]) => (
                    <div key={key}>
                      <p className="text-lg font-semibold text-[#1B5E20]">{val}</p>
                      <p className="text-xs text-[#888] capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
