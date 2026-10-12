"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, QrCode, Lock, ChevronRight, MapPin } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Menü", href: "/menu" },
    { label: "Şubelerimiz", href: "/subelerimiz" },
    { label: "Franchise", href: "/franchise" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3 shadow-xs bg-[#FAF7F2]/90 backdrop-blur-md"
            : "bg-[#FAF7F2]/60 backdrop-blur-xs py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3.5 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shrink-0">
              <Image
                src="/brand/logo-dark.png"
                alt="Renn Coffee Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg sm:text-2xl font-bold tracking-widest text-[#20150F] uppercase leading-tight">
                RENN COFFEE
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
                KAYSERİ • ROASTERY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs lg:text-sm tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-[#20150F] font-semibold"
                      : "text-[#73675C] hover:text-[#20150F]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C59A6F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live QR Menu Link */}
            <a
              href="https://view.qrall.co/tr?tenantId=3a172511-a4b7-359a-aa0f-ee84a95195a3&channelId=3a172511-db22-4ca5-a9ad-02d2a77391b7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#20150F] bg-[#EFE6DC] hover:bg-[#E3D6C8] transition-colors border border-[#DECDBB]"
              title="Adisyo / QrAll Canlı Masada Sipariş Menüsü"
            >
              <QrCode size={13} className="text-[#C59A6F]" />
              <span>QR Menü</span>
            </a>

            {/* Admin Panel shortcut */}
            <Link
              href="/admin"
              className="p-2 rounded-full text-[#73675C] hover:text-[#20150F] hover:bg-[#EFE6DC]/50 transition-colors"
              title="Yönetim Paneli"
            >
              <Lock size={15} />
            </Link>

            {/* Franchise CTA */}
            <Link
              href="/franchise"
              className="px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold text-[#FAF7F2] bg-[#20150F] hover:bg-[#33231A] transition-all shadow-xs hover:shadow"
            >
              Franchise
            </Link>
          </div>

          {/* Mobile Hamburger & Actions */}
          <div className="flex md:hidden items-center gap-1">
            <Link
              href="/franchise"
              className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#20150F] text-[#FAF7F2] mr-1"
            >
              Franchise
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#20150F] hover:bg-[#EAE1D5]/60 transition-colors focus:outline-none"
              aria-label="Menüyü Aç / Kapat"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Full Height, Smooth, Safe Padding) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF7F2] flex flex-col justify-between md:hidden overflow-y-auto animate-fade-in">
          {/* Mobile Drawer Top Bar */}
          <div className="px-5 py-4 flex items-center justify-between border-b border-[#E6DED4] sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md z-10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/brand/logo-dark.png"
                  alt="Renn Coffee Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif-luxury text-lg font-bold tracking-widest text-[#20150F] uppercase">
                RENN COFFEE
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-[#20150F] hover:bg-[#EAE1D5] transition-colors"
              aria-label="Kapat"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 px-6 py-6 flex flex-col justify-start gap-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C59A6F] font-bold">
              Menü & Navigasyon
            </span>

            <div className="flex flex-col divide-y divide-[#EAE1D5]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3.5 text-xl font-serif-luxury font-medium transition-colors ${
                      isActive
                        ? "text-[#C59A6F] font-bold pl-2 border-l-2 border-[#C59A6F]"
                        : "text-[#20150F] hover:text-[#C59A6F]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={18} className="text-[#C59A6F]" />
                  </Link>
                );
              })}
            </div>

            {/* Quick Action CTA in Drawer */}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/franchise"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center py-3.5 rounded-2xl bg-[#20150F] text-xs uppercase tracking-widest font-semibold text-[#FAF7F2] shadow-sm active:scale-[0.98] transition-transform"
              >
                Franchise Başvurusu
              </Link>

              <a
                href="https://view.qrall.co/tr?tenantId=3a172511-a4b7-359a-aa0f-ee84a95195a3&channelId=3a172511-db22-4ca5-a9ad-02d2a77391b7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-[#DECDBB] text-xs font-semibold text-[#20150F] active:scale-[0.98] transition-transform"
              >
                <QrCode size={16} className="text-[#C59A6F]" />
                <span>Masada Sipariş QR Menü</span>
              </a>
            </div>
          </div>

          {/* Drawer Bottom Info */}
          <div className="p-6 bg-[#F4EFE6] border-t border-[#E6DED4] flex flex-col gap-3 text-xs text-[#73675C]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#C59A6F] shrink-0" />
              <span>Kocasinan / Kayseri</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <a
                href="https://www.instagram.com/renncoffeetr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#20150F] font-semibold"
              >
                <InstagramIcon size={14} className="text-[#C59A6F]" />
                <span>@renncoffeetr</span>
              </a>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#73675C] hover:text-[#20150F] font-medium"
              >
                Yönetim Girişi
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
