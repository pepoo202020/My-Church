import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

export const metadata: Metadata = {
  title: "Martyr Abader And Eriny. Asyut",
  description: "كنيسة الشهيد ابادير واخته الشهيده ايريني بأسيوط",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="w-screen max-w-screen overflow-x-hidden px-10 flex flex-col h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
