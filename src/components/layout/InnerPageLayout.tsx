"use client";

import LenisProvider from "@/components/layout/LenisProvider";
import CustomCursor from "@/components/layout/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import SidebarStrip from "@/components/layout/SidebarStrip";
import Footer from "@/components/layout/Footer";

interface InnerPageLayoutProps {
  children: React.ReactNode;
}

export default function InnerPageLayout({ children }: InnerPageLayoutProps) {
  return (
    <LenisProvider>
      <CustomCursor />
      <Navigation />
      <SidebarStrip />

      <main style={{ marginRight: "var(--sidebar-width)" }}>
        {children}
      </main>

      <Footer />
    </LenisProvider>
  );
}
