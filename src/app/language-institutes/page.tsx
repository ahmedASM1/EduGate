'use client';

import InstituteCard from '@/components/InstituteCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpenIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const institutes = [
  {
    name: 'معهد بيج بن',
    englishName: 'Big Ben Academy',
    color: 'bg-red-100',
    textColor: 'text-red-600',
    borderColor: 'border-red-300',
    abbr: 'BIGBEN',
    imageUrl: '/images/institutes/BigBen-logo.webp',
    description: 'معهد بيج بن يقدم برامج متنوعة لتعليم اللغة الإنجليزية مع تركيز على المهارات العملية.'
  },
  {
    name: 'معهد برايت',
    englishName: 'Bright Language Center',
    color: 'bg-blue-100',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-300',
    abbr: 'BRIGHT',
    imageUrl: '/images/institutes/bright-logo.webp',
    description: 'معهد متخصص في تعليم اللغة الإنجليزية مع منهج تعليمي متطور وبيئة دراسية محفزة.'
  },
  {
    name: 'معهد IABT الأكاديمية الدولية',
    englishName: 'IABT International Academy',
    color: 'bg-green-100',
    textColor: 'text-green-600',
    borderColor: 'border-green-300',
    abbr: 'IABT',
    imageUrl: '/images/institutes/IABT-logo.webp',
    description: 'الأكاديمية الدولية للأعمال والتكنولوجيا تقدم برامج لغة إنجليزية عالية الجودة.'
  },
  {
    name: 'معهد EMS',
    englishName: 'EMS Language Centre',
    color: 'bg-orange-100',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-300',
    abbr: 'EMS',
    imageUrl: '/images/institutes/ems-logo.webp',
    description: 'واحد من أقدم معاهد اللغة الإنجليزية في ماليزيا مع كادر من المعلمين الأجانب.'
  },
  {
    name: 'أكاديمية شيفيلد',
    englishName: 'Sheffield Academy',
    color: 'bg-teal-100',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-300',
    abbr: 'SHEFFIELD',
    imageUrl: '/images/institutes/sheffield-logo.webp',
    description: 'أكاديمية شيفيلد توفر برامج تعليمية متميزة وخبرة طويلة في تعليم اللغة الإنجليزية.'
  },
  {
    name: 'معهد ستراتفورد',
    englishName: 'Stratford Language Centre',
    color: 'bg-purple-100',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-300',
    abbr: 'STRATFORD',
    imageUrl: '/images/institutes/StratfordLogo.png',
    description: 'يقدم برامج متنوعة لتعليم اللغة الإنجليزية مع مدرسين ذوي خبرة.'
  },
  {
    name: 'معهد أوسم',
    englishName: 'Awesome Institute',
    color: 'bg-orange-100',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-300',
    abbr: 'AWESOME',
    imageUrl: '/images/institutes/Awesome-logo.png',
    description: 'معهد أوسم يوفر تجربة تعليمية فريدة مع أساليب تدريس حديثة وتفاعلية.'
  },
  {
    name: 'معهد بريتانيا',
    englishName: 'Britannia Institute',
    color: 'bg-yellow-100',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-300',
    abbr: 'BRITANNIA',
    imageUrl: '/images/institutes/Britannia-logo.webp',
    description: 'معهد بريتانيا يقدم برامج مكثفة لتطوير مهارات اللغة الإنجليزية.'
  },
  {
    name: 'معهد اكسل',
    englishName: 'Excel',
    color: 'bg-indigo-100',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-300',
    abbr: 'EXCEL',
    imageUrl: '/images/institutes/excel-logo.png',
    description: 'معهد اكسل يركز على التميز في تعليم اللغة الإنجليزية مع برامج متخصصة.'
  },
  {
    name: 'معهد ELC الاسترالي',
    englishName: 'ELC Australian',
    color: 'bg-pink-100',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-300',
    abbr: 'ELC',
    imageUrl: '/images/institutes/elc-logo.webp',
    description: 'مركز متخصص في تعليم اللغة الإنجليزية مع برامج مكثفة ومرنة.'
  },
  {
    name: 'معهد ELEC',
    englishName: 'ELEC',
    color: 'bg-cyan-100',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-300',
    abbr: 'ELEC',
    imageUrl: '/images/institutes/elec-logo.webp',
    description: 'معهد ELEC يركز على تعليم اللغة الإنجليزية مع التركيز على المهارات الإلكترونية والتقنية.'
  },
  {
    name: 'معهد ELS',
    englishName: 'ELS',
    color: 'bg-blue-100',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-300',
    abbr: 'ELS',
    imageUrl: '/images/institutes/els-logo.webp',
    description: 'معهد ELS يقدم برامج لغة إنجليزية معتمدة دولياً.'
  },
  {
    name: 'معهد Elit',
    englishName: 'Elit',
    color: 'bg-violet-100',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-300',
    abbr: 'ELIT',
    imageUrl: '/images/institutes/elit-logo.webp',
    description: 'معهد النخبة لتعليم اللغة الإنجليزية مع برامج متقدمة ومتخصصة.'
  },
  {
    name: 'معهد wall street',
    englishName: 'Wall Street',
    color: 'bg-emerald-100',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-300',
    abbr: 'WALL STREET',
    imageUrl: '/images/institutes/wse-logo.webp',
    description: 'معهد متخصص في تعليم اللغة الإنجليزية للأعمال والتجارة.'
  },
  {
    name: 'معهد كاليفورنيا',
    englishName: 'Californiakl',
    color: 'bg-amber-100',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-300',
    abbr: 'CALIFORNIA',
    imageUrl: '/images/institutes/californiakl-logo.webp',
    description: 'معهد يجمع بين الأساليب الأمريكية الحديثة والخبرة الماليزية.'
  },
  {
    name: 'معهد Erican',
    englishName: 'Erican',
    color: 'bg-rose-100',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-300',
    abbr: 'ERICAN',
    imageUrl: '/images/institutes/erican-logo.webp',
    description: 'معهد يقدم برامج متخصصة في تعليم اللغة الإنجليزية مع منهج أمريكي معتمد.'
  }
];

export default function LanguageInstitutes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstitute, setSelectedInstitute] = useState('');

  // Collect unique English names for filter
  const uniqueInstitutes = Array.from(new Set(institutes.map(i => i.englishName)));

  // Filtered institutes
  const filteredInstitutes = institutes.filter(inst => {
    const matchesSearch =
      inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inst.englishName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !selectedInstitute || inst.englishName === selectedInstitute;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white py-16 border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">معاهد اللغة الإنجليزية</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Malaysia's top English language institutes
            </p>
          </div>
        </div>
      </motion.div>

      {/* Search & Filter Bar */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-10">
        <div className="flex flex-col sm:flex-row items-stretch gap-3 bg-white/80 rounded-2xl shadow-lg p-3 sm:p-4 border border-gray-100">
          {/* Filter Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-blue-600 font-bold whitespace-nowrap cursor-pointer" htmlFor="institute-filter">:تصفية</label>
            <select
              id="institute-filter"
              className="rounded-xl border border-gray-200 py-2 px-4 text-base text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 min-w-[180px]"
              value={selectedInstitute}
              onChange={e => setSelectedInstitute(e.target.value)}
            >
              <option value="">الكل</option>
              {uniqueInstitutes.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
          {/* Search Input */}
          <div className="flex-1 flex items-center bg-white rounded-xl shadow-sm px-3">
            <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <input
              type="text"
              className="w-full bg-transparent border-0 focus:ring-0 text-gray-900 placeholder:text-gray-400 py-3 text-base"
              placeholder="ابحث عن معهد..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Institutes Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredInstitutes.map((institute, index) => (
              <motion.div
                key={institute.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full"
              >
                <InstituteCard institute={institute} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 