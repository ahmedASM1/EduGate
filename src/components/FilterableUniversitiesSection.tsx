'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { universities } from '@/data/universities';
import { AcademicCapIcon, BuildingLibraryIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid';

type FilterType = 'all' | 'public' | 'private';

export default function FilterableUniversitiesSection() {
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [filteredUniversities, setFilteredUniversities] = useState(universities);

  // Apply filtering whenever filterType changes
  useEffect(() => {
    if (filterType === 'all') {
      setFilteredUniversities(universities);
    } else {
      setFilteredUniversities(universities.filter(uni => uni.type === filterType));
    }
  }, [filterType]);

  return (
    <section className="py-12 bg-[#fafbfc] rtl font-[Tajawal]" id="universities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <AcademicCapIcon className="w-8 h-8 text-primary-color" />
            <span>الجامعات</span>
          </h2>
          <div className="h-1 w-20 bg-primary-color mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اكتشف أفضل الجامعات في ماليزيا واختر ما يناسب طموحاتك الأكاديمية
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <button
              onClick={() => setFilterType('all')}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2
                ${filterType === 'all' 
                  ? 'bg-primary-color text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'}`}
            >
              <AcademicCapIcon className="w-5 h-5" />
              عرض الكل
            </button>
            
            <button
              onClick={() => setFilterType('public')}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2
                ${filterType === 'public' 
                  ? 'bg-primary-color text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'}`}
            >
              <BuildingLibraryIcon className="w-5 h-5" />
              الجامعات الحكومية
            </button>
            
            <button
              onClick={() => setFilterType('private')}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2
                ${filterType === 'private' 
                  ? 'bg-primary-color text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'}`}
            >
              <BuildingOffice2Icon className="w-5 h-5" />
              الجامعات الخاصة
            </button>
          </div>
        </motion.div>

        {/* Universities Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredUniversities.map((university, index) => (
              <motion.div
                key={university.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
                className="h-full"
              >
                <UniversityCard university={university} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredUniversities.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 text-gray-500"
          >
            لا توجد جامعات متطابقة مع المعايير المحددة
          </motion.div>
        )}
      </div>
    </section>
  );
}

// University Card Component
function UniversityCard({ university }: { university: typeof universities[0] }) {
  // Handle image loading error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/universities/placeholder.svg';
  };

  // Format name according to requirements: جامعة [Arabic Name] | [English Name]
  const formattedName = () => {
    return (
      <div className="flex flex-wrap justify-center items-center gap-2 text-center">
        <span className="font-bold text-gray-900">جامعة {university.arabicName}</span>
        <span className="text-gray-600">| {university.shortName}</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col overflow-hidden">
      {/* Logo Container */}
      <div className="relative h-44 bg-white flex items-center justify-center p-4 border-b">
        <div className="relative w-full h-full">
          <Image
            src={university.imageUrl}
            alt={`${university.name} logo`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onError={handleImageError}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-4 text-lg">
          {formattedName()}
        </div>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-2 text-center">
          {university.description}
        </p>
        
        {/* Spacer */}
        <div className="flex-grow"></div>
        
        {/* Button */}
        <Link
          href="/student-registration"
          className="mt-2 block text-center w-full py-2.5 px-4 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
        >
          سجل الآن
        </Link>
      </div>
    </div>
  );
} 