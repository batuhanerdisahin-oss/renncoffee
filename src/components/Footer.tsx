import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#20150F] text-[#FAF7F2] pt-20 pb-12 border-t border-[#33231A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#33231A]">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#FAF7F2]/10 p-1">
                <Image
                  src="/brand/logo-light.png"
                  alt="Renn Coffee Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-bold tracking-widest text-[#FAF7F2] uppercase">
                  RENN COFFEE
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C59A6F]">
                  ARTISANAL COFFEE & ROASTERY
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#BFAFA0] max-w-sm">
              Antik Mısır estetiği ile harmanlanmış nitelikli kahve çekirdekleri,
              el yapımı seramik fincanlar ve zamanı yavaşlatan bohem bir sığınak.
              Kayseri Kocasinan&apos;daki amiral mağazamızda benzersiz bir gastronomi
              deneyimi sunuyoruz.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/renncoffeetr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2C1E16] hover:bg-[#C59A6F] text-[#FAF7F2] flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://view.qrall.co/tr?tenantId=3a172511-a4b7-359a-aa0f-ee84a95195a3&channelId=3a172511-db22-4ca5-a9ad-02d2a77391b7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C1E16] hover:bg-[#38261C] text-xs text-[#C59A6F] border border-[#443024] transition-colors"
              >
                <span>Adisyo QR Menü</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C59A6F]">
              Keşfet
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#BFAFA0]">
              <li>
                <Link href="/" className="hover:text-[#FAF7F2] transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#FAF7F2] transition-colors">
                  Dijital Menü (130+ Ürün)
                </Link>
              </li>
              <li>
                <Link href="/subelerimiz" className="hover:text-[#FAF7F2] transition-colors">
                  Şubelerimiz & Konum
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-[#FAF7F2] transition-colors">
                  Franchise Yatırımı
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-[#FAF7F2] transition-colors">
                  İletişim & Rezervasyon
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C59A6F]">
              Öne Çıkanlar
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#BFAFA0]">
              <li>
                <Link href="/menu?cat=SICAK+KAHVELER" className="hover:text-[#FAF7F2] transition-colors">
                  Sıcak Kahveler & Latte
                </Link>
              </li>
              <li>
                <Link href="/menu?cat=SPECIAL+ÇAYLAR" className="hover:text-[#FAF7F2] transition-colors">
                  Special Mısır Çayları
                </Link>
              </li>
              <li>
                <Link href="/menu?cat=TATLILAR" className="hover:text-[#FAF7F2] transition-colors">
                  San Sebastian & Browni
                </Link>
              </li>
              <li>
                <Link href="/menu?cat=SANDVİÇLER" className="hover:text-[#FAF7F2] transition-colors">
                  Panini & Bagel Sandviç
                </Link>
              </li>
              <li>
                <Link href="/menu?cat=SALEWALL" className="hover:text-[#FAF7F2] transition-colors">
                  Özel Seramik Fincanlar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C59A6F]">
              Şube Bilgisi
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#BFAFA0]">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#C59A6F] shrink-0 mt-0.5" />
                <span>
                  Erciyesevler Mah. Şehit Yzb. Levent Çetinkaya Sok. No: 6/B,
                  Kocasinan / Kayseri
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-[#C59A6F] shrink-0" />
                <span>Her Gün: 12:00 – 00:00</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#C59A6F] shrink-0" />
                <a href="tel:+905445823838" className="hover:text-[#FAF7F2]">
                  +90 544 582 38 38
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#C59A6F] shrink-0" />
                <a href="mailto:info@renncoffee.com.tr" className="hover:text-[#FAF7F2]">
                  info@renncoffee.com.tr
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A796C]">
          <p>© {new Date().getFullYear()} Renn Coffee. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <span>KVKK Aydınlatma Metni</span>
            <span>Gizlilik Politikası</span>
            <Link href="/admin" className="hover:text-[#FAF7F2] transition-colors">
              Yönetim Paneli
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
