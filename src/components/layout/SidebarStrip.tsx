"use client";

export default function SidebarStrip() {
  return (
    <div
      className="sidebar-strip hidden lg:block"
      style={{
        background: "linear-gradient(180deg, rgba(12, 31, 14, 0.85) 0%, rgba(12, 31, 14, 0.92) 100%)",
        backdropFilter: "blur(12px)",
      }}
    />
  );
}
