'use client';

import { FormEvent, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function RegisterNow() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Add useEffect to clear status after 3 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_2r2vtwf',
        'template_91pyr5k',
        e.currentTarget,
        'zuRryhr_mUixT3TRj'
      );
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcoming Message */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-700 mb-2" style={{ fontFamily: 'Cairo, Tajawal, IBM Plex Arabic, sans-serif' }}>
            مرحباً بك في EduGate
          </h2>
        </motion.div>

        {/* WhatsApp Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex justify-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 sm:p-8 flex flex-col items-center max-w-xl w-full text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <FaWhatsapp className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">للتسجيل السهل أو لأي استفسار</h2>
            <p className="text-gray-700 mb-4 text-base">تواصل معنا مباشرة عبر الواتساب وسنساعدك في كل خطوة من التسجيل أو الإجابة على استفساراتك.</p>
            <a
              href="https://wa.me/601163672012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-bold text-lg shadow hover:bg-green-600 transition"
              style={{ direction: 'ltr' }}
            >
              <FaWhatsapp className="h-6 w-6" />
              +601163672012
            </a>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">سجل الآن</h1>
          <p className="mt-4 text-lg text-gray-600">ابدأ رحلتك الدراسية في ماليزيا مع EduGate. اطلع على المتطلبات وسجّل بياناتك لنساعدك في كل خطوة.</p>
        </motion.div>

        {/* Requirements Section */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-4" style={{ fontFamily: 'Cairo, Tajawal, IBM Plex Arabic, sans-serif' }}>
              المتطلبات والمستندات اللازمة للتسجيل
            </h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
              {/* University Registration Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-5 sm:p-8 flex flex-col h-full w-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2563eb" className="w-6 h-6 sm:w-7 sm:h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25c-3.392 0-6.75-1.007-6.75-3V7.5l6.75-3 6.75 3v3.75c0 1.993-3.358 3-6.75 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25v4.5m0 0c-2.25 0-4.5-.75-6.75-2.25M12 18.75c2.25 0 4.5-.75 6.75-2.25" />
                    </svg>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">تسجيل جامعة</h3>
                </div>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">سجّل في الجامعات الماليزية عبر نموذج التسجيل الجامعي المخصص.</p>
                <ul className="space-y-2 text-gray-700 text-xs sm:text-sm mb-6">
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-500"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2l4-4' /></svg></span>ملف PDF يحتوي على مسح ضوئي (سكانر) كامل لجميع صفحات جواز السفر من الصفحة الأولى حتى آخر صفحة، بما في ذلك الصفحات الفارغة</li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-500"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2l4-4' /></svg></span>شهادة الثانوية العامة مترجمة للإنجليزية</li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-500"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2l4-4' /></svg></span>صورة شخصية بحجم صورة الجواز</li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-500"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2l4-4' /></svg></span>شهادة IELTS أو اختبار Linguaskill (درجة الباند المطلوبة تختلف حسب الجامعة والتخصص، الحد الأدنى عادة 5.0/5.5. في اختبار Linguaskill يبدأ من 154 وأعلى حسب الجامعة والتخصص، وقد توجد متطلبات خاصة لبعض التخصصات)</li>
                </ul>
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2 sm:px-4 sm:py-3 mb-6 text-blue-800 text-xs sm:text-sm font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m-4-5v9" /></svg>
                  مدة تجهيز الفيزا: من 3 إلى 5 أسابيع عمل
                </div>
              </div>
              {/* Institute Registration Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-teal-100 p-5 sm:p-8 flex flex-col h-full w-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6 sm:w-7 sm:h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75c-2.25-1.5-4.5-2.25-6.75-2.25v12c2.25 0 4.5.75 6.75 2.25m0-12c2.25-1.5 4.5-2.25 6.75-2.25v12c-2.25 0-4.5.75-6.75 2.25m0-12v12" />
                    </svg>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">تسجيل معهد</h3>
                </div>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">سجّل في معاهد اللغة الماليزية بسهولة وسرعة عبر هذا النموذج المخصص.</p>
                <ul className="space-y-2 text-gray-700 text-xs sm:text-sm mb-6">
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-500"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2l4-4' /></svg></span>ملف PDF يحتوي على مسح ضوئي (سكانر) كامل لجميع صفحات جواز السفر من الصفحة الأولى حتى آخر صفحة، بما في ذلك الصفحات الفارغة</li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-500"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2l4-4' /></svg></span>شهادة الثانوية العامة مترجمة للإنجليزية</li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-500"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2l4-4' /></svg></span>صورة شخصية بحجم صورة الجواز</li>
                </ul>
                <div className="flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-xl px-3 py-2 sm:px-4 sm:py-3 mb-6 text-teal-800 text-xs sm:text-sm font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m-4-5v9" /></svg>
                  مدة تجهيز الفيزا: من 2 إلى 4 أسابيع عمل
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form & Social Cards Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start mt-10 sm:mt-16">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-10 w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-semibold text-gray-900">
                    الاسم
                  </label>
                    <input
                      type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="اكتب اسمك الكامل"
                    />
                  </div>

              <div>
                <label htmlFor="user_phone" className="block text-sm font-semibold text-gray-900">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  id="user_phone"
                  required
                  className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="اكتب رقم هاتفك"
                  dir="rtl"
                />
                </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-semibold text-gray-900">
                    البريد الإلكتروني
                  </label>
                    <input
                      type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="اكتب بريدك الإلكتروني"
                    />
                  </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                    الرسالة
                  </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                  required
                  className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-teal-500 focus:ring-teal-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="اكتب رسالتك هنا"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-xl bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all duration-200 
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>جاري الإرسال...</span>
                  </div>
                ) : 'إرسال الرسالة'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 text-green-800"
                >
                  تم إرسال رسالتك بنجاح. سنتواصل معك قريباً!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4 text-red-800"
                >
                  حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 w-full"
          >
            {/* Instagram Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">انستجرام</h3>
                  <p className="text-gray-600">تابعنا على انستجرام لمتابعة آخر الأخبار</p>
                </div>
              </div>
              <a
                href="https://instagram.com/edugate.malaysia"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white text-center py-3 rounded-xl hover:opacity-90 transition-colors duration-300 font-bold"
              >
                تابعنا الآن
              </a>
            </div>

            {/* TikTok Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-black rounded-xl flex items-center justify-center">
                  <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M15.75 2a.75.75 0 0 0-.75.75v12.5a2.75 2.75 0 1 1-2.75-2.75.75.75 0 0 0 0-1.5A4.25 4.25 0 1 0 17 17.25V8.56a6.5 6.5 0 0 0 3.25.89.75.75 0 0 0 .75-.75V3.5a.75.75 0 0 0-.75-.75h-4.5z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">تيك توك</h3>
                  <p className="text-gray-600">تابعنا على تيك توك لمشاهدة فيديوهاتنا التعليمية</p>
                </div>
              </div>
              <a
                href="https://tiktok.com/@edugate.malaysia"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black text-white text-center py-3 rounded-xl hover:bg-gray-900 transition-colors duration-300 font-bold"
              >
                تابعنا الآن
              </a>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-4 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <EnvelopeIcon className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">البريد الإلكتروني</h3>
                  <a href="mailto:edugatemy@gmail.com" className="text-teal-600 hover:text-teal-700">
                    edugatemy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">العنوان</h3>
                  <p className="text-gray-600">1-22-13 Tamarind Square Persiaran Multimedia, Cyber 10, 63000 Cyberjaya, Selangor</p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-6 rounded-xl overflow-hidden h-64 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.01399354413!2d101.6423776871582!3d2.924282899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcae2e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sTamarind%20Square!5e0!3m2!1sen!2smy!4v1718030000000!5m2!1sen!2smy" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 