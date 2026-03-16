"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { mainNav } from "@/data/navigation";

interface NavigationProps {
  variant?: "light" | "dark";
}

export default function Navigation({ variant = "light" }: NavigationProps) {
  const isDarkNav = variant === "dark";
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const smoothScrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    const header = headerRef.current;

    // Initial reveal animations
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, delay: 2.4, ease: "expo.out" });
    }
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 2.8, ease: "power3.out" });
    }
    if (hamburgerRef.current) {
      gsap.fromTo(hamburgerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 3.0, ease: "power3.out" });
    }

    // Hide/show on scroll
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;

        if (currentY > 300) {
          if (delta > 5 && !menuOpen) {
            gsap.to(header, { yPercent: -100, duration: 0.4, ease: "power3.inOut" });
          } else if (delta < -5) {
            gsap.to(header, { yPercent: 0, duration: 0.4, ease: "power3.out" });
          }
        } else {
          gsap.to(header, { yPercent: 0, duration: 0.4, ease: "power3.out" });
        }

        setScrolled(currentY > 80);
        lastScrollY = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, [menuOpen]);

  // Menu overlay animation
  useEffect(() => {
    if (!overlayRef.current) return;
    const items = overlayRef.current.querySelectorAll(".menu-item");

    if (menuOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.6, delay: 0.2, ease: "power3.out" }
      );
    } else {
      gsap.to(items, { opacity: 0, y: -20, stagger: 0.03, duration: 0.3, ease: "power2.in" });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.4, delay: 0.15, ease: "power2.in" });
    }
  }, [menuOpen]);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (href.startsWith("#")) {
        smoothScrollTo(href);
      } else {
        window.location.href = href;
      }
    }, 400);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500`}
        style={{
          backgroundColor: scrolled ? "#212123" : (isDarkNav ? "#ffffff" : "transparent"),
          borderBottom: isDarkNav && !scrolled ? "1px solid #A0A1A5" : "none",
        }}
      >
        <div className="flex items-center h-[100px]">
          {/* Main nav area (logo + CTA) — respects sidebar margin */}
          <div
            className="flex items-center justify-between flex-1"
            style={{
              paddingLeft: "var(--container-padding)",
              paddingRight: "clamp(20px, 2vw, 40px)",
              marginRight: "0",
            }}
          >
            {/* Logo */}
            <a
              ref={logoRef}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-display flex flex-col leading-none"
              style={{
                color: isDarkNav && !scrolled ? "#212123" : "#ffffff",
                opacity: 0,
                transition: "color 0.5s ease",
              }}
              data-cursor="link"
            >
              <span
                style={{
                  fontSize: "clamp(20px, 1.5vw, 26px)",
                  fontWeight: 300,
                  letterSpacing: "-0.5px",
                }}
              >
                GreenScape
              </span>
              <span
                style={{
                  fontSize: "clamp(7px, 0.55vw, 9px)",
                  fontWeight: 400,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                  marginTop: "2px",
                }}
              >
                Landscapes
              </span>
            </a>

            {/* CTA */}
            <div
              ref={ctaRef}
              className="hidden md:block"
              style={{ opacity: 0 }}
            >
              <a
                href={mainNav.cta.href}
                className={`cta-link cta-nav-link transition-colors duration-500 ${isDarkNav && !scrolled ? "text-[#212123]" : "text-white"} ${scrolled ? "scrolled" : ""}`}
                style={{
                  fontSize: "clamp(18px, 1.5vw, 24px)",
                  letterSpacing: "0.48px",
                }}
                data-cursor="link"
              >
                <span>{mainNav.cta.label}</span>
                <span className="cta-separator" />
                <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Hamburger — sits in the sidebar strip area (3 lines like Cedar Springs) */}
          <div
            className="hidden xl:flex items-center justify-center"
            style={{ width: "var(--sidebar-width)", flexShrink: 0 }}
          >
            <button
              ref={hamburgerRef}
              className="flex flex-col gap-[6px] w-10 h-10 items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              data-cursor="link"
              aria-label="Toggle menu"
              style={{ opacity: 0 }}
            >
              <span
                className={`block w-7 h-[1.5px] transition-all duration-300 origin-center bg-white ${
                  menuOpen ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span
                className={`block w-7 h-[1.5px] transition-all duration-300 origin-center bg-white ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-7 h-[1.5px] transition-all duration-300 origin-center bg-white ${
                  menuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                }`}
              />
            </button>
          </div>

          {/* Hamburger — mobile/tablet (visible below xl, 3 lines) */}
          <button
            className="flex xl:hidden flex-col gap-[5px] w-8 h-8 items-center justify-center mr-4"
            onClick={() => setMenuOpen(!menuOpen)}
            data-cursor="link"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${isDarkNav && !scrolled ? "bg-[#212123]" : "bg-white"} ${
                menuOpen ? "rotate-45 translate-y-[6px] !bg-white" : ""
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${isDarkNav && !scrolled ? "bg-[#212123]" : "bg-white"} ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${isDarkNav && !scrolled ? "bg-[#212123]" : "bg-white"} ${
                menuOpen ? "-rotate-45 -translate-y-[6px] !bg-white" : ""
              }`}
            />
          </button>
        </div>
        {/* Thin separator line below nav (matching Cedar Springs) */}
        <div
          className="absolute bottom-0 left-0 h-px bg-white/15 hidden xl:block"
          style={{ width: "calc(100% - var(--sidebar-width))" }}
        />
        {/* Vertical separator between main area and sidebar */}
        <div
          className="absolute top-0 right-0 w-px h-full bg-white/15 hidden xl:block"
          style={{ right: "var(--sidebar-width)" }}
        />
      </header>

      {/* Fullscreen menu overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-[999] bg-[#212123] flex flex-col items-start justify-center ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ opacity: 0, paddingLeft: "var(--container-padding)" }}
      >
        <nav className="flex flex-col gap-4 md:gap-6">
          {mainNav.menuLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="menu-item text-left font-display text-white/90 hover:text-white transition-colors duration-300"
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 300,
                letterSpacing: "-1px",
                opacity: 0,
              }}
              data-cursor="link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Social icons in overlay */}
        <div className="menu-item flex items-center gap-6 mt-12" style={{ opacity: 0 }}>
          {/* Facebook */}
          <a href="#" className="text-white/50 hover:text-white transition-colors duration-300" data-cursor="link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-white/50 hover:text-white transition-colors duration-300" data-cursor="link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          {/* Houzz */}
          <a href="#" className="text-white/50 hover:text-white transition-colors duration-300" data-cursor="link" target="_blank" rel="noopener noreferrer" aria-label="Houzz">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 0L5.4 3.57v6.3l3.2-1.6v6.4l3.9-1.95V6.33l3.2 1.6v6.4l-3.2 1.6v6.4l7.1-3.57V10.5L12.5 6.93V0z"/></svg>
          </a>
        </div>
      </div>
    </>
  );
}
