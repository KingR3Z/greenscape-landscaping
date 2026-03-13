"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    title: "designing for all seasons: a guide to year-round gardens",
    excerpt: "How to create a landscape that looks beautiful in every season, from spring bulbs to winter structure.",
    date: "March 2026",
    image: "/images/projects/project-01.jpg",
    slug: "designing-for-all-seasons",
  },
  {
    title: "the art of outdoor lighting",
    excerpt: "Transform your garden after dark with thoughtful lighting design that extends your outdoor living hours.",
    date: "February 2026",
    image: "/images/projects/project-02.jpg",
    slug: "art-of-outdoor-lighting",
  },
  {
    title: "natural swimming pools: luxury meets sustainability",
    excerpt: "Why chemical-free swimming pools are becoming the must-have feature in premium garden design.",
    date: "January 2026",
    image: "/images/projects/project-03.jpg",
    slug: "natural-swimming-pools",
  },
  {
    title: "from vision to reality: our kensington project",
    excerpt: "A behind-the-scenes look at how we transformed a neglected courtyard into an urban oasis.",
    date: "December 2025",
    image: "/images/projects/project-04.jpg",
    slug: "kensington-project-story",
  },
  {
    title: "choosing the right materials for your landscape",
    excerpt: "Stone, timber, or composite? A guide to selecting materials that will stand the test of time.",
    date: "November 2025",
    image: "/images/projects/project-05.jpg",
    slug: "choosing-right-materials",
  },
  {
    title: "the value of professional landscape design",
    excerpt: "Why investing in professional design pays dividends in beauty, functionality, and property value.",
    date: "October 2025",
    image: "/images/projects/project-06.jpg",
    slug: "value-of-professional-design",
  },
];

export default function BlogPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gridRef.current!.querySelectorAll(".blog-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="blog"
        subtitle="Insights, inspiration, and behind-the-scenes stories"
        image="/images/projects/project-07.jpg"
        compact
      />

      {/* Blog Grid */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card group block"
                data-cursor="link"
                style={{ opacity: 0 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <span className="text-[#aaa] text-xs tracking-wider uppercase">
                  {post.date}
                </span>
                <h3
                  className="font-display mt-2 mb-3 group-hover:opacity-70 transition-opacity"
                  style={{
                    fontSize: "clamp(18px, 1.5vw, 22px)",
                    fontWeight: 400,
                    letterSpacing: "-0.3px",
                    color: "#212123",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
