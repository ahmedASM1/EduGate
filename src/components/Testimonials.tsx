'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  country: string;
  text: string;
  program: string;
  university?: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'محمد عبدالله',
    image: '/images/testimonials/student-1.jpg',
    country: 'اليمن',
    program: 'بكالوريوس هندسة البرمجيات',
    university: 'جامعة آسيا باسيفيك للتكنولوجيا',
    text: 'كانت تجربتي مع EduGate رائعة من البداية إلى النهاية. ساعدوني في اختيار الجامعة المناسبة، وتسهيل إجراءات القبول والتأشيرة، وحتى في إيجاد سكن مناسب. أنا الآن أدرس تخصصي المفضل في إحدى أفضل الجامعات الماليزية.',
    stars: 5
  },
  {
    id: 2,
    name: 'سارة محمد',
    image: '/images/testimonials/student-2.jpg',
    country: 'السعودية',
    program: 'دورة لغة إنجليزية مكثفة',
    text: 'كنت قلقة بشأن مستوى لغتي الإنجليزية، لكن فريق EduGate ساعدني في العثور على المعهد المناسب الذي يلبي احتياجاتي. الآن، بعد 6 أشهر فقط، تحسنت لغتي الإنجليزية بشكل كبير وأنا جاهزة لبدء دراستي الجامعية.',
    stars: 5
  },
  {
    id: 3,
    name: 'أحمد عمر',
    image: '/images/testimonials/student-3.jpg',
    country: 'مصر',
    program: 'ماجستير إدارة الأعمال',
    university: 'جامعة تايلور',
    text: 'أشكر EduGate على دعمهم المتواصل خلال رحلتي الدراسية. لقد وفروا لي معلومات دقيقة حول برامج ماجستير إدارة الأعمال في ماليزيا، وساعدوني في تقديم طلبات القبول والحصول على المنحة الدراسية. تجربة ممتازة!',
    stars: 4
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touched, setTouched] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for right, 1 for left

  // Handle auto-sliding
  useEffect(() => {
    if (!touched) {
      const timer = setTimeout(() => {
        setDirection(1);
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentTestimonial, touched]);

  // Reset touched state after some time
  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        setTouched(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [touched]);

  // Handle next/prev - Adjusted for RTL
  const goToNext = () => {
    setTouched(true);
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setTouched(true);
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Handle touch events - Adjusted for RTL
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left (next in RTL)
      goToNext();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right (prev in RTL)
      goToPrev();
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">آراء طلابنا</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            تجارب حقيقية من طلاب درسوا في ماليزيا بمساعدة EduGate
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto" 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[350px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentTestimonial === index ? 1 : 0,
                  x: currentTestimonial === index 
                      ? 0 
                      : (direction === 1) 
                          ? (currentTestimonial > index ? 100 : -100)
                          : (currentTestimonial < index ? -100 : 100),
                  display: Math.abs(currentTestimonial - index) <= 1 ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full"
              >
                <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                    {/* Avatar section */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md shrink-0">
                      <div 
                        className="absolute inset-0 bg-primary-color/10 flex items-center justify-center"
                        style={{ 
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%231a73e8'%3E%3Cpath fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' /%3E%3C/svg%3E")`,
                          backgroundSize: '60%',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      />
                    </div>

                    {/* Content section */}
                    <div className="flex-1 text-center sm:text-right">
                      {/* Star ratings */}
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`h-4 sm:h-5 w-4 sm:w-5 ${
                              i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <div className="mb-4">
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">"{testimonial.text}"</p>
                      </div>

                      {/* Student info */}
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-1">{testimonial.country}</p>
                        <p className="text-sm sm:text-base text-primary-color font-medium">{testimonial.program}</p>
                        {testimonial.university && (
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">{testimonial.university}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setTouched(true);
                  setDirection(index > currentTestimonial ? 1 : -1);
                  setCurrentTestimonial(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'w-6 bg-primary-color' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow navigation - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:block">
            <button
              onClick={goToPrev}
              className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 bg-white h-10 w-10 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-primary-color hover:shadow-lg transition-all focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12 bg-white h-10 w-10 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-primary-color hover:shadow-lg transition-all focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 