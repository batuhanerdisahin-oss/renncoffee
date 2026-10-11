"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitFranchiseApplication } from "@/lib/store";
import {
  Briefcase,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  Store,
  Compass,
  ArrowRight,
  Send,
  Sparkles,
  Home,
  Coffee,
  Check,
  ChevronDown
} from "lucide-react";

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    concept: "Renn Lounge — Büyük Cadde & Deneyim Mağazası (150 - 250 m²)",
    targetLocation: "",
    budget: "3.500.000 ₺ - 6.000.000 ₺",
    experience: "Daha önce kafe / restoran işletmeciliği yaptım",
    message: "",
    kvkkConsent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkkConsent) {
      setErrorMsg("Lütfen KVKK Aydınlatma Metnini onaylayınız.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await submitFranchiseApplication({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        concept: formData.concept,
        targetLocation: formData.targetLocation,
        budget: formData.budget,
        experience: formData.experience,
        message: formData.message,
      });

      if (res.success) {
        setSubmitted(true);
      }
    } catch (err: any) {
      setErrorMsg("Başvuru iletilirken bir sorun oluştu. Lütfen tekrar deneyiniz.");
    } finally {
      setLoading(false);
    }
  };

  const concepts = [
    {
      id: "concept-express",
      number: "01",
      name: "RENN EXPRESS",
      badge: "Standart Dükkan",
      tagline: "Yüksek Sirkülasyon & Kompakt Cadde / AVM Modeli",
      area: "80 – 120 m² Kapalı Alan",
      locations: "Yüksek yaya trafiğine sahip ana caddeler, metro aksları ve seçkin AVM gastronomi alanları.",
      features: [
        "Optimize edilmiş 2 kişilik yüksek tempolu barista istasyonu",
        "Hızlı Take-Away (Gel-Al) ve oturum barı dengeli planlama",
        "Modüler antik Mısır panelleri ve sıcak ahşap detaylar",
        "Düşük ilk kurulum maliyeti ve hızlı amortisman süresi",
        "Standart içecek, fırın sandviç ve imza tatlı portföyü",
      ],
      idealFor: "Kompakt metrekarede yüksek ciro hızı ve operasyonel kolaylık hedefleyen yatırımcılar.",
      borderHighlight: "border-[#DECDBB]",
    },
    {
      id: "concept-lounge",
      number: "02",
      name: "RENN LOUNGE",
      badge: "Büyük Mağaza & Kış Bahçesi",
      tagline: "Geniş Deneyim, Bahçe & Zengin Gastronomi Buluşması",
      area: "150 – 250 m² Kapalı Alan + 60 – 100 m² Bahçe / Teras",
      locations: "Şehrin popüler bulvarları, sahil kordonları, elit çarşı aksları ve prestijli meydanlar.",
      features: [
        "Antik Mısır rölyefli anıtsal duvarlar ve bohem oturum locaları",
        "Geniş açık hava kış bahçesi ve peyzajlı teras oturumu",
        "Zenginleştirilmiş mutfak: Özel soslu paniniler & artisan pastane",
        "Laptop ile çalışma, arkadaş buluşması ve iş toplantısı alanları",
        "Günde 700+ misafir ağırlama kapasiteli çoklu barista istasyonu",
      ],
      idealFor: "Şehrin çekim merkezi olmayı hedefleyen, geniş oturum ve zengin gastronomi sunmak isteyen yatırımcılar.",
      borderHighlight: "border-[#C59A6F] ring-1 ring-[#C59A6F]/30",
    },
    {
      id: "concept-manor",
      number: "03",
      name: "RENN MANOR",
      badge: "Bağımsız Ticari Villa",
      tagline: "Müstakil Yaşam Alanı, Özel Avlu & Roastery Lab",
      area: "300 – 600+ m² Villa + 200+ m² Özel Peyzajlı Avlu",
      locations: "Bağımsız ticari imarlı müstakil villalar, prestijli köşkler ve geniş bahçeli serbest yapılar.",
      features: [
        "Müstakil bahçe, su havuzları ve antik Mısır mimari sütunlu avlu",
        "Şirket içi Roastery & Coffee Lab: Çekirdek kavurma ve workshop alanı",
        "VIP özel toplantı locaları, seminer köşesi ve seramik atölyesi",
        "Gurme kahvaltı, imza fırın lezzetleri ve akşam mistik ritüelleri",
        "Şehrin en prestijli, fotoğraf çektiren amiral gemisi konsepti",
      ],
      idealFor: "Bağımsız gayrimenkulü olan, şehre ikonik bir gastronomi ve yaşam merkezi kazandırmak isteyen vizyoner yatırımcılar.",
      borderHighlight: "border-[#DECDBB]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#20150F]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 sm:px-8 bg-[#20150F] text-[#FAF7F2] border-b border-[#33231A]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C59A6F] font-semibold flex items-center justify-center gap-2">
            <Briefcase size={15} />
            <span>YATIRIM & İŞ ORTAKLIĞI PORTALI</span>
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Büyüyen Hikâyemize Ortak Olun.
          </h1>
          <p className="text-base sm:text-xl text-[#BFAFA0] font-light max-w-3xl mx-auto leading-relaxed">
            Renn Coffee deneyimini yeni şehirlerde ve yeni buluşma noktalarında birlikte büyütelim.
            Antik Mısır mimarisinin mistik sıcaklığı, %100 Arabica taze kavrum kahveler ve 3 farklı ölçekte karlı mağaza konsepti.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#konseptler"
              className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#FAF7F2] text-[#20150F] hover:bg-white transition-all shadow-md"
            >
              3 Mağaza Konseptini İncele
            </a>
            <a
              href="#basvuru-formu"
              className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#C59A6F] text-[#20150F] hover:bg-[#D4A373] transition-all shadow-lg flex items-center gap-2"
            >
              <span>Ön Başvuru Yap</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3 STORE CONCEPTS SECTION
         ========================================================================= */}
      <section id="konseptler" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
            ESNEK VE KÂRLI İŞ MODELLERİ
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
            3 Farklı Mağaza Konsepti
          </h2>
          <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
            Lokasyonunuzun niteliğine, müşteri profiline ve yatırım hedeflerinize uygun olarak
            tasarlanmış 3 ayrı operasyonel mimari.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {concepts.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-8 sm:p-9 border ${item.borderHighlight} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-luxury text-3xl font-bold text-[#C59A6F]">
                    {item.number}
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#F4EFE6] text-[#A5784C]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#20150F] mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-[#73675C] font-medium mb-6">
                  {item.tagline}
                </p>

                {/* Area Tag */}
                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E3D6C8] mb-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#20150F]">
                    <Store size={15} className="text-[#C59A6F]" />
                    <span>Önerilen Alan:</span>
                    <span className="text-[#A5784C] font-bold">{item.area}</span>
                  </div>
                </div>

                {/* Location text */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#73675C]">
                    Hedef Lokasyon:
                  </span>
                  <p className="text-xs text-[#5A4F44] leading-relaxed">
                    {item.locations}
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#73675C]">
                    Öne Çıkan Nitelikler:
                  </span>
                  <ul className="space-y-2.5">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#5A4F44]">
                        <Check size={14} className="text-[#C59A6F] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-6 border-t border-[#F0E6D8]">
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      concept: `${item.name} — ${item.badge}`,
                    }));
                    const el = document.getElementById("basvuru-formu");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] group-hover:bg-[#C59A6F] group-hover:text-[#20150F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Bu Konsepti Seç & Başvur</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHY RENN COFFEE? FRANCHISE ADVANTAGES
         ========================================================================= */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#E6DED4] px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
              TAM KAPSAMLI YATIRIMCI DESTEĞİ
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
              Güçlü Operasyonel Altyapı
            </h2>
            <p className="text-sm text-[#6B6056]">
              Açılış öncesinden başlayarak günlük işletme döngünüze kadar yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-[#E3D6C8] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#A5784C] flex items-center justify-center">
                <Store size={22} />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#20150F]">
                Anahtar Teslim Mimari
              </h3>
              <p className="text-xs text-[#73675C] leading-relaxed">
                Antik Mısır rölyef duvarları, akustik aydınlatma ve ergonomik barista barı projesi 3D olarak çizilir ve uygulanır.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E3D6C8] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#A5784C] flex items-center justify-center">
                <GraduationCap size={22} />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#20150F]">
                Barista & Servis Akademisi
              </h3>
              <p className="text-xs text-[#73675C] leading-relaxed">
                Ekibiniz amiral mağazamızda espresso kalibrasyonu, süt köpürtme sanatı ve misafir ağırlama eğitiminden geçer.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E3D6C8] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#A5784C] flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#20150F]">
                Merkezi Tedarik Zinciri
              </h3>
              <p className="text-xs text-[#73675C] leading-relaxed">
                Haftalık kavrulan taze Arabica çekirdekleri, Mısır bitki harmanları ve ambalaj malzemeleri kesintisiz sevk edilir.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E3D6C8] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#A5784C] flex items-center justify-center">
                <TrendingUp size={22} />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#20150F]">
                Ulusal Pazarlama & PR
              </h3>
              <p className="text-xs text-[#73675C] leading-relaxed">
                Sosyal medya yönetimi, dijital reklam kampanyaları ve bölgesel lansman tanıtımları merkezi olarak desteklenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6-STEP PARTNERSHIP PROCESS
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
            ADIM ADIM YOL HARİTASI
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
            İş Ortaklığı Süreci
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Başvuru & Ön Değerlendirme", desc: "Aşağıdaki formu doldurarak yatırım niyetinizi, tercih ettiğiniz konsepti ve şehri bize iletin." },
            { step: "02", title: "Tanışma & Vizyon Toplantısı", desc: "Renn Coffee merkezinde veya amiral mağazamızda yüz yüze toplantı ve karşılıklı hedef uyumu." },
            { step: "03", title: "Lokasyon & Fizibilite Analizi", desc: "Hedef cadde, AVM veya müstakil ticari villanın yaya trafiği, görünürlüğü ve teknik altyapısı incelenir." },
            { step: "04", title: "Mimari Tasarım & Uygulama", desc: "Seçilen konsepte uygun 3D mimari proje hazırlanır ve antik rölyef dokularıyla inşaat süreci yönetilir." },
            { step: "05", title: "Barista Eğitimi & Testler", desc: "Barista ve salon ekibi amiral mağazamızda kapsamlı kahve reçetesi ve operasyon testlerinden geçer." },
            { step: "06", title: "Büyük Açılış & Sürekli Destek", desc: "Lansman pazarlaması ile mağazanız açılır; düzenli denetim, menü güncellemeleri ve lojistik sürer." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E3D6C8] space-y-3">
              <span className="font-serif-luxury text-3xl font-bold text-[#C59A6F]">
                {item.step}
              </span>
              <h3 className="font-serif-luxury text-lg font-bold text-[#20150F]">
                {item.title}
              </h3>
              <p className="text-xs text-[#73675C] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          APPLICATION FORM
         ========================================================================= */}
      <section id="basvuru-formu" className="py-24 px-6 sm:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3D6C8] shadow-xl">
          <div className="space-y-3 mb-10 text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
              GİZLİ & DOĞRUDAN YÖNETİM DEĞERLENDİRMESİ
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
              Franchise Ön Başvuru Formu
            </h2>
            <p className="text-xs sm:text-sm text-[#73675C]">
              Tüm bilgiler gizlilik sözleşmesi kapsamında doğrudan Renn Coffee kurucu yönetim kuruluna iletilir.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EBF6EE] text-[#2E7D32] flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-serif-luxury text-3xl font-bold text-[#20150F]">
                Başvurunuz Başarıyla Alındı!
              </h3>
              <p className="text-sm text-[#5A4F44] max-w-md mx-auto leading-relaxed">
                Renn Coffee genişleme ekibimiz başvurunuzu inceledikten sonra en kısa sürede
                belirttiğiniz iletişim kanallarından sizinle irtibata geçecektir.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all cursor-pointer"
              >
                Yeni Başvuru Formu Aç
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Concept Selector Dropdown / Radios */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C]">
                  Hedeflediğiniz Mağaza Konsepti *
                </label>
                <select
                  required
                  value={formData.concept}
                  onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none font-medium text-[#20150F]"
                >
                  <option value="Renn Express — Standart Cadde & AVM Mağazası (80 - 120 m²)">
                    1. Konsept: Renn Express — Standart Dükkan (80 - 120 m²)
                  </option>
                  <option value="Renn Lounge — Büyük Cadde & Deneyim Mağazası (150 - 250 m²)">
                    2. Konsept: Renn Lounge — Büyük Dükkan & Kış Bahçesi (150 - 250 m²)
                  </option>
                  <option value="Renn Manor — Bağımsız Müstakil Ticari Villa (300+ m²)">
                    3. Konsept: Renn Manor — Bağımsız Müstakil Ticari Villa (300+ m²)
                  </option>
                </select>
                <p className="text-[11px] text-[#A5784C]">
                  İlgilendiğiniz konsepti seçebilir veya lokasyon fizibilitesine göre birlikte karar verebiliriz.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Adınız ve Soyadınız"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                    Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+90 5XX XXX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                    E-posta Adresi *
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

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                    Hedef Şehir *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ankara, İstanbul, Kayseri, İzmir..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                  Planlanan Yatırım Lokasyonu / İlçe / Cadde / Villa Portföyü
                </label>
                <input
                  type="text"
                  placeholder="Örn: Tunalı Hilmi Cad. / Bağdat Cad. / Bağımsız ticari villam mevcut"
                  value={formData.targetLocation}
                  onChange={(e) => setFormData({ ...formData, targetLocation: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                    Tahmini Yatırım Bütçesi
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                  >
                    <option value="2.000.000 ₺ - 3.500.000 ₺ (Express Standart Dükkan için)">
                      2.000.000 ₺ - 3.500.000 ₺ (Express Uygun)
                    </option>
                    <option value="3.500.000 ₺ - 6.000.000 ₺ (Lounge Büyük Dükkan için)">
                      3.500.000 ₺ - 6.000.000 ₺ (Lounge Uygun)
                    </option>
                    <option value="6.000.000 ₺ ve üzeri (Manor Müstakil Villa için)">
                      6.000.000 ₺ ve üzeri (Villa & Roastery Uygun)
                    </option>
                    <option value="Lokasyona ve projeye göre değerlendirilecek">
                      Lokasyona ve projeye göre değerlendirilecek
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                    Sektör Deneyimi
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                  >
                    <option value="Daha önce kafe / restoran işletmeciliği yaptım">
                      Daha önce kafe / restoran işlettim
                    </option>
                    <option value="Farklı sektörde işletme sahibiyim / Yatırımcıyım">
                      Farklı sektörde işletme sahibiyim
                    </option>
                    <option value="İlk defa gastronomi sektörüne giriyorum">
                      İlk defa sektöre giriyorum
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                  Ek Açıklama & Notlarınız
                </label>
                <textarea
                  rows={4}
                  placeholder="Kendinizden, hedeflediğiniz müşteri kitlesinden veya düşündüğünüz gayrimenkulden kısaca bahsedin..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="kvkk"
                  checked={formData.kvkkConsent}
                  onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                  className="mt-1 w-4 h-4 text-[#20150F] rounded focus:ring-[#C59A6F] cursor-pointer"
                />
                <label htmlFor="kvkk" className="text-xs text-[#73675C] leading-relaxed cursor-pointer">
                  KVKK Aydınlatma Metnini okudum, kişisel verilerimin franchise başvuru sürecinin
                  değerlendirilmesi amacıyla işlenmesini ve benimle iletişime geçilmesini kabul ediyorum.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Gönderiliyor...</span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Franchise Başvurumu İlet</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
