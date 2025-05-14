'use client';
// Ensure client-side rendering for animations and hooks
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  DocumentCheckIcon, 
  HomeIcon,
  FlagIcon,
  SparklesIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ComputerDesktopIcon,
  BanknotesIcon,
  GlobeAsiaAustraliaIcon,
  AcademicCapIcon as AcademicCapIconSolid,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  SunIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import ServiceCard from '@/components/ServiceCard';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import { useState, useEffect } from 'react';
import FilterableUniversitiesSection from '@/components/FilterableUniversitiesSection';

// Remove metadata export and keep only the structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'EduGate Malaysia',
  description: 'Educational services and consultancy for studying in Malaysia',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kuala Lumpur',
    addressCountry: 'MY'
  },
  telephone: '+601163672012',
  email: 'edugatemy@gmail.com',
  url: 'https://edugatemy.com'
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    name: 'الاستشارات الأكاديمية',
    description: 'استشارات متخصصة لاختيار البرنامج والجامعة المناسبة',
    icon: AcademicCapIcon,
    colorClass: 'bg-yellow-50'
  },
  {
    name: 'خدمات الطلاب',
    description: 'نقدم خدمات شاملة للطلاب الراغبين في الدراسة في ماليزيا',
    icon: UserGroupIcon,
    colorClass: 'bg-green-50'
  },
  {
    name: 'معاهد اللغة',
    description: 'تعرف على أفضل معاهد اللغة الإنجليزية في ماليزيا',
    icon: BookOpenIcon,
    colorClass: 'bg-blue-50'
  }
];

const services = [
  {
    type: 'academic' as const,
    title: 'الإرشاد الأكاديمي المتخصص',
    description: 'نقدم لك استشارات أكاديمية شاملة ومخصصة لاحتياجاتك، مع توجيه دقيق لاختيار التخصص والجامعة المناسبة. فريقنا المتخصص يساعدك في فهم النظام التعليمي الماليزي وتحديد أفضل مسار لمستقبلك المهني'
  },
  {
    type: 'visa' as const,
    title: 'خدمات القبول والتأشيرة الشاملة',
    description: 'نتولى جميع إجراءات القبول والتأشيرة بكفاءة عالية، من تجهيز الأوراق المطلوبة حتى استلام القبول والتأشيرة. نضمن لك عملية سلسة وسريعة مع متابعة مستمرة لحالة طلبك في كل خطوة'
  },
  {
    type: 'housing' as const,
    title: 'خدمات السكن المضمونة',
    description: 'نوفر لك خيارات سكنية متنوعة تناسب ميزانيتك واحتياجاتك، مع ضمان السكن في مناطق آمنة وقريبة من جامعتك. نقدم معاينة افتراضية للسكن ونساعدك في اختيار الخيار الأنسب مع كافة ضمانات السلامة'
  },
  {
    type: 'reception' as const,
    title: 'خدمة الاستقبال والتوجيه',
    description: 'نستقبلك في المطار ونرافقك في رحلة استقرارك في ماليزيا. نقدم لك توجيهاً شاملاً للتأقلم مع الحياة الجديدة، من فتح حساب بنكي إلى التعرف على المناطق المهمة حول جامعتك'
  }
];

// Add landmarks array for the Famous Landmarks section
const landmarks = [
  {
    name: 'برج بتروناس التوأم',
    src: '/images/twin_towers.avif',
    description: 'رمز ماليزيا الحديث وأحد أطول الأبراج التوأم في العالم.',
    highlights: ['أطول برج توأم في العالم', 'تصميم يجمع بين الهندسة الإسلامية والعمارة الحديثة', 'موقع تسوق فخم تحت البرجين'],
  },
  {
    name: 'كهف باتو',
    src: '/images/BatuCaves.jpg',
    description: 'مجمع كهوف هندوسي شهير يضم تماثيل ضخمة ويستقطب الزوار سنوياً.',
    highlights: ['معبد هندوسي داخل كهف', 'أكبر تمثال لهونومان في العالم', 'احتفال ثايبورام السنوي'],
  },
  {
    name: 'مزارع شاي مرتفعات كاميرون',
    src: '/images/TeaFarms.jpg',
    description: 'منطقة مرتفعة تشتهر بمزارع الشاي الخضراء ومناظر طبيعية ساحرة.',
    highlights: ['مزارع شاي خلابة', 'طقس معتدل', 'مسارات تنزه ومزارع الفراولة'],
  },
  {
    name: 'مسجد بوترا',
    src: '/images/PutraMosque.jpg',
    description: 'مسجد بوترا الشهير في بوتراجايا، معروف بقبته الوردية وتصميمه المميز.',
    highlights: ['تصميم معماري إسلامي معاصر', 'يقع على ضفاف بحيرة بوتراجايا', 'وجهة جذب سياحي وروحي'],
  },
  {
    name: 'مرتفعات جنتنج',
    src: '/images/genting highlands.webp',
    description: 'منتجع جنتنج هايلاندز الجبلي الشهير بالألعاب الترفيهية والمناخ البارد.',
    highlights: ['أول كازينو في ماليزيا', 'مدينة ملاهي داخلية وألعاب كهربائية', 'جو بارد ومنعش يلائم الاستجمام'],
  },
  {
    name: 'جورج تاون - بينانج',
    src: '/images/GeorgeTown.jpeg',
    description: 'مدينة تاريخية في بينانج تابعة لليونسكو، تشتهر بفن الشارع والأسواق والمباني الاستعمارية.',
    highlights: ['فن الشارع والمجسمات الجدارية', 'أطعمة شارع متنوع', 'أحياء تاريخية وآثار استعمارية'],
  },
  {
    name: 'جزيرة لنكاوي',
    src: '/images/langkawi.avif',
    description: 'مجموعة جزر استوائية بشواطئ رملية نقية وشعاب مرجانية وغابات مطيرة.',
    highlights: ['شواطئ بيضاء نظيفة', 'رياضات مائية متنوعة', 'ركوب التلفريك لإطلالة بانورامية'],
  },
  {
    name: 'برج مرديكا 118',
    src: '/images/Merdeka-logo.jpg',
    description: 'برج مرديكا 118 هو ثاني أعلى مبنى في العالم، ويقع في قلب كوالالمبور، ماليزيا. يتميز بتصميمه العصري وإطلالته البانورامية على المدينة.',
    highlights: [
      'ثاني أعلى مبنى في العالم',
      'ارتفاع مذهل وتصميم معماري فريد',
      'منصة مشاهدة بانورامية على قمة البرج'
    ],
  },
];

function EditorialNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState('الرئيسية');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الجامعات', href: '/universities' },
    { name: 'معاهد اللغة', href: '/language-institutes' },
    // { name: 'تسجيل الطلاب', href: '/student-registration' }, // Removed as requested
    { name: 'التخصصات', href: '/majors' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 w-full z-50 transition-all duration-300 font-[Tajawal] ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/20 backdrop-blur-lg py-4'} rtl`}
      style={{ direction: 'rtl', pointerEvents: 'auto' }}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center px-4 flex-row-reverse">
        {/* Logo */}
        <div className={`transition-all duration-300 flex-shrink-0 ${scrolled ? 'w-10' : 'w-14'}`}>
          <Image src="/images/EduGate.svg" alt="EduGate Logo" width={scrolled ? 40 : 56} height={scrolled ? 40 : 56} className="object-contain" />
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7 text-lg font-bold text-neutral-800" style={{ fontFamily: 'Tajawal, Cairo, Noto Kufi Arabic, sans-serif' }}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`pb-1 transition-all duration-200 ${active === item.name ? 'border-b-2 border-teal-500 text-teal-600' : 'hover:text-teal-600'}`}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="px-3 py-1 rounded-lg border border-teal-400 text-teal-600 font-bold text-sm hover:bg-teal-50 transition">English</button>
          </li>
        </ul>
        {/* Hamburger for mobile */}
        <button className="md:hidden text-2xl text-neutral-800 z-50" onClick={() => setMobileMenu(true)}>
          <FaBars />
        </button>
        {/* Mobile Menu Overlay */}
        {mobileMenu && (
          <div className="fixed inset-0 bg-white/95 z-50 flex flex-col items-center justify-center gap-8 text-neutral-800 text-2xl font-bold transition-all duration-500">
            <button className="absolute top-6 right-6 text-3xl" onClick={() => setMobileMenu(false)}><FaTimes /></button>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`w-full text-center py-2 ${active === item.name ? 'border-b-2 border-teal-500 text-teal-600' : 'hover:text-teal-600'}`}
                onClick={() => { setActive(item.name); setMobileMenu(false); }}
              >
                {item.name}
              </Link>
            ))}
            <button className="px-6 py-2 rounded-lg border border-teal-400 text-teal-600 font-bold text-lg hover:bg-teal-50 transition">عربي/English</button>
          </div>
        )}
      </div>
    </nav>
  );
}

function EditorialHero() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[60vh] bg-[#F7FAFC] px-4 py-12 sm:py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-6"
      >
        {/* Top Badge */}
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wide text-gray-400 font-bold mb-2 mt-2">
          🎓 EduGate | منصتك الموثوقة للدراسة في ماليزيا
        </span>
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cairo text-[#1B1B1B] leading-tight mb-1">
          ابدأ رحلتك الأكاديمية بثقة<br/>
          في أفضل جامعات ومعاهد ماليزيا
        </h1>
        {/* Subheadline */}
        <p className="text-base sm:text-lg text-[#555] font-cairo mb-2">
          بوابتك لاكتشاف أفضل الخيارات التعليمية بدعم مجاني من مستشارين معتمدين
        </p>
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-4">
          <Link href="/contact" className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#1B75D0] to-[#28B78D] text-white text-lg font-bold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-offset-2 transform hover:scale-105 hover:shadow-lg">
            🔵 سجل الآن
          </Link>
          <a href="https://wa.me/601163672012" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-[#1B75D0] text-[#1B75D0] text-lg font-bold shadow flex items-center justify-center gap-2 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-offset-2 transform hover:scale-105 hover:shadow-lg">
            <FaWhatsapp className="h-6 w-6 text-green-500" />
            احجز استشارة مجانية
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  // Server-rendered Home page; structured data added via Next.js Script

  // Remove interview-related state variables
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Remove interview-related useEffect hooks, functions and event handlers

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Standard Navbar (import and use your default navbar component here) */}
      {/* <Navbar /> */}
      <main className="rtl overflow-x-hidden font-[Tajawal] min-h-screen" style={{ background: 'linear-gradient(135deg, #fbeee6 0%, #e3e9f7 100%)' }}>
        <EditorialHero />
        {/* Why Study in Malaysia Section */}
        <div className="bg-white py-24 sm:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="mx-auto max-w-2xl text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                لماذا الدراسة في ماليزيا؟
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                تعرف على مميزات الدراسة في ماليزيا وأسباب اختيارها كوجهة تعليمية مميزة
              </p>
            </motion.div>

            {/* Mobile layout - Stack everything vertically */}
            <div className="block lg:hidden mb-16">
              {/* Main image for mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 h-48"
              >
                <Image 
                  src="/images/kuala lumpur city skyline.jpg" 
                  alt="Kuala Lumpur skyline with Petronas Towers" 
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">ماليزيا - وجهة تعليمية عالمية</h3>
                  <p className="text-gray-200 mt-2">بيئة آمنة ومتعددة الثقافات بتكاليف معيشية معقولة</p>
                </div>
              </motion.div>
              
              {/* Info cards for mobile - standard card layout instead of floating */}
              <div className="space-y-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-teal-50 rounded-lg">
                      <GlobeAsiaAustraliaIcon className="h-5 w-5 text-teal-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">تنوع ثقافي</h4>
                  </div>
                  <p className="text-sm text-gray-600">مجتمع متعدد الثقافات يرحب بالطلاب من جميع أنحاء العالم</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-yellow-50 rounded-lg">
                      <SunIcon className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">مناخ استوائي</h4>
                  </div>
                  <p className="text-sm text-gray-600">أجواء معتدلة ومشمسة مع فترات ممطرة منتظمة طوال العام</p>
                </motion.div>
              </div>
              
              {/* Benefits items for mobile */}
              <div className="space-y-5">
                {/* Benefit cards - same as desktop but with different spacing */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl shadow-sm">
                      <AcademicCapIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">جودة تعليمية عالية</h3>
                      <p className="text-gray-600 leading-relaxed">
                        تتميز ماليزيا بجامعات مصنفة عالمياً وتعليم ذو جودة معترف بها دولياً، بشهادات معتمدة ومعترف بها في معظم دول العالم.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-50 p-3 rounded-xl shadow-sm">
                      <BuildingLibraryIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">مراكز لغة متميزة</h3>
                      <p className="text-gray-600 leading-relaxed">
                        توفر ماليزيا معاهد لغة إنجليزية بمستويات عالمية وتكاليف منافسة، مع برامج مكثفة تؤهلك للدراسة الأكاديمية بسرعة.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 p-3 rounded-xl shadow-sm">
                      <CurrencyDollarIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">تكاليف معقولة</h3>
                      <p className="text-gray-600 leading-relaxed">
                        الدراسة في ماليزيا توفر تكاليف تعليمية ومعيشية أقل بكثير من الدول الغربية مع الحفاظ على جودة تعليمية عالية.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-50 p-3 rounded-xl shadow-sm">
                      <ShieldCheckIcon className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">بيئة آمنة وودية</h3>
                      <p className="text-gray-600 leading-relaxed">
                        تُعد ماليزيا من أكثر الدول أماناً في آسيا، مع مجتمع ودود ومرحب بالطلاب الدوليين ونسبة عالية من الناطقين باللغة الإنجليزية.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout - Two column with floating cards */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              {/* Left column - Image */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative order-2 md:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                  <Image 
                    src="/images/kuala lumpur city skyline.jpg" 
                    alt="Kuala Lumpur skyline with Petronas Towers" 
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">ماليزيا - وجهة تعليمية عالمية</h3>
                    <p className="text-gray-200 mt-2">بيئة آمنة ومتعددة الثقافات بتكاليف معيشية معقولة</p>
                  </div>
                </div>
                
                {/* Floating cards - adjusted positioning - only visible on desktop */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -bottom-10 -left-5 lg:-left-10 bg-white rounded-xl shadow-xl p-4 max-w-[180px] lg:max-w-[200px] z-10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-yellow-50 rounded-lg">
                      <SunIcon className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">مناخ استوائي</h4>
                  </div>
                  <p className="text-sm text-gray-600">أجواء معتدلة ومشمسة مع فترات ممطرة منتظمة طوال العام</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -top-8 -right-5 lg:-right-8 bg-white rounded-xl shadow-xl p-4 max-w-[180px] lg:max-w-[220px] z-10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-teal-50 rounded-lg">
                      <GlobeAsiaAustraliaIcon className="h-5 w-5 text-teal-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">تنوع ثقافي</h4>
                  </div>
                  <p className="text-sm text-gray-600">مجتمع متعدد الثقافات يرحب بالطلاب من جميع أنحاء العالم</p>
                </motion.div>
              </motion.div>
              
              {/* Right column - Benefits */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <div className="space-y-8">
                  {/* Benefits items - same as in mobile view */}
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-xl shadow-sm">
                        <AcademicCapIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">جودة تعليمية عالية</h3>
                        <p className="text-gray-600 leading-relaxed">
                          تتميز ماليزيا بجامعات مصنفة عالمياً وتعليم ذو جودة معترف بها دولياً، بشهادات معتمدة ومعترف بها في معظم دول العالم.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-50 p-3 rounded-xl shadow-sm">
                        <BuildingLibraryIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">مراكز لغة متميزة</h3>
                        <p className="text-gray-600 leading-relaxed">
                          توفر ماليزيا معاهد لغة إنجليزية بمستويات عالمية وتكاليف منافسة، مع برامج مكثفة تؤهلك للدراسة الأكاديمية بسرعة.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-50 p-3 rounded-xl shadow-sm">
                        <CurrencyDollarIcon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">تكاليف معقولة</h3>
                        <p className="text-gray-600 leading-relaxed">
                          الدراسة في ماليزيا توفر تكاليف تعليمية ومعيشية أقل بكثير من الدول الغربية مع الحفاظ على جودة تعليمية عالية.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-rose-50 p-3 rounded-xl shadow-sm">
                        <ShieldCheckIcon className="h-6 w-6 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">بيئة آمنة وودية</h3>
                        <p className="text-gray-600 leading-relaxed">
                          تُعد ماليزيا من أكثر الدول أماناً في آسيا، مع مجتمع ودود ومرحب بالطلاب الدوليين ونسبة عالية من الناطقين باللغة الإنجليزية.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* New Cards Section: Language Institutes & Universities */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {/* Language Institutes Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-md flex flex-col items-center p-8 gap-4 text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-teal-50 mb-2">
                  <BookOpenIcon className="h-10 w-10 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">معاهد اللغة</h3>
                <p className="text-gray-600 mb-4 text-base">
                  تعرف على أفضل معاهد اللغة الإنجليزية في ماليزيا التي توفر برامج مكثفة بمستويات عالمية وتكاليف منافسة، مما يؤهلك للدراسة الأكاديمية بسرعة.
                </p>
                <Link href="/language-institutes" className="text-primary-color font-medium hover:underline flex items-center gap-1 justify-center">
                  استكشف معاهد اللغة
                  <span aria-hidden="true">←</span>
                </Link>
              </motion.div>
              {/* Universities Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-md flex flex-col items-center p-8 gap-4 text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-blue-50 mb-2">
                  <AcademicCapIcon className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">الجامعات الماليزية</h3>
                <p className="text-gray-600 mb-4 text-base">
                  اكتشف الجامعات الماليزية المصنفة عالمياً، وتعرف على البرامج الأكاديمية المتنوعة والفرص البحثية المتاحة للطلاب الدوليين.
                </p>
                <Link href="/universities" className="text-primary-color font-medium hover:underline flex items-center gap-1 justify-center">
                  استكشف الجامعات
                  <span aria-hidden="true">←</span>
                </Link>
              </motion.div>
              {/* WhatsApp Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg flex flex-col items-center p-8 gap-4 border border-green-100"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 shadow mb-4">
                  <FaWhatsapp className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">تواصل معنا عبر الواتساب</h3>
                <p className="text-gray-600 text-center mb-4 text-base">
                  للاستفسارات السريعة والدعم المباشر يمكنك التواصل معنا عبر الواتساب على الرقم التالي:
                </p>
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
              </motion.div>
            </div>
          </div>
        </div>

        {/* Featured Programs Section - Simplified Card */}
        <div className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="mx-auto max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Responsive height and padding for mobile */}
                <div className="relative h-64 sm:h-64 xs:h-48 min-h-[220px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-color/90 to-primary-color/30 flex items-center justify-center flex-col p-4 sm:p-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 drop-shadow-md">
                      أبرز التخصصات المتاحة في ماليزيا
                    </h2>
                    <p className="text-white text-base sm:text-lg max-w-xs sm:max-w-2xl mx-auto mb-4 sm:mb-8">
                      اكتشف أكثر من 100 تخصص في مختلف المجالات الأكاديمية والمهنية في الجامعات الماليزية
                    </p>
                    <Link 
                      href="/majors"
                      className="inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-4 bg-white text-primary-color rounded-xl font-bold text-base sm:text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 group mt-2"
                    >
                      استكشف كافة التخصصات المتاحة
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center text-xs sm:text-base">
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                      <ComputerDesktopIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-color" />
                      <span>علوم الحاسوب والتكنولوجيا</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                      <RocketLaunchIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-color" />
                      <span>الهندسة والتصميم</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                      <BanknotesIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-color" />
                      <span>إدارة الأعمال والتمويل</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                      <AcademicCapIconSolid className="h-4 w-4 sm:h-5 sm:w-5 text-primary-color" />
                      <span>الطب والعلوم الصحية</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                      <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-color" />
                      <span>وغيرها الكثير...</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Comprehensive Services Section - Merged */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              className="mx-auto max-w-2xl text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-base font-semibold leading-7 text-primary-color">خدمات EduGate المتميزة</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                شريكك الموثوق في رحلة دراستك بماليزيا
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                كل ما تحتاج لبدء رحلتك التعليمية
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-10">
              {/* Academic Guidance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="bg-yellow-50 p-4 rounded-xl">
                      <AcademicCapIcon className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">الاستشارات الأكاديمية المتخصصة</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-right mb-6">
                    نقدم لك استشارات أكاديمية شاملة ومخصصة لاحتياجاتك، مع توجيه دقيق لاختيار التخصص والجامعة المناسبة. فريقنا المتخصص يساعدك في فهم النظام التعليمي الماليزي وتحديد أفضل مسار لمستقبلك المهني
                    </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-color hover:text-primary-color/80 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">اكتشف المزيد</span>
                    <span className="mr-2">←</span>
                      </Link>
                </div>
              </motion.div>

              {/* Visa Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <DocumentCheckIcon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">خدمات القبول والتأشيرة الشاملة</h3>
          </div>
                  <p className="text-gray-600 leading-relaxed text-right mb-6">
                    نتولى جميع إجراءات القبول والتأشيرة بكفاءة عالية، من تجهيز الأوراق المطلوبة حتى استلام القبول والتأشيرة. نضمن لك عملية سلسة وسريعة مع متابعة مستمرة لحالة طلبك في كل خطوة
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-color hover:text-primary-color/80 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">اكتشف المزيد</span>
                    <span className="mr-2">←</span>
                    </Link>
                </div>
              </motion.div>

              {/* Housing Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="bg-green-50 p-4 rounded-xl">
                      <HomeIcon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">خدمات السكن المضمونة</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-right mb-6">
                    نوفر لك خيارات سكنية متنوعة تناسب ميزانيتك واحتياجاتك، مع ضمان السكن في مناطق آمنة وقريبة من جامعتك. نقدم معاينة افتراضية للسكن ونساعدك في اختيار الخيار الأنسب مع كافة ضمانات السلامة
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-color hover:text-primary-color/80 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">اكتشف المزيد</span>
                    <span className="mr-2">←</span>
                      </Link>
                </div>
              </motion.div>

              {/* Reception Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <UserGroupIcon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">خدمة الاستقبال والتوجيه</h3>
              </div>
                  <p className="text-gray-600 leading-relaxed text-right mb-6">
                    نستقبلك في المطار ونرافقك في رحلة استقرارك في ماليزيا. نقدم لك توجيهاً شاملاً للتأقلم مع الحياة الجديدة، من فتح حساب بنكي إلى التعرف على المناطق المهمة حول جامعتك
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-color hover:text-primary-color/80 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">اكتشف المزيد</span>
                    <span className="mr-2">←</span>
                    </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Who We Are Section - Improved */}
        <div className="bg-white py-24 sm:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
              {/* Left column - Content */}
              <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-base font-semibold leading-7 text-primary-color mb-4">من نحن</h2>
                <h3 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-6">
                  EduGate - بوابتك التعليمية في ماليزيا
                </h3>
                
                <p className="text-lg leading-8 text-text-secondary mb-8">
                  نحن شركة متخصصة في الخدمات التعليمية، مسجلة رسمياً في ماليزيا تحت رقم 
                  <span className="font-semibold mx-1 text-primary-color inline-block">202301043651 (1553342-K)</span>. 
                  نقدم خدمات شاملة للطلاب الراغبين في الدراسة في ماليزيا، من خلال فريق متخصص من المستشارين التعليميين ذوي الخبرة.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <ShieldCheckIcon className="h-6 w-6 text-primary-color" />
                      <span className="font-bold text-gray-800">شركة مسجلة رسمياً</span>
                    </div>
                    <p className="text-sm text-gray-600">معتمدة رسمياً في ماليزيا</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <SparklesIcon className="h-6 w-6 text-primary-color" />
                      <span className="font-bold text-gray-800">خبرة متخصصة</span>
                    </div>
                    <p className="text-sm text-gray-600">مستشارون تعليميون محترفون</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <FlagIcon className="h-6 w-6 text-primary-color" />
                      <span className="font-bold text-gray-800">مقر في ماليزيا</span>
                    </div>
                    <p className="text-sm text-gray-600">تواجد محلي لخدمتك بشكل أفضل</p>
                  </div>
                </div>
                
                <a
                  href="/contact"
                  className="inline-flex items-center text-primary-color hover:text-primary-color/80 transition-colors duration-200"
                >
                  <span className="text-base font-medium">تعرف علينا أكثر</span>
                  <span className="mr-2">←</span>
                </a>
              </motion.div>
              
              {/* Right column - Logo and design elements */}
              <motion.div 
                className="order-1 lg:order-2 flex justify-center relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  {/* Logo container with decorative elements */}
                  <div className="relative z-10 bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl max-w-md mx-auto">
                    <div className="flex justify-center mb-6 sm:mb-8">
                      <div className="relative h-28 sm:h-32 md:h-36 w-full">
                        <Image
                          src="/images/EduGate.svg"
                          alt="EduGate Logo"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">شريكك الموثوق</h4>
                      <p className="text-gray-600">نرافقك في كل خطوة من رحلة دراستك، من اختيار الجامعة وحتى التخرج</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements - also adjusted for better balance with larger card */}
                  <div className="absolute -z-10 -top-6 -left-6 w-36 h-36 bg-blue-50 rounded-full opacity-70"></div>
                  <div className="absolute -z-10 -bottom-8 -right-8 w-44 h-44 bg-green-50 rounded-full opacity-60"></div>
                  <div className="absolute -z-10 top-1/2 -translate-y-1/2 -right-14 w-24 h-24 bg-yellow-50 rounded-full opacity-60"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Famous Landmarks Section */}
        <div className="bg-gray-100 py-24 sm:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">أهم المعالم الشهيرة في ماليزيا</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {landmarks.map((landmark) => (
                <motion.div
                  key={landmark.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-primary-color transition-all duration-300"
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={landmark.src}
                      alt={landmark.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-6 text-right">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-color transition-colors">
                      {landmark.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {landmark.description}
                    </p>
                    <ul className="flex flex-col space-y-1 text-gray-600 text-sm">
                      {landmark.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mt-1 inline-block w-2 h-2 bg-primary-color rounded-full ml-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
        {/* Testimonials Section */}
        <Testimonials />
      </main>

      {/* Floating WhatsApp button */}
      <a href="https://wa.me/601163672012" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50">
        <FaWhatsapp className="h-6 w-6" />
      </a>

      {/* Scroll to Top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.5
        }}
        transition={{ duration: 0.2 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-50"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </motion.button>
    </>
  );
}
