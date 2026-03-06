"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ExpertiseBento from "@/components/ExpertiseBento";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Custom cursor logic
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Update custom properties for Bento radial glow
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.cursor-hover') || target.closest('.cursor-hover-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <main className="relative selection:bg-[#06b6d4] selection:text-white">
      {/* Custom Cursor Overlay */}
      <div
        id="cursor"
        className={`custom-cursor hidden md:block ${isHovering ? "hovering" : ""}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      ></div>

      <Navbar />
      <Hero />
      <Marquee />
      <ExpertiseBento />
      <Projects />
      <Footer />
    </main>
  );
}
