'use client';

import { englishCourses } from '@/data/majors';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  BookOpenIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  CheckCircleIcon,
  PresentationChartLineIcon,
  UserIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const expandAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

const courseFeatures = [
  {
    id: "intensive",
    name: "دورة اللغة المكثفة",
    icon: BookOpenIcon,
    features: [
      "تغطية شاملة لجميع مهارات اللغة",
      "مجموعات صغيرة",
      "مدرسون متخصصون",
      "مرونة في اختيار المدة"
    ]
  },
  {
    id: "ielts",
    name: "تحضير IELTS",
    icon: ChartBarIcon,
    features: [
      "تدريب شامل على جميع مكونات الاختبار",
      "اختبارات تجريبية أسبوعية محاكية للاختبار الفعلي",
      "استراتيجيات متقدمة لكل قسم من أقسام الاختبار",
      "تدريب خاص على مهارات المحادثة والكتابة",
      "تقارير تقدم مفصلة وتغذية راجعة مستمرة",
      "إمكانية التدريب مع مدرس خاص",
      "ضمان تحسن الدرجة"
    ]
  },
  {
    id: "linguaskill",
    name: "تحضير Linguaskill",
    icon: PresentationChartLineIcon,
    features: [
      "تدريب متخصص على نظام الاختبار المحوسب",
      "تغطية شاملة لجميع المهارات اللغوية",
      "تدريبات مكثفة على نمط أسئلة الاختبار",
      "محاكاة كاملة لبيئة الاختبار",
      "تقييم مستمر للمستوى والتقدم",
      "إمكانية التدريب مع مدرس خاص",
      "دعم فني وأكاديمي متكامل"
    ]
  }
];

export default function EnglishCourses() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-primary-color/10 px-4 py-1.5 rounded-full mb-4">
            <h2 className="text-sm font-semibold text-primary-color">دراسة اللغة الإنجليزية في ماليزيا</h2>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">دورات اللغة الإنجليزية</h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
            دورات متخصصة في اللغة الإنجليزية والتحضير للاختبارات الدولية مع مدرسين متخصصين
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 sm:mb-10 p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200 max-w-3xl mx-auto text-center"
        >
          <span className="text-base sm:text-lg text-blue-800 font-semibold">
            لمعرفة الأسعار الفعلية والعروض المتاحة يرجى التواصل معنا مباشرة.
          </span>
        </motion.div>

        {/* Table Layout */}
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 w-full">
          {englishCourses.map((course, idx) => {
            const features = courseFeatures.find(f =>
              (f.id === 'intensive' && course.name === "Intensive English Course") ||
              (f.id === 'ielts' && course.name === "IELTS Preparation Course") ||
              (f.id === 'linguaskill' && course.name === "Linguaskill Preparation Course")
            )?.features || [];
            const icon = course.name === "Intensive English Course"
              ? <BookOpenIcon className="h-8 w-8 text-primary-color" />
              : course.name === "IELTS Preparation Course"
              ? <ChartBarIcon className="h-8 w-8 text-primary-color" />
              : <PresentationChartLineIcon className="h-8 w-8 text-primary-color" />;
            return (
              <div key={course.name} className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col gap-4 w-full max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-2">
                  {icon}
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary">{course.arabicName}</h3>
                </div>
                <p className="text-base sm:text-lg text-text-secondary mb-2">{course.arabicDescription}</p>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <ClockIcon className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-text-primary">المدد المتاحة:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.durations.map(months => (
                      <span key={months} className="bg-surface-hover rounded-xl px-3 py-1 text-sm font-medium text-primary-color border border-primary-color/20">
                        {months} شهر
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-text-primary">ما يميز الدورة:</span>
                  </div>
                  <ul className="list-disc pr-5 space-y-1">
                    {features.map((feature, i) => (
                      <li key={i} className="text-base sm:text-lg text-text-secondary">{feature}</li>
                    ))}
                  </ul>
                </div>
                <a href="/contact" className="mt-4 inline-flex items-center justify-center w-full bg-primary-color text-white font-bold py-3 rounded-lg shadow hover:bg-primary-color/90 transition-colors text-base">
                  سجل الآن
                  <span className="ml-2">&larr;</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Main CTA at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-color to-blue-600 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center shadow-lg overflow-hidden relative mt-12"
        >
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-10">استعلم عن الأسعار</h3>
          <p className="text-base sm:text-lg text-white/90 mb-5 sm:mb-6 max-w-2xl mx-auto relative z-10">
            لمعرفة الأسعار التفصيلية والخصومات المتاحة في كل معهد، يمكنك التواصل معنا مباشرة
          </p>
          <a 
            href="https://wa.me/601163672012" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-color px-6 sm:px-8 py-3 text-lg rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg relative z-10"
          >
            <FaWhatsapp className="text-lg sm:text-xl" />
            تواصل معنا للاستفسار عن الأسعار
          </a>
        </motion.div>
      </div>
    </div>
  );
} 