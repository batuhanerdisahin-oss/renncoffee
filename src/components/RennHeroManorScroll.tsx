"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Compass } from "lucide-react";

export default function RennHeroManorScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Scroll factor: 0 to 1 over 800px of scroll
  const scrollFactor = Math.min(scrollY / 700, 1);
  const scale = 1 + scrollFactor * 0.08;
  const translateY = scrollFactor * 35;
  const rotateY = mousePos.x * 6;
  const rotateX = -mousePos.y * 6;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto lg:max-w-none group cursor-default"
      style={{
        perspective: "1200px",
      }}
    >
      {/* Warm Ambient Glow behind the architectural visual */}
      <div
        className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#C59A6F]/25 via-[#D4A373]/15 to-transparent rounded-[2.5rem] blur-2xl -z-10 transition-opacity duration-700 pointer-events-none"
        style={{
          transform: `scale(${1 + scrollFactor * 0.1})`,
          opacity: 0.85 - scrollFactor * 0.3,
        }}
      />

      {/* Main Architectural Visual Container */}
      <div
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/4.8] rounded-3xl sm:rounded-[2rem] overflow-hidden border border-[#D8C7B5] shadow-xl sm:shadow-2xl bg-[#20150F] transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src="/brand/renn-manor-hero.jpg"
          alt="Renn Coffee Manor — Antik Mısır Mimari Ticari Villa Konsepti"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Cinematic Vignette & Lighting Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#20150F]/85 via-transparent to-black/20 pointer-events-none" />

        {/* Floating Concept Plaque Badge (Bottom) */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-[#20150F]/85 backdrop-blur-md border border-white/15 text-[#FAF7F2] flex items-center justify-between gap-3 shadow-lg">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
              <Sparkles size={12} />
              <span>RENN MANOR KONSEPTE ÖZEL</span>
            </div>
            <p className="font-serif-luxury text-sm sm:text-base font-bold text-white tracking-wide">
              Müstakil Ticari Villa & Roastery
            </p>
          </div>
          <span className="hidden xs:inline-flex px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#C59A6F] text-[#20150F] shrink-0">
            3. Konsept
          </span>
        </div>

        {/* Top subtle badge */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-[#FAF7F2] font-medium flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C59A6F] animate-pulse" />
          <span>Antik Mısır Bohem Mimarisi</span>
        </div>
      </div>
    </div>
  );
}
