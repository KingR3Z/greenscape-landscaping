"use client";

import { useState } from "react";
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

  return (
    <LenisProvider>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      {preloaderDone && <CustomCursor />}
      <Navigation />
      <SidebarStrip />

      <main style={{ marginRight: "var(--sidebar-width)" }}>
        <Hero />
        <About />
        <FeaturedProjects />
        <BlueprintReveal />
        <FullCTA />
      </main>

      <Footer />
    </LenisProvider>
  );
}
