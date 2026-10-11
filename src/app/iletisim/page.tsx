"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitContactMessage } from "@/lib/store";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import Link from "next/link";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Genel Danışma & Geri Bildirim",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await submitContactMessage({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      if (res.success) {
        setSubmitted(true);
      }
    } catch (err: any) {
      setErrorMsg("Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#20150F]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-16 px-6 sm:px-8 border-b border-[#E6DED4] bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C59A6F] font-semibold flex items-center gap-2">
            <Mail size={15} />
            <span>BİZE ULAŞIN</span>
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#20150F]">
            İletişim & Konum
          </h1>
          <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed max-w-2xl">
            Sorularınız, iş birliği teklifleriniz veya özel etkinlik talepleriniz için bize yazabilir,
            doğrudan arayabilir veya Kayseri&apos;deki mağazamıza kahve içmeye gelebilirsiniz.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="font-serif-luxury text-3xl font-bold text-[#20150F]">
                Renn Coffee Genel İletişim
              </h2>
              <p className="text-sm text-[#73675C] leading-relaxed">
                Misafir memnuniyeti ve operasyon ekibimiz mesajlarınıza en geç 24 saat içinde dönüş yapar.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-[#E3D6C8] flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#A5784C] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#73675C]">
                    Amiral Mağaza & Roastery
                  </h3>
                  <p className="text-sm font-medium text-[#20150F] mt-1 leading-snug">
                    Erciyesevler Mah. Şehit Yzb. Levent Çetinkaya Sok. No: 6/B, Kocasinan / Kayseri
                  </p>
                  <a
                    href="https://maps.google.com/?q=Renn+Coffee+Kayseri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#C59A6F] hover:underline font-semibold mt-2"
                  >
                    <span>Haritada Aç</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E3D6C8] flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#A5784C] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#73675C]">
                    Hizmet Saatleri
                  </h3>
                  <p className="text-sm font-medium text-[#20150F] mt-1">
                    Pazartesi – Pazar: 12:00 – 00:00
                  </p>
                  <p className="text-xs text-[#73675C] mt-0.5">Haftanın her günü kesintisiz servis</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E3D6C8] flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#A5784C] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#73675C]">
                    Telefon & WhatsApp
                  </h3>
                  <a
                    href="tel:+905445823838"
                    className="text-sm font-medium text-[#20150F] mt-1 block hover:text-[#C59A6F]"
                  >
                    +90 544 582 38 38
                  </a>
                  <p className="text-xs text-[#73675C] mt-0.5">Doğrudan arayarak masa ve bilgi sorabilirsiniz</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E3D6C8] flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#A5784C] flex items-center justify-center shrink-0 mt-0.5">
                  <InstagramIcon size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#73675C]">
                    Sosyal Medya
                  </h3>
                  <a
                    href="https://www.instagram.com/renncoffeetr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#20150F] mt-1 block hover:text-[#C59A6F]"
                  >
                    @renncoffeetr
                  </a>
                  <p className="text-xs text-[#73675C] mt-0.5">Etkinlikler ve yeni lezzet duyuruları</p>
                </div>
              </div>
            </div>

            {/* Franchise link banner */}
            <div className="p-6 rounded-2xl bg-[#20150F] text-[#FAF7F2] space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#C59A6F] font-semibold">
                YATIRIMCILAR İÇİN
              </span>
              <h4 className="font-serif-luxury text-xl font-bold">
                Franchise Başvurusu mu Yapmak İstiyorsunuz?
              </h4>
              <p className="text-xs text-[#BFAFA0] leading-relaxed">
                Yatırım ve şube açma süreçleri için özel hazırlanmış formumuzu doldurabilirsiniz.
              </p>
              <Link
                href="/franchise"
                className="inline-flex items-center gap-1.5 text-xs text-[#C59A6F] hover:underline font-semibold pt-1"
              >
                <span>Franchise Sayfasına Git</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3D6C8] shadow-lg">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#20150F] mb-2">
                Mesajınızı İletin
              </h2>
              <p className="text-xs sm:text-sm text-[#73675C] mb-8">
                Görüşleriniz, önerileriniz ve talepleriniz bizim için çok değerlidir.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EBF6EE] text-[#2E7D32] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#20150F]">
                    Mesajınız Başarıyla İletildi!
                  </h3>
                  <p className="text-sm text-[#5A4F44] max-w-sm mx-auto">
                    En kısa sürede e-posta veya telefon yoluyla sizinle irtibata geçeceğiz.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#20150F] text-[#FAF7F2]"
                  >
                    Yeni Mesaj Yaz
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ad Soyad"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        E-posta Adresiniz *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ornek@alanadi.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Telefon Numarası
                      </label>
                      <input
                        type="tel"
                        placeholder="+90 5XX XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Konu
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                      >
                        <option value="Genel Danışma & Geri Bildirim">Genel Danışma & Geri Bildirim</option>
                        <option value="Toplantı & Grup Rezervasyonu">Toplantı & Grup Rezervasyonu</option>
                        <option value="Tedarik & Ürün İş Birliği">Tedarik & Ürün İş Birliği</option>
                        <option value="Kariyer & Barista Başvurusu">Kariyer & Barista Başvurusu</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Bize iletmek istediğiniz detayları yazın..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>İletiliyor...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Mesajı Gönder</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
