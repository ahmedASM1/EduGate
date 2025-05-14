import './globals.css';
import { Cairo } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'EduGate - بوابتك للدراسة في ماليزيا | خدمات تعليمية شاملة',
  description: 'شركة متخصصة في الخدمات التعليمية في ماليزيا. نقدم خدمات القبول والتأشيرة والإرشاد الأكاديمي للطلاب الراغبين في الدراسة في ماليزيا.',
  keywords: 'دراسة في ماليزيا, قبول جامعي, تأشيرة طالب, استشارات تعليمية, جامعات ماليزيا',
  openGraph: {
    title: 'EduGate - بوابتك للدراسة في ماليزيا',
    description: 'خدمات تعليمية شاملة للدراسة في ماليزيا',
    images: ['https://images.unsplash.com/photo-1606761568499-6d2451b23c66'],
  }
};

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-color">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-color mx-auto"></div>
        <p className="mt-4 text-lg text-text-secondary">جاري التحميل...</p>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${cairo.className} min-h-screen flex flex-col bg-surface-color`}>
        {/* Render without Suspense to avoid fallback blocking the UI */}
        <Navbar />
        <main className="flex-grow">
        {children}
        </main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
