"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitFranchiseApplication, FranchiseStatus } from "@/lib/store";
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
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Info,
  Sliders,
  Calendar,
  Users,
  BarChart3,
  Layers,
  Award,
  BookOpen,
  Clock,
  MapPin,
  Printer,
  Download,
  FileText,
  HelpCircle,
  X,
  Building2,
  PieChart,
  Percent,
  CheckSquare,
  Square,
  ArrowUpRight
} from "lucide-react";

export default function FranchisePage() {
  // Navigation active tab tracking on scroll
  const [activeNav, setActiveNav] = useState("hero");

  // Sticky sub-nav visibility
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setShowStickyNav(scrollPos > 400);

      const sections = [
        "neden-renn",
        "modeller",
        "simulator",
        "academy",
        "live",
        "growth",
        "surec",
        "faq",
        "basvuru"
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // ==========================================
  // SECTION 2: 6 SUPPORT PILLARS STATE & DATA
  // ==========================================
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      id: "insight",
      name: "RENN INSIGHT",
      tagline: "Lokasyon Analizi & Yatırım Fizibilitesi",
      status: "Aktif",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      icon: Compass,
      shortDesc: "Yaya akış yoğunluğu, rekabet analizi ve ciro tahminleme simülasyonları.",
      fullDesc:
        "Doğru bir kahve işletmesinin temeli doğru gayrimenkul seçimidir. Renn Insight ekibi, aday mağazanın yaya sirkülasyonunu, gün içi yoğunluk periyotlarını, çevre demografisini ve ulaşım kolaylığını yerinde ölçümleyerek yatırımcıya kapsamlı bir fizibilite raporu sunar.",
      deliverables: [
        "Yerinde yaya ve araç trafiği ölçümü",
        "Bölgesel demografik haritalama ve hedef kitle profili",
        "Kira / ciro oranının sürdürülebilirlik testi",
        "Teknik altyapı (baca, elektrik gücü, bahçe imarı) uygunluk onayı"
      ]
    },
    {
      id: "flex",
      name: "RENN FLEX",
      tagline: "Ölçeklenebilir Mağaza Konseptleri",
      status: "Aktif",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      icon: Layers,
      shortDesc: "Farklı yatırım ölçeklerine ve lokasyon türlerine özel 3 mağaza mimarisi.",
      fullDesc:
        "Her lokasyon aynı kalıba uymaz. Renn Flex mimarisi; AVM ve iş merkezi akışlarına uygun kompakt 'Renn Start', prestijli caddelere uygun 'Renn Coffee' ve müstakil bahçeli 'Renn Flagship' modelleriyle yatırımcının sermayesini en verimli şekilde değerlendirir.",
      deliverables: [
        "3 farklı metrekareye uyarlanabilen modüler bar tasarımı",
        "Antik Mısır estetiğini koruyan özel rölyef ve aydınlatma planı",
        "Yüksek tempolu sipariş akışını hızlandıran ergonomik mimari",
        "3D mimari proje ve anahtar teslim uygulama desteği"
      ]
    },
    {
      id: "academy",
      name: "RENN ACADEMY",
      tagline: "Barista & İşletmecilik Eğitimi",
      status: "Aktif",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      icon: GraduationCap,
      shortDesc: "Açılış öncesi ve sonrası kesintisiz barista, servis ve yönetim kampları.",
      fullDesc:
        "Bir markayı yaşatan çalışanların bilgisidir. Renn Academy, hem franchise sahibini hem de tüm barista kadrosunu açılış öncesinde yoğun bir operasyon eğitimine tabi tutar. Reçete kalibrasyonundan misafir ilişkilerine kadar eksiksiz standart oluşturulur.",
      deliverables: [
        "2 haftalık amiral mağazada teorik ve pratik barista kampı",
        "Espresso ekstraksiyonu, süt köpürtme kimyası ve latte art eğitimi",
        "Mağaza müdürü operasyon, stok ve vardiya liderliği modülü",
        "Düzenli gizli müşteri denetimleri ve servis tazeleme eğitimleri"
      ]
    },
    {
      id: "live",
      name: "RENN LIVE",
      tagline: "Veriye Dayalı Şube Performans Yönetimi",
      status: "Pilot",
      statusColor: "bg-amber-100 text-amber-800 border-amber-300",
      icon: BarChart3,
      shortDesc: "Günlük ciro, ortalama sepet, fire ve ürün miksini izleyen analitik öngörüsü.",
      fullDesc:
        "Kahve işletmeciliğinde hislerle değil verilerle karar verilir. Renn Live, şubenizin günlük satış dağılımını, kategori miksini, hammadde maliyetini ve atık oranlarını anlık olarak gösteren bulut tabanlı bir performans yönetim konseptidir.",
      deliverables: [
        "Saatlik ve günlük ciro & sepet trend analizleri",
        "Ürün reçetesi bazlı maliyet (COGS) ve fire takibi",
        "En çok satan kahve ve gastronomi ürünleri analitiği",
        "Şube karşılaştırmalı performans karnesi"
      ]
    },
    {
      id: "growth",
      name: "RENN GROWTH",
      tagline: "Operasyonel Danışmanlık & Büyüme",
      status: "Aktif",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      icon: TrendingUp,
      shortDesc: "Açılış sonrasında düzenli saha ziyaretleri, kârlılık optimizasyonu ve pazarlama.",
      fullDesc:
        "Şube açıldıktan sonra desteğimiz bitmez, asıl süreç başlar. Renn Growth danışmanları şubenizi düzenli ziyaret eder; kârlılık raporlarını inceler, yerel pazarlama kampanyaları kurgular ve operasyonel verimliliği yükseltmek için işletmeciye sürekli rehberlik eder.",
      deliverables: [
        "Aylık finansal değerlendirme ve gider optimizasyon raporu",
        "Bölgesel lansman ve sosyal medya kampanya desteği",
        "Dönemsel özel yaz/kış menü güncellemeleri ve malzeme tedariği",
        "Saha operasyon koçluğu ve kalite standart denetimleri"
      ]
    },
    {
      id: "partners",
      name: "RENN PARTNERS",
      tagline: "Girişimci & Büyüme Ekosistemi",
      status: "Yakında",
      statusColor: "bg-blue-100 text-blue-800 border-blue-300",
      icon: Users,
      shortDesc: "Çoklu şube açma fırsatları, bölgesel master ortaklıklar ve yatırımcı ağı.",
      fullDesc:
        "Başarılı işletmecilerimizin büyümesini teşvik ediyoruz. İlk şubesinde yüksek performans gösteren iş ortaklarımıza, yeni lokasyonlarda öncelikli açılış hakkı ve çoklu şube yatırım modelleri sunan özel bir büyüme kulübüdür.",
      deliverables: [
        "Çoklu şube açılışlarında ölçek ekonomisi ve indirimli ekipman tedariği",
        "Bölgesel master franchise değerlendirme önceliği",
        "Yıllık Renn Partner Vizyon Zirvesi ve işletmeciler arası tecrübe paylaşımı",
        "Yatırımcı özel danışma kurulu"
      ]
    }
  ];

  // ==========================================
  // SECTION 3: STORE MODELS (RENN FLEX)
  // ==========================================
  const [selectedModelIndex, setSelectedModelIndex] = useState(1); // Default: Renn Coffee

  const storeModels = [
    {
      id: "renn-start",
      name: "RENN START",
      badge: "Kompakt Kahve Noktası",
      tagline: "Yüksek Sirkülasyon & Optimize Edilmiş Take-Away Modeli",
      status: "Aktif Konsept",
      minArea: "40 – 75 m²",
      teamSize: "2 – 3 Barista",
      locations: "AVM içi ve food court girişleri, metro ve aktarma aksları, plazalar, hastaneler ve yoğun yaya caddeleri.",
      summary:
        "Minimum metrekarede maksimum operasyon hızı hedefleyen girişimciler için tasarlandı. Paket servis (Take-Away) odaklı ergonomik bar mimarisi ve seçkin içecek menüsü ile düşük işletme maliyeti sağlar.",
      image: "/venue/cup.jpg",
      features: [
        "2 kişilik yüksek hızlı ergonomik espresso istasyonu",
        "Optimize edilmiş kahve ve paketli taze gastronomi menüsü",
        "Kompakt depolama ve hızlı temizlik prosedürleri",
        "Düşük ilk kurulum maliyeti ve yalın kira yükü"
      ]
    },
    {
      id: "renn-coffee",
      name: "RENN COFFEE",
      badge: "Klasik Deneyim Mağazası",
      tagline: "Geniş Oturma Alanı, Sosyal Atmosfer & Tam Menü Deneyimi",
      status: "Aktif Konsept",
      minArea: "90 – 160 m² + Bahçe",
      teamSize: "4 – 6 Barista & Salon",
      locations: "Şehrin popüler ana caddeleri, üniversite yerleşke aksları, gastronomi çarşıları ve seçkin konut çevreleri.",
      summary:
        "Markamızın amiral ruhunu yansıtan klasik üçüncü nesil kahve deneyimi. Antik Mısır rölyef dokuları, konforlu çalışma ve sohbet alanları, tam barista kahve reçeteleri, özel panini ve taze pastane lezzetleri.",
      image: "/venue/wall.jpg",
      features: [
        "Geniş iç mekân ve açık hava bahçe / teras oturumu",
        "Tam teşekküllü barista barı ve özel demleme köşesi",
        "Sıcak fırın panini, bagel ve imza San Sebastian tatlı servisi",
        "Laptop ile çalışanlar için yüksek hızlı altyapı ve akustik aydınlatma"
      ]
    },
    {
      id: "renn-flagship",
      name: "RENN FLAGSHIP",
      badge: "Müstakil Ticari Villa & Roastery",
      tagline: "Bağımsız Yaşam Alanı, Mistik Mısır Mimarisi & Workshop Lab",
      status: "Planlanan / Amiral Konsept",
      minArea: "250 – 500+ m² Villa + 200+ m² Avlu",
      teamSize: "8 – 12 Barista & Servis Ekibi",
      locations: "Bağımsız ticari villalar, tarihi taş köşkler, prestijli sahil bulvarları ve geniş bahçeli serbest yapılar.",
      summary:
        "Şehrin ikonik buluşma noktası olmaya aday prestij yatırımı. Şube içinde özel kahve kavurma (Roastery Lab) alanı, atölyeler, VIP toplantı odaları ve geniş antik Mısır mimari peyzajlı avlu.",
      image: "/brand/renn-manor-hero.jpg",
      features: [
        "Müstakil bahçe, su havuzları ve antik Mısır mimari sütunlu avlu",
        "Roastery & Coffee Lab: Yerinde çekirdek kavurma ve tadım workshopları",
        "Geniş mutfak: Gurme kahvaltı, imza sıcak paniniler ve pastane",
        "VIP özel toplantı ve etkinlik locaları, seramik atölyesi alanı"
      ]
    }
  ];

  // ==========================================
  // SECTION 4: FINANCIAL SIMULATOR STATE
  // ==========================================
  const [activeScenario, setActiveScenario] = useState<"temkinli" | "baz" | "iyimser">("baz");

  // Inputs
  const [simModel, setSimModel] = useState<string>("RENN COFFEE");
  const [dailyCustomers, setDailyCustomers] = useState<number>(320);
  const [avgTicket, setAvgTicket] = useState<number>(195);
  const [operatingDays, setOperatingDays] = useState<number>(30);
  const [cogsPercent, setCogsPercent] = useState<number>(30); // %30 ürün maliyeti
  const [monthlyRent, setMonthlyRent] = useState<number>(75000);
  const [monthlyStaff, setMonthlyStaff] = useState<number>(95000);
  const [monthlyOther, setMonthlyOther] = useState<number>(35000); // enerji, ambalaj, muhasebe
  const [royaltyPercent, setRoyaltyPercent] = useState<number>(4); // %4 royalty & marketing
  const [initialInvestment, setInitialInvestment] = useState<number>(3500000);

  // Scenario switch presets
  const applyScenario = (sc: "temkinli" | "baz" | "iyimser") => {
    setActiveScenario(sc);
    if (sc === "temkinli") {
      setDailyCustomers(210);
      setAvgTicket(165);
      setCogsPercent(33);
      setMonthlyRent(70000);
      setMonthlyStaff(85000);
      setMonthlyOther(32000);
      setRoyaltyPercent(4);
    } else if (sc === "baz") {
      setDailyCustomers(340);
      setAvgTicket(195);
      setCogsPercent(30);
      setMonthlyRent(80000);
      setMonthlyStaff(105000);
      setMonthlyOther(38000);
      setRoyaltyPercent(4);
    } else if (sc === "iyimser") {
      setDailyCustomers(520);
      setAvgTicket(230);
      setCogsPercent(28);
      setMonthlyRent(90000);
      setMonthlyStaff(135000);
      setMonthlyOther(48000);
      setRoyaltyPercent(4);
    }
  };

  // Calculations
  const monthlyRevenue = useMemo(() => {
    return Math.round(dailyCustomers * avgTicket * operatingDays);
  }, [dailyCustomers, avgTicket, operatingDays]);

  const monthlyCOGS = useMemo(() => {
    return Math.round(monthlyRevenue * (cogsPercent / 100));
  }, [monthlyRevenue, cogsPercent]);

  const monthlyRoyalty = useMemo(() => {
    return Math.round(monthlyRevenue * (royaltyPercent / 100));
  }, [monthlyRevenue, royaltyPercent]);

  const variableCosts = useMemo(() => {
    return monthlyCOGS + monthlyRoyalty;
  }, [monthlyCOGS, monthlyRoyalty]);

  const fixedCosts = useMemo(() => {
    return monthlyRent + monthlyStaff + monthlyOther;
  }, [monthlyRent, monthlyStaff, monthlyOther]);

  const totalMonthlyExpenses = useMemo(() => {
    return variableCosts + fixedCosts;
  }, [variableCosts, fixedCosts]);

  const monthlyProfit = useMemo(() => {
    return monthlyRevenue - totalMonthlyExpenses;
  }, [monthlyRevenue, totalMonthlyExpenses]);

  const profitMargin = useMemo(() => {
    if (monthlyRevenue <= 0) return 0;
    return ((monthlyProfit / monthlyRevenue) * 100).toFixed(1);
  }, [monthlyProfit, monthlyRevenue]);

  // Break-even revenue: Fixed Costs / (1 - Variable Cost Ratio)
  const breakEvenRevenue = useMemo(() => {
    const varRatio = (cogsPercent + royaltyPercent) / 100;
    if (varRatio >= 1) return 0;
    return Math.round(fixedCosts / (1 - varRatio));
  }, [fixedCosts, cogsPercent, royaltyPercent]);

  // Payback period (months)
  const paybackMonths = useMemo(() => {
    if (monthlyProfit <= 0 || !initialInvestment) return null;
    const months = (initialInvestment / monthlyProfit).toFixed(1);
    return parseFloat(months);
  }, [initialInvestment, monthlyProfit]);

  // Format currency
  const formatTL = (val: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0
    }).format(val);
  };

  // ==========================================
  // SECTION 5: RENN ACADEMY MODULES
  // ==========================================
  const [selectedAcademyModule, setSelectedAcademyModule] = useState<number | null>(0);

  const academyModules = [
    {
      id: "coffee",
      title: "Kahve ve Ürün Kalitesi",
      code: "MOD-01",
      hours: "40 Saat Teori & Pratik",
      summary: "%100 Arabica çekirdek kavrum kimyası, değirmen ayarları ve kusursuz ekstraksiyon.",
      details: [
        "Kahve çekirdeğinin botanik yolculuğu, hasat ve kavurma profilleri",
        "Espresso makinesi kalibrasyonu, su basıncı ve sıcaklık dengesi",
        "Süt köpürtme fiziği, mikro köpük dokusu ve imza latte art sanatı",
        "V60, Chemex ve soğuk demleme (cold brew) demleme standartları",
        "Antik Mısır bitki çayları (Kleopatra, Nefertum) özel demleme süreleri"
      ]
    },
    {
      id: "operations",
      title: "Mağaza Operasyon Yönetimi",
      code: "MOD-02",
      hours: "25 Saat",
      summary: "Açılış/kapanış kontrol listeleri, hız standartları ve hijyen protokolleri.",
      details: [
        "Günlük açılış ve kapanış kontrol listelerinin eksiksiz yürütülmesi",
        "Sipariş alma ve teslimat ergonomisi (hızlı ve güler yüzlü akış)",
        "Gıda güvenliği, HACCP standartları ve derin temizlik protokolleri",
        "Kasa ve Adisyo POS sisteminin hatasız kullanımı ve gün sonu raporları"
      ]
    },
    {
      id: "leadership",
      title: "Personel ve Ekip Liderliği",
      code: "MOD-03",
      hours: "20 Saat",
      summary: "Doğru barista işe alımı, vardiya verimliliği ve takım motivasyonu.",
      details: [
        "Renn Coffee kültürüne uygun barista ve servis personeli mülakat teknikleri",
        "Haftalık vardiya planlaması ve iş yükü optimizasyonu",
        "Performans odaklı prim ve motivasyon sistemlerinin yönetimi",
        "Kriz anlarında sakin ve çözüm odaklı liderlik duruşu"
      ]
    },
    {
      id: "inventory",
      title: "Stok ve Maliyet Yönetimi",
      code: "MOD-04",
      hours: "20 Saat",
      summary: "FIFO malzeme döngüsü, fire kontrolü ve haftalık envanter sayımı.",
      details: [
        "FIFO (İlk Giren İlk Çıkar) kuralı ile hammadde depolama disiplini",
        "Süt, kahve çekirdeği ve pastane ürünlerinde fire/atık oranını %1.5 altında tutma",
        "Haftalık envanter sayımı ve teorik vs fiili tüketim karşılaştırması",
        "Merkezi tedarik siparişlerinin zamanında ve optimum miktarda verilmesi"
      ]
    },
    {
      id: "experience",
      title: "Müşteri Deneyimi & Misafirperverlik",
      code: "MOD-05",
      hours: "15 Saat",
      summary: "Renn misafirperverliği, nezaket standartları ve sadakat kültürü.",
      details: [
        "Misafiri karşılama, beden dili ve samimi dinleme ilkeleri",
        "Kişiselleştirilmiş ürün önerileri ve damak zevkine uygun kahve eşleştirmesi",
        "Müşteri geri bildirimlerini anında memnuniyete dönüştürme sanatı",
        "Müdavim misafir ilişkileri ve yerel topluluk bağı oluşturma"
      ]
    },
    {
      id: "marketing",
      title: "Satış ve Yerel Pazarlama",
      code: "MOD-06",
      hours: "15 Saat",
      summary: "Lansman pazarlaması, çapraz satış teknikleri ve yerel etkinlikler.",
      details: [
        "Şube açılışında çevre sakinlerine yönelik bölgesel lansman stratejileri",
        "Kahve yanında fırın sandviç ve tatlı çapraz satış diyalogları",
        "Google Maps, Instagram ve yerel rehberlerde güçlü şube puanı yönetimi",
        "Hafta içi saatlik dinamik promosyonlar ve sadakat kampanyaları"
      ]
    }
  ];

  // ==========================================
  // SECTION 6: RENN LIVE DASHBOARD DEMO
  // ==========================================
  const [livePeriod, setLivePeriod] = useState<"gunluk" | "haftalik" | "aylik">("aylik");

  const liveData = {
    gunluk: {
      revenue: "38.450 ₺",
      revenueGrowth: "+12.4%",
      avgTicket: "192 ₺",
      transactions: "200 Adet",
      cogs: "%29.2",
      waste: "%0.9",
      rating: "4.9 / 5.0",
      mix: [
        { name: "Nitelikli Sıcak Kahveler", pct: 46, color: "bg-[#A5784C]" },
        { name: "Special Çay & Soğuklar", pct: 28, color: "bg-[#C59A6F]" },
        { name: "Panini & Fırın Gastronomi", pct: 16, color: "bg-[#8C6239]" },
        { name: "Tatlılar & Diğer", pct: 10, color: "bg-[#DECDBB]" }
      ]
    },
    haftalik: {
      revenue: "274.600 ₺",
      revenueGrowth: "+14.8%",
      avgTicket: "198 ₺",
      transactions: "1.386 Adet",
      cogs: "%29.8",
      waste: "%1.1",
      rating: "4.9 / 5.0",
      mix: [
        { name: "Nitelikli Sıcak Kahveler", pct: 44, color: "bg-[#A5784C]" },
        { name: "Special Çay & Soğuklar", pct: 30, color: "bg-[#C59A6F]" },
        { name: "Panini & Fırın Gastronomi", pct: 17, color: "bg-[#8C6239]" },
        { name: "Tatlılar & Diğer", pct: 9, color: "bg-[#DECDBB]" }
      ]
    },
    aylik: {
      revenue: "1.180.400 ₺",
      revenueGrowth: "+16.2%",
      avgTicket: "204 ₺",
      transactions: "5.786 Adet",
      cogs: "%29.4",
      waste: "%1.0",
      rating: "4.92 / 5.0",
      mix: [
        { name: "Nitelikli Sıcak Kahveler", pct: 42, color: "bg-[#A5784C]" },
        { name: "Special Çay & Soğuklar", pct: 32, color: "bg-[#C59A6F]" },
        { name: "Panini & Fırın Gastronomi", pct: 18, color: "bg-[#8C6239]" },
        { name: "Tatlılar & Diğer", pct: 8, color: "bg-[#DECDBB]" }
      ]
    }
  };

  const currentLive = liveData[livePeriod];

  // ==========================================
  // SECTION 7: RENN GROWTH (12 MONTHS TIMELINE)
  // ==========================================
  const growthTimeline = [
    {
      phase: "AÇILIŞ ÖNCESİ",
      time: "0 – 60 Gün",
      badge: "Hazırlık & İnşaat",
      title: "Fizibilite, Mimari ve Akademi Kampı",
      desc: "Doğru lokasyonun kiralanması, 3D antik Mısır mimari planının çizilmesi, inşaat takibi, ekipman tedariği ve ekibin Renn Academy'de tam kapsamlı eğitimi."
    },
    {
      phase: "İLK 30 GÜN",
      time: "1. Ay",
      badge: "Açılış & Stabilizasyon",
      title: "Yerinde Saha Desteği ve İlk Misafirler",
      desc: "Merkez saha ekibimizin şubede bulunması, yerel açılış lansman kampanyası, ilk müşteri akışının yönetimi ve reçete kalibrasyonunun stabil hale getirilmesi."
    },
    {
      phase: "30 – 90 GÜN",
      time: "2 – 3. Ay",
      badge: "Operasyonel Verimlilik",
      title: "Stok & Maliyet Optimizasyonu",
      desc: "Tüketim hızlarının ölçümlenmesi, fire ve atık oranlarının minimize edilmesi, personel hız ve servis standartlarının denetlenmesi."
    },
    {
      phase: "3 – 6 AY",
      time: "4 – 6. Ay",
      badge: "Kârlılık Gelişimi",
      title: "Finansal İnceleme & Menü Zenginleştirme",
      desc: "Aylık faaliyet kârlılığının detaylı incelenmesi, mevsimlik özel reçetelerin menüye entegre edilmesi ve bölgesel sadakat aksiyonları."
    },
    {
      phase: "6 – 12 AY",
      time: "7 – 12. Ay",
      badge: "Büyüme & İkinci Şube",
      title: "Performans Karnesi ve Ekosistem Fırsatları",
      desc: "1 yıllık işletme karnesinin değerlendirilmesi, yüksek başarı gösteren ortaklarımıza 2. veya 3. şube lokasyon haklarında öncelik tanınması."
    }
  ];

  // ==========================================
  // SECTION 8: 5-STEP APPLICATION PROCESS
  // ==========================================
  const applicationSteps = [
    {
      step: "01",
      title: "Ön Başvuru Formu",
      desc: "Web sitemizdeki çok adımlı formu doldurarak yatırım hedefinizi, bütçenizi ve düşündüğünüz şehri bize iletin."
    },
    {
      step: "02",
      title: "Tanışma & Vizyon Görüşmesi",
      desc: "Renn Coffee genel merkezinde veya amiral mağazamızda yüz yüze toplantı gerçekleştirerek vizyon uyumunu değerlendiririz."
    },
    {
      step: "03",
      title: "Lokasyon & Fizibilite İncelemesi",
      desc: "Hedeflediğiniz cadde, AVM veya gayrimenkulü yerinde ziyaret eder; yaya trafiği ve ticari uygunluk analizi yaparız."
    },
    {
      step: "04",
      title: "Franchise Sözleşmesi & Akademi",
      desc: "Karşılıklı hak ve sorumlulukları belirleyen sözleşme imzalanır ve barista/yönetici eğitim kampı takvimi başlar."
    },
    {
      step: "05",
      title: "Mimari Kurulum & Büyük Açılış",
      desc: "3D konsept projenin uygulanması tamamlanır, ilk ürün sevkiyatı yapılır ve lansman pazarlamasıyla kapılar açılır."
    }
  ];

  // ==========================================
  // SECTION 9: MULTI-STEP APPLICATION FORM
  // ==========================================
  const [formStep, setFormStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal
    fullName: "",
    phone: "",
    email: "",
    currentCity: "",

    // Step 2: Investment Preferences
    city: "", // Target City
    targetLocation: "",
    concept: "RENN COFFEE (Klasik Mağaza • 90-160 m²)",
    budget: "3.500.000 ₺ - 6.000.000 ₺",
    timeline: "1 - 3 Ay İçerisinde",

    // Step 3: Experience & Operations
    hasBusinessExperience: "Evet, daha önce işletme yönettim",
    hasFnbExperience: "Evet, kafe / restoran tecrübem var",
    willManagePersonally: "Evet, işimin başında tam zamanlı bulunacağım",
    storeGoal: "Önce tek mağaza ile başlayıp sonrasında büyümek istiyorum",

    // Step 4: Notes & Consents
    message: "",
    kvkkConsent: false,
    marketingConsent: false
  });

  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [appRefCode, setAppRefCode] = useState("");

  const handleNextStep = () => {
    setFormError("");
    if (formStep === 1) {
      if (!formData.fullName.trim()) return setFormError("Lütfen adınızı ve soyadınızı belirtin.");
      if (!formData.phone.trim()) return setFormError("Lütfen telefon numaranızı belirtin.");
      if (!formData.email.trim() || !formData.email.includes("@"))
        return setFormError("Lütfen geçerli bir e-posta adresi belirtin.");
      if (!formData.currentCity.trim()) return setFormError("Lütfen yaşadığınız şehri belirtin.");
    } else if (formStep === 2) {
      if (!formData.city.trim()) return setFormError("Lütfen franchise açmak istediğiniz şehri belirtin.");
      if (!formData.targetLocation.trim())
        return setFormError("Lütfen düşündüğünüz ilçe, cadde veya AVM lokasyonunu belirtin.");
    }
    setFormStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setFormError("");
    setFormStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkkConsent) {
      setFormError("Lütfen KVKK Aydınlatma Metnini onaylayınız.");
      return;
    }

    setFormLoading(true);
    setFormError("");

    try {
      const summaryExperience = `${formData.hasBusinessExperience}. F&B Deneyimi: ${formData.hasFnbExperience}. Yönetim Durumu: ${formData.willManagePersonally}. Hedef: ${formData.storeGoal}.`;

      const res = await submitFranchiseApplication({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        currentCity: formData.currentCity,
        city: formData.city,
        concept: formData.concept,
        targetLocation: formData.targetLocation,
        budget: formData.budget,
        timeline: formData.timeline,
        hasBusinessExperience: formData.hasBusinessExperience,
        hasFnbExperience: formData.hasFnbExperience,
        willManagePersonally: formData.willManagePersonally,
        storeGoal: formData.storeGoal,
        experience: summaryExperience,
        message: formData.message,
        kvkkConsent: formData.kvkkConsent,
        marketingConsent: formData.marketingConsent
      });

      if (res.success) {
        setAppRefCode("RC-" + Math.floor(100000 + Math.random() * 900000));
        setFormSubmitted(true);
      } else {
        setFormError("Başvuru gönderilirken bir sorun oluştu. Lütfen tekrar deneyiniz.");
      }
    } catch (err: any) {
      setFormError("Beklenmeyen bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.");
    } finally {
      setFormLoading(false);
    }
  };

  // ==========================================
  // SECTION 10: SSS (FAQ)
  // ==========================================
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Renn Coffee franchise başvurusu nasıl değerlendirilir?",
      a: "Web sitemizdeki ön başvuru formu doldurulduktan sonra ekibimiz 48 saat içinde başvurunuzu ön incelemeden geçirir. Lokasyon ve yatırım bütçesi kriterlerimize uyan adaylarla birebir tanışma toplantısı planlanır."
    },
    {
      q: "Franchise olmak için kahve veya restoran işletmeciliği tecrübesi şart mı?",
      a: "Sektör tecrübesi bir avantaj olsa da zorunlu değildir. Renn Academy'nin kapsamlı 2 haftalık barista ve işletme eğitimi ile işin mutfağından finansal tablolara kadar tüm operasyonu sistemli biçimde öğrenirsiniz."
    },
    {
      q: "Hangi şehirlerde ve lokasyonlarda franchise veriyorsunuz?",
      a: "Başta büyükşehirler ve gelişen il merkezleri olmak üzere, yaya trafiği yoğun caddeler, prestijli AVM'ler ve bağımsız ticari villalar değerlendirmeye uygundur. Şube fizibilitesi merkezimizce yerinde onaylanır."
    },
    {
      q: "Yatırım bütçesi neleri kapsar ve nasıl belirlenir?",
      a: "Yatırım tutarı; seçilen mağaza modeline (Start, Coffee veya Flagship), dükkanın brüt metrekaresine, inşaat/mimari uygulama durumuna ve profesyonel kahve ekipmanı paketine göre değişkenlik gösterir."
    },
    {
      q: "Kahve çekirdekleri ve ürün tedariği nasıl sağlanır?",
      a: "Tüm %100 Arabica özel kavrum kahve çekirdeklerimiz, Mısır bitki harmanlarımız, imza soslarımız ve logolu ambalaj malzemelerimiz merkezi tedarik zincirimiz üzerinden haftalık olarak şubenize sevk edilir."
    },
    {
      q: "Bir yatırımcı birden fazla Renn Coffee şubesi açabilir mi?",
      a: "Evet. İlk şubesinde operasyonel disiplin ve müşteri memnuniyeti sağlayan partnerlerimizle bölgesel çoklu şube açılışları ve öncelikli lokasyon tahsisleri desteklenmektedir."
    },
    {
      q: "Açılış sürecinde merkez saha desteği sağlanıyor mu?",
      a: "Evet. Açılış haftasında merkez operasyon ekibimiz ve kıdemli baristalarımız bizzat şubenizde bulunarak ekibinize ilk servis günlerinde yerinde mentorluk yapar."
    },
    {
      q: "Başvuru yapmak kesin franchise alınacağı anlamına gelir mi?",
      a: "Hayır. Ön başvuru formu karşılıklı bir niyet beyanıdır. Her başvuru marka standartları, lokasyon verimi ve girişimci profili doğrultusunda titizlikle incelenir."
    }
  ];

  // Investor Kit modal
  const [showDeckModal, setShowDeckModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#20150F] selection:bg-[#20150F] selection:text-[#FAF7F2]">
      <Navbar />

      {/* =========================================================================
          STICKY SUB-NAVIGATION (Appears after hero)
         ========================================================================= */}
      {showStickyNav && (
        <div className="fixed top-16 left-0 right-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E3D6C8] shadow-xs hidden md:block animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1 lg:gap-2 text-xs font-semibold overflow-x-auto no-scrollbar">
              <button
                onClick={() => scrollToSection("neden-renn")}
                className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeNav === "neden-renn" ? "bg-[#20150F] text-[#FAF7F2]" : "text-[#73675C] hover:text-[#20150F]"
                }`}
              >
                Neden Renn?
              </button>
              <button
                onClick={() => scrollToSection("modeller")}
                className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeNav === "modeller" ? "bg-[#20150F] text-[#FAF7F2]" : "text-[#73675C] hover:text-[#20150F]"
                }`}
              >
                Mağaza Modelleri
              </button>
              <button
                onClick={() => scrollToSection("simulator")}
                className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeNav === "simulator" ? "bg-[#20150F] text-[#FAF7F2]" : "text-[#73675C] hover:text-[#20150F]"
                }`}
              >
                Yatırım Simülatörü
              </button>
              <button
                onClick={() => scrollToSection("academy")}
                className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeNav === "academy" ? "bg-[#20150F] text-[#FAF7F2]" : "text-[#73675C] hover:text-[#20150F]"
                }`}
              >
                Renn Academy
              </button>
              <button
                onClick={() => scrollToSection("live")}
                className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeNav === "live" ? "bg-[#20150F] text-[#FAF7F2]" : "text-[#73675C] hover:text-[#20150F]"
                }`}
              >
                Renn Live
              </button>
              <button
                onClick={() => scrollToSection("growth")}
                className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeNav === "growth" ? "bg-[#20150F] text-[#FAF7F2]" : "text-[#73675C] hover:text-[#20150F]"
                }`}
              >
                12 Ay Yol Haritası
              </button>
              <button
                onClick={() => scrollToSection("surec")}
                className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeNav === "surec" ? "bg-[#20150F] text-[#FAF7F2]" : "text-[#73675C] hover:text-[#20150F]"
                }`}
              >
                5 Adım
              </button>
            </div>

            <button
              onClick={() => scrollToSection("basvuru")}
              className="px-5 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#C59A6F] text-[#20150F] hover:bg-[#D4A373] transition-colors shadow-xs cursor-pointer"
            >
              Renn Partner Ol
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          FLOATING QUICK CTA (Always accessible on bottom-right)
         ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => scrollToSection("basvuru")}
          className="px-5 py-3 rounded-full bg-[#20150F] text-[#FAF7F2] hover:bg-[#C59A6F] hover:text-[#20150F] shadow-xl hover:shadow-2xl transition-all flex items-center gap-2.5 text-xs uppercase tracking-widest font-semibold group cursor-pointer border border-white/20 active:scale-95"
        >
          <Sparkles size={14} className="text-[#C59A6F] group-hover:text-[#20150F]" />
          <span>Renn Partner Ol</span>
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* =========================================================================
          BÖLÜM 1 — HERO / İLK KARŞILAMA
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 px-6 sm:px-8 bg-[#20150F] text-[#FAF7F2] overflow-hidden border-b border-[#33231A]">
        {/* Cinematic Backdrop with Subtle Egyptian Relief Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(197,154,111,0.22)_0%,rgba(32,21,15,0.95)_75%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-7">
            {/* Strategic Tagline Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2E1F18] border border-[#443024] text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
              <Sparkles size={13} />
              <span>FRANCHISE & GİRİŞİMCİLİK ORTAKLIĞI</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
              Kendi Kahve Hikâyeni <br />
              <span className="text-[#C59A6F] italic">Renn ile Başlat.</span>
            </h1>

            {/* Strategic Philosophy Slogan */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-2xl">
              <p className="font-serif-luxury text-lg sm:text-xl text-[#F4EFE6] italic font-medium">
                &ldquo;Yalnızca kahve franchise&apos;ı vermiyoruz. Kahve girişimcileri yetiştiriyoruz.&rdquo;
              </p>
              <span className="block text-[11px] uppercase tracking-widest text-[#BFAFA0] font-sans mt-1">
                — We don&apos;t just franchise coffee. We build coffee entrepreneurs.
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#BFAFA0] max-w-2xl font-light leading-relaxed">
              Renn Coffee ile yalnızca bir kafe açmazsınız. Eğitimden işletme yönetimine, lokasyon analizinden
              sürdürülebilir kârlı büyümeye kadar her aşamada desteklenen kurumsal bir girişimcilik yolculuğuna adım atarsınız.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection("modeller")}
                className="px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#FAF7F2] text-[#20150F] hover:bg-white transition-all shadow-md cursor-pointer"
              >
                Yatırım Modellerini Keşfet
              </button>

              <button
                onClick={() => scrollToSection("basvuru")}
                className="px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#C59A6F] text-[#20150F] hover:bg-[#D4A373] transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Renn Partner Ol</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => setShowDeckModal(true)}
                className="px-5 py-4 text-xs uppercase tracking-widest font-semibold text-[#BFAFA0] hover:text-[#FAF7F2] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download size={14} />
                <span>Tanıtım Dosyası</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual: Architectural Concept Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#443024] shadow-2xl aspect-[4/5] bg-[#2E1F18] group">
              <Image
                src="/brand/renn-manor-hero.jpg"
                alt="Renn Coffee Flagship Mimari"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20150F]/90 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C59A6F] font-semibold">
                    <Building2 size={13} />
                    <span>ÖZGÜN BOHEM MİMARİ</span>
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white">
                    Antik Mısır Dinginliği, Modern İşletmecilik
                  </h3>
                  <p className="text-xs text-[#BFAFA0] leading-relaxed">
                    Misafirlerin sadece kahve içmeye değil, atmosferi ve ambiyansı deneyimlemeye geldiği ikonik mekanlar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM 2 — NEDEN RENN COFFEE? (BİR KAHVE MARKASINDAN DAHA FAZLASI)
         ========================================================================= */}
      <section id="neden-renn" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold flex items-center justify-center gap-2">
            <Compass size={14} />
            <span>HOLİSTİK GİRİŞİMCİLİK SİSTEMİ</span>
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
            Bir Kahve Markasından Daha Fazlası.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
            Başarılı bir kahve işletmesi yalnızca kaliteli ürünlerden oluşmaz. Doğru lokasyon, güçlü operasyon,
            eğitimli ekipler ve sürdürülebilir finansal yönetim gerektirir. Renn Coffee franchise yaklaşımı
            bu bileşenleri bir araya getirmek üzere tasarlanmıştır.
          </p>
        </div>

        {/* 6 Pillars Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className="bg-white rounded-3xl p-8 border border-[#E3D6C8] hover:border-[#C59A6F] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#A5784C] group-hover:bg-[#20150F] group-hover:text-[#FAF7F2] flex items-center justify-center transition-colors">
                      <IconComp size={22} />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${pillar.statusColor}`}
                    >
                      {pillar.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#20150F] group-hover:text-[#C59A6F] transition-colors">
                      {pillar.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#A5784C] mt-0.5">{pillar.tagline}</p>
                  </div>

                  <p className="text-xs text-[#73675C] leading-relaxed">{pillar.shortDesc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0E6D8] flex items-center justify-between text-xs text-[#A5784C] font-semibold">
                  <span>Detayları İncele</span>
                  <ChevronRight size={15} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pillar Detail Modal */}
        {selectedPillar !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPillar(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-xl w-full p-8 sm:p-10 border border-[#E3D6C8] shadow-2xl space-y-6 relative animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#FAF7F2] text-[#73675C] transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3">
                <span
                  className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${pillars[selectedPillar].statusColor}`}
                >
                  {pillars[selectedPillar].status}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#73675C]">
                  Renn Destek Ekosistemi
                </span>
              </div>

              <div>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#20150F]">
                  {pillars[selectedPillar].name}
                </h3>
                <p className="text-sm text-[#A5784C] font-semibold mt-1">
                  {pillars[selectedPillar].tagline}
                </p>
              </div>

              <p className="text-sm text-[#5A4F44] leading-relaxed">
                {pillars[selectedPillar].fullDesc}
              </p>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EAE1D5] space-y-3">
                <span className="text-xs uppercase tracking-wider font-bold text-[#20150F] block">
                  İş Ortaklığına Sunulan Çıktılar:
                </span>
                <ul className="space-y-2">
                  {pillars[selectedPillar].deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#5A4F44]">
                      <Check size={14} className="text-[#C59A6F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#73675C]">
                  Daha fazla bilgi için franchise başvuru formunu doldurabilirsiniz.
                </span>
                <button
                  onClick={() => {
                    setSelectedPillar(null);
                    scrollToSection("basvuru");
                  }}
                  className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all cursor-pointer"
                >
                  Başvuruya Geç
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          BÖLÜM 3 — RENN FLEX / MAĞAZA MODELLERİ (INTERACTIVE COMPARISON)
         ========================================================================= */}
      <section id="modeller" className="py-24 bg-[#F4EFE6] border-y border-[#E6DED4] px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold flex items-center justify-center gap-2">
              <Layers size={14} />
              <span>RENN FLEX KONSEPTLERİ</span>
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
              Her Girişimcinin Hikâyesi Farklıdır.
            </h2>
            <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
              Farklı yatırım hedefleri ve lokasyonlar için tasarlanan Renn Coffee mağaza konseptlerini keşfedin.
            </p>
          </div>

          {/* Segmented Control Switcher */}
          <div className="flex justify-center mb-12">
            <div className="p-1.5 rounded-full bg-white border border-[#DECDBB] shadow-sm flex items-center gap-1 max-w-xl w-full">
              {storeModels.map((model, idx) => {
                const isSelected = selectedModelIndex === idx;
                return (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModelIndex(idx)}
                    className={`flex-1 py-3 px-3 sm:px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
                      isSelected
                        ? "bg-[#20150F] text-[#FAF7F2] shadow-md scale-[1.02]"
                        : "text-[#73675C] hover:text-[#20150F]"
                    }`}
                  >
                    {model.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Model Showcase Card */}
          {(() => {
            const currentModel = storeModels[selectedModelIndex];
            return (
              <div className="bg-white rounded-3xl border border-[#E3D6C8] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">
                {/* Visual Area */}
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-[#20150F]">
                  <Image
                    src={currentModel.image}
                    alt={currentModel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20150F]/85 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-widest text-[#C59A6F] font-bold">
                      {currentModel.badge}
                    </span>
                    <h3 className="font-serif-luxury text-3xl font-bold text-white mt-1">
                      {currentModel.name}
                    </h3>
                  </div>
                </div>

                {/* Details Area */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#FAF7F2] text-[#8C6239] border border-[#DECDBB]">
                        {currentModel.status}
                      </span>
                      <div className="flex items-center gap-4 text-xs font-semibold text-[#73675C]">
                        <span className="flex items-center gap-1.5">
                          <Store size={14} className="text-[#C59A6F]" />
                          Alan: <strong className="text-[#20150F]">{currentModel.minArea}</strong>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users size={14} className="text-[#C59A6F]" />
                          Ekip: <strong className="text-[#20150F]">{currentModel.teamSize}</strong>
                        </span>
                      </div>
                    </div>

                    <h4 className="font-serif-luxury text-2xl font-bold text-[#20150F]">
                      {currentModel.tagline}
                    </h4>

                    <p className="text-sm text-[#5A4F44] leading-relaxed">{currentModel.summary}</p>

                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#73675C] block">
                        Önerilen Lokasyon Tipi:
                      </span>
                      <p className="text-xs text-[#5A4F44] bg-[#FAF7F2] p-3.5 rounded-xl border border-[#EAE1D5]">
                        {currentModel.locations}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#73675C] block">
                        Öne Çıkan Operasyonel Avantajlar:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentModel.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-[#5A4F44]">
                            <Check size={14} className="text-[#C59A6F] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pre-fill CTA */}
                  <div className="pt-6 border-t border-[#F0E6D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-[#73675C]">
                      Bu model için yatırım fizibilitesini birlikte oluşturalım.
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          concept: `${currentModel.name} (${currentModel.badge})`
                        }));
                        scrollToSection("basvuru");
                      }}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#C59A6F] hover:text-[#20150F] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{currentModel.name} İçin Başvur</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM 4 — RENN INSIGHT / İNTERAKTİF YATIRIM SİMÜLATÖRÜ
         ========================================================================= */}
      <section id="simulator" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold flex items-center justify-center gap-2">
            <Sliders size={14} />
            <span>RENN INSIGHT SİMÜLATÖRÜ</span>
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
            Yatırımını Hayal Etme. Verilerle Planla.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
            Renn Coffee yatırım simülatörüyle farklı müşteri ve satış senaryolarını inceleyin,
            başabaş noktanızı ve operasyonel marjlarınızı canlı olarak simüle edin.
          </p>

          {/* 3 Scenario Presets */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="text-xs font-semibold text-[#73675C] mr-2">Senaryo Seçimi:</span>
            <button
              onClick={() => applyScenario("temkinli")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeScenario === "temkinli"
                  ? "bg-[#20150F] text-[#FAF7F2] shadow-sm"
                  : "bg-white border border-[#DECDBB] text-[#73675C] hover:text-[#20150F]"
              }`}
            >
              Temkinli
            </button>
            <button
              onClick={() => applyScenario("baz")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeScenario === "baz"
                  ? "bg-[#20150F] text-[#FAF7F2] shadow-sm"
                  : "bg-white border border-[#DECDBB] text-[#73675C] hover:text-[#20150F]"
              }`}
            >
              Baz (Önerilen)
            </button>
            <button
              onClick={() => applyScenario("iyimser")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeScenario === "iyimser"
                  ? "bg-[#20150F] text-[#FAF7F2] shadow-sm"
                  : "bg-white border border-[#DECDBB] text-[#73675C] hover:text-[#20150F]"
              }`}
            >
              İyimser
            </button>
          </div>
        </div>

        {/* Simulator Container */}
        <div className="bg-white rounded-3xl border border-[#E3D6C8] shadow-xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls Column (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#F0E6D8]">
              <h3 className="font-serif-luxury text-xl font-bold text-[#20150F]">
                İşletme Parametreleri
              </h3>
              <span className="text-[11px] text-[#A5784C] font-semibold uppercase tracking-wider">
                Değiştirilebilir Değerler
              </span>
            </div>

            {/* Slider 1: Günlük Müşteri */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#5A4F44]">Günlük Ortalama Müşteri:</span>
                <span className="text-[#20150F] font-bold text-sm">{dailyCustomers} Kişi / Gün</span>
              </div>
              <input
                type="range"
                min="100"
                max="800"
                step="10"
                value={dailyCustomers}
                onChange={(e) => setDailyCustomers(parseInt(e.target.value))}
                className="w-full accent-[#C59A6F] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#A5998D]">
                <span>100 Kişi</span>
                <span>450 Kişi (Ortalama)</span>
                <span>800 Kişi</span>
              </div>
            </div>

            {/* Slider 2: Ortalama Sepet */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#5A4F44]">Ortalama Sepet Tutarı:</span>
                <span className="text-[#20150F] font-bold text-sm">{avgTicket} ₺</span>
              </div>
              <input
                type="range"
                min="120"
                max="350"
                step="5"
                value={avgTicket}
                onChange={(e) => setAvgTicket(parseInt(e.target.value))}
                className="w-full accent-[#C59A6F] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#A5998D]">
                <span>120 ₺ (Sadece Kahve)</span>
                <span>200 ₺ (Kahve + Atıştırmalık)</span>
                <span>350 ₺ (Gurme Menü)</span>
              </div>
            </div>

            {/* Slider 3: Ürün Maliyeti (COGS %) */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#5A4F44]">Ürün / Hammadde Maliyet Oranı:</span>
                <span className="text-[#20150F] font-bold text-sm">%{cogsPercent}</span>
              </div>
              <input
                type="range"
                min="24"
                max="38"
                step="1"
                value={cogsPercent}
                onChange={(e) => setCogsPercent(parseInt(e.target.value))}
                className="w-full accent-[#C59A6F] cursor-pointer"
              />
              <p className="text-[11px] text-[#8C7E72]">
                Süt, kahve çekirdeği, ambalaj ve fırın malzeme hammadde oranı (%28 - %32 arası sektör standardıdır).
              </p>
            </div>

            {/* 3 Column Grid for Monthly Costs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#73675C] uppercase tracking-wider block">
                  Aylık Kira (₺)
                </label>
                <input
                  type="number"
                  step="5000"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-xs font-bold text-[#20150F] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#73675C] uppercase tracking-wider block">
                  Personel Gideri (₺)
                </label>
                <input
                  type="number"
                  step="5000"
                  value={monthlyStaff}
                  onChange={(e) => setMonthlyStaff(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-xs font-bold text-[#20150F] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#73675C] uppercase tracking-wider block">
                  Diğer Giderler (₺)
                </label>
                <input
                  type="number"
                  step="2000"
                  value={monthlyOther}
                  onChange={(e) => setMonthlyOther(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-xs font-bold text-[#20150F] focus:outline-none"
                  title="Elektrik, su, muhasebe, temizlik"
                />
              </div>
            </div>

            {/* Initial Investment field */}
            <div className="pt-2">
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-[#5A4F44]">Tahmini Başlangıç Yatırım Tutarı (₺):</span>
                <span className="text-[#20150F] font-bold">{formatTL(initialInvestment)}</span>
              </div>
              <input
                type="number"
                step="100000"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-xs font-bold text-[#20150F] focus:outline-none"
                placeholder="Örn: 3.500.000 ₺"
              />
              <span className="text-[10px] text-[#A5998D] block mt-1">
                Geri dönüş süresi (ROI) bu tutar üzerinden hesaplanacaktır.
              </span>
            </div>
          </div>

          {/* Results Column (Right) */}
          <div className="lg:col-span-6 bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#EAE1D5] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E3D6C8]">
                <h3 className="font-serif-luxury text-xl font-bold text-[#20150F]">
                  Hesaplanan Finansal Göstergeler
                </h3>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-[#EFE6DC] text-[#8C6239]">
                  Demo / Simülasyon
                </span>
              </div>

              {/* 2 Main Big Number Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#E3D6C8] shadow-xs space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#73675C] font-semibold block">
                    Tahmini Aylık Ciro
                  </span>
                  <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#20150F]">
                    {formatTL(monthlyRevenue)}
                  </p>
                  <span className="text-[10px] text-[#A5998D] block">
                    {operatingDays} gün × {dailyCustomers} kişi
                  </span>
                </div>

                <div
                  className={`p-5 rounded-2xl border shadow-xs space-y-1 ${
                    monthlyProfit >= 0
                      ? "bg-white border-emerald-300"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <span className="text-[11px] uppercase tracking-wider text-[#73675C] font-semibold block">
                    Aylık Faaliyet Sonucu (EBITDA)
                  </span>
                  <p
                    className={`font-serif-luxury text-2xl sm:text-3xl font-bold ${
                      monthlyProfit >= 0 ? "text-emerald-700" : "text-red-600"
                    }`}
                  >
                    {formatTL(monthlyProfit)}
                  </p>
                  <span className="text-[10px] text-[#5A4F44] block">
                    Faaliyet Marjı: <strong>%{profitMargin}</strong>
                  </span>
                </div>
              </div>

              {/* Break-even & Payback Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-[#E3D6C8]">
                  <span className="text-[#73675C] block">Başabaş Ciro Eşiği:</span>
                  <span className="font-bold text-[#20150F] text-base mt-0.5 block">
                    {formatTL(breakEvenRevenue)}
                  </span>
                  <p className="text-[10px] text-[#A5998D] mt-1">
                    Bu ciro seviyesinde işletme ne kâr ne zarar eder.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E3D6C8]">
                  <span className="text-[#73675C] block">Tahmini Geri Dönüş (ROI):</span>
                  {paybackMonths ? (
                    <span className="font-bold text-[#A5784C] text-base mt-0.5 block">
                      Yaklaşık {paybackMonths} Ay
                    </span>
                  ) : (
                    <span className="font-semibold text-red-500 text-sm mt-0.5 block">
                      Faaliyet sonucu pozitif olmalı
                    </span>
                  )}
                  <p className="text-[10px] text-[#A5998D] mt-1">
                    Başlangıç yatırımının aylık kâr ile amortisman süresi.
                  </p>
                </div>
              </div>

              {/* Visual Expense Breakdown Bar */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-semibold text-[#5A4F44]">
                  <span>Gider ve Kâr Dağılımı:</span>
                  <span>Toplam Ciro: %100</span>
                </div>

                <div className="h-4 rounded-full overflow-hidden flex bg-gray-200">
                  <div
                    style={{ width: `${Math.min(cogsPercent, 100)}%` }}
                    className="bg-[#A5784C]"
                    title={`Ürün Maliyeti: %${cogsPercent}`}
                  />
                  <div
                    style={{
                      width: `${Math.min((monthlyStaff / monthlyRevenue) * 100, 100)}%`
                    }}
                    className="bg-[#C59A6F]"
                    title="Personel Gideri"
                  />
                  <div
                    style={{
                      width: `${Math.min((monthlyRent / monthlyRevenue) * 100, 100)}%`
                    }}
                    className="bg-[#8C6239]"
                    title="Kira Gideri"
                  />
                  <div
                    style={{ width: `${Math.min(royaltyPercent, 100)}%` }}
                    className="bg-[#443024]"
                    title="Royalty & Pazarlama"
                  />
                  {monthlyProfit > 0 && (
                    <div
                      style={{ width: `${Math.min(parseFloat(profitMargin), 100)}%` }}
                      className="bg-emerald-600"
                      title="Net Faaliyet Kârı"
                    />
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-[10px] text-[#73675C] pt-1">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A5784C]" /> Hammadde
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C59A6F]" /> Personel
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8C6239]" /> Kira
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#443024]" /> Royalty (%{royaltyPercent})
                  </span>
                  {monthlyProfit > 0 && (
                    <span className="flex items-center gap-1 text-emerald-800 font-bold">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" /> Faaliyet Kârı (%{profitMargin})
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Print & Action Buttons */}
            <div className="pt-4 border-t border-[#E3D6C8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-[#DECDBB] text-[#20150F] hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer size={14} />
                <span>Simülasyonu Yazdır / PDF</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    message: `Simülatör Tercihleri: ${dailyCustomers} müşteri/gün, ${avgTicket} ₺ sepet, ${formatTL(
                      monthlyRevenue
                    )} ciro hedefi.`
                  }));
                  scrollToSection("basvuru");
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#C59A6F] hover:text-[#20150F] transition-all cursor-pointer"
              >
                Bu Senaryo İle Başvur
              </button>
            </div>
          </div>
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="mt-6 p-4 rounded-2xl bg-[#F4EFE6] border border-[#DECDBB] text-xs text-[#73675C] space-y-1">
          <div className="flex items-center gap-2 text-[#20150F] font-bold">
            <Info size={15} className="text-[#C59A6F]" />
            <span>Yasal Bilgilendirme ve Senaryo Uyarısı</span>
          </div>
          <p className="leading-relaxed">
            Bu hesaplama yalnızca senaryo analizi ve simülasyon amacıyla hazırlanmıştır. Gerçek yatırım tutarları, gelirler,
            giderler ve yatırımın geri dönüş süresi lokasyona, dönemsel enflasyona, ürün miksine ve işletme koşullarına göre
            değişiklik gösterebilir. Sonuçlar herhangi bir kazanç veya kârlılık taahhüdü niteliğinde değildir. Demo /
            Varsayımsal modeldir.
          </p>
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM 5 — RENN ACADEMY (EĞİTİM VE STANDARTLAR)
         ========================================================================= */}
      <section id="academy" className="py-24 bg-[#F4EFE6] border-y border-[#E6DED4] px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold flex items-center justify-center gap-2">
              <GraduationCap size={15} />
              <span>RENN ACADEMY STANDARTLARI</span>
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
              Kahve İşletmeciliği Öğrenilebilir. <br className="hidden sm:inline" />
              Başarı Sistemle Büyür.
            </h2>
            <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
              Renn Coffee Akademisi, baristalardan mağaza müdürlerine ve yatırımcılara kadar tüm ekibi
              şube açılışından önce ve sonra sürekli eğitir.
            </p>
          </div>

          {/* Horizontal Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academyModules.map((mod, idx) => {
              const isSelected = selectedAcademyModule === idx;
              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedAcademyModule(idx)}
                  className={`rounded-3xl p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#C59A6F] shadow-xl ring-2 ring-[#C59A6F]/20"
                      : "bg-[#FAF7F2] border-[#E3D6C8] hover:bg-white hover:border-[#DECDBB]"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#C59A6F] tracking-widest">
                        {mod.code}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#EFE6DC] text-[#73675C]">
                        {mod.hours}
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-xl font-bold text-[#20150F]">
                      {mod.title}
                    </h3>

                    <p className="text-xs text-[#73675C] leading-relaxed">{mod.summary}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F0E6D8] flex items-center justify-between text-xs font-semibold text-[#A5784C]">
                    <span>{isSelected ? "Müfredat Açık" : "Müfredatı Gör"}</span>
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${isSelected ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Module Detailed View */}
          {selectedAcademyModule !== null && (
            <div className="mt-8 bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D6C8] shadow-lg animate-fade-in space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0E6D8] pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C59A6F]">
                    {academyModules[selectedAcademyModule].code} DETAYLI MÜFREDATI
                  </span>
                  <h4 className="font-serif-luxury text-2xl font-bold text-[#20150F] mt-0.5">
                    {academyModules[selectedAcademyModule].title}
                  </h4>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#FAF7F2] text-[#8C6239] border border-[#DECDBB] self-start sm:self-auto">
                  {academyModules[selectedAcademyModule].hours}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {academyModules[selectedAcademyModule].details.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EAE1D5] flex items-start gap-3 text-xs text-[#5A4F44]"
                  >
                    <CheckCircle2 size={16} className="text-[#C59A6F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM 6 — RENN LIVE / SAAS PERFORMANS YÖNETİMİ ÖNİZLEMESİ
         ========================================================================= */}
      <section id="live" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE6DC] border border-[#DECDBB] text-xs font-semibold text-[#8C6239]">
            <BarChart3 size={14} className="text-[#C59A6F]" />
            <span>RENN LIVE KONSEPT ÖNİZLEMESİ — DEMO GÖRÜNÜM</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
            İşletmeni Yalnızca Yönetme. Anla.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
            Renn Coffee franchise işletmecileri için geliştirilen analitik SaaS dashboard deneyimini inceleyin.
            Şubenizin anlık cirosu, sepet ortalaması ve ürün miksi parmaklarınızın ucunda.
          </p>

          {/* Time Filter Toggle */}
          <div className="flex justify-center pt-2">
            <div className="p-1 rounded-full bg-[#FAF7F2] border border-[#DECDBB] inline-flex items-center gap-1">
              <button
                onClick={() => setLivePeriod("gunluk")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  livePeriod === "gunluk"
                    ? "bg-[#20150F] text-[#FAF7F2] shadow-xs"
                    : "text-[#73675C] hover:text-[#20150F]"
                }`}
              >
                Günlük Demo
              </button>
              <button
                onClick={() => setLivePeriod("haftalik")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  livePeriod === "haftalik"
                    ? "bg-[#20150F] text-[#FAF7F2] shadow-xs"
                    : "text-[#73675C] hover:text-[#20150F]"
                }`}
              >
                Haftalık Demo
              </button>
              <button
                onClick={() => setLivePeriod("aylik")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  livePeriod === "aylik"
                    ? "bg-[#20150F] text-[#FAF7F2] shadow-xs"
                    : "text-[#73675C] hover:text-[#20150F]"
                }`}
              >
                Aylık Demo
              </button>
            </div>
          </div>
        </div>

        {/* Mock SaaS Dashboard Box */}
        <div className="bg-[#20150F] text-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#3A281E] shadow-2xl space-y-8">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C59A6F] text-[#20150F] flex items-center justify-center font-bold">
                RC
              </div>
              <div>
                <h4 className="font-serif-luxury text-xl font-bold text-white">
                  Renn Coffee — Şube Performans Portalı
                </h4>
                <span className="text-[11px] text-[#A5998D]">
                  Merkezi Satış & Operasyon Takip Paneli (Canlı Entegrasyon Önizleme)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-mono">POS Senkronizasyonu Aktif</span>
            </div>
          </div>

          {/* Top 4 KPI Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#A5998D] block">
                Toplam Ciro
              </span>
              <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                {currentLive.revenue}
              </p>
              <span className="text-[10px] text-emerald-400 font-bold block">
                {currentLive.revenueGrowth} vs önceki dönem
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#A5998D] block">
                Ortalama Sepet
              </span>
              <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                {currentLive.avgTicket}
              </p>
              <span className="text-[10px] text-[#C59A6F] block">Fiş Başına Tüketim</span>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#A5998D] block">
                İşlem Sayısı
              </span>
              <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                {currentLive.transactions}
              </p>
              <span className="text-[10px] text-[#A5998D] block">Ödenen Sipariş</span>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#A5998D] block">
                COGS / Hammadde
              </span>
              <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                {currentLive.cogs}
              </p>
              <span className="text-[10px] text-emerald-400 block">Fire: {currentLive.waste} (Mükemmel)</span>
            </div>
          </div>

          {/* Product Category Mix Chart */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#C59A6F]">
                Kategori Satış Hacmi Dağılımı
              </span>
              <span className="text-[11px] text-[#A5998D]">
                Misafir Memnuniyet Puanı: <strong className="text-white">{currentLive.rating}</strong>
              </span>
            </div>

            <div className="h-4 rounded-full overflow-hidden flex bg-white/10">
              {currentLive.mix.map((item, mIdx) => (
                <div
                  key={mIdx}
                  style={{ width: `${item.pct}%` }}
                  className={item.color}
                  title={`${item.name}: %${item.pct}`}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-1">
              {currentLive.mix.map((item, mIdx) => (
                <div key={mIdx} className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    <span className="text-white font-bold">%{item.pct}</span>
                  </div>
                  <span className="text-[11px] text-[#A5998D] block truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Notice */}
          <div className="flex items-start gap-2.5 text-xs text-[#A5998D] pt-2">
            <ShieldCheck size={16} className="text-[#C59A6F] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Franchise şubelerimize ait hassas finansal veriler, teknik entegrasyon sonrası yalnızca şube
              yetkilisinin 2FA güvenli girişiyle şifrelenmiş portal üzerinden erişilebilir.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM 7 — RENN GROWTH / İLK 12 AY (ZAMAN ÇİZELGESİ)
         ========================================================================= */}
      <section id="growth" className="py-24 bg-[#F4EFE6] border-y border-[#E6DED4] px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold flex items-center justify-center gap-2">
              <Clock size={14} />
              <span>YAPILANDIRILMIŞ İŞ ORTAKLIĞI TAKVİMİ</span>
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
              Mağaza Açmak Bir Başlangıçtır.
            </h2>
            <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
              Renn Coffee franchise modeli, açılış sürecinden sonraki işletme gelişimini de kapsayan
              yapılandırılmış bir destek yaklaşımıyla tasarlanmıştır.
            </p>
          </div>

          {/* Responsive Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            {growthTimeline.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3D6C8] shadow-xs flex flex-col justify-between space-y-4 relative group hover:border-[#C59A6F] hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#C59A6F]">
                      0{idx + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#8C6239] border border-[#DECDBB]">
                      {item.time}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#A5784C] block">
                    {item.badge}
                  </span>

                  <h3 className="font-serif-luxury text-lg font-bold text-[#20150F] group-hover:text-[#C59A6F] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#73675C] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM 8 — FRANCHISE BAŞVURU SÜRECİ (5 ADIM)
         ========================================================================= */}
      <section id="surec" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold flex items-center justify-center gap-2">
            <CheckCircle2 size={14} />
            <span>ŞEFFAF SÜREÇ YÖNETİMİ</span>
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
            Renn Partner Olmanın 5 Adımı
          </h2>
          <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
            Başvuru anından mağazanızın ilk kahve kokusuna kadar adım adım izlenen profesyonel yol haritası.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {applicationSteps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-[#E3D6C8] space-y-3 relative"
            >
              <span className="font-serif-luxury text-4xl font-bold text-[#C59A6F] block">
                {s.step}
              </span>
              <h3 className="font-serif-luxury text-lg font-bold text-[#20150F]">
                {s.title}
              </h3>
              <p className="text-xs text-[#73675C] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Evaluation Warning Note */}
        <p className="text-center text-xs text-[#8C7E72] mt-8 max-w-xl mx-auto">
          * Ön başvuru yapılması franchise verilmesini veya sözleşme garantisini ifade etmez. Her lokasyon ve girişimci
          profili yönetim kurulumuzca titizlikle değerlendirilir.
        </p>
      </section>

      {/* =========================================================================
          BÖLÜM 9 — ÇOK ADIMLI RENN PARTNER BAŞVURU FORMU
         ========================================================================= */}
      <section id="basvuru" className="py-24 px-6 sm:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#E3D6C8] shadow-2xl space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold">
              GİZLİ VE DOĞRUDAN YÖNETİM DEĞERLENDİRMESİ
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
              Renn Partner Başvuru Formu
            </h2>
            <p className="text-xs sm:text-sm text-[#73675C] max-w-lg mx-auto">
              Kahve girişimciliği yolculuğunuza ilk adımı atın. Form doğrudan Renn Coffee kurucu kuruluna iletilir.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-12 text-center space-y-5 animate-scale-up">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                <CheckCircle2 size={44} />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold">
                  BAŞVURUNUZ BAŞARIYLA ALINDI
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#20150F]">
                  Aramıza Hoş Geldiniz!
                </h3>
              </div>
              <p className="text-sm text-[#5A4F44] max-w-md mx-auto leading-relaxed">
                Franchise genişleme komitemiz başvurunuzu inceledikten sonra 48 saat içinde belirttiğiniz
                iletişim kanallarından sizinle temasa geçecektir.
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DECDBB] inline-block text-xs font-mono text-[#20150F]">
                Başvuru Takip Kodu: <strong>{appRefCode}</strong>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormStep(1);
                  }}
                  className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all cursor-pointer"
                >
                  Yeni Başvuru Başlat
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8">
              {/* Step Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[#73675C]">
                  <span>Adım {formStep} / 4</span>
                  <span className="text-[#A5784C]">
                    {formStep === 1 && "Kişisel Bilgiler"}
                    {formStep === 2 && "Yatırım Tercihleri"}
                    {formStep === 3 && "İşletmecilik Deneyimi"}
                    {formStep === 4 && "Tamamlama & Onay"}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[#FAF7F2] overflow-hidden border border-[#EAE1D5]">
                  <div
                    style={{ width: `${(formStep / 4) * 100}%` }}
                    className="h-full bg-[#C59A6F] transition-all duration-300"
                  />
                </div>
              </div>

              {formError && (
                <div className="p-4 rounded-2xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                  {formError}
                </div>
              )}

              {/* STEP 1: Kişisel Bilgiler */}
              {formStep === 1 && (
                <div className="space-y-6 animate-fade-in">
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
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none font-medium"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none font-medium"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        İkamet Ettiğiniz Şehir *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: İstanbul, Ankara, Kayseri..."
                        value={formData.currentCity}
                        onChange={(e) => setFormData({ ...formData, currentCity: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none font-medium"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Yatırım Tercihleri */}
              {formStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Franchise Açmak İstediğiniz Şehir *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Ankara, İzmir, Kayseri..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        İlçe / Hedef Cadde veya AVM *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Çankaya Tunalı / Bağdat Cad. / AVM veya mülk var"
                        value={formData.targetLocation}
                        onChange={(e) => setFormData({ ...formData, targetLocation: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      İlgilendiğiniz Mağaza Modeli
                    </label>
                    <select
                      value={formData.concept}
                      onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm font-medium text-[#20150F] focus:outline-none"
                    >
                      <option value="RENN START (Kompakt Nokta • 40-75 m²)">
                        1. RENN START (Kompakt Take-Away Noktası • 40-75 m²)
                      </option>
                      <option value="RENN COFFEE (Klasik Mağaza • 90-160 m²)">
                        2. RENN COFFEE (Klasik Cadde & Deneyim Mağazası • 90-160 m²)
                      </option>
                      <option value="RENN FLAGSHIP (Müstakil Villa & Roastery • 250+ m²)">
                        3. RENN FLAGSHIP (Müstakil Villa & Roastery Lab • 250+ m²)
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Ayrılan Yatırım Bütçesi Aralığı
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm font-medium text-[#20150F] focus:outline-none"
                      >
                        <option value="2.000.000 ₺ - 3.500.000 ₺">2.000.000 ₺ - 3.500.000 ₺ (Start Uygun)</option>
                        <option value="3.500.000 ₺ - 6.000.000 ₺">3.500.000 ₺ - 6.000.000 ₺ (Coffee Uygun)</option>
                        <option value="6.000.000 ₺ ve üzeri">6.000.000 ₺ ve üzeri (Flagship & Villa)</option>
                        <option value="Lokasyona göre değerlendirilecek">Lokasyona göre değerlendirilecek</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Planlanan Yatırım Zamanlaması
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm font-medium text-[#20150F] focus:outline-none"
                      >
                        <option value="Hemen (1 Ay İçinde)">Hemen (1 Ay İçinde)</option>
                        <option value="1 - 3 Ay İçerisinde">1 - 3 Ay İçerisinde</option>
                        <option value="3 - 6 Ay İçerisinde">3 - 6 Ay İçerisinde</option>
                        <option value="6 Ay ve Sonrası">6 Ay ve Sonrası</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: İşletmecilik Deneyimi */}
              {formStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Daha önce ticari işletme yönettiniz mi?
                      </label>
                      <select
                        value={formData.hasBusinessExperience}
                        onChange={(e) => setFormData({ ...formData, hasBusinessExperience: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm font-medium text-[#20150F] focus:outline-none"
                      >
                        <option value="Evet, daha önce işletme yönettim">Evet, daha önce işletme yönettim</option>
                        <option value="Halen aktif bir şirketim var">Halen aktif bir şirketim var</option>
                        <option value="Hayır, ilk defa girişim yapıyorum">Hayır, ilk defa girişim yapıyorum</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Yeme - İçme (F&B) sektör tecrübeniz var mı?
                      </label>
                      <select
                        value={formData.hasFnbExperience}
                        onChange={(e) => setFormData({ ...formData, hasFnbExperience: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm font-medium text-[#20150F] focus:outline-none"
                      >
                        <option value="Evet, kafe / restoran tecrübem var">Evet, kafe / restoran tecrübem var</option>
                        <option value="Farklı perakende sektöründe tecrübeliyim">Farklı perakende sektöründe tecrübeliyim</option>
                        <option value="Hayır, sektöre sıfırdan giriyorum">Hayır, sektöre sıfırdan giriyorum</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        İşletmenin başında bizzat bulunacak mısınız?
                      </label>
                      <select
                        value={formData.willManagePersonally}
                        onChange={(e) => setFormData({ ...formData, willManagePersonally: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm font-medium text-[#20150F] focus:outline-none"
                      >
                        <option value="Evet, işimin başında tam zamanlı bulunacağım">
                          Evet, işimin başında tam zamanlı bulunacağım
                        </option>
                        <option value="Profesyonel mağaza müdürü ile çalışacağım">
                          Profesyonel mağaza müdürü ile çalışacağım
                        </option>
                        <option value="Finansal yatırımcı olarak yer alacağım">
                          Finansal yatırımcı olarak yer alacağım
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Girişimcilik ve Büyüme Hedefiniz
                      </label>
                      <select
                        value={formData.storeGoal}
                        onChange={(e) => setFormData({ ...formData, storeGoal: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm font-medium text-[#20150F] focus:outline-none"
                      >
                        <option value="Önce tek mağaza ile başlayıp sonrasında büyümek istiyorum">
                          Önce tek mağaza ile başlayıp sonrasında büyümek istiyorum
                        </option>
                        <option value="Yalnızca tek bir güçlü lokasyon işletmek istiyorum">
                          Yalnızca tek bir güçlü lokasyon işletmek istiyorum
                        </option>
                        <option value="Bölgesel master franchise açılışları hedefliyorum">
                          Bölgesel master franchise açılışları hedefliyorum
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Tamamlama & Onay */}
              {formStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      Eklemek İstediğiniz Notlar & Lokasyon Detayları
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Kendinizden, hedeflediğiniz müşteri profilinden, sahip olduğunuz gayrimenkulden veya sorularınızdan bahsedebilirsiniz..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] focus:border-[#C59A6F] text-sm focus:outline-none"
                    />
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.kvkkConsent}
                        onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                        className="mt-1 w-4 h-4 text-[#20150F] rounded focus:ring-[#C59A6F]"
                      />
                      <span className="text-xs text-[#5A4F44] leading-relaxed">
                        <strong>KVKK Aydınlatma Metnini</strong> okudum; kişisel verilerimin franchise başvuru
                        sürecimin değerlendirilmesi amacıyla işlenmesini ve benimle iletişime geçilmesini kabul ediyorum. *
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.marketingConsent}
                        onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                        className="mt-1 w-4 h-4 text-[#20150F] rounded focus:ring-[#C59A6F]"
                      />
                      <span className="text-xs text-[#73675C] leading-relaxed">
                        Renn Coffee yatırımcı bülteni, yeni lokasyon fırsatları ve kurumsal gelişmeler hakkında
                        tarafıma ticari elektronik ileti gönderilmesine onay veriyorum. (İsteğe bağlı)
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Wizard Navigation Buttons */}
              <div className="pt-6 border-t border-[#F0E6D8] flex items-center justify-between gap-4">
                {formStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#73675C] hover:text-[#20150F] border border-[#DECDBB] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                  >
                    ← Geri
                  </button>
                ) : (
                  <div />
                )}

                {formStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Devam Et</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="px-9 py-4 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#C59A6F] text-[#20150F] hover:bg-[#D4A373] transition-all shadow-lg flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {formLoading ? (
                      <span>İletiliyor...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Başvurumu Gönder</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM 10 — SIK SORULAN SORULAR (FAQ ACCORDION)
         ========================================================================= */}
      <section id="faq" className="py-24 bg-[#F4EFE6] border-t border-[#E6DED4] px-6 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A6F] font-semibold flex items-center justify-center gap-2">
              <HelpCircle size={15} />
              <span>SIK SORULAN SORULAR</span>
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#20150F]">
              Yatırımcıların Merak Ettikleri
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E3D6C8] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif-luxury text-lg font-bold text-[#20150F]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#C59A6F] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5A4F44] leading-relaxed border-t border-[#F0E6D8] animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INVESTOR DECK / DOSYA TALEP MODAL
         ========================================================================= */}
      {showDeckModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowDeckModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-8 border border-[#E3D6C8] shadow-2xl space-y-5 relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDeckModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FAF7F2] text-[#73675C] cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#C59A6F] flex items-center justify-center">
              <FileText size={24} />
            </div>

            <div>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#20150F]">
                Franchise Tanıtım Kitapçığı
              </h3>
              <p className="text-xs text-[#73675C] mt-1 leading-relaxed">
                Renn Coffee kurumsal yatırım dosyası (PDF) ve mağaza şartnameleri hazırlanmaktadır.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE1D5] text-xs text-[#5A4F44] space-y-2">
              <p>
                Resmi tanıtım dosyamız yayınlandığında doğrudan e-posta adresinize iletilmesini isterseniz
                ön başvuru formunu doldurabilir veya bizimle iletişime geçebilirsiniz.
              </p>
              <a
                href="mailto:info@renncoffee.com.tr?subject=Renn%20Coffee%20Franchise%20Tanıtım%20Dosyası%20Talebi"
                className="text-[#C59A6F] font-semibold hover:underline block"
              >
                info@renncoffee.com.tr &rarr;
              </a>
            </div>

            <button
              onClick={() => {
                setShowDeckModal(false);
                scrollToSection("basvuru");
              }}
              className="w-full py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-colors cursor-pointer"
            >
              Başvuru Formuna Git
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
