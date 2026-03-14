"use client";

import LenisProvider from "@/components/layout/LenisProvider";
import CustomCursor from "@/components/layout/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import SidebarStrip from "@/components/layout/SidebarStrip";
import Footer from "@/components/layout/Footer";
import FooterTaglines from "@/components/sections/FooterTaglines";

interface InnerPageLayoutProps {
  children: React.ReactNode;
  navVariant?: "light" | "dark";
}

export default function InnerPageLayout({ children, navVariant = "dark" }: InnerPageLayoutProps) {
  return (
    <LenisProvider>
      <CustomCursor />
      <Navigation variant={navVariant} />
      <SidebarStrip />

      <main style={{ marginRight: "var(--sidebar-width)", marginBottom: "100vh", position: "relative", zIndex: 1, backgroundColor: "#ffffff" }}>
        {children}
        <FooterTaglines />
      </main>

      <Footer />
    </LenisProvider>
  );
}
