"use client";

import { useState, useCallback } from "react";
import LenisProvider from "@/components/layout/LenisProvider";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import Navigation from "@/components/layout/Navigation";
import SidebarStrip from "@/components/layout/SidebarStrip";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import BlueprintReveal from "@/components/sections/BlueprintReveal";
import FullCTA from "@/components/sections/FullCTA";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [sidebarImages, setSidebarImages] = useState<{ current: string; next: string }>({
    current: "/images/hero-bg.jpg",
    next: "/images/projects/project-01.jpg",
  });

  const handleSlideChange = useCallback((currentImage: string, nextImage: string) => {
    setSidebarImages({ current: currentImage, next: nextImage });
  }, []);

  return (
    <LenisProvider>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      {preloaderDone && <CustomCursor />}
      <Navigation />
      <SidebarStrip currentImage={sidebarImages.current} nextImage={sidebarImages.next} />

      <main style={{ marginRight: "var(--sidebar-width)" }}>
        <Hero onSlideChange={handleSlideChange} />
        <About />
        <FeaturedProjects />
        <BlueprintReveal />
        <FullCTA />
      </main>

      <Footer />
    </LenisProvider>
  );
}
