import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import WhatsAppButton from '@/components/WhatsAppButton';

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "EduGate - البوابة التعليمية في ماليزيا",
  description: "دليلك الشامل للدراسة في ماليزيا - جامعات ومعاهد لغة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
