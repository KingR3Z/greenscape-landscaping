"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { footerData } from "@/data/navigation";
import CTALink from "@/components/ui/CTALink";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  const smoothScrollTo = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        const offset = 80;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  }, []);

  useEffect(() => {
    if (!footerRef.current) return;
    const ctx = gsap.context(() => {
      if (bannerRef.current) {
        gsap.fromTo(bannerRef.current, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: bannerRef.current, start: "top 90%" },
        });
      }
      if (gridRef.current) {
        const cols = gridRef.current.querySelectorAll(".footer-col");
        gsap.fromTo(cols, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        });
      }
      if (dividerRef.current) {
        gsap.fromTo(dividerRef.current, { scaleX: 0 }, {
          scaleX: 1, duration: 1.2, ease: "expo.inOut",
          scrollTrigger: { trigger: dividerRef.current, start: "top 90%" },
        });
      }
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-white text-[#212123]"
      id="contact"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
      }}
    >
      {/* Top border */}
      <div className="w-full h-px bg-[#A0A1A5]" />

      {/* Contact banner */}
      <div ref={bannerRef} className="container-custom" style={{ paddingTop: "clamp(40px, 4vw, 60px)", paddingBottom: "clamp(40px, 4vw, 60px)", opacity: 0 }}>
        <CTALink label={footerData.contactBanner} href="/contact" size="sm" />
      </div>

      {/* Divider */}
      <div className="container-custom">
        <div ref={dividerRef} className="w-full h-px bg-[#A0A1A5]" style={{ transformOrigin: "left", transform: "scaleX(0)" }} />
      </div>

      {/* Navigation grid with logo + social on right */}
      <div ref={gridRef} className="container-custom py-12 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* Contact column */}
        <div className="footer-col col-span-2 md:col-span-1">
          <h4 className="text-sm font-semibold text-[#212123] mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-[#606065]">
            <p>{footerData.contact.phone}</p>
            <p>{footerData.contact.email}</p>
            <p>{footerData.contact.address}</p>
          </div>
        </div>

        {/* Nav columns */}
        {footerData.navColumns.map((col, ci) => (
          <div key={ci} className="footer-col">
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScrollTo(e, link.href)}
                    className="text-sm text-[#606065] hover:text-[#212123] transition-colors duration-300"
                    data-cursor="link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Logo + Social column on the right */}
        <div className="footer-col flex flex-col items-end justify-start gap-6">
          <a
            href="/"
            className="font-display"
            style={{ fontSize: "clamp(24px, 2.5vw, 40px)", fontWeight: 300, letterSpacing: "-1px", color: "#212123" }}
            data-cursor="link"
          >
            GreenScape
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#212123]/40 hover:text-[#212123] transition-colors" data-cursor="link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-[#212123]/40 hover:text-[#212123] transition-colors" data-cursor="link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="text-[#212123]/40 hover:text-[#212123] transition-colors" data-cursor="link" target="_blank" rel="noopener noreferrer" aria-label="Houzz">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 0L5.4 3.57v6.3l3.2-1.6v6.4l3.9-1.95V6.33l3.2 1.6v6.4l-3.2 1.6v6.4l7.1-3.57V10.5L12.5 6.93V0z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-custom">
        <div className="w-full h-px bg-[#A0A1A5]" />
      </div>
      <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#606065]">
          &copy; {new Date().getFullYear()} GreenScape Landscapes
        </p>
        <div className="flex items-center gap-6">
          <a href="/privacy" className="text-xs text-[#606065] hover:text-[#212123] transition-colors" data-cursor="link">privacy policy</a>
          <a href="/accessibility" className="text-xs text-[#606065] hover:text-[#212123] transition-colors" data-cursor="link">accessibility policy</a>
          <a href="/terms" className="text-xs text-[#606065] hover:text-[#212123] transition-colors" data-cursor="link">terms and conditions</a>
          <span className="text-xs text-[#606065]">design by: GreenScape</span>
        </div>
      </div>
    </footer>
  );
}
