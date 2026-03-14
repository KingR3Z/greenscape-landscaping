"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    title: "designing for all seasons: a guide to year-round gardens",
    excerpt: "How to create a landscape that looks beautiful in every season, from spring bulbs to winter structure.",
    date: "2026-03-10",
    image: "/images/projects/project-01.jpg",
    slug: "designing-for-all-seasons",
  },
  {
    title: "the art of outdoor lighting",
    excerpt: "Transform your garden after dark with thoughtful lighting design that extends your outdoor living hours.",
    date: "2026-02-18",
    image: "/images/projects/project-02.jpg",
    slug: "art-of-outdoor-lighting",
  },
  {
    title: "natural swimming pools: luxury meets sustainability",
    excerpt: "Why chemical-free swimming pools are becoming the must-have feature in premium garden design.",
    date: "2026-01-22",
    image: "/images/projects/project-03.jpg",
    slug: "natural-swimming-pools",
  },
  {
    title: "from vision to reality: our kensington project",
    excerpt: "A behind-the-scenes look at how we transformed a neglected courtyard into an urban oasis.",
    date: "2025-12-15",
    image: "/images/projects/project-04.jpg",
    slug: "kensington-project-story",
  },
  {
    title: "choosing the right materials for your landscape",
    excerpt: "Stone, timber, or composite? A guide to selecting materials that will stand the test of time.",
    date: "2025-11-08",
    image: "/images/projects/project-05.jpg",
    slug: "choosing-right-materials",
  },
  {
    title: "the value of professional landscape design",
    excerpt: "Why investing in professional design pays dividends in beauty, functionality, and property value.",
    date: "2025-10-20",
    image: "/images/projects/project-06.jpg",
    slug: "value-of-professional-design",
  },
];

const featuredPosts = blogPosts.slice(0, 4);

export default function BlogPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      const elements = pageRef.current!.querySelectorAll(".blog-animate");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: pageRef.current, start: "top 80%" },
        }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      {/* Page Title with decorative bg text */}
      <section className="bg-white relative overflow-hidden" style={{ paddingTop: "170px", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
        {/* Decorative background text */}
        <div
          className="absolute top-[140px] left-0 right-0 pointer-events-none select-none font-display"
          style={{
            fontSize: "clamp(48px, 5vw, 72px)",
            fontWeight: 400,
            color: "rgba(33,33,35,0.03)",
            letterSpacing: "-1px",
            lineHeight: 1.4,
            paddingLeft: "var(--container-padding)",
          }}
        >
          <div>inspired by nature</div>
          <div>guided by experience</div>
          <div>defined by character</div>
        </div>
        <div className="container-custom relative z-10">
          <h1
            className="font-display"
            style={{
              fontSize: "var(--h1-size)",
              fontWeight: 300,
              letterSpacing: "var(--h1-letter-spacing)",
              lineHeight: "var(--h1-line-height)",
              color: "#212123",
            }}
          >
            blog
          </h1>
        </div>
      </section>

      {/* 2-Column Layout: Posts + Featured Sidebar */}
      <section className="bg-white section-padding" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div ref={pageRef} className="grid grid-cols-1 lg:grid-cols-[1fr_1px_auto] gap-0 lg:gap-12">
            {/* Left: Blog Posts */}
            <div className="space-y-0">
              {blogPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-animate block group border-b border-[#A0A1A5] py-8"
                  data-cursor="link"
                  style={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="200px"
                      />
                    </div>
                    <div>
                      <h3
                        className="font-display group-hover:opacity-70 transition-opacity"
                        style={{
                          fontSize: "clamp(18px, 1.5vw, 22px)",
                          fontWeight: 400,
                          letterSpacing: "-0.3px",
                          color: "#212123",
                          lineHeight: 1.3,
                          marginBottom: "8px",
                        }}
                      >
                        {post.title}
                      </h3>
                      <span className="text-[#A0A1A5] text-xs block mb-2">
                        {post.date}
                      </span>
                      <p className="text-[#606065] text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Vertical Separator */}
            <div className="hidden lg:block bg-[#A0A1A5]" />

            {/* Right: Featured Posts Sidebar */}
            <div className="lg:w-[300px] pt-8 lg:pt-0">
              <h3
                className="font-display mb-8"
                style={{
                  fontSize: "var(--h3-size)",
                  fontWeight: 400,
                  letterSpacing: "var(--h3-letter-spacing)",
                  color: "#212123",
                }}
              >
                featured posts
              </h3>
              <div className="space-y-0">
                {featuredPosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="blog-animate block border-b border-[#A0A1A5] py-5 group"
                    data-cursor="link"
                    style={{ opacity: 0 }}
                  >
                    <h4
                      className="font-display group-hover:opacity-70 transition-opacity mb-2"
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#212123",
                        lineHeight: 1.4,
                      }}
                    >
                      {post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}
                    </h4>
                    <div className="flex items-center gap-3">
                      <span className="text-[#A0A1A5] text-xs">GreenScape Team</span>
                      <span className="text-[#A0A1A5] text-xs">{post.date.replace(/-/g, "/").slice(2)}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
