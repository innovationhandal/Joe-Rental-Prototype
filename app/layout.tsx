import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Joe Rental Mobil - Rental Mobil Bandung yang Nggak Bikin Ribet",
  description: "Rental mobil Bandung dengan driver berpengalaman. Armada bersih, harga transparan, respon cepat. Melayani sewa harian, city tour, airport transfer, dan wedding car.",
  keywords: "rental mobil bandung, sewa mobil bandung, rental mobil dengan driver, city tour bandung, airport transfer bandung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
