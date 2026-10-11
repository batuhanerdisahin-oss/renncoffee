"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProducts } from "@/lib/store";
import { Product, INITIAL_PRODUCTS, INITIAL_CATEGORIES } from "@/data/initialData";
import {
  Search,
  QrCode,
  ExternalLink,
  X,
  Coffee,
  Sparkles,
  Info,
  ChevronRight
} from "lucide-react";

export default function MenuPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>("TÜMÜ");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProducts().then(setProducts);

    // Read initial URL category param if present
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const catParam = urlParams.get("cat");
      if (catParam) {
        setSelectedCategory(catParam);
      }
    }
  }, []);

  // Category list
  const categoryNames = useMemo(() => {
    const list = ["TÜMÜ", ...INITIAL_CATEGORIES.map((c) => c.name)];
    return list;
  }, []);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCat =
        selectedCategory === "TÜMÜ" || p.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#20150F]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-14 px-6 sm:px-8 border-b border-[#E6DED4] bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C59A6F] font-semibold flex items-center gap-2">
              <Coffee size={15} />
              <span>DİJİTAL ÜRÜN KATALOĞU</span>
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#20150F]">
              Renn Coffee Menüsü
            </h1>
            <p className="text-sm sm:text-base text-[#6B6056] leading-relaxed">
              Taze çekilmiş %100 Arabica espressolardan antik Mısır esintili şifalı çaylara,
              Kayseri usulü közde Türk kahvesinden Belçika çikolatalı tatlılara kadar 130&apos;u aşkın
              imza gastronomi lezzeti.
            </p>
          </div>

          {/* QR Menu direct access box */}
          <div className="p-4 rounded-2xl bg-white border border-[#E3D6C8] shadow-sm flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#20150F] text-[#FAF7F2] flex items-center justify-center shrink-0">
              <QrCode size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#20150F]">Masa QR Sipariş Sistemi</p>
              <a
                href="https://view.qrall.co/tr?tenantId=3a172511-a4b7-359a-aa0f-ee84a95195a3&channelId=3a172511-db22-4ca5-a9ad-02d2a77391b7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C59A6F] hover:underline font-medium inline-flex items-center gap-1 mt-0.5"
              >
                <span>Adisyo Canlı QR Menü</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Category Filter Controls */}
      <section className="sticky top-20 z-30 bg-[#FAF7F2]/95 backdrop-blur-md py-4 border-b border-[#E6DED4] px-6 sm:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative max-w-md w-full">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#73675C]" />
            <input
              type="text"
              placeholder="Kahve, tatlı, çay veya sandviç ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-[#E3D6C8] focus:border-[#C59A6F] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#73675C] hover:text-[#20150F]"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Result counter */}
          <div className="text-xs text-[#73675C] shrink-0 font-medium">
            Toplam <span className="font-bold text-[#20150F]">{filteredProducts.length}</span> gurme lezzet
          </div>
        </div>

        {/* Category horizontal scrolling bar */}
        <div className="max-w-7xl mx-auto mt-3 overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center gap-2 whitespace-nowrap">
            {categoryNames.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#20150F] text-[#FAF7F2] shadow-sm"
                      : "bg-white text-[#73675C] hover:text-[#20150F] border border-[#E3D6C8] hover:border-[#C59A6F]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid (NO PRICES) */}
      <section className="py-12 px-6 sm:px-8 max-w-7xl mx-auto min-h-[500px]">
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-3">
            <Info size={36} className="mx-auto text-[#C59A6F]" />
            <h3 className="font-serif-luxury text-2xl font-bold text-[#20150F]">
              Aradığınız kriterlere uygun lezzet bulunamadı.
            </h3>
            <p className="text-sm text-[#73675C]">
              Farklı bir arama terimi deneyebilir ya da kategoriyi &ldquo;TÜMÜ&rdquo; olarak seçebilirsiniz.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("TÜMÜ");
              }}
              className="mt-2 px-6 py-2 rounded-full text-xs uppercase font-semibold bg-[#20150F] text-[#FAF7F2]"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setActiveModalProduct(product)}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E3D6C8] hover:border-[#C59A6F] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#F7F3EC]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {product.isFeatured && (
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#C59A6F] text-[#20150F] shadow-xs">
                      İmza Lezzet
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#20150F]/70 text-[#FAF7F2] backdrop-blur-xs">
                    Renn Reçetesi
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A5784C] font-semibold">
                      {product.category}
                    </span>
                    <h3 className="font-serif-luxury text-lg font-bold text-[#20150F] group-hover:text-[#C59A6F] transition-colors mt-0.5 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#73675C] line-clamp-2 mt-1 leading-relaxed">
                      {product.description || "Taze öğütülmüş nitelikli malzemelerle hazırlandı."}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0E6D8] flex items-center justify-between text-xs">
                    <span className="text-[#C59A6F] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Tarifi & Notları İncele</span>
                      <ChevronRight size={13} />
                    </span>
                    <span className="text-[11px] text-[#8C7E72] font-medium">Gastronomi Seçimi</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Product Detail Modal (NO PRICES) */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-[#E3D6C8] animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full bg-[#FAF7F2]">
              <Image
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#20150F]/70 hover:bg-[#20150F] text-white flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#C59A6F] font-semibold">
                  {activeModalProduct.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F4EFE6] text-[#A5784C] border border-[#DECDBB]">
                  Özel Renn Sunumu
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl font-bold text-[#20150F]">
                {activeModalProduct.name}
              </h3>

              <p className="text-sm text-[#6B6056] leading-relaxed">
                {activeModalProduct.description ||
                  "Renn Coffee mutfağında barista ustalığı ve taze çekirdeklerle özel olarak hazırlanmıştır."}
              </p>

              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE1D5] text-xs text-[#73675C] space-y-1">
                <div className="flex items-center gap-1.5 font-medium text-[#20150F]">
                  <Sparkles size={14} className="text-[#C59A6F]" />
                  <span>Alerjen & Servis Notu</span>
                </div>
                <p>Tüm içeceklerimiz laktozsuz veya bitkisel süt seçenekleriyle kişiselleştirilebilir.</p>
              </div>

              <div className="pt-4 border-t border-[#F0E6D8] flex items-center justify-between">
                <a
                  href="https://view.qrall.co/tr?tenantId=3a172511-a4b7-359a-aa0f-ee84a95195a3&channelId=3a172511-db22-4ca5-a9ad-02d2a77391b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#73675C] hover:text-[#20150F]"
                >
                  <span>Masa QR Menüsünde Gör</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#20150F] text-[#FAF7F2] hover:bg-[#38261C] transition-colors cursor-pointer"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
