"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SidebarStripProps {
  currentImage?: string;
  nextImage?: string;
}

export default function SidebarStrip({ currentImage, nextImage }: SidebarStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [pastHero, setPastHero] = useState(false);
  const isHomepage = !!nextImage;

  // Track scroll position to transition sidebar from blur to solid dark
  useEffect(() => {
    if (!isHomepage) return; // Inner pages always show solid dark
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setPastHero(window.scrollY > heroHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  return (
    <div ref={stripRef} className="sidebar-strip hidden xl:block">
      {/* Solid dark background — always visible on inner pages, transitions on homepage */}
      <div
        className="absolute inset-0 bg-[#212123] transition-opacity duration-700"
        style={{ opacity: (!isHomepage || pastHero) ? 1 : 0, zIndex: 1 }}
      />

      {/* Blurred image preview (homepage hero only) */}
      {nextImage && (
        <div
          className="absolute inset-0 overflow-hidden transition-opacity duration-700"
          style={{ opacity: pastHero ? 0 : 1, zIndex: 2 }}
        >
          <Image
            src={nextImage}
            alt=""
            fill
            className="object-cover"
            sizes="20vw"
            style={{ filter: "blur(30px) brightness(0.6)", transform: "scale(1.2)" }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Scroll indicator - centered vertically (homepage only) */}
      {isHomepage && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[30%] z-10 flex flex-col items-center gap-3">
          <span
            className="text-white/60 text-[13px] tracking-[0.25em] lowercase"
            style={{ writingMode: "vertical-rl" }}
          >
            scroll
          </span>
          <svg width="12" height="28" viewBox="0 0 12 28" fill="none" className="mt-2">
            <path d="M6 0v26M1 21l5 5 5-5" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
          </svg>
        </div>
      )}

      {/* Social icons at bottom — horizontal row */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <a href="#" className="text-white/50 hover:text-white transition-colors" data-cursor="link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="#" className="text-white/50 hover:text-white transition-colors" data-cursor="link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        <a href="#" className="text-white/50 hover:text-white transition-colors" data-cursor="link" target="_blank" rel="noopener noreferrer" aria-label="Houzz">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 0L5.4 3.57v6.3l3.2-1.6v6.4l3.9-1.95V6.33l3.2 1.6v6.4l-3.2 1.6v6.4l7.1-3.57V10.5L12.5 6.93V0z"/></svg>
        </a>
      </div>
    </div>
  );
}
