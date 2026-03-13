"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import CTALink from "@/components/ui/CTALink";

export default function ContactPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      const elements = contentRef.current!.querySelectorAll(".contact-animate");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="get in touch"
        subtitle="Let's discuss your vision"
        image="/images/cta-bg.jpg"
        compact
      />

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <div>
              <h2
                className="contact-animate font-display mb-8"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  fontWeight: 300,
                  letterSpacing: "-0.5px",
                  color: "#212123",
                  opacity: 0,
                }}
              >
                we&apos;d love to hear about your project
              </h2>

              <p
                className="contact-animate text-[#6B6B6B] text-base leading-relaxed mb-8"
                style={{ opacity: 0 }}
              >
                Whether you have a clear vision or are just starting to explore
                possibilities, we&apos;re here to help. Get in touch and we&apos;ll
                arrange a consultation at your property.
              </p>

              <div className="contact-animate space-y-6" style={{ opacity: 0 }}>
                <div>
                  <h3 className="text-sm font-semibold text-[#212123] mb-2 uppercase tracking-wider">Phone</h3>
                  <p className="text-[#6B6B6B]">020 1234 5678</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#212123] mb-2 uppercase tracking-wider">Email</h3>
                  <p className="text-[#6B6B6B]">hello@greenscape.co.uk</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#212123] mb-2 uppercase tracking-wider">Studio</h3>
                  <p className="text-[#6B6B6B]">London & South East, UK</p>
                </div>
              </div>

              <div className="contact-animate mt-10" style={{ opacity: 0 }}>
                <CTALink label="View Our Process" href="/process" />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="contact-animate" style={{ opacity: 0 }}>
                  <label className="block text-sm text-[#212123] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-[#212123]/20 py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div className="contact-animate" style={{ opacity: 0 }}>
                  <label className="block text-sm text-[#212123] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border-b border-[#212123]/20 py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="contact-animate" style={{ opacity: 0 }}>
                  <label className="block text-sm text-[#212123] mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full border-b border-[#212123]/20 py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="contact-animate" style={{ opacity: 0 }}>
                  <label className="block text-sm text-[#212123] mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-[#212123]/20 py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="contact-animate pt-4" style={{ opacity: 0 }}>
                  <button
                    type="submit"
                    className="cta-link text-lg text-[#212123]"
                    data-cursor="link"
                  >
                    <span>Send Message</span>
                    <span className="cta-separator" />
                    <span className="cta-arrow">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
