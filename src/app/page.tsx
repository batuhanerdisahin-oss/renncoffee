"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreePharaohBust from "@/components/ThreePharaohBust";
import { getSiteSettings } from "@/lib/store";
import { SiteSettings, INITIAL_SETTINGS } from "@/data/initialData";
import {
  ArrowRight,
  Coffee,
  Sparkles,
  MapPin,
  ChevronRight,
  Flame,
  Sun,
  ShieldCheck,
  ExternalLink,
  UtensilsCrossed,
  Snowflake,
  Store,
  Home
} from "lucide-react";

export default function HomePage() {
  const [settings, setSettings] = useState<SiteSettings>(INITIAL_SETTINGS);

  useEffect(() => {
    getSiteSettings().then(setSettings);
  }, []);

  // Curated Signature Highlights with Verified Scraped Product Photos (NO PRICES)
  const signatureItems = [
    {
      name: "KLEOPATRA ÇAYI",
      tag: "Antik Mısır Ritüeli",
      badge: "Mistik Reçete",
      desc: "Mısır Ptolemaios Krallığı geleneğinden esinlenildi; kurutulmuş meyve ve çiçek yaprakları, taze narenciye ve bal notalarıyla.",
      image: "/products/prod_26bd29aa93f0.jpg",
      category: "Special Çaylar",
    },
    {
      name: "NEFERTUM",
      tag: "Güneşin İlk Işıkları",
      badge: "İmza Çay",
      desc: "Antik Mısır parfüm ve koku tanrısı Nefertum'a atfedilen, 8-10 dakika özenle demlenen kızılcık ve lotus çiçeği harmanı.",
      image: "/products/prod_5e957b95b349.jpg",
      category: "Special Çaylar",
    },
    {
      name: "LOTUS LATTE",
      tag: "Kadifemsi Doku",
      badge: "İmza Kahve",
      desc: "Renn'in zengin espressosu ile Belçika lotus bisküvisinin karamelize dokusunun buharla ısıtılmış sütle eşsiz buluşması.",
      image: "/products/prod_bcc8afb6518c.jpg",
      category: "Sıcak Kahveler",
    },
    {
      name: "SAN SEBASTİAN BASK CHEESECAKE",
      tag: "Usta Fırıncılık",
      badge: "Özel Tatlı",
      desc: "Dışı karamelize, içi eriyen akışkan kıvamıyla meşhur San Sebastian. Callebaut Belçika çikolatası sosu eşliğinde servis edilir.",
      image: "/products/prod_bc55d761e8cf.jpg",
      category: "Tatlılar",
    },
  ];

  // Signature Sandwiches & Sauces with Verified Scraped Product Photos
  const sandwichHighlights = [
    {
      name: "PANİNİ DANA JAMBON",
      sauce: "Özel Köz Kapya Sosu & Eritme Cheddar",
      desc: "Özel marinasyonlu dana jambon, fırınlanmış köz kapya biber, kaşar ve cheddar peynirinin çıtır taş fırın paninisinde sıcak eritilmiş lezzeti.",
      image: "/products/prod_bc174a554618.jpg",
      badge: "İmza Panini",
    },
    {
      name: "PANİNİ TAVUK FİLETO",
      sauce: "Özel Renn Baharatlı Dip Sos & Çift Peynir",
      desc: "Marine tavuk fileto göğüs dilimleri, rende kaşar ve cheddar peynirinin çıtır panini ekmeğinde eriyen doyurucu gastronomi uyumu.",
      image: "/products/prod_2f6e399875f3.jpg",
      badge: "Özel Soslu",
    },
    {
      name: "ÜÇ PEYNİRLİ ÖZEL BAGEL",
      sauce: "Taze Otlu Labne Kreması",
      desc: "Kavrulmuş susamlı taze bagel arasında kremamsı labne, olgun kaşar ve yoğun lezzetli cheddar harmanı.",
      image: "/products/prod_982870d2341e.jpg",
      badge: "Fırından Yeni",
    },
  ];

  // Seasonal Summer & Winter Specials with Verified Scraped Product Photos
  const seasonalSpecials = [
    {
      name: "AURA RENN",
      season: "Yaz Spesiyali",
      type: "Buzlu Ferahlık",
      desc: "Tropikal meyve püreleri, taze narenciye ve kristal buz harmanıyla yaz günlerine özel imza frozen.",
      image: "/products/prod_1dc622369b30.jpg",
      badge: "Yaz Favorisi",
      icon: <Sun size={15} className="text-amber-500" />,
    },
    {
      name: "ROSETTA FROZEN",
      season: "Yaz Spesiyali",
      type: "Kırmızı Meyve Buz Ritüeli",
      desc: "Kırmızı orman meyveleri ve gizli Renn şurubuyla hazırlanan ferahlatıcı buzlu içecek.",
      image: "/products/prod_115c0a1468cd.jpg",
      badge: "Buzlu İçecek",
      icon: <Sun size={15} className="text-amber-500" />,
    },
    {
      name: "COCO CHOCO",
      season: "Kış Spesiyali",
      type: "Sıcak Çikolata & Doku",
      desc: "İsveç çikolatası, organik hindistan cevizi sütü ve buharla kadifeleştirilmiş yoğun kış lezzeti.",
      image: "/products/prod_9e6ceb57a241.jpg",
      badge: "Kış Klasiği",
      icon: <Snowflake size={15} className="text-blue-500" />,
    },
    {
      name: "GELENEKSEL SAHLEP",
      season: "Kış Spesiyali",
      type: "Doğal Dağ Sahlepi",
      desc: "Hakiki dağ sahlepi köklerinden geleneksel usulle hazırlanan, bol tarçın serpilmiş içinizi ısıtan kış iksiri.",
      image: "/products/prod_9ea67e042eea.jpg",
      badge: "Sıcak & Yoğun",
      icon: <Snowflake size={15} className="text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#20150F] selection:bg-[#20150F] selection:text-[#FAF7F2]">
      <Navbar />

      {/* =========================================================================
          HERO SECTION WITH 3D EGYPTIAN PHARAOH BUST ARTIFACT ON THE LEFT
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden border-b border-[#E6DED4]">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(244,235,220,0.85)_0%,rgba(250,247,242,1)_100%)] pointer-events-none -z-10" />

        {/* 3D Rotating Egyptian Golden Pharaoh Bust on the Left */}
        <div className="absolute left-[-15px] sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] h-[340px] sm:h-[450px] md:h-[520px] lg:h-[580px] pointer-events-none z-10 opacity-95">
          <ThreePharaohBust />
          <div className="absolute -bottom-3 left-6 text-[10px] uppercase tracking-[0.3em] text-[#C59A6F]/80 font-semibold flex items-center gap-2">
            <span>✦ ANTİK MISIR MİSTİSİZMİ & %100 ARABICA KAVRUM</span>
          </div>
        </div>

        {/* Hero Content on Right / Center */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20">
          {/* Spacer for 3D Pharaoh on Left */}
          <div className="lg:col-span-5 h-[220px] sm:h-[260px] lg:h-auto" />

          {/* Text and Actions on Right */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 pl-0 lg:pl-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE6DC] border border-[#DECDBB] text-xs uppercase tracking-[0.25em] text-[#A5784C] font-semibold">
              <Sparkles size={13} className="text-[#C59A6F]" />
              <span>KAYSERİ • ROASTERY & LIFESTYLE</span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#20150F] leading-[1.08]">
              {settings.brandName || "RENN COFFEE"}
            </h1>

            <div className="space-y-3">
              <p className="font-serif-luxury text-2xl sm:text-3xl text-[#20150F] italic">
                &ldquo;{settings.heroTitle}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed max-w-xl font-normal">
                {settings.heroSubtitle}
              </p>
            </div>

            {/* Hieroglyphic & Egyptian Heritage Touch */}
            <div className="flex items-center gap-4 py-2 border-y border-[#EAE1D5] w-full max-w-lg">
              <div className="flex items-center gap-2 text-xs font-medium text-[#20150F]">
                <Sun size={15} className="text-[#C59A6F]" />
                <span>Nil İlhamlı Bitki Çayları</span>
              </div>
              <span className="text-[#DECDBB]">•</span>
              <div className="flex items-center gap-2 text-xs font-medium text-[#20150F]">
                <Flame size={15} className="text-[#C59A6F]" />
                <span>%100 Arabica Kavrum</span>
              </div>
              <span className="text-[#DECDBB]">•</span>
              <div className="flex items-center gap-2 text-xs font-medium text-[#20150F]">
                <UtensilsCrossed size={15} className="text-[#C59A6F]" />
                <span>Özel Soslu Panini</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/menu"
                className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold text-[#FAF7F2] bg-[#20150F] hover:bg-[#38261C] transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span>Özel İçecekleri & Menüyü Keşfet</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/subelerimiz"
                className="px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold text-[#20150F] bg-white hover:bg-[#F4EFE6] transition-all border border-[#DECDBB]"
              >
                Şubemizi Gör
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: SIGNATURE CRAFT & ANCIENT EGYPTIAN TEA RITUALS (NO PRICES)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold flex items-center gap-2">
              <Coffee size={15} />
              <span>ÖZEL İÇECEKLER & İMZA REÇETELER</span>
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
              Fincandaki Mistik Ritüel
            </h2>
            <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
              Standart kahvelerin ötesinde; Antik Mısır hanedanlarından miras kalan aromatik çaylar,
              özel Belçika çikolatası harmanları ve taze demlenen gurme reçeteler.
            </p>
          </div>

          <Link
            href="/menu?cat=SPECIAL+ÇAYLAR"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#20150F] hover:text-[#C59A6F] transition-colors pb-1 border-b border-[#20150F] hover:border-[#C59A6F]"
          >
            <span>Tüm Özel İçecekleri İncele</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* 4 Signature Highlight Cards (NO PRICES) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {signatureItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E3D6C8] hover:border-[#C59A6F] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover img-zoom"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#20150F]/85 text-[#FAF7F2] backdrop-blur-md">
                  {item.badge}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A5784C] font-semibold">
                    {item.tag}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#20150F] group-hover:text-[#C59A6F] transition-colors mt-0.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#73675C] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0E6D8] flex items-center justify-between text-xs">
                  <span className="text-[#C59A6F] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Katalog Detayı →
                  </span>
                  <span className="text-[10px] text-[#A5998D] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SIGNATURE PANINI SANDWICHES & HOMEMADE SAUCES (NO PRICES)
         ========================================================================= */}
      <section className="py-24 bg-[#F4EFE6] border-y border-[#E6DED4]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold flex items-center gap-2">
                <UtensilsCrossed size={15} />
                <span>FIRINDAN TAZE • GURME LEZZETLER</span>
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
                Özel Sandviçler & İmza Soslar
              </h2>
              <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
                Renn mutfağında hazırlanan ev yapımı köz kapya sosları, eriyen çift peynirler
                ve taş tabanlı fırında sıcacık servis edilen çıtır paniniler.
              </p>
            </div>

            <Link
              href="/menu?cat=SANDVİÇLER"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all shadow-sm"
            >
              <span>Tüm Sandviçleri İncele</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sandwichHighlights.map((sand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#E3D6C8] hover:border-[#C59A6F] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#FAF7F2]">
                  <Image
                    src={sand.image}
                    alt={sand.name}
                    fill
                    className="object-cover img-zoom"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C59A6F] text-[#20150F]">
                    {sand.badge}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#20150F]">
                      {sand.name}
                    </h3>
                    <div className="mt-1.5 inline-block px-2.5 py-1 rounded-md bg-[#FAF7F2] text-[11px] font-semibold text-[#8C6239] border border-[#EAE1D5]">
                      {sand.sauce}
                    </div>
                    <p className="text-xs text-[#73675C] mt-3 leading-relaxed">
                      {sand.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0E6D8] flex items-center justify-between text-xs text-[#73675C]">
                    <span>Sıcak Fırın Servisi</span>
                    <span className="font-semibold text-[#20150F]">Taş Tabanlı Ekmek</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SEASONAL SPECIALS (ÖZEL YAZ & KIŞ İÇECEKLERİ)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold flex items-center gap-2">
              <Sparkles size={15} />
              <span>MEVSİMLİK REÇETELER</span>
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
              Özel Yaz & Kış İçecekleri
            </h2>
            <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
              Yazın ferahlatıcı tropik meyveli buz harmanları; kışın içinizi ısıtan
              hakiki sahlep ve İsveç çikolatalı sıcak lezzetler.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/menu?cat=YAZA+ÖZEL"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#DECDBB] text-[#20150F] hover:bg-[#FAF7F2]"
            >
              Yaza Özel
            </Link>
            <Link
              href="/menu?cat=SICAK+İÇECEKLER"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#DECDBB] text-[#20150F] hover:bg-[#FAF7F2]"
            >
              Kışa Özel
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasonalSpecials.map((spec, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E3D6C8] hover:border-[#C59A6F] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={spec.image}
                  alt={spec.name}
                  fill
                  className="object-cover img-zoom"
                />
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#20150F] backdrop-blur-md shadow-xs">
                  {spec.icon}
                  <span>{spec.season}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A5784C] font-semibold">
                    {spec.type}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#20150F] group-hover:text-[#C59A6F] transition-colors mt-0.5">
                    {spec.name}
                  </h3>
                  <p className="text-xs text-[#73675C] mt-2 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0E6D8] flex items-center justify-between text-xs">
                  <span className="text-[#C59A6F] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Menüde Keşfet →
                  </span>
                  <span className="text-[10px] text-[#8A796C]">Mevsimlik</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: REAL VENUE SHOWCASE (ANTİK MISIR KABARTMALARI & BOHEM ATMOSFER)
         ========================================================================= */}
      <section className="py-24 bg-[#20150F] text-[#FAF7F2] relative overflow-hidden border-t border-[#38261C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C59A6F] font-semibold flex items-center gap-2">
              <Sparkles size={14} />
              <span>MEKÂN & ATMOSFER</span>
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold leading-tight">
              {settings.editorialTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#BFAFA0] leading-relaxed">
              {settings.editorialSubtitle}
            </p>
            <p className="text-xs sm:text-sm text-[#8C7B6D] leading-relaxed">
              Kayseri Kocasinan&apos;da yer alan amiral mağazamız; duvar kabartmaları,
              el yapımı seramik fincanları ve loş ahşap aydınlatmasıyla şehirden kopup
              zamanı yavaşlatabileceğiniz eşsiz bir sığınaktır.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/subelerimiz"
                className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#C59A6F] hover:bg-[#D4A373] text-[#20150F] transition-all shadow-md flex items-center gap-2"
              >
                <MapPin size={15} />
                <span>Şubemizi Keşfedin</span>
              </Link>
              <a
                href="https://maps.google.com/?q=Renn+Coffee+Kayseri"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Yol Tarifi Al</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl group border border-[#443024]">
              <Image
                src="/venue/wall.jpg"
                alt="Renn Coffee Rölyef Duvar"
                fill
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20150F]/85 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C59A6F] font-semibold">
                    Antik Rölyef Duvarı
                  </span>
                  <h4 className="font-serif-luxury text-xl font-bold text-white">
                    Mistik Mısır Mimarisi
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl sm:translate-y-8 group border border-[#443024]">
              <Image
                src="/venue/cup.jpg"
                alt="Renn Coffee Özel Fincan"
                fill
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20150F]/85 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C59A6F] font-semibold">
                    Sunum Sanatı
                  </span>
                  <h4 className="font-serif-luxury text-xl font-bold text-white">
                    El Yapımı Seramikler
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FRANCHISE INVITATION WITH 3 CONCEPTS SUMMARY
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-[#E3D6C8] p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C59A6F] font-semibold">
              3 FARKLI MAĞAZA KONSEPTİ İLE BİRLİKTE BÜYÜYELİM
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F] leading-tight">
              Renn Coffee&apos;nin Geleceğinde Siz de Yer Alın
            </h2>
            <p className="text-sm text-[#6B6056] leading-relaxed">
              <strong>Renn Express</strong> (Standart Dükkan), <strong>Renn Lounge</strong> (Büyük Dükkan & Kış Bahçesi) ve <strong>Renn Manor</strong> (Müstakil Ticari Villa) modelleriyle Türkiye&apos;nin seçkin lokasyonlarında yeni buluşma noktaları açıyoruz.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/franchise"
              className="px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>3 Konsepti & Başvuru Formunu Gör</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/iletisim"
              className="px-6 py-4 rounded-full text-xs uppercase tracking-widest font-semibold text-[#20150F] hover:text-[#C59A6F] transition-colors"
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
