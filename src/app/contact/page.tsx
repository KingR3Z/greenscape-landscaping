"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
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
      {/* Page Title */}
      <section className="bg-white" style={{ paddingTop: "170px", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
        <div className="container-custom">
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
            contact us
          </h1>
        </div>
      </section>

      {/* 3-Column Layout: Info | Form | Service Checkboxes */}
      <section className="bg-white section-padding" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1: Contact Info */}
            <div>
              <div className="contact-animate space-y-8" style={{ opacity: 0 }}>
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#212123",
                      marginBottom: "8px",
                    }}
                  >
                    Phone
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "28.8px", color: "#212123" }}>020 1234 5678</p>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#212123",
                      marginBottom: "8px",
                    }}
                  >
                    Email
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "28.8px", color: "#212123" }}>hello@greenscape.co.uk</p>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#212123",
                      marginBottom: "8px",
                    }}
                  >
                    Design Studio
                  </h3>
                  <p style={{ fontSize: "16px", lineHeight: "28.8px", color: "#212123" }}>
                    London & South East<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="contact-animate mt-10" style={{ opacity: 0 }}>
                <CTALink label="View Our Process" href="/process" />
              </div>
            </div>

            {/* Column 2: Contact Form */}
            <div>
              <h2
                className="contact-animate font-display mb-10"
                style={{
                  fontSize: "var(--h3-size)",
                  fontWeight: 400,
                  letterSpacing: "var(--h3-letter-spacing)",
                  color: "#212123",
                  opacity: 0,
                }}
              >
                start the process today
              </h2>

              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="contact-animate grid grid-cols-2 gap-6" style={{ opacity: 0 }}>
                  <div>
                    <input
                      type="text"
                      className="w-full border-b border-[#A0A1A5] py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full border-b border-[#A0A1A5] py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="contact-animate" style={{ opacity: 0 }}>
                  <input
                    type="tel"
                    className="w-full border-b border-[#A0A1A5] py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors"
                    placeholder="Phone"
                  />
                </div>

                <div className="contact-animate" style={{ opacity: 0 }}>
                  <input
                    type="email"
                    className="w-full border-b border-[#A0A1A5] py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors"
                    placeholder="Email"
                  />
                </div>

                <div className="contact-animate" style={{ opacity: 0 }}>
                  <input
                    type="text"
                    className="w-full border-b border-[#A0A1A5] py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors"
                    placeholder="Address"
                  />
                </div>

                <div className="contact-animate" style={{ opacity: 0 }}>
                  <input
                    type="text"
                    className="w-full border-b border-[#A0A1A5] py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors"
                    placeholder="City"
                  />
                </div>

                <div className="contact-animate" style={{ opacity: 0 }}>
                  <textarea
                    rows={3}
                    className="w-full border-b border-[#A0A1A5] py-3 text-[#212123] bg-transparent focus:border-[#212123] focus:outline-none transition-colors resize-none"
                    placeholder="Message"
                  />
                </div>

                <div className="contact-animate pt-4" style={{ opacity: 0 }}>
                  <button
                    type="submit"
                    className="cta-link"
                    style={{
                      fontSize: "var(--cta-text-size)",
                      letterSpacing: "0.48px",
                      color: "#212123",
                    }}
                    data-cursor="link"
                  >
                    <span>Send Message</span>
                    <span className="cta-separator" />
                    <span className="cta-arrow">→</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Column 3: Service Required */}
            <div>
              <h3
                className="contact-animate"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#212123",
                  marginBottom: "24px",
                  opacity: 0,
                }}
              >
                Service Required
              </h3>
              <div className="contact-animate space-y-5" style={{ opacity: 0 }}>
                {["Design", "Construction", "Maintenance", "Snow & Ice"].map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 cursor-pointer group"
                    data-cursor="link"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-2 border-[#A0A1A5] rounded-none appearance-none checked:bg-[#212123] checked:border-[#212123] transition-colors cursor-pointer"
                      style={{ accentColor: "#212123" }}
                    />
                    <span
                      className="text-[#606065] group-hover:text-[#212123] transition-colors"
                      style={{ fontSize: "16px", lineHeight: "28.8px" }}
                    >
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
