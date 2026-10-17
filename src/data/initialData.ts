// Renn Coffee initial database content
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  isPopular?: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  description: string;
}

export interface Branch {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  address: string;
  district: string;
  city: string;
  phone: string;
  workingHours: string;
  mapUrl: string;
  embedMapUrl: string;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
}

export interface SiteSettings {
  brandName: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  storyQuote1: string;
  storyQuote2: string;
  editorialTitle: string;
  editorialSubtitle: string;
  phone: string;
  email: string;
  instagram: string;
  address: string;
}

export const INITIAL_SETTINGS: SiteSettings = {
  brandName: "RENN COFFEE",
  heroTitle: "Bir fincandan daha fazlası.",
  heroSubtitle: "Kahvenin, lezzetin ve iyi hissettiren anların buluşma noktası.",
  heroTagline: "Antik dokunuşlar, modern kahve ritüelleri ve kusursuz gastronomi.",
  storyQuote1: "Her fincanın bir hikâyesi var.",
  storyQuote2: "Her hikâyenin bir buluşma noktası.",
  editorialTitle: "Your Place. Your Coffee. Your Moment.",
  editorialSubtitle: "Antik Mısır ezgileri ve sıcak ahşap dokuların harmanlandığı, zamanı yavaşlatan bir sığınak.",
  phone: "+90 544 582 38 38",
  email: "info@renncoffee.com.tr",
  instagram: "https://www.instagram.com/renncoffeetr/",
  address: "Erciyesevler Mah. Şehit Yzb. Levent Çetinkaya Sok. No: 6/B, Kocasinan / Kayseri"
};

export const INITIAL_BRANCHES: Branch[] = [
  {
    id: "branch-kocasinan",
    name: "Renn Coffee — Kocasinan",
    slug: "kocasinan",
    tagline: "Antik Mısır Temalı Amiral Mağaza & Roastery",
    address: "Erciyesevler Mah. Şehit Yzb. Levent Çetinkaya Sok. No: 6/B",
    district: "Kocasinan",
    city: "Kayseri",
    phone: "+90 544 582 38 38",
    workingHours: "Her Gün: 12:00 – 00:00",
    mapUrl: "https://maps.google.com/?q=Renn+Coffee+Kayseri",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.886071488582!2d35.5112!3d38.7302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b123456789%3A0xabcdef!2sRenn+Coffee!5e0!3m2!1str!2str!4v1",
    image: "/venue/venue-storefront.jpg",
    gallery: [
      "/venue/venue-storefront.jpg",
      "/venue/venue-relief-wall.jpg",
      "/venue/venue-pyramid-sphinx.jpg",
      "/venue/venue-garden-palms.jpg",
      "/venue/venue-garden-evening.jpg",
      "/venue/venue-fireplace.jpg",
      "/venue/venue-winter-garden.jpg",
      "/venue/venue-booths.jpg",
      "/venue/venue-statues-niche.jpg",
      "/venue/venue-thoth-cup.jpg",
      "/venue/venue-obelisk-pillar.jpg",
      "/venue/venue-patio.jpg",
      "/venue/venue-indoor-perspective.jpg",
      "/venue/venue-banquette.jpg",
      "/venue/venue-mirrors.jpg",
      "/venue/venue-garden-lounge.jpg",
      "/venue/venue-pyramid-window.jpg",
      "/venue/venue-winter-patio.jpg"
    ],
    features: [
      "Antik Mısır Rölyef Tasarımı",
      "Özel İthal %100 Arabica Kahveler",
      "El Yapımı Seramik Fincanlar",
      "Ferah İç Mekan & Bahçe Alanı",
      "Yüksek Hızlı Fiber Wi-Fi",
      "Take-Away & Gel-Al Servisi"
    ],
    description: "Kayseri'nin en özgün üçüncü nesil kahve deneyimini, Antik Mısır mitolojisi ve sıcak bohem mimariyle buluşturan amiral mağazamız. Taze kavrulmuş çekirdekler, imza reçeteler ve sanatsal tatlılar sizi bekliyor."
  }
];

export const INITIAL_CATEGORIES: Category[] = [
  {
    "id": "cat_1",
    "name": "HAFTANIN TAVSİYELERİ",
    "count": 11,
    "description": "Renn Coffee mutfağından özenle sunulan seçkin tatlar."
  },
  {
    "id": "cat_2",
    "name": "SICAK KAHVELER",
    "count": 23,
    "description": "Taze çekilmiş %100 Arabica çekirdeklerinden hazırlanan sıcak espresso ve latte lezzetleri."
  },
  {
    "id": "cat_3",
    "name": "SOĞUK KAHVELER",
    "count": 25,
    "description": "Buzla demlenen ferahlatıcı soğuk kahveler ve özel aromalı buzlu latte çeşitleri."
  },
  {
    "id": "cat_4",
    "name": "FİLTRE KAHVELER",
    "count": 4,
    "description": "Özenle seçilmiş yöresel çekirdeklerin taze demleme teknikleriyle fincana dökülen halleri."
  },
  {
    "id": "cat_5",
    "name": "TÜRK KAHVELERİ",
    "count": 4,
    "description": "Geleneksel közde pişirme ve Mardin yöresinden özel kakuleli/çilekli reçeteler."
  },
  {
    "id": "cat_6",
    "name": "SPECIAL ÇAYLAR",
    "count": 5,
    "description": "Antik Mısır mitolojisinden ilham alan Kleopatra, Nefertum ve Ramses bitki harmanları."
  },
  {
    "id": "cat_7",
    "name": "ÇAYLAR",
    "count": 6,
    "description": "Taze demlenmiş geleneksel siyah çay ve özenle kurutulmuş bitki çayları."
  },
  {
    "id": "cat_8",
    "name": "SICAK İÇECEKLER",
    "count": 5,
    "description": "İsveç çikolatası, hakiki sahlep ve kadifemsi sıcak çikolata dokuları."
  },
  {
    "id": "cat_9",
    "name": "YAZA ÖZEL",
    "count": 11,
    "description": "Taze meyveler, hibiscus ve ferahlatıcı nane ile hazırlanan buz gibi içecekler."
  },
  {
    "id": "cat_10",
    "name": "FROZEN",
    "count": 8,
    "description": "Aura Renn, Rosetta ve tropik meyvelerin buzla pürüzsüzleştiği yaz klasiği."
  },
  {
    "id": "cat_11",
    "name": "MILKSHAKES",
    "count": 5,
    "description": "Hakiki İtalyan karameli, çilek ve bisküviyle hazırlanan yoğun kıvamlı milkshakeler."
  },
  {
    "id": "cat_12",
    "name": "SANDVİÇLER",
    "count": 3,
    "description": "Taze çıtır panini ekmeğinde dana jambon, tavuk fileto ve peynirli fırınlanmış lezzetler."
  },
  {
    "id": "cat_13",
    "name": "TATLILAR",
    "count": 7,
    "description": "Meşhur San Sebastian cheesecake, Callebaut çikolatalı brownieler ve kadayıflı cup."
  },
  {
    "id": "cat_14",
    "name": "KUTU İÇECEKLER",
    "count": 5,
    "description": "Renn Coffee mutfağından özenle sunulan seçkin tatlar."
  },
  {
    "id": "cat_15",
    "name": "SALEWALL",
    "count": 4,
    "description": "Renn Coffee amblemli özel el yapımı seramik fincanlar ve kokulu tasarım mumlar."
  },
  {
    "id": "cat_16",
    "name": "EKSTRALAR",
    "count": 5,
    "description": "Renn Coffee mutfağından özenle sunulan seçkin tatlar."
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    "id": "prod_1",
    "name": "AMERICANO",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 160,
    "description": "%100 arabica çekirdeklerinden taze öğütülen renn kahvesi ile buluşmanın tam zamanı! İsteğe bağlı olarak sıcak ya da soğuk olarak seyreltilmiş bir espresso...",
    "image": "/products/prod_877e6c079ecd.jpg",
    "isPopular": true,
    "isFeatured": false
  },
  {
    "id": "prod_2",
    "name": "NEFERTUM",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 205,
    "description": "(Demlenme süresi: 8-10 dakika) Güneşin ilk ışıkları ve Kutsal Nil'nin şifalı suyundan beslenen Mısır lotus çiçeğinin hoş kokusu eşliğinde kızılcık, turna yemişi, vanilya ve birçok özel karışımlı bitki yapraklarından gelen 19. Hanedanın şifalı çayı...",
    "image": "/products/prod_5e957b95b349.jpg",
    "isPopular": false,
    "isFeatured": true
  },
  {
    "id": "prod_3",
    "name": "KLEOPATRA ÇAYI",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 205,
    "description": "(Demlenme süresi: 2-3 dakika) Mısır Ptolemaios Krallığıʼnın en güçlü ve en güzel kraliçesi Kleopatra'nın güzellik çayından esinlenildi... Çilek, ananas, gül ve papaya bitkilerinden gelen hafif, ferah ve mayhoş tatlar eşliğinde unutulmayacak bir lezzet...",
    "image": "/products/prod_26bd29aa93f0.jpg",
    "isPopular": true,
    "isFeatured": false
  },
  {
    "id": "prod_4",
    "name": "SALTED CARAMEL LATTE",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 210,
    "description": "Espresso, tuzlu karamel sosu ve buharla ısıtılmış süt ile hazırlandı ve kahvesini tatlı sevenler için buluştu ve krema ile süslendi.",
    "image": "/products/prod_49c79dfd6f3a.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_5",
    "name": "LOTUS LATTE",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 210,
    "description": "Renn'in zengin espressosu ile lotus bisküvisinin sevdiğimiz tadı şimdi bardaklarınızda...",
    "image": "/products/prod_bcc8afb6518c.jpg",
    "isPopular": true,
    "isFeatured": true
  },
  {
    "id": "prod_6",
    "name": "PUMPKIN SPICE LATTE",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 210,
    "description": "Renn'in zengin espressosu ile özel pumpkin spice aroması, buharla ısıtılmış kadifemsi süt ve süt köpüğünün buluşmasıyla ortaya çıkan eşsiz lezzet....",
    "image": "/products/prod_81039064c908.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_7",
    "name": "CREME BRULEE",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 230,
    "description": "",
    "image": "/products/prod_cfc51ae888d8.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_8",
    "name": "COCO CHOCO",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 220,
    "description": "İsveç çikolatası, hindistan cevizi ve süt",
    "image": "/products/prod_480a20da2c76.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_9",
    "name": "BLUEBERRY WHITE MOCHA",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 230,
    "description": "Espresso, beyaz çikolata sosu, blueberry aroması ve buharla ısıtılmış süt ile hazırlandı ve kahvesini tatlı sevenler için buluştu ve krema ile süslendi.",
    "image": "/products/prod_08fff18306a7.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_10",
    "name": "SAN SEBASTİAN",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 330,
    "description": "San Sebastian; Diğer adıyla Bask Cheesecake veya Yanık Cheesecake olarak bilinen, İspanya,nın önde gelen tatlarından biridir.",
    "image": "/products/prod_5566a6132e55.jpg",
    "isPopular": true,
    "isFeatured": true
  },
  {
    "id": "prod_11",
    "name": "COOKIES BROWNİ",
    "category": "HAFTANIN TAVSİYELERİ",
    "price": 315,
    "description": "Damla Çikolatalı Cookie ve Browni'nin Eşsiz Uyumu. Dilerseniz üzerine eritilmiş çikolata ilave ederek bu lezzeti ikiye katlayabilirsiniz.",
    "image": "/products/prod_333b6a2bc3ea.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_12",
    "name": "PANİNİ DANA JAMBON",
    "category": "SANDVİÇLER",
    "price": 190,
    "description": "Dana Jambon, Köz Kapya Biber, Cheddar Peynir, Kaşar Peynir",
    "image": "/products/prod_bc174a554618.jpg",
    "isPopular": true,
    "isFeatured": false
  },
  {
    "id": "prod_13",
    "name": "PANİNİ TAVUK FİLETO",
    "category": "SANDVİÇLER",
    "price": 190,
    "description": "Tavuk Fileto, Rende Kaşar Peynir, Cheddar Peynir, Acuka Sos",
    "image": "/products/prod_2f6e399875f3.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_14",
    "name": "ÜÇ PEYNİRLİ BAGEL",
    "category": "SANDVİÇLER",
    "price": 150,
    "description": "Labne, Kaşar Peynir, Cheddar Peynir",
    "image": "/products/prod_982870d2341e.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_15",
    "name": "TÜRK KAHVESİ",
    "category": "TÜRK KAHVELERİ",
    "price": 120,
    "description": "Kayseri'nin vazgeçilmezi Billur kahvesi ile yorumlanan geleneksel Türk Kahvesi...",
    "image": "/products/prod_334fca284eb7.jpg",
    "isPopular": true,
    "isFeatured": false
  },
  {
    "id": "prod_16",
    "name": "(DİBEK) SPECİAL MARDİN KAHVESİ",
    "category": "TÜRK KAHVELERİ",
    "price": 125,
    "description": "Mardin'den gelen özel kahvemiz, ekstra kakule bitkisi ile zenginleştirilmiş ve 8 farklı kahve karışımını içerir. Yumuşak içimli yapısı ile her fincan Merini kahvesi, sizi özel bir tat yolculuğuna çıkarır.",
    "image": "/products/prod_625658c2dc3b.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_17",
    "name": "DAĞ ÇİLEKLİ SPECİAL MARDİN KAHVESİ",
    "category": "TÜRK KAHVELERİ",
    "price": 125,
    "description": "Mardin'den gelen özel kahvemiz, dağ çileği lezzetine ek olarak kakule bitkisi ile zenginleştirilmiş ve 6 farklı kahve karışımını içerir. Eşsiz dağ çileği tadı ve yumuşak içimli yapısı ile sizi özel bir tat yolculuğuna çıkarır.",
    "image": "/products/prod_41400e262da2.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_18",
    "name": "DAMLA SAKIZLI TÜRK KAHVESİ",
    "category": "TÜRK KAHVELERİ",
    "price": 125,
    "description": "Geleneksel Türk kahvesinin eşsiz lezzetini damla sakızının muhteşem aromasıyla birleştiren özel bir kahve çeşididir...",
    "image": "/products/prod_8f2aa54a5b10.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_19",
    "name": "BROWNİ BEYAZ ÇİKOLATALI",
    "category": "TATLILAR",
    "price": 340,
    "description": "Beyaz damla çikolata, Beyaz callebaut ve Browni'nin eşsiz uyumu. Dilerseniz üzerine eritilmiş çikolata ilave ederek bu lezzeti ikiye katlayabilirsiniz.",
    "image": "/products/prod_816ba3f5917d.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_20",
    "name": "SAN SEBASTİAN",
    "category": "TATLILAR",
    "price": 330,
    "description": "San Sebastian; Diğer adıyla Bask Cheesecake veya Yanık Cheesecake olarak bilinen, İspanya,nın önde gelen tatlarından biridir.",
    "image": "/products/prod_bc55d761e8cf.jpg",
    "isPopular": true,
    "isFeatured": true
  },
  {
    "id": "prod_21",
    "name": "ANTEP FISTIKLI SAN SEBASTİAN",
    "category": "TATLILAR",
    "price": 330,
    "description": "Sade tüketilmesi önerilir, isteğe göre üzerine ilave sütlü çikolata tercih edilebilir. San Sebastian; Diğer adıyla Bask Cheesecake veya Yanık Cheesecake olarak bilinen, İspanya,nın önde gelen tatlarından biridir.",
    "image": "/products/prod_d8ccd1e9a138.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_22",
    "name": "FINDIKLI KADAYIFLI CUP",
    "category": "TATLILAR",
    "price": 275,
    "description": "Callebaut Çikolata, Kadayıf ve Fındık Ezmeli Krema",
    "image": "/products/prod_b70e4f552ab2.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_23",
    "name": "BEYAZ ÇİKOLATALI CUP",
    "category": "TATLILAR",
    "price": 260,
    "description": "Bisküvi, Krema ve Beyaz Callebaut Çikolata",
    "image": "/products/prod_b459cbdd9b55.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_24",
    "name": "BROWNİ",
    "category": "TATLILAR",
    "price": 315,
    "description": "Klasik sevenler için meşhur çikolatalı kek. Dilerseniz üzerine eritilmiş çikolata ilave ederek bu lezzeti ikiye katlayabilirsiniz.",
    "image": "/products/prod_4aef93a7383d.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_25",
    "name": "COOKIES BROWNİ",
    "category": "TATLILAR",
    "price": 315,
    "description": "Damla Çikolatalı Cookie ve Browni'nin Eşsiz Uyumu. Dilerseniz üzerine eritilmiş çikolata ilave ederek bu lezzeti ikiye katlayabilirsiniz.",
    "image": "/products/prod_2df93c8be728.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_26",
    "name": "FİLTRE KAHVE",
    "category": "FİLTRE KAHVELER",
    "price": 150,
    "description": "%80 Arabica - %20 Robusta karışımıyla öğütülmüş kahve çekirdekleri 92 derecede demlenerek servis edilir...",
    "image": "/products/prod_2c3ee7c79c2b.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_27",
    "name": "CAFE MİSTO (SÜTLÜ FİLTRE)",
    "category": "FİLTRE KAHVELER",
    "price": 160,
    "description": "%80 Arabica - %20 Robusta karışımıyla öğütülmüş ve 92 derece sıcak suyla demlenmiş kahvemiz, buhar çubuğunda ısıtılan kadifemsi kıvamdaki sütle buluşarak servis edilir...",
    "image": "/products/prod_227b084c9e0d.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_28",
    "name": "RED EYE ( Single Shot)",
    "category": "FİLTRE KAHVELER",
    "price": 200,
    "description": "%80 Arabica - %20 Robusta karışımıyla demlenen filtre kahvemize tek ölçü espresso eklenerek servis edilir.",
    "image": "/products/prod_d2de7bab19bb.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_29",
    "name": "BLACK EYE ( Double Shot)",
    "category": "FİLTRE KAHVELER",
    "price": 220,
    "description": "",
    "image": "/products/prod_1f9d55f0cd90.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_30",
    "name": "SICAK SÜT",
    "category": "SICAK İÇECEKLER",
    "price": 120,
    "description": "",
    "image": "/products/prod_a2515811b374.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_31",
    "name": "SICAK ÇİKOLATA",
    "category": "SICAK İÇECEKLER",
    "price": 200,
    "description": "",
    "image": "/products/prod_c536eaa91609.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_32",
    "name": "BEYAZ SICAK ÇİKOLATA",
    "category": "SICAK İÇECEKLER",
    "price": 200,
    "description": "",
    "image": "/products/prod_d9ba73dc3d44.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_33",
    "name": "SAHLEP",
    "category": "SICAK İÇECEKLER",
    "price": 190,
    "description": "",
    "image": "/products/prod_9ea67e042eea.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_34",
    "name": "COCO CHOCO",
    "category": "SICAK İÇECEKLER",
    "price": 220,
    "description": "İsveç çikolatası, hindistan cevizi ve süt",
    "image": "/products/prod_9e6ceb57a241.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_35",
    "name": "ESPRESSO",
    "category": "SICAK KAHVELER",
    "price": 110,
    "description": "Kahveyi sert sevenler için single shot ile hazırlanan %80 arabica çekirdeklerinden taze öğütülen renn kahvesi...",
    "image": "/products/prod_37eabad91425.jpg",
    "isPopular": true,
    "isFeatured": false
  },
  {
    "id": "prod_36",
    "name": "ESPRESSO MACCHIATO",
    "category": "SICAK KAHVELER",
    "price": 125,
    "description": "Renn'in öğütülmüş kahve çekirdeklerine buharla ısıtılmış süt köpüğünün dokunuşuyla hazırlanan espresso...",
    "image": "/products/prod_bf363ad28a37.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_37",
    "name": "CARAMEL MACCHIATO",
    "category": "SICAK KAHVELER",
    "price": 205,
    "description": "Karamel aroması üzerine buharla özenle ısıtılmış süt, süt köpüğü ve eşsiz lezzetiyle espresso dokunuşu ile hazırlanır; karamel sosla süslenerek servis edilir.",
    "image": "/products/prod_58c63360145c.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_38",
    "name": "AMERICANO",
    "category": "SICAK KAHVELER",
    "price": 160,
    "description": "%100 arabica çekirdeklerinden taze öğütülen renn kahvesi ile buluşmanın tam zamanı! İsteğe bağlı olarak sıcak ya da soğuk olarak seyreltilmiş bir espresso...",
    "image": "/products/prod_877e6c079ecd.jpg",
    "isPopular": true,
    "isFeatured": false
  },
  {
    "id": "prod_39",
    "name": "CAFE LATTE",
    "category": "SICAK KAHVELER",
    "price": 185,
    "description": "Renn'in zengin espressosu ile buharla ısıtılmış kadifemsi süt ve süt köpüğünün birleşiminden ortaya çıkan eşsiz lezzet....",
    "image": "/products/prod_f9c046c28b75.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_40",
    "name": "FLAT WHITE",
    "category": "SICAK KAHVELER",
    "price": 190,
    "description": "Renn'in zengin espressosu ile buharla ısıtılmış kadifemsi sütün birleşiminden ortaya çıkan eşsiz lezzet....",
    "image": "/products/prod_4912a93391b3.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_41",
    "name": "VANILLA LATTE",
    "category": "SICAK KAHVELER",
    "price": 210,
    "description": "Renn'in zengin espressosu ile vanilya aroması, buharla ısıtılmış kadifemsi süt ve süt köpüğünün buluşmasıyla ortaya çıkan eşsiz lezzet....",
    "image": "/products/prod_84b32c5227c8.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_42",
    "name": "CARAMEL LATTE",
    "category": "SICAK KAHVELER",
    "price": 210,
    "description": "Renn'in zengin espressosu ile karamel aroması, buharla ısıtılmış kadifemsi süt ve süt köpüğünün buluşmasıyla ortaya çıkan eşsiz lezzet....",
    "image": "/products/prod_6a60d3caa087.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_43",
    "name": "CHAI TEA LATTE",
    "category": "SICAK KAHVELER",
    "price": 210,
    "description": "Renn'in zengin espressosu ile özel karışımlı chai tea aroması, buharla ısıtılmış kadifemsi süt ve süt köpüğünün buluşmasıyla ortaya çıkan eşsiz lezzet....",
    "image": "/products/prod_e9b0df295b8a.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_44",
    "name": "TOFFEE NUT",
    "category": "SICAK KAHVELER",
    "price": 220,
    "description": "Kavrulmuş fındık tadıyla zengin ve yumuşak içimli, sütlü, toffee speciali...",
    "image": "/products/prod_a750c6b40794.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_45",
    "name": "PUMPKIN SPICE LATTE",
    "category": "SICAK KAHVELER",
    "price": 210,
    "description": "Renn'in zengin espressosu ile özel pumpkin spice aroması, buharla ısıtılmış kadifemsi süt ve süt köpüğünün buluşmasıyla ortaya çıkan eşsiz lezzet....",
    "image": "/products/prod_81039064c908.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_46",
    "name": "IRISH CREAM LATTE",
    "category": "SICAK KAHVELER",
    "price": 210,
    "description": "Renn'in zengin espressosu ile İrlanda kreması aroması, buharla ısıtılmış kadifemsi süt ve süt köpüğünün buluşmasıyla ortaya çıkan eşsiz lezzet....",
    "image": "/products/prod_a18ba7125696.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_47",
    "name": "LOTUS LATTE",
    "category": "SICAK KAHVELER",
    "price": 210,
    "description": "Renn'in zengin espressosu ile lotus bisküvisinin sevdiğimiz tadı şimdi bardaklarınızda...",
    "image": "/products/prod_bcc8afb6518c.jpg",
    "isPopular": true,
    "isFeatured": true
  },
  {
    "id": "prod_48",
    "name": "CORTADO (Single shot)",
    "category": "SICAK KAHVELER",
    "price": 155,
    "description": "Espressoya az miktarda sıcak süt ile hazırlanan enfes kahve lezzeti...",
    "image": "/products/prod_d42e1748dcad.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_49",
    "name": "CAPPUCCINO",
    "category": "SICAK KAHVELER",
    "price": 175,
    "description": "Zengin espresso ile buharla ısıtılmış kadifemsi süt ve bol süt köpüğünün buluşması...",
    "image": "/products/prod_43d990ea2ea1.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_50",
    "name": "CAFE MOCHA",
    "category": "SICAK KAHVELER",
    "price": 220,
    "description": "Espresso, çikolata sos ve buharla ısıtılmış süt, krema ile tamamlanarak sunulur.",
    "image": "/products/prod_3f3664b9cfe8.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_51",
    "name": "WHITE CHOCOLATE MOCHA",
    "category": "SICAK KAHVELER",
    "price": 220,
    "description": "Espresso, beyaz çikolata sosu ve buharla ısıtılmış süt ile hazırlandı ve kahvesini tatlı sevenler için buluştu ve krema ile süslendi.",
    "image": "/products/prod_4e895cb370c6.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_52",
    "name": "CARAMEL MOCHA",
    "category": "SICAK KAHVELER",
    "price": 220,
    "description": "Espresso, karamel sosu ve buharla ısıtılmış süt ile hazırlanarak krema ile süslenir.",
    "image": "/products/prod_2424e45701dc.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_53",
    "name": "BLUEBERRY WHITE MOCHA",
    "category": "SICAK KAHVELER",
    "price": 230,
    "description": "Espresso, beyaz çikolata sosu, blueberry aroması ve buharla ısıtılmış süt ile hazırlandı ve kahvesini tatlı sevenler için buluştu ve krema ile süslendi.",
    "image": "/products/prod_08fff18306a7.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_54",
    "name": "COCONUT WHITE MOCHA",
    "category": "SICAK KAHVELER",
    "price": 230,
    "description": "Espresso, beyaz çikolata sosu, hindistan cevizi aroması ve buharla ısıtılmış süt ile hazırlandı ve kahvesini tatlı sevenler için buluştu ve krema ile süslendi.",
    "image": "/products/prod_fe3cd3115a17.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_55",
    "name": "SALTED CARAMEL LATTE",
    "category": "SICAK KAHVELER",
    "price": 210,
    "description": "Espresso, tuzlu karamel sosu ve buharla ısıtılmış süt ile hazırlandı ve kahvesini tatlı sevenler için buluştu ve krema ile süslendi.",
    "image": "/products/prod_49c79dfd6f3a.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_56",
    "name": "COCONUT LATTE",
    "category": "SICAK KAHVELER",
    "price": 210,
    "description": "Renn'in zengin espressosu ile hindistan cevizi aroması, buharla ısıtılmış kadifemsi süt ve süt köpüğünün buluşmasıyla ortaya çıkan eşsiz lezzet....",
    "image": "/products/prod_623d5d5af22a.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_57",
    "name": "CREME BRULEE",
    "category": "SICAK KAHVELER",
    "price": 230,
    "description": "",
    "image": "/products/prod_cfc51ae888d8.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_58",
    "name": "KUPA /KARTON ÇAY",
    "category": "ÇAYLAR",
    "price": 90,
    "description": "",
    "image": "/products/prod_0add64b0dac3.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_59",
    "name": "BÖĞÜRTLEN",
    "category": "ÇAYLAR",
    "price": 150,
    "description": "Özel kurutulmuş böğürtlen yapraklarından hazırlanan çayımız french press ile servis edilir. 2 dakika demlenme süresi beklenerek içilmesi tavsiye edilir.",
    "image": "/products/prod_eddd3466294d.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_60",
    "name": "NANE LİMON",
    "category": "ÇAYLAR",
    "price": 150,
    "description": "Limon kurusu ve kurutulmuş nane yapraklarından hazırlanan çayımız french press ile servis edilir. 2 dakika demlenme süresi beklenerek içilmesi tavsiye edilir.",
    "image": "/products/prod_482484d531e6.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_61",
    "name": "KIŞ ÇAYI",
    "category": "ÇAYLAR",
    "price": 150,
    "description": "Renn'in kışa özel kurutulmuş bitki yapraklarından hazırlanan çayımız french press ile servis edilir. 2 dakika demlenme süresi beklenerek içilmesi tavsiye edilir.",
    "image": "/products/prod_c99cfb804ac0.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_62",
    "name": "YEŞİL ÇAY",
    "category": "ÇAYLAR",
    "price": 150,
    "description": "Özel kurutulmuş yeşil çay yapraklarından hazırlanan çayımız french press ile servis edilir. 2 dakika demlenme süresi beklenerek içilmesi tavsiye edilir.",
    "image": "/products/prod_9bc40ccb9c18.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_63",
    "name": "ÇAY",
    "category": "ÇAYLAR",
    "price": 65,
    "description": "",
    "image": "/products/prod_af6930bad0ab.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_64",
    "name": "KLEOPATRA ÇAYI",
    "category": "SPECIAL ÇAYLAR",
    "price": 205,
    "description": "(Demlenme süresi: 2-3 dakika) Mısır Ptolemaios Krallığıʼnın en güçlü ve en güzel kraliçesi Kleopatra'nın güzellik çayından esinlenildi... Çilek, ananas, gül ve papaya bitkilerinden gelen hafif, ferah ve mayhoş tatlar eşliğinde unutulmayacak bir lezzet...",
    "image": "/products/prod_26bd29aa93f0.jpg",
    "isPopular": true,
    "isFeatured": false
  },
  {
    "id": "prod_65",
    "name": "NEFERTUM",
    "category": "SPECIAL ÇAYLAR",
    "price": 205,
    "description": "(Demlenme süresi: 8-10 dakika) Güneşin ilk ışıkları ve Kutsal Nil'nin şifalı suyundan beslenen Mısır lotus çiçeğinin hoş kokusu eşliğinde kızılcık, turna yemişi, vanilya ve birçok özel karışımlı bitki yapraklarından gelen 19. Hanedanın şifalı çayı...",
    "image": "/products/prod_5e957b95b349.jpg",
    "isPopular": false,
    "isFeatured": true
  },
  {
    "id": "prod_66",
    "name": "PAPİRÜS",
    "category": "SPECIAL ÇAYLAR",
    "price": 205,
    "description": "(Demlenme süresi: 2-3 dakika) Antik Mısır'ın hayat kaynağı kutsal Nil'in hediyesi papirüs bitkisinin özünden elde edilen özel aroma; limon otu, kurt üzümü ve peygamber çiçeği bitkileri eşliğinde damakta bıraktığı kadifemsi tatla sizlere eşsiz bir deneyim yaşatacak...",
    "image": "/products/prod_702d1d9c5182.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_67",
    "name": "RAMSES",
    "category": "SPECIAL ÇAYLAR",
    "price": 205,
    "description": "(Demlenme süresi: 4-5 dakika) Yeni Krallığın en büyük, en ünlü ve en güçlü firavunu Ramses'in baharatsı içeceği; tarçın, karanfil, zencefil ve kakule eşliğinde keskin lezzet arayanların tercihi...",
    "image": "/products/prod_50e83cf6381f.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_68",
    "name": "COLD 911",
    "category": "SPECIAL ÇAYLAR",
    "price": 205,
    "description": "(Demlenme süresi: 8-10 dakika) Pancar, greyfurt, amber çiçeği ve saf okaliptusun harika uyumu ile kendine has, eşsiz bir lezzet...",
    "image": "/products/prod_14b755bd68ed.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_69",
    "name": "MANGOLADE",
    "category": "YAZA ÖZEL",
    "price": 220,
    "description": "",
    "image": "/products/prod_5de0dc0097ed.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_70",
    "name": "STRAWBERRY MOJITO",
    "category": "YAZA ÖZEL",
    "price": 225,
    "description": "",
    "image": "/products/prod_2ae0965eba9d.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_71",
    "name": "BLUE HORSE",
    "category": "YAZA ÖZEL",
    "price": 250,
    "description": "",
    "image": "/products/prod_c0bc881c7775.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_72",
    "name": "BERRY LIME",
    "category": "YAZA ÖZEL",
    "price": 210,
    "description": "",
    "image": "/products/prod_a0864ce1112d.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_73",
    "name": "LİMONATA",
    "category": "YAZA ÖZEL",
    "price": 200,
    "description": "",
    "image": "/products/prod_7da454a61c2d.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_74",
    "name": "ICE COCO CHOCO",
    "category": "YAZA ÖZEL",
    "price": 230,
    "description": "",
    "image": "/products/prod_19f496fd2e3b.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_75",
    "name": "ICE RUBY CHOCOLATE",
    "category": "YAZA ÖZEL",
    "price": 220,
    "description": "",
    "image": "/products/prod_249f50b00895.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_76",
    "name": "ANANAS SHAKE",
    "category": "YAZA ÖZEL",
    "price": 215,
    "description": "",
    "image": "/products/prod_442f4f6ac797.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_77",
    "name": "BERRY HIBISCUS",
    "category": "YAZA ÖZEL",
    "price": 220,
    "description": "",
    "image": "/products/prod_8013a6260c89.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_78",
    "name": "COOL LIME",
    "category": "YAZA ÖZEL",
    "price": 220,
    "description": "",
    "image": "/products/prod_a3e177f7d5b7.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_79",
    "name": "COOL BERRY SPRİTE",
    "category": "YAZA ÖZEL",
    "price": 225,
    "description": "",
    "image": "/products/prod_890f0d447a30.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_80",
    "name": "ICE AMERICANO",
    "category": "SOĞUK KAHVELER",
    "price": 170,
    "description": "",
    "image": "/products/prod_52c619ae367b.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_81",
    "name": "ICE LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 195,
    "description": "",
    "image": "/products/prod_30211d58d691.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_82",
    "name": "ICE FLAT WHITE",
    "category": "SOĞUK KAHVELER",
    "price": 200,
    "description": "",
    "image": "/products/prod_ddf148d92545.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_83",
    "name": "ICE VANILLA LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 220,
    "description": "",
    "image": "/products/prod_c4ca1745e1a3.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_84",
    "name": "ICE CARAMEL LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 220,
    "description": "",
    "image": "/products/prod_8ac0a6040442.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_85",
    "name": "ICE HAZELNUT LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 220,
    "description": "",
    "image": "/products/prod_024dfe908dcd.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_86",
    "name": "ICE CHAI TEA LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 220,
    "description": "",
    "image": "/products/prod_4ac68d65edbe.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_87",
    "name": "ICE TOFFEE NUT LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 230,
    "description": "",
    "image": "/products/prod_67a0bb422182.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_88",
    "name": "ICE IRISH CREAM LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 220,
    "description": "",
    "image": "/products/prod_ee4bb4a069d7.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_89",
    "name": "ICE LOTUS LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 220,
    "description": "",
    "image": "/products/prod_0fe291492663.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_90",
    "name": "ICE CAPPUCCINO",
    "category": "SOĞUK KAHVELER",
    "price": 185,
    "description": "",
    "image": "/products/prod_daad939ec62d.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_91",
    "name": "ICE MOCHA",
    "category": "SOĞUK KAHVELER",
    "price": 230,
    "description": "",
    "image": "/products/prod_21e5d090f6ef.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_92",
    "name": "ICE WHITE CHOCOLATE MOCHA",
    "category": "SOĞUK KAHVELER",
    "price": 230,
    "description": "",
    "image": "/products/prod_5883617647d5.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_93",
    "name": "ICE CARAMEL MOCHA",
    "category": "SOĞUK KAHVELER",
    "price": 230,
    "description": "",
    "image": "/products/prod_5065a6c06b4f.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_94",
    "name": "ICE BLUEBERRY WHITE MOCHA",
    "category": "SOĞUK KAHVELER",
    "price": 240,
    "description": "",
    "image": "/products/prod_da9240b262a6.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_95",
    "name": "ICE COCONUT WHITE MOCHA",
    "category": "SOĞUK KAHVELER",
    "price": 240,
    "description": "",
    "image": "/products/prod_d1c14b2104cb.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_96",
    "name": "ICE CREME BRULEE",
    "category": "SOĞUK KAHVELER",
    "price": 240,
    "description": "",
    "image": "/products/prod_508179b29aa3.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_97",
    "name": "ICE CAFE MISTO (SÜTLÜ FİLTRE)",
    "category": "SOĞUK KAHVELER",
    "price": 170,
    "description": "",
    "image": "/products/prod_9d05075a5600.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_98",
    "name": "ICE FİLTRE KAHVE",
    "category": "SOĞUK KAHVELER",
    "price": 160,
    "description": "",
    "image": "/products/prod_32c75320a958.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_99",
    "name": "ICE RED EYE (SINGLE SHOT)",
    "category": "SOĞUK KAHVELER",
    "price": 210,
    "description": "",
    "image": "/products/prod_6a4c0b7d1441.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_100",
    "name": "ICE BLACK EYE (DOUBLE SHOT)",
    "category": "SOĞUK KAHVELER",
    "price": 230,
    "description": "",
    "image": "/products/prod_3cc518b4c3a4.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_101",
    "name": "ICE CARAMEL MACCHIATO",
    "category": "SOĞUK KAHVELER",
    "price": 215,
    "description": "",
    "image": "/products/prod_46cfadbe86ed.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_102",
    "name": "ICE COCONUT LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 220,
    "description": "",
    "image": "/products/prod_509d7e1c736c.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_103",
    "name": "ICE SALTED CARAMEL LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 220,
    "description": "",
    "image": "/products/prod_799080508c7c.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_104",
    "name": "ICE PUMPKIN SPICE LATTE",
    "category": "SOĞUK KAHVELER",
    "price": 220,
    "description": "",
    "image": "/products/prod_c05cfc494902.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_105",
    "name": "AURA RENN",
    "category": "FROZEN",
    "price": 250,
    "description": "",
    "image": "/products/prod_1dc622369b30.jpg",
    "isPopular": false,
    "isFeatured": true
  },
  {
    "id": "prod_106",
    "name": "SERENITY",
    "category": "FROZEN",
    "price": 250,
    "description": "",
    "image": "/products/prod_37982a73774b.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_107",
    "name": "ROSETTA",
    "category": "FROZEN",
    "price": 250,
    "description": "",
    "image": "/products/prod_115c0a1468cd.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_108",
    "name": "PASSION FRUIT",
    "category": "FROZEN",
    "price": 235,
    "description": "",
    "image": "/products/prod_080e90de5094.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_109",
    "name": "GREEN APPLE",
    "category": "FROZEN",
    "price": 235,
    "description": "",
    "image": "/products/prod_cfd9d0ddf7a6.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_110",
    "name": "RED FOREST",
    "category": "FROZEN",
    "price": 235,
    "description": "",
    "image": "/products/prod_15034ec27a56.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_111",
    "name": "MANGO",
    "category": "FROZEN",
    "price": 235,
    "description": "",
    "image": "/products/prod_5f0b35c93847.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_112",
    "name": "ANANAS",
    "category": "FROZEN",
    "price": 235,
    "description": "",
    "image": "/products/prod_5a39fa48ef80.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_113",
    "name": "STRAWBERRY MILKSHAKE",
    "category": "MILKSHAKES",
    "price": 225,
    "description": "",
    "image": "/products/prod_2116a83734e8.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_114",
    "name": "VANILLA MILKSHAKE",
    "category": "MILKSHAKES",
    "price": 225,
    "description": "",
    "image": "/products/prod_31ff7edf5b98.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_115",
    "name": "CARAMELLA (İtalyan Caramelli Milkshake)",
    "category": "MILKSHAKES",
    "price": 225,
    "description": "",
    "image": "/products/prod_0bcd33cdd5d6.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_116",
    "name": "GREEN HEAVEN (Kavunlu Milkshake)",
    "category": "MILKSHAKES",
    "price": 225,
    "description": "",
    "image": "/products/prod_d7cfe9eb0d58.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_117",
    "name": "OREO CHOCOLATE MILK (Kahveli)",
    "category": "MILKSHAKES",
    "price": 225,
    "description": "",
    "image": "/products/prod_e47f27242869.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_118",
    "name": "RED BULL",
    "category": "KUTU İÇECEKLER",
    "price": 160,
    "description": "",
    "image": "/products/prod_0d5d17e16c62.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_119",
    "name": "PEPSI",
    "category": "KUTU İÇECEKLER",
    "price": 150,
    "description": "",
    "image": "/products/prod_95a46c56db87.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_120",
    "name": "SU",
    "category": "KUTU İÇECEKLER",
    "price": 40,
    "description": "",
    "image": "/products/prod_3215be2eaec7.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_121",
    "name": "LİMONLU SODA",
    "category": "KUTU İÇECEKLER",
    "price": 125,
    "description": "",
    "image": "/products/prod_13a14880b58c.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_122",
    "name": "SADE SODA",
    "category": "KUTU İÇECEKLER",
    "price": 125,
    "description": "",
    "image": "/products/prod_6caf342e703e.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_123",
    "name": "EKSTRA SHOT",
    "category": "EKSTRALAR",
    "price": 25,
    "description": "",
    "image": "/products/placeholder.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_124",
    "name": "EKSTRA BAL",
    "category": "EKSTRALAR",
    "price": 35,
    "description": "",
    "image": "/products/prod_214451bdba30.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_125",
    "name": "DOĞUM GÜNÜ SERVİS ÜCRETİ",
    "category": "EKSTRALAR",
    "price": 80,
    "description": "",
    "image": "/products/placeholder.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_126",
    "name": "EKSTRA AROMA",
    "category": "EKSTRALAR",
    "price": 25,
    "description": "",
    "image": "/products/placeholder.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_127",
    "name": "EKSTRA ÇİKOLATA",
    "category": "EKSTRALAR",
    "price": 50,
    "description": "",
    "image": "/products/placeholder.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_128",
    "name": "TÜRK KAHVESİ FİNCANI",
    "category": "SALEWALL",
    "price": 500,
    "description": "",
    "image": "/products/prod_172e9ebda86a.jpg",
    "isPopular": false,
    "isFeatured": true
  },
  {
    "id": "prod_129",
    "name": "KOKULU MUM KUTU",
    "category": "SALEWALL",
    "price": 125,
    "description": "",
    "image": "/products/prod_4bb40785ca00.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_130",
    "name": "KUPA",
    "category": "SALEWALL",
    "price": 500,
    "description": "",
    "image": "/products/prod_0db2a1c54e48.jpg",
    "isPopular": false,
    "isFeatured": false
  },
  {
    "id": "prod_131",
    "name": "LATTE FİNCANI (ÇÖMLEK)",
    "category": "SALEWALL",
    "price": 500,
    "description": "",
    "image": "/products/prod_b7e70ef65b76.jpg",
    "isPopular": false,
    "isFeatured": false
  }
];
