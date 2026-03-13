"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { mainNav } from "@/data/navigation";

export default function Navigation() {
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
    let lastDirection = 0;

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

    // Hide/show on scroll — use vanilla scroll listener for reliability
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;

        // Only hide after scrolling past the hero
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#212123]/5"
            : "bg-transparent"
        }`}
      >
        <div
          className="flex items-center justify-between h-20 md:h-24"
          style={{ paddingLeft: "var(--container-padding)", paddingRight: "var(--container-padding)" }}
        >
          {/* Logo */}
          <a
            ref={logoRef}
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl md:text-2xl"
            style={{
              fontWeight: 300,
              letterSpacing: "-0.5px",
              color: scrolled ? "#212123" : "#ffffff",
              opacity: 0,
              transition: "color 0.5s ease",
            }}
            data-cursor="link"
          >
            GreenScape
          </a>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-6 md:gap-10">
            <div
              ref={ctaRef}
              className="hidden md:block"
              style={{ opacity: 0 }}
            >
              <a
                href={mainNav.cta.href}
                className={`cta-link text-base transition-colors duration-500 ${
                  scrolled ? "text-[#212123]" : "text-white"
                }`}
                data-cursor="link"
              >
                <span>{mainNav.cta.label}</span>
                <span className="cta-separator" />
                <span className="cta-arrow">→</span>
              </a>
            </div>

            {/* Hamburger - always visible */}
            <button
              ref={hamburgerRef}
              className="flex flex-col gap-[6px] w-8 h-8 items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              data-cursor="link"
              aria-label="Toggle menu"
              style={{ opacity: 0 }}
            >
              <span
                className={`block w-7 h-px transition-all duration-300 origin-center ${
                  menuOpen
                    ? "rotate-45 translate-y-[3.5px] bg-white"
                    : scrolled
                      ? "bg-[#212123]"
                      : "bg-white"
                }`}
              />
              <span
                className={`block w-7 h-px transition-all duration-300 origin-center ${
                  menuOpen
                    ? "-rotate-45 -translate-y-[3.5px] bg-white"
                    : scrolled
                      ? "bg-[#212123]"
                      : "bg-white"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-[999] bg-[#0C1F0E] flex flex-col items-start justify-center ${
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

        {/* Social links in overlay */}
        <div className="menu-item flex items-center gap-6 mt-12" style={{ opacity: 0 }}>
          {mainNav.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-white/50 hover:text-white text-sm transition-colors duration-300"
              data-cursor="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
