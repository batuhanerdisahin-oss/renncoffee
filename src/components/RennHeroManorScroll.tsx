"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Compass } from "lucide-react";

const HERO_PHOTOS = [
  {
    src: "/venue/venue-storefront.jpg",
    title: "Amiral Ön Cephe & Işıklı Altın Tabela",
    tag: "KAYSERİ • AMİRAL MAĞAZA",
    concept: "Renn Deneyimi"
  },
  {
    src: "/venue/venue-pyramid-sphinx.jpg",
    title: "Gize Piramitleri & Sfenks Taş Rölyefi",
    tag: "ANTİK MISIR MİMARİSİ",
    concept: "Özgün Ambiyans"
  },
  {
    src: "/venue/venue-relief-wall.jpg",
    title: "Anubis & Bastet Sandstone Duvarı",
    tag: "MİSTİK DETAYLAR",
    concept: "Tasarım Kimliği"
  },
  {
    src: "/venue/venue-garden-palms.jpg",
    title: "Beyaz Çakıllı Palmiye Bahçesi",
    tag: "AÇIK HAVA AVLUSU",
    concept: "Sosyal Yaşam"
  },
  {
    src: "/venue/venue-fireplace.jpg",
    title: "Şömineli Lounge & Dinlenme Alanı",
    tag: "BOHEM KONFOR",
    concept: "Sıcak Atmosfer"
  }
];

export default function RennHeroManorScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activePhoto, setActivePhoto] = useState(0);

  // Auto-cycle gently every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

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

  // Scroll factor: 0 to 1 over 700px of scroll
  const scrollFactor = Math.min(scrollY / 700, 1);
  const scale = 1 + scrollFactor * 0.08;
  const translateY = scrollFactor * 35;
  const rotateY = mousePos.x * 6;
  const rotateX = -mousePos.y * 6;

  const currentPhoto = HERO_PHOTOS[activePhoto];

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
        {HERO_PHOTOS.map((photo, idx) => (
          <div
            key={photo.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activePhoto === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              priority={idx === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}

        {/* Cinematic Vignette & Lighting Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#20150F]/90 via-[#20150F]/20 to-black/30 pointer-events-none z-20" />

        {/* Floating Concept Plaque Badge (Bottom) */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-[#20150F]/85 backdrop-blur-md border border-white/15 text-[#FAF7F2] flex items-center justify-between gap-3 shadow-lg z-30">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
              <Sparkles size={12} />
              <span>{currentPhoto.tag}</span>
            </div>
            <p className="font-serif-luxury text-sm sm:text-base font-bold text-white tracking-wide">
              {currentPhoto.title}
            </p>
          </div>
          <span className="hidden xs:inline-flex px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#C59A6F] text-[#20150F] shrink-0">
            {currentPhoto.concept}
          </span>
        </div>

        {/* Top subtle badge */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-[#FAF7F2] font-medium flex items-center gap-1.5 z-30">
          <span className="w-2 h-2 rounded-full bg-[#C59A6F] animate-pulse" />
          <span>Gerçek Mekân Fotoğrafları</span>
        </div>

        {/* Top Right Mini Indicators */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center gap-1.5 z-30 bg-black/50 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/15">
          {HERO_PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhoto(idx)}
              aria-label={`Fotoğraf ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activePhoto === idx ? "w-5 bg-[#C59A6F]" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
