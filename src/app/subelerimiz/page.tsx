"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBranches } from "@/lib/store";
import { Branch, INITIAL_BRANCHES } from "@/data/initialData";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Wifi,
  Sparkles,
  Share2,
  Navigation,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function SubelerimizPage() {
  const [branches, setBranches] = useState<Branch[]>(INITIAL_BRANCHES);
  const [selectedBranch, setSelectedBranch] = useState<Branch>(INITIAL_BRANCHES[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    getBranches().then((list) => {
      if (list && list.length > 0) {
        setBranches(list);
        setSelectedBranch(list[0]);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#20150F]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-16 px-6 sm:px-8 border-b border-[#E6DED4] bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C59A6F] font-semibold flex items-center gap-2">
            <MapPin size={15} />
            <span>BULUŞMA NOKTALARIMIZ</span>
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#20150F]">
            Renn Coffee Şubeleri
          </h1>
          <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed max-w-2xl">
            Kahveye saygı duyan bir atmosfer, sıcak ahşap detaylar ve antik Mısır&apos;ın mistik
            dokusuyla Kayseri&apos;de sizi bekliyoruz. Şubemizi keşfedin, yol tarifi alın veya arayın.
          </p>
        </div>
      </section>

      {/* Main Branch Showcase */}
      <section className="py-16 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Gallery & Cover Image */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-lg border border-[#E3D6C8] bg-[#20150F] group">
              <Image
                src={selectedBranch.gallery[activeImageIndex] || selectedBranch.image}
                alt={selectedBranch.name}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#20150F]/80 text-[#FAF7F2] backdrop-blur-md">
                {selectedBranch.district} / {selectedBranch.city}
              </div>

              {/* Counter */}
              {selectedBranch.gallery.length > 1 && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-[#20150F]/80 text-[#FAF7F2] backdrop-blur-md">
                  {activeImageIndex + 1} / {selectedBranch.gallery.length}
                </div>
              )}

              {/* Navigation Arrows */}
              {selectedBranch.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : selectedBranch.gallery.length - 1))}
                    aria-label="Önceki Fotoğraf"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C59A6F] text-white flex items-center justify-center backdrop-blur-md opacity-80 group-hover:opacity-100 transition-all cursor-pointer shadow-lg"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev < selectedBranch.gallery.length - 1 ? prev + 1 : 0))}
                    aria-label="Sonraki Fotoğraf"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C59A6F] text-white flex items-center justify-center backdrop-blur-md opacity-80 group-hover:opacity-100 transition-all cursor-pointer shadow-lg"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {selectedBranch.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {selectedBranch.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? "border-[#C59A6F] scale-105" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Galeri ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Branch Features Pills */}
            <div className="mt-4 p-6 rounded-3xl bg-white border border-[#E3D6C8] shadow-xs">
              <h3 className="text-xs uppercase tracking-widest text-[#A5784C] font-semibold mb-4">
                Şube Özellikleri & İmkanları
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#20150F]">
                {selectedBranch.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#C59A6F] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Branch Info & Map Directions */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C59A6F] font-semibold">
                  {selectedBranch.tagline}
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#20150F] mt-1">
                  {selectedBranch.name}
                </h2>
              </div>

              <p className="text-sm text-[#6B6056] leading-relaxed">
                {selectedBranch.description}
              </p>

              <div className="space-y-4 pt-2 border-t border-[#EAE1D5]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#EFE6DC] flex items-center justify-center shrink-0 text-[#20150F] mt-0.5">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#73675C]">Adres</p>
                    <p className="text-sm text-[#20150F] font-medium mt-0.5 leading-snug">
                      {selectedBranch.address}, {selectedBranch.district} / {selectedBranch.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#EFE6DC] flex items-center justify-center shrink-0 text-[#20150F] mt-0.5">
                    <Clock size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#73675C]">Çalışma Saatleri</p>
                    <p className="text-sm text-[#20150F] font-medium mt-0.5">
                      {selectedBranch.workingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#EFE6DC] flex items-center justify-center shrink-0 text-[#20150F] mt-0.5">
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#73675C]">Telefon</p>
                    <a
                      href={`tel:${selectedBranch.phone}`}
                      className="text-sm text-[#20150F] font-medium mt-0.5 hover:text-[#C59A6F] block"
                    >
                      {selectedBranch.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-[#EAE1D5]">
              <a
                href={selectedBranch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation size={15} />
                <span>Google Haritalarda Yol Tarifi Al</span>
              </a>

              <a
                href={`tel:${selectedBranch.phone}`}
                className="w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-white text-[#20150F] hover:bg-[#F4EFE6] border border-[#DECDBB] transition-all flex items-center justify-center gap-2"
              >
                <Phone size={15} />
                <span>Şubeyi Ara: {selectedBranch.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Google Map Embed */}
        <div className="mt-16 rounded-3xl overflow-hidden border border-[#E3D6C8] shadow-md h-[400px] bg-[#EAE1D5] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1!2d35.5134!3d38.7302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b123456789%3A0xabcdef!2sRenn+Coffee+Kayseri!5e0!3m2!1str!2str!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Renn Coffee Şube Konumu"
          />
        </div>
      </section>

      {/* Prospective Locations Banner */}
      <section className="py-20 bg-[#20150F] text-[#FAF7F2] px-6 sm:px-8 text-center border-t border-[#38261C]">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C59A6F] font-semibold">
            GELECEK PLANLARIMIZ
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold">
            Yeni Şehirlerde Çok Yakında
          </h2>
          <p className="text-sm sm:text-base text-[#BFAFA0] leading-relaxed">
            İstanbul, Ankara, İzmir ve Antalya başta olmak üzere yeni buluşma noktaları için
            fizibilite çalışmalarımız devam ediyor. Şehrinizde bir Renn Coffee açmak ister misiniz?
          </p>
          <div className="pt-4">
            <a
              href="/franchise"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#C59A6F] text-[#20150F] hover:bg-[#D4A373] transition-colors"
            >
              <span>Franchise Başvurusu Yapın</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
