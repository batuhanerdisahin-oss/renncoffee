"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RennHeroManorScroll from "@/components/RennHeroManorScroll";
import { getSiteSettings } from "@/lib/store";
import { SiteSettings, INITIAL_SETTINGS } from "@/data/initialData";
import {
  ArrowRight,
  Coffee,
  Sparkles,
  Store,
  Compass,
  CheckCircle2,
  ChevronRight,
  Flame,
  Sun,
  UtensilsCrossed
} from "lucide-react";

export default function HomePage() {
  const [settings, setSettings] = useState<SiteSettings>(INITIAL_SETTINGS);

  useEffect(() => {
    getSiteSettings().then(setSettings);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#20150F] selection:bg-[#20150F] selection:text-[#FAF7F2] overflow-x-hidden">
      <Navbar />

      {/* =========================================================================
          HERO SECTION — ULTRA-MINIMALIST, EDITORIAL LUXURY
          (Left: User's Manor/Villa visual with scroll interaction | Right: Brand Motto & CTAs)
         ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 border-b border-[#E6DED4] overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_35%,rgba(244,235,220,0.9)_0%,rgba(250,247,242,1)_100%)] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT COLUMN: Architectural Visual with Scroll Interaction */}
            <div className="lg:col-span-6 order-2 lg:order-1 w-full">
              <RennHeroManorScroll />
            </div>

            {/* RIGHT COLUMN: Brand Motto, Story & Primary Franchise CTA */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start space-y-6 sm:space-y-8">
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6DC] border border-[#DECDBB] text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A5784C] font-semibold">
                <Sparkles size={13} className="text-[#C59A6F] shrink-0" />
                <span>KAYSERİ • ROASTERY & LIFESTYLE</span>
              </div>

              {/* Brand Title */}
              <div className="space-y-2">
                <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#20150F] leading-[1.05]">
                  {settings.brandName || "RENN COFFEE"}
                </h1>
                <p className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#C59A6F] italic font-normal">
                  &ldquo;{settings.heroTitle || "Bir fincandan daha fazlası."}&rdquo;
                </p>
              </div>

              {/* Brand Motto Narrative */}
              <p className="text-sm sm:text-base lg:text-lg text-[#6B6056] leading-relaxed max-w-xl font-normal">
                {settings.heroSubtitle ||
                  "Kahvenin, lezzetin ve iyi hissettiren anların buluşma noktası."}{" "}
                Antik Mısır estetiğinin mistik sıcaklığı, taze kavrulmuş %100 Arabica çekirdekleri ve zamanı yavaşlatan bohem mimari deneyimi.
              </p>

              {/* Laos-Style Minimal Pillars (KAHVE • MİMARİ • KONSEPT • LEZZET) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full py-2 border-y border-[#EAE1D5]">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A5784C] font-bold block">
                    KAHVE
                  </span>
                  <p className="text-xs text-[#5A4F44] font-medium leading-snug">
                    %100 Arabica Nitelikli Kavrum
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A5784C] font-bold block">
                    MİMARİ
                  </span>
                  <p className="text-xs text-[#5A4F44] font-medium leading-snug">
                    Antik Mısır Bohem Avlusu
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A5784C] font-bold block">
                    KONSEPT
                  </span>
                  <p className="text-xs text-[#5A4F44] font-medium leading-snug">
                    3 Farklı Mağaza Ölçeği
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A5784C] font-bold block">
                    LEZZET
                  </span>
                  <p className="text-xs text-[#5A4F44] font-medium leading-snug">
                    Özel Soslar & Fırın Gastronomi
                  </p>
                </div>
              </div>

              {/* Action Buttons (Franchise & Menu Redirection) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full pt-1">
                <Link
                  href="/franchise"
                  className="px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold text-[#FAF7F2] bg-[#20150F] hover:bg-[#38261C] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Franchise Fırsatlarını Keşfet</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/menu"
                  className="px-7 py-4 rounded-full text-xs uppercase tracking-widest font-semibold text-[#20150F] bg-white hover:bg-[#F4EFE6] transition-all border border-[#DECDBB] text-center shadow-2xs"
                >
                  Menüyü İncele
                </Link>

                <Link
                  href="/subelerimiz"
                  className="px-5 py-4 text-xs uppercase tracking-widest font-semibold text-[#73675C] hover:text-[#20150F] transition-colors text-center hidden sm:inline-block"
                >
                  Şubelerimiz →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ATMOSPHERE & VENUE HIGHLIGHT STRIP (REAL PHOTOS)
         ========================================================================= */}
      <section className="py-12 sm:py-16 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
              KAYSERİ ROASTERY & YAŞAM ALANI
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#20150F] mt-1">
              Antik Mısır Dinginliği, Modern Bohem Atmosfer
            </h2>
          </div>
          <Link
            href="/subelerimiz"
            className="text-xs uppercase tracking-widest font-semibold text-[#A5784C] hover:text-[#20150F] transition-colors flex items-center gap-1.5 group shrink-0"
          >
            <span>Tüm Galeriyi İncele (18 Fotoğraf)</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Featured Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <Link
            href="/subelerimiz"
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E6DED4] shadow-sm bg-[#20150F]"
          >
            <Image
              src="/venue/venue-storefront.jpg"
              alt="Renn Coffee Ön Cephe & Giriş"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3.5 sm:p-4">
              <span className="text-[10px] uppercase tracking-wider text-[#C59A6F] font-semibold">Giriş Cephesi</span>
              <p className="text-xs sm:text-sm font-semibold text-white">Altın Hiyeroglif Tabela</p>
            </div>
          </Link>

          <Link
            href="/subelerimiz"
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E6DED4] shadow-sm bg-[#20150F]"
          >
            <Image
              src="/venue/venue-pyramid-sphinx.jpg"
              alt="Gize Piramitleri ve Sfenks Rölyefi"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3.5 sm:p-4">
              <span className="text-[10px] uppercase tracking-wider text-[#C59A6F] font-semibold">Mistik Rölyef</span>
              <p className="text-xs sm:text-sm font-semibold text-white">Gize Piramitleri & Sfenks</p>
            </div>
          </Link>

          <Link
            href="/subelerimiz"
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E6DED4] shadow-sm bg-[#20150F]"
          >
            <Image
              src="/venue/venue-garden-palms.jpg"
              alt="Palmiye Bahçesi ve Açık Alan"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3.5 sm:p-4">
              <span className="text-[10px] uppercase tracking-wider text-[#C59A6F] font-semibold">Açık Hava Avlusu</span>
              <p className="text-xs sm:text-sm font-semibold text-white">Beyaz Çakıllı Palmiyeler</p>
            </div>
          </Link>

          <Link
            href="/subelerimiz"
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E6DED4] shadow-sm bg-[#20150F]"
          >
            <Image
              src="/venue/venue-fireplace.jpg"
              alt="Şömineli Bohem Lounge"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3.5 sm:p-4">
              <span className="text-[10px] uppercase tracking-wider text-[#C59A6F] font-semibold">Bohem Lounge</span>
              <p className="text-xs sm:text-sm font-semibold text-white">Şömineli Dinlenme Köşesi</p>
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          MINIMAL FRANCHISE REDIRECTION SECTION (VURUCU YATIRIMCI DAVETİ)
         ========================================================================= */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-white border border-[#E3D6C8] p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Text Content */}
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
              <Store size={15} />
              <span>BÜYÜYEN HİKÂYEMİZE ORTAK OLUN</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F] leading-tight">
              Renn Coffee&apos;nin Geleceğinde Siz de Yer Alın
            </h2>

            <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
              Türkiye genelinde kahveseverleri bir araya getiren özgün antik Mısır mimarimiz ve yüksek standartlı operasyon disiplinimizle hızla büyüyoruz. Yatırım lokasyonunuza uygun 3 farklı konseptle işletme ortaklığı sunuyoruz:
            </p>

            {/* 3 Concepts Summary Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF7F2] border border-[#DECDBB] text-[#20150F]">
                1. Renn Start (Standart Dükkan • 150 – 250 m²)
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF7F2] border border-[#DECDBB] text-[#20150F]">
                2. Renn Coffee (Büyük Dükkan & Teras • 250 – 350 m²)
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF7F2] border border-[#DECDBB] text-[#20150F]">
                3. Renn Flagship (Müstakil Ticari Villa • 250 m² +)
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
            <Link
              href="/franchise"
              className="px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>Franchise Başvurusu Yap</span>
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/iletisim"
              className="px-6 py-4 rounded-full text-xs uppercase tracking-widest font-semibold text-[#20150F] hover:text-[#C59A6F] transition-colors border border-[#DECDBB] sm:border-transparent text-center bg-white sm:bg-transparent"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
