import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RENN COFFEE — Bir Fincandan Daha Fazlası",
  description:
    "Renn Coffee markası için modern, minimalist, estetik ve sinematik kahve deneyimi. Nitelikli kahveler, antik dokunuşlar ve özel gastronomi.",
  keywords: [
    "Renn Coffee",
    "Kayseri Kahve",
    "Kocasinan Kahveci",
    "3. Nesil Kahve",
    "Franchise",
    "Specialty Coffee",
    "San Sebastian",
    "Espresso",
  ],
  authors: [{ name: "Renn Coffee" }],
  openGraph: {
    title: "RENN COFFEE — Bir Fincandan Daha Fazlası",
    description:
      "Antik Mısır estetiği ile harmanlanmış nitelikli kahve, lezzet ve iyi hissettiren anlar.",
    url: "https://renncoffee-fb206.web.app",
    siteName: "RENN COFFEE",
    images: [
      {
        url: "/venue/wall.jpg",
        width: 1200,
        height: 630,
        alt: "Renn Coffee Mekan Atmosferi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/brand/logo-dark.png",
    apple: "/brand/logo-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-[#FAF7F2] text-[#1F1D1B]">
        {children}
      </body>
    </html>
  );
}
