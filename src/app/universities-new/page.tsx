'use client';

import FilterableUniversitiesSection from '@/components/FilterableUniversitiesSection';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

export default function UniversitiesNewPage() {
  return (
    <main className="min-h-screen bg-[#fafbfc] font-[Tajawal] rtl">
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[300px] flex items-center justify-center mb-8">
        <div className="absolute inset-0">
          <img
            src="/images/kuala lumpur city skyline.jpg"
            alt="Kuala Lumpur skyline"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            الجامعات في ماليزيا
          </motion.h1>
          <motion.div
            layoutId="underline"
            className="h-1 w-24 mx-auto mt-2 mb-4 rounded-full bg-gradient-to-r from-primary-color to-teal-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ transformOrigin: 'right' }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg drop-shadow text-gray-200 font-light"
          >
            اكتشف أفضل الجامعات في ماليزيا واختر ما يناسب طموحاتك الأكاديمية
          </motion.p>
        </div>
      </div>

      {/* Universities Section */}
      <FilterableUniversitiesSection />
    </main>
  );
} 