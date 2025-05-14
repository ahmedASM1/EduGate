'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">عذراً، الصفحة غير موجودة</h2>
          <p className="text-gray-600 mb-8">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200"
          >
            <HomeIcon className="h-5 w-5" />
            <span>العودة للرئيسية</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 