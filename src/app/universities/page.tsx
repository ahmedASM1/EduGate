'use client';

import { useState } from 'react';
import { universities } from '@/data/universities';
import UniversityCard from '@/components/UniversityCard';
import { motion, AnimatePresence } from 'framer-motion';
import { AcademicCapIcon, GlobeAsiaAustraliaIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function UniversitiesPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const filtered = universities.filter(u =>
    (filter === 'all' || u.type === filter) &&
    (u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.arabicName.includes(search) ||
      u.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-[#fafbfc] font-[Tajawal] rtl">
      {/* Hero Section with clean background and animated title */}
      <div className="relative flex flex-col items-center justify-center py-16 mb-8 bg-white border-b border-gray-100">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-900 flex items-center justify-center gap-3"
        >
          <AcademicCapIcon className="w-10 h-10 text-primary-color" />
          <span className="relative inline-block">
            الجامعات في ماليزيا
            <motion.span
              layoutId="underline"
              className="block h-1 w-24 mx-auto mt-2 rounded-full bg-gradient-to-r from-primary-color to-teal-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ transformOrigin: 'right' }}
            />
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg mb-6 text-gray-500 font-light"
        >
          Discover Malaysia's top universities and their outstanding programs
        </motion.p>
        {/* Filter/Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center bg-[#f5f7fa] rounded-xl p-3 shadow max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-primary-color font-bold">تصفية:</span>
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-color bg-white"
            >
              <option value="all">الكل</option>
              <option value="public">حكومية</option>
              <option value="private">خاصة</option>
            </select>
          </div>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="ابحث عن جامعة..."
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-color text-right text-gray-900 shadow"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-color">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Trust/Stats Bar */}
      <div className="bg-white py-4 flex flex-wrap justify-center items-center gap-8 shadow-sm mb-8">
        <div className="flex items-center gap-2 text-primary-color font-bold text-lg">
          <AcademicCapIcon className="w-6 h-6" />
          شراكات رسمية مع جامعات ماليزية
        </div>
        <div className="flex items-center gap-2 text-primary-color font-bold text-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4"/></svg>
          خدمة استشارية معتمدة
        </div>
      </div>

      {/* Universities Grid with loading skeletons */}
      <section className="py-8 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            dir="rtl"
          >
            <AnimatePresence>
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg h-72 animate-pulse flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="h-32 bg-gray-200 rounded-t-2xl" />
                    <div className="flex-1 p-6 flex flex-col gap-3">
                      <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto" />
                      <div className="h-4 bg-gray-100 rounded w-1/3 mx-auto" />
                      <div className="h-3 bg-gray-100 rounded w-2/3 mx-auto" />
                      <div className="h-8 bg-gray-100 rounded w-1/2 mx-auto mt-4" />
                    </div>
                  </motion.div>
                ))
              ) : filtered.length === 0 ? (
                <motion.div className="col-span-full text-center text-gray-500 py-12 text-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>لا توجد نتائج مطابقة</motion.div>
              ) : (
                filtered.map((university, index) => (
                  <motion.div
                    key={university.name}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="h-full"
                  >
                    <UniversityCard university={university} />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 