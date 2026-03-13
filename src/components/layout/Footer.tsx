"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { footerData, mainNav } from "@/data/navigation";
import CTALink from "@/components/ui/CTALink";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const taglinesRef = useRef<HTMLDivElement>(null);
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
      // Taglines staggered reveal
      if (taglinesRef.current) {
        const lines = taglinesRef.current.querySelectorAll("h3");
        gsap.fromTo(
          lines,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: taglinesRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Banner
      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bannerRef.current,
              start: "top 90%",
            },
          }
        );
      }

      // Grid columns
      if (gridRef.current) {
        const cols = gridRef.current.querySelectorAll(".footer-col");
        gsap.fromTo(
          cols,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Divider
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "expo.inOut",
            scrollTrigger: {
              trigger: dividerRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-white text-[#212123]" id="contact" style={{ marginRight: 'var(--sidebar-width)' }}>
      {/* Taglines + Logo */}
      <div className="container-custom section-padding pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div ref={taglinesRef} className="flex-1">
            {footerData.taglines.map((line, i) => (
              <h3
                key={i}
                className="font-display"
                style={{
                  fontSize: "var(--h2-size)",
                  fontWeight: "var(--h2-weight)",
                  letterSpacing: "var(--h2-letter-spacing)",
                  lineHeight: "var(--h2-line-height)",
                  color: "#212123",
                  opacity: 0,
                }}
              >
                {line}
              </h3>
            ))}
          </div>

          {/* Logo + social */}
          <div className="flex flex-col items-end gap-6">
            <a
              href="/"
              className="font-display text-3xl md:text-4xl"
              style={{
                fontWeight: 300,
                letterSpacing: "-1px",
                color: "#212123",
              }}
              data-cursor="link"
            >
              GreenScape
            </a>
            <div className="flex items-center gap-4">
              {mainNav.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-[#212123]/60 hover:text-[#212123] text-sm transition-colors duration-300"
                  data-cursor="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact banner */}
      <div
        ref={bannerRef}
        className="container-custom pb-12"
        style={{ opacity: 0 }}
      >
        <CTALink
          label={footerData.contactBanner}
          href="/contact"
          size="sm"
        />
      </div>

      {/* Divider */}
      <div className="container-custom">
        <div
          ref={dividerRef}
          className="w-full h-px bg-[#212123]/10"
          style={{ transformOrigin: "left", transform: "scaleX(0)" }}
        />
      </div>

      {/* Navigation grid */}
      <div
        ref={gridRef}
        className="container-custom py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
      >
        {/* Contact column */}
        <div className="footer-col col-span-2 md:col-span-1">
          <h4 className="text-sm font-semibold text-[#212123] mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-[#6B6B6B]">
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
                    className="text-sm text-[#6B6B6B] hover:text-[#212123] transition-colors duration-300"
                    data-cursor="link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="container-custom">
        <div className="w-full h-px bg-[#212123]/10" />
      </div>
      <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#6B6B6B]">
          &copy; {new Date().getFullYear()} GreenScape Landscapes
        </p>
        <div className="flex items-center gap-6">
          <a href="/privacy" className="text-xs text-[#6B6B6B] hover:text-[#212123] transition-colors" data-cursor="link">
            privacy policy
          </a>
          <a href="/accessibility" className="text-xs text-[#6B6B6B] hover:text-[#212123] transition-colors" data-cursor="link">
            accessibility policy
          </a>
          <a href="/terms" className="text-xs text-[#6B6B6B] hover:text-[#212123] transition-colors" data-cursor="link">
            terms and conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
