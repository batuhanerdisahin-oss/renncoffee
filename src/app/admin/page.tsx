"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getSiteSettings,
  updateSiteSettings,
  getProducts,
  updateProduct,
  addProduct,
  getBranches,
  updateBranch,
  getFranchiseApplications,
  getContactMessages,
  FranchiseApplication,
  ContactMessage
} from "@/lib/store";
import {
  SiteSettings,
  Product,
  Branch,
  INITIAL_SETTINGS,
  INITIAL_CATEGORIES
} from "@/data/initialData";
import {
  Lock,
  LogOut,
  LayoutDashboard,
  Coffee,
  FileText,
  MapPin,
  Settings,
  Save,
  CheckCircle2,
  Plus,
  Search,
  Eye,
  Calendar,
  Phone,
  Mail,
  Home,
  AlertCircle
} from "lucide-react";

export default function AdminPage() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  // Navigation tab
  const [activeTab, setActiveTab] = useState<
    "overview" | "settings" | "products" | "branches" | "applications" | "messages"
  >("overview");

  // Data states
  const [settings, setSettings] = useState<SiteSettings>(INITIAL_SETTINGS);
  const [products, setProducts] = useState<Product[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [applications, setApplications] = useState<FranchiseApplication[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  // Product edit modal / state
  const [productSearch, setProductSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isNewProductModal, setIsNewProductModal] = useState(false);
  const [newProductData, setNewProductData] = useState({
    name: "",
    category: "SICAK KAHVELER",
    price: 150,
    description: "",
    image: "/products/placeholder.jpg",
    isFeatured: false,
    isPopular: false,
  });

  // Save feedback state
  const [saveStatus, setSaveStatus] = useState<string>("");

  useEffect(() => {
    // Check session login
    if (typeof window !== "undefined") {
      const session = sessionStorage.getItem("renn_admin_auth");
      if (session === "true") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
    }
  }, [isAuthenticated]);

  const loadAllData = async () => {
    const [s, p, b, a, m] = await Promise.all([
      getSiteSettings(),
      getProducts(),
      getBranches(),
      getFranchiseApplications(),
      getContactMessages(),
    ]);
    setSettings(s);
    setProducts(p);
    setBranches(b);
    setApplications(a);
    setMessages(m);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "renn2026" || passwordInput === "admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("renn_admin_auth", "true");
      setAuthError("");
    } else {
      setAuthError("Geçersiz yönetici parolası! (Varsayılan: renn2026)");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("renn_admin_auth");
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSiteSettings(settings);
    setSaveStatus("Ayarlar başarıyla kaydedildi!");
    setTimeout(() => setSaveStatus(""), 3000);
  };

  const handleSaveProduct = async (p: Product) => {
    await updateProduct(p);
    setProducts(products.map((item) => (item.id === p.id ? p : item)));
    setSelectedProduct(null);
    setSaveStatus("Ürün güncellendi!");
    setTimeout(() => setSaveStatus(""), 3000);
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const created = await addProduct(newProductData);
    setProducts([created, ...products]);
    setIsNewProductModal(false);
    setSaveStatus("Yeni ürün menüye eklendi!");
    setTimeout(() => setSaveStatus(""), 3000);
  };

  const handleSaveBranch = async (b: Branch) => {
    await updateBranch(b);
    setBranches(branches.map((item) => (item.id === b.id ? b : item)));
    setSaveStatus("Şube bilgileri güncellendi!");
    setTimeout(() => setSaveStatus(""), 3000);
  };

  // Login Barrier Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#20150F] flex items-center justify-center p-6 text-[#FAF7F2]">
        <div className="w-full max-w-md bg-[#2C1E16] rounded-3xl p-8 sm:p-10 border border-[#3D2B20] shadow-2xl space-y-6">
          <div className="text-center space-y-3">
            <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden bg-white/5 p-1 border border-[#C59A6F]/30">
              <Image src="/brand/logo-light.png" alt="Renn Coffee" fill className="object-contain" />
            </div>
            <h1 className="font-serif-luxury text-3xl font-bold tracking-wider">
              YÖNETİM PANELİ
            </h1>
            <p className="text-xs text-[#BFAFA0]">
              Lütfen devam etmek için yetkili yönetici parolanızı girin.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 rounded-xl bg-red-900/40 border border-red-500/40 text-red-200 text-xs text-center flex items-center justify-center gap-2">
                <AlertCircle size={14} />
                <span>{authError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#C59A6F] mb-1.5">
                Yönetici Şifresi
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A796C]" />
                <input
                  type="password"
                  placeholder="renn2026"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#20150F] border border-[#443024] focus:border-[#C59A6F] text-sm text-white focus:outline-none"
                  autoFocus
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#C59A6F] text-[#20150F] hover:bg-[#D4A373] transition-all shadow-md font-bold cursor-pointer"
            >
              Giriş Yap
            </button>

            <div className="text-center pt-2">
              <Link href="/" className="text-xs text-[#8A796C] hover:text-[#FAF7F2] transition-colors">
                ← Web Sitesine Dön
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#20150F] flex flex-col">
      {/* Admin Top Header */}
      <header className="bg-[#20150F] text-[#FAF7F2] px-6 py-4 border-b border-[#33231A] flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image src="/brand/logo-light.png" alt="Renn Coffee" fill className="object-contain" />
          </div>
          <div>
            <h1 className="font-serif-luxury text-xl font-bold tracking-wider">
              RENN COFFEE CMS
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-[#C59A6F] -mt-1">
              YÖNETİM PORTALI
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {saveStatus && (
            <div className="px-3.5 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-1.5 animate-pulse">
              <CheckCircle2 size={13} />
              <span>{saveStatus}</span>
            </div>
          )}

          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white/10 hover:bg-white/20 transition-colors text-[#FAF7F2]"
            target="_blank"
          >
            <Home size={14} />
            <span className="hidden sm:inline">Siteyi Görüntüle</span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-red-900/50 hover:bg-red-800 text-red-200 transition-colors cursor-pointer"
          >
            <LogOut size={14} />
            <span className="hidden sm:inline">Çıkış</span>
          </button>
        </div>
      </header>

      {/* Admin Dashboard Body */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 bg-[#F4EFE6] border-r border-[#E6DED4] p-4 flex md:flex-col gap-1 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-[#20150F] text-[#FAF7F2]"
                : "text-[#73675C] hover:bg-[#EAE1D5] hover:text-[#20150F]"
            }`}
          >
            <LayoutDashboard size={16} />
            <span>Genel Bakış</span>
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "settings"
                ? "bg-[#20150F] text-[#FAF7F2]"
                : "text-[#73675C] hover:bg-[#EAE1D5] hover:text-[#20150F]"
            }`}
          >
            <Settings size={16} />
            <span>Ana Sayfa & Metinler</span>
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "products"
                ? "bg-[#20150F] text-[#FAF7F2]"
                : "text-[#73675C] hover:bg-[#EAE1D5] hover:text-[#20150F]"
            }`}
          >
            <Coffee size={16} />
            <span>Menü & Fiyatlar ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("applications")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "applications"
                ? "bg-[#20150F] text-[#FAF7F2]"
                : "text-[#73675C] hover:bg-[#EAE1D5] hover:text-[#20150F]"
            }`}
          >
            <FileText size={16} />
            <span>Franchise Başvuruları ({applications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("messages")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "messages"
                ? "bg-[#20150F] text-[#FAF7F2]"
                : "text-[#73675C] hover:bg-[#EAE1D5] hover:text-[#20150F]"
            }`}
          >
            <Mail size={16} />
            <span>Gelen Mesajlar ({messages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("branches")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === "branches"
                ? "bg-[#20150F] text-[#FAF7F2]"
                : "text-[#73675C] hover:bg-[#EAE1D5] hover:text-[#20150F]"
            }`}
          >
            <MapPin size={16} />
            <span>Şube Yönetimi ({branches.length})</span>
          </button>
        </aside>

        {/* Tab Content Panels */}
        <main className="flex-1 p-6 sm:p-10 max-w-6xl">
          {/* 1. OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="font-serif-luxury text-3xl font-bold text-[#20150F]">
                  Yönetim Paneline Hoş Geldiniz
                </h2>
                <p className="text-sm text-[#73675C] mt-1">
                  Renn Coffee web sitesinin içeriklerini, menüsünü ve gelen yatırım başvurularını buradan yönetebilirsiniz.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-3xl bg-white border border-[#E3D6C8] shadow-xs">
                  <span className="text-xs uppercase tracking-wider text-[#A5784C] font-semibold">
                    Katalogdaki Ürünler
                  </span>
                  <p className="font-serif-luxury text-4xl font-bold text-[#20150F] mt-2">
                    {products.length}
                  </p>
                  <p className="text-xs text-[#73675C] mt-1">Aktif menü kalemi</p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#E3D6C8] shadow-xs">
                  <span className="text-xs uppercase tracking-wider text-[#A5784C] font-semibold">
                    Franchise Başvuruları
                  </span>
                  <p className="font-serif-luxury text-4xl font-bold text-[#20150F] mt-2">
                    {applications.length}
                  </p>
                  <p className="text-xs text-[#73675C] mt-1">Yatırımcı adayı</p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#E3D6C8] shadow-xs">
                  <span className="text-xs uppercase tracking-wider text-[#A5784C] font-semibold">
                    İletişim Mesajları
                  </span>
                  <p className="font-serif-luxury text-4xl font-bold text-[#20150F] mt-2">
                    {messages.length}
                  </p>
                  <p className="text-xs text-[#73675C] mt-1">Gelen geri bildirim</p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#E3D6C8] shadow-xs">
                  <span className="text-xs uppercase tracking-wider text-[#A5784C] font-semibold">
                    Aktif Şubeler
                  </span>
                  <p className="font-serif-luxury text-4xl font-bold text-[#20150F] mt-2">
                    {branches.length}
                  </p>
                  <p className="text-xs text-[#73675C] mt-1">Kocasinan / Kayseri</p>
                </div>
              </div>

              {/* Recent Applications Preview */}
              <div className="bg-white rounded-3xl p-6 border border-[#E3D6C8] shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#20150F]">
                    Son Franchise Başvuruları
                  </h3>
                  <button
                    onClick={() => setActiveTab("applications")}
                    className="text-xs font-semibold text-[#C59A6F] hover:underline"
                  >
                    Tümünü Gör →
                  </button>
                </div>

                {applications.slice(0, 3).map((app, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE1D5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-bold text-[#20150F] text-sm">{app.fullName}</span>
                      <span className="text-[#73675C] ml-2">({app.city} - {app.targetLocation || "Lokasyon belirtilmedi"})</span>
                      <p className="text-[#73675C] mt-0.5">{app.phone} • {app.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#EFE6DC] font-semibold text-[#20150F]">
                        {app.budget}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. SETTINGS TAB */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif-luxury text-3xl font-bold text-[#20150F]">
                  Ana Sayfa Metinleri & Marka Bilgileri
                </h2>
                <p className="text-sm text-[#73675C] mt-1">
                  Ana sayfadaki sloganlar, 3D scroll metinleri ve kurumsal iletişim bilgileri.
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="bg-white rounded-3xl p-8 border border-[#E3D6C8] shadow-xs space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      Marka Başlığı
                    </label>
                    <input
                      type="text"
                      value={settings.brandName}
                      onChange={(e) => setSettings({ ...settings, brandName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      Hero Başlığı
                    </label>
                    <input
                      type="text"
                      value={settings.heroTitle}
                      onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                    Hero Alt Açıklaması
                  </label>
                  <textarea
                    rows={2}
                    value={settings.heroSubtitle}
                    onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      Scroll Bölüm I Sloganı
                    </label>
                    <input
                      type="text"
                      value={settings.storyQuote1}
                      onChange={(e) => setSettings({ ...settings, storyQuote1: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      Scroll Bölüm I Alt Sloganı
                    </label>
                    <input
                      type="text"
                      value={settings.storyQuote2}
                      onChange={(e) => setSettings({ ...settings, storyQuote2: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      Editorial Mekân Başlığı
                    </label>
                    <input
                      type="text"
                      value={settings.editorialTitle}
                      onChange={(e) => setSettings({ ...settings, editorialTitle: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      Telefon Numarası
                    </label>
                    <input
                      type="text"
                      value={settings.phone}
                      onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Save size={15} />
                  <span>Değişiklikleri Kaydet</span>
                </button>
              </form>
            </div>
          )}

          {/* 3. PRODUCTS TAB */}
          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif-luxury text-3xl font-bold text-[#20150F]">
                    Menü & Fiyat Yönetimi
                  </h2>
                  <p className="text-sm text-[#73675C] mt-1">
                    Toplam {products.length} ürün listeleniyor. Fiyatları ve ürün detaylarını güncelleyin.
                  </p>
                </div>

                <button
                  onClick={() => setIsNewProductModal(true)}
                  className="px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-sm"
                >
                  <Plus size={16} />
                  <span>Yeni Ürün Ekle</span>
                </button>
              </div>

              {/* Search input */}
              <div className="relative max-w-md">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#73675C]" />
                <input
                  type="text"
                  placeholder="Ürün adı veya kategori ara..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-[#E3D6C8] text-xs sm:text-sm focus:outline-none"
                />
              </div>

              {/* Product Table */}
              <div className="bg-white rounded-3xl border border-[#E3D6C8] overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#FAF7F2] text-[#73675C] uppercase tracking-wider font-semibold border-b border-[#EAE1D5]">
                      <tr>
                        <th className="p-4">Görsel</th>
                        <th className="p-4">Ürün Adı</th>
                        <th className="p-4">Kategori</th>
                        <th className="p-4">Fiyat</th>
                        <th className="p-4">Öne Çıkan</th>
                        <th className="p-4 text-right">İşlem</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F0E6D8]">
                      {products
                        .filter(
                          (p) =>
                            !productSearch ||
                            p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
                            p.category.toLowerCase().includes(productSearch.toLowerCase())
                        )
                        .slice(0, 50)
                        .map((product) => (
                          <tr key={product.id} className="hover:bg-[#FAF7F2]/50 transition-colors">
                            <td className="p-4">
                              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#FAF7F2]">
                                <Image src={product.image} alt={product.name} fill className="object-cover" />
                              </div>
                            </td>
                            <td className="p-4 font-semibold text-[#20150F]">
                              {product.name}
                            </td>
                            <td className="p-4 text-[#73675C]">
                              {product.category}
                            </td>
                            <td className="p-4 font-bold text-[#20150F] text-sm">
                              {product.price} ₺
                            </td>
                            <td className="p-4">
                              {product.isFeatured ? (
                                <span className="px-2.5 py-1 rounded-full bg-[#EBF6EE] text-[#2E7D32] text-[10px] font-bold">
                                  Evet
                                </span>
                              ) : (
                                <span className="text-[#A5998D] text-[10px]">Hayır</span>
                              )}
                            </td>
                            <td className="p-4 text-right">
                              <button
                                onClick={() => setSelectedProduct(product)}
                                className="px-3.5 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE1D5] text-[#20150F] font-semibold transition-colors cursor-pointer"
                              >
                                Düzenle
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 4. APPLICATIONS TAB */}
          {activeTab === "applications" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif-luxury text-3xl font-bold text-[#20150F]">
                  Franchise Başvuruları ({applications.length})
                </h2>
                <p className="text-sm text-[#73675C] mt-1">
                  Web sitesi üzerinden form dolduran yatırımcı adaylarının detayları.
                </p>
              </div>

              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id || app.fullName} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D6C8] shadow-xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0E6D8] pb-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#A5784C] font-semibold">
                          Aday Bilgisi
                        </span>
                        <h3 className="font-serif-luxury text-2xl font-bold text-[#20150F]">
                          {app.fullName}
                        </h3>
                        {app.concept && (
                          <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-[#EFE6DC] text-[#8C6239] text-[11px] font-semibold border border-[#DECDBB]">
                            {app.concept}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#F4EFE6] text-[#20150F] text-xs font-bold">
                          {app.budget}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
                          {app.status === "reviewed" ? "İncelendi" : "Beklemede"}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div>
                        <span className="text-[#8A796C] block">Hedef Şehir / İlçe:</span>
                        <span className="font-semibold text-[#20150F] text-sm mt-0.5 block">{app.city} {app.targetLocation && `— ${app.targetLocation}`}</span>
                      </div>
                      <div>
                        <span className="text-[#8A796C] block">Telefon:</span>
                        <a href={`tel:${app.phone}`} className="font-semibold text-[#20150F] text-sm mt-0.5 block hover:text-[#C59A6F]">{app.phone}</a>
                      </div>
                      <div>
                        <span className="text-[#8A796C] block">E-posta:</span>
                        <a href={`mailto:${app.email}`} className="font-semibold text-[#20150F] text-sm mt-0.5 block hover:text-[#C59A6F]">{app.email}</a>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAF7F2] text-xs space-y-1.5 border border-[#EAE1D5]">
                      <span className="font-bold text-[#20150F]">Sektör Tecrübesi:</span> {app.experience}
                      {app.message && (
                        <p className="text-[#6B6056] pt-1 leading-relaxed">
                          <span className="font-bold text-[#20150F]">Adayın Notu:</span> {app.message}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. MESSAGES TAB */}
          {activeTab === "messages" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif-luxury text-3xl font-bold text-[#20150F]">
                  İletişim Formu Mesajları ({messages.length})
                </h2>
                <p className="text-sm text-[#73675C] mt-1">
                  İletişim sayfasından misafirler tarafından iletilen geri bildirim ve talepler.
                </p>
              </div>

              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id || msg.fullName} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D6C8] shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-[#A5784C] font-semibold">
                        {msg.subject}
                      </span>
                      <span className="text-xs text-[#8A796C]">
                        {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString("tr-TR") : "Yeni"}
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-xl font-bold text-[#20150F]">
                      {msg.fullName}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-[#73675C]">
                      <span>{msg.email}</span>
                      {msg.phone && <span>• {msg.phone}</span>}
                    </div>

                    <p className="text-xs sm:text-sm text-[#5A4F44] leading-relaxed pt-2 border-t border-[#F0E6D8]">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. BRANCHES TAB */}
          {activeTab === "branches" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif-luxury text-3xl font-bold text-[#20150F]">
                  Şube Bilgileri
                </h2>
                <p className="text-sm text-[#73675C] mt-1">
                  Şube adres, telefon, çalışma saatleri ve galeri içerikleri.
                </p>
              </div>

              {branches.map((b) => (
                <div key={b.id} className="bg-white rounded-3xl p-8 border border-[#E3D6C8] shadow-xs space-y-6">
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#20150F]">
                    {b.name}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Şube Adı
                      </label>
                      <input
                        type="text"
                        value={b.name}
                        onChange={(e) => {
                          const updated = { ...b, name: e.target.value };
                          setBranches(branches.map((item) => (item.id === b.id ? updated : item)));
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                        Telefon
                      </label>
                      <input
                        type="text"
                        value={b.phone}
                        onChange={(e) => {
                          const updated = { ...b, phone: e.target.value };
                          setBranches(branches.map((item) => (item.id === b.id ? updated : item)));
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      Adres
                    </label>
                    <input
                      type="text"
                      value={b.address}
                      onChange={(e) => {
                        const updated = { ...b, address: e.target.value };
                        setBranches(branches.map((item) => (item.id === b.id ? updated : item)));
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#73675C] mb-2">
                      Çalışma Saatleri
                    </label>
                    <input
                      type="text"
                      value={b.workingHours}
                      onChange={(e) => {
                        const updated = { ...b, workingHours: e.target.value };
                        setBranches(branches.map((item) => (item.id === b.id ? updated : item)));
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm focus:outline-none"
                    />
                  </div>

                  <button
                    onClick={() => handleSaveBranch(b)}
                    className="px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Save size={15} />
                    <span>Şube Bilgilerini Kaydet</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Edit Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-[#E3D6C8] shadow-2xl space-y-4">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#20150F]">
              Ürünü Düzenle
            </h3>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#73675C] mb-1">Ürün Adı</label>
              <input
                type="text"
                value={selectedProduct.name}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#73675C] mb-1">Fiyat (₺)</label>
                <input
                  type="number"
                  value={selectedProduct.price}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, price: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#73675C] mb-1">Kategori</label>
                <select
                  value={selectedProduct.category}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm"
                >
                  {INITIAL_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#73675C] mb-1">Açıklama</label>
              <textarea
                rows={3}
                value={selectedProduct.description}
                onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm"
              />
            </div>

            <div className="flex items-center gap-6 pt-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-[#20150F] cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedProduct.isFeatured || false}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, isFeatured: e.target.checked })}
                />
                <span>Öne Çıkan Ürün</span>
              </label>

              <label className="flex items-center gap-2 text-xs font-semibold text-[#20150F] cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedProduct.isPopular || false}
                  onChange={(e) => setSelectedProduct({ ...selectedProduct, isPopular: e.target.checked })}
                />
                <span>Popüler</span>
              </label>
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-[#F0E6D8]">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2 rounded-full text-xs font-semibold text-[#73675C] hover:bg-[#FAF7F2]"
              >
                İptal
              </button>
              <button
                onClick={() => handleSaveProduct(selectedProduct)}
                className="px-6 py-2 rounded-full text-xs uppercase font-semibold bg-[#20150F] text-[#FAF7F2]"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Product Modal */}
      {isNewProductModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreateProduct} className="bg-white rounded-3xl p-8 max-w-lg w-full border border-[#E3D6C8] shadow-2xl space-y-4">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#20150F]">
              Yeni Ürün Ekle
            </h3>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#73675C] mb-1">Ürün Adı *</label>
              <input
                type="text"
                required
                placeholder="Örn: CARAMEL MACCHIATO"
                value={newProductData.name}
                onChange={(e) => setNewProductData({ ...newProductData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#73675C] mb-1">Fiyat (₺) *</label>
                <input
                  type="number"
                  required
                  value={newProductData.price}
                  onChange={(e) => setNewProductData({ ...newProductData, price: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#73675C] mb-1">Kategori</label>
                <select
                  value={newProductData.category}
                  onChange={(e) => setNewProductData({ ...newProductData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm"
                >
                  {INITIAL_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#73675C] mb-1">Açıklama</label>
              <textarea
                rows={3}
                placeholder="Ürünün içeriği, çekirdek tipi vb."
                value={newProductData.description}
                onChange={(e) => setNewProductData({ ...newProductData, description: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DECDBB] text-sm"
              />
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-[#F0E6D8]">
              <button
                type="button"
                onClick={() => setIsNewProductModal(false)}
                className="px-5 py-2 rounded-full text-xs font-semibold text-[#73675C] hover:bg-[#FAF7F2]"
              >
                İptal
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-full text-xs uppercase font-semibold bg-[#20150F] text-[#FAF7F2]"
              >
                Ekle
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
