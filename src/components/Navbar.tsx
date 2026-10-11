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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/logo-dark.png"
                alt="Renn Coffee Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-widest text-[#20150F] uppercase">
                RENN COFFEE
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C59A6F] font-medium -mt-1">
                KAYSERİ • ROASTERY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 relative py-1 ${
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
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Live QR Menu Link */}
            <a
              href="https://view.qrall.co/tr?tenantId=3a172511-a4b7-359a-aa0f-ee84a95195a3&channelId=3a172511-db22-4ca5-a9ad-02d2a77391b7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#20150F] bg-[#EFE6DC] hover:bg-[#E3D6C8] transition-colors border border-[#DECDBB]"
              title="Adisyo / QrAll Canlı Masada Sipariş Menüsü"
            >
              <QrCode size={14} className="text-[#C59A6F]" />
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
              className="px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold text-[#FAF7F2] bg-[#20150F] hover:bg-[#33231A] transition-all shadow-sm hover:shadow"
            >
              Franchise
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/admin"
              className="p-2 text-[#73675C]"
              title="Yönetici Girişi"
            >
              <Lock size={18} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#20150F] focus:outline-none"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF7F2] pt-24 pb-8 px-6 flex flex-col justify-between md:hidden animate-fade-in">
          <div className="flex flex-col gap-6">
            <div className="pb-4 border-b border-[#E6DED4]">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C59A6F] font-semibold">
                Navigasyon
              </span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-2xl font-serif-luxury font-medium text-[#20150F] hover:text-[#C59A6F] transition-colors py-1"
              >
                <span>{link.label}</span>
                <ChevronRight size={20} className="text-[#C59A6F]" />
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://view.qrall.co/tr?tenantId=3a172511-a4b7-359a-aa0f-ee84a95195a3&channelId=3a172511-db22-4ca5-a9ad-02d2a77391b7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#EFE6DC] text-sm font-semibold text-[#20150F] border border-[#DECDBB]"
              >
                <QrCode size={18} className="text-[#C59A6F]" />
                <span>Canlı QR Menüyü Görüntüle</span>
              </a>

              <Link
                href="/franchise"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center py-3 rounded-xl bg-[#20150F] text-sm uppercase tracking-widest font-semibold text-[#FAF7F2]"
              >
                Franchise Başvurusu
              </Link>
            </div>
          </div>

          {/* Mobile Bottom Info */}
          <div className="pt-6 border-t border-[#E6DED4] flex flex-col gap-3 text-xs text-[#73675C]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#C59A6F]" />
              <span>Erciyesevler Mah. Kocasinan / Kayseri</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <a
                href="https://www.instagram.com/renncoffeetr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#20150F] font-medium"
              >
                <InstagramIcon size={14} className="text-[#C59A6F]" />
                <span>@renncoffeetr</span>
              </a>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#73675C] hover:text-[#20150F]"
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
