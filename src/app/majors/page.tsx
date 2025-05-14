'use client';

import { useState, useRef } from 'react';
import { undergraduateProgrammes } from '@/data/majors';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { 
  AcademicCapIcon,
  ComputerDesktopIcon,
  BanknotesIcon,
  BriefcaseIcon,
  NewspaperIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  HeartIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import ContactButton from '@/components/ContactButton';

const categoryProviders = {
  "Computing, Technology & Game Development Programmes": [
    { name: "جامعة مالايا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Universiti_Malaya_seal.svg/1200px-Universiti_Malaya_seal.svg.png" },
    { name: "الجامعة الإسلامية العالمية ماليزيا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/International_Islamic_University_Malaysia_logo.svg/1200px-International_Islamic_University_Malaysia_logo.svg.png" },
    { name: "جامعة تايلور", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Taylor%27s_University_logo.svg/1200px-Taylor%27s_University_logo.svg.png" }
  ],
  "Accounting, Banking, Finance and Actuarial Programmes": [
    { name: "جامعة مالايا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Universiti_Malaya_seal.svg/1200px-Universiti_Malaya_seal.svg.png" },
    { name: "جامعة تايلور", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Taylor%27s_University_logo.svg/1200px-Taylor%27s_University_logo.svg.png" }
  ],
  "Business, Management, Marketing & Tourism Programmes": [
    { name: "جامعة مالايا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Universiti_Malaya_seal.svg/1200px-Universiti_Malaya_seal.svg.png" },
    { name: "الجامعة الإسلامية العالمية ماليزيا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/International_Islamic_University_Malaysia_logo.svg/1200px-International_Islamic_University_Malaysia_logo.svg.png" },
    { name: "جامعة تايلور", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Taylor%27s_University_logo.svg/1200px-Taylor%27s_University_logo.svg.png" }
  ],
  "Media, International Relations & Psychology Programmes": [
    { name: "جامعة مالايا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Universiti_Malaya_seal.svg/1200px-Universiti_Malaya_seal.svg.png" },
    { name: "الجامعة الإسلامية العالمية ماليزيا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/International_Islamic_University_Malaysia_logo.svg/1200px-International_Islamic_University_Malaysia_logo.svg.png" }
  ],
  "Medical and Health Sciences Programmes": [
    { name: "جامعة مالايا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Universiti_Malaya_seal.svg/1200px-Universiti_Malaya_seal.svg.png" },
    { name: "الجامعة الإسلامية العالمية ماليزيا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/International_Islamic_University_Malaysia_logo.svg/1200px-International_Islamic_University_Malaysia_logo.svg.png" }
  ],
  "Law and Social Sciences Programmes": [
    { name: "جامعة مالايا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Universiti_Malaya_seal.svg/1200px-Universiti_Malaya_seal.svg.png" },
    { name: "الجامعة الإسلامية العالمية ماليزيا", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/International_Islamic_University_Malaysia_logo.svg/1200px-International_Islamic_University_Malaysia_logo.svg.png" }
  ]
} as const;

const orderedCategories = [
  "Computing, Technology & Game Development Programmes",
  "Engineering Programmes",
  "Accounting, Banking, Finance and Actuarial Programmes",
  "Business, Management, Marketing & Tourism Programmes",
  "Media, International Relations & Psychology Programmes",
  "Medical and Health Sciences Programmes",
  "Law and Social Sciences Programmes",
  "Design Programmes",
  "Business and Management Programmes"
];

const categoryImages = {
  "Computing, Technology & Game Development Programmes": "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&auto=format&fit=crop&q=60",
  "Engineering Programmes": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop&q=60",
  "Accounting, Banking, Finance and Actuarial Programmes": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
  "Business, Management, Marketing & Tourism Programmes": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60",
  "Media, International Relations & Psychology Programmes": "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&auto=format&fit=crop&q=60",
  "Medical and Health Sciences Programmes": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
  "Law and Social Sciences Programmes": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=60",
  "Design Programmes": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
  "Business and Management Programmes": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60"
};

const categoryIcons = {
  "Computing, Technology & Game Development Programmes": ComputerDesktopIcon,
  "Accounting, Banking, Finance and Actuarial Programmes": BanknotesIcon,
  "Business, Management, Marketing & Tourism Programmes": BriefcaseIcon,
  "Media, International Relations & Psychology Programmes": NewspaperIcon,
  "Medical and Health Sciences Programmes": HeartIcon,
  "Law and Social Sciences Programmes": BuildingLibraryIcon,
};

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

const getCategoryDescription = (categoryName: string) => {
  const descriptions: { [key: string]: string } = {
    "Computing, Technology & Game Development Programmes": 
      "برامج متخصصة في علوم الحاسوب وتطوير البرمجيات وتصميم الألعاب، تؤهلك للعمل في مجالات التكنولوجيا المتقدمة",
    "Engineering Programmes": 
      "برامج متخصصة في الهندسة تشمل الهندسة المدنية والميكانيكية والكهربائية، تؤهلك للعمل في مجالات التصميم والبناء والتصنيع",
    "Accounting, Banking, Finance and Actuarial Programmes": 
      "برامج متخصصة في المحاسبة والمالية والبنوك، تؤهلك للعمل في القطاع المالي والمصرفي",
    "Business, Management, Marketing & Tourism Programmes": 
      "برامج متخصصة في إدارة الأعمال والتسويق والسياحة، تؤهلك لقيادة المؤسسات التجارية",
    "Media, International Relations & Psychology Programmes": 
      "برامج متخصصة في الإعلام والعلاقات الدولية وعلم النفس، تؤهلك للعمل في المجالات الإعلامية والدبلوماسية",
    "Medical and Health Sciences Programmes": 
      "برامج متخصصة في العلوم الطبية والصحية، تؤهلك للعمل في القطاع الصحي والطبي",
    "Law and Social Sciences Programmes": 
      "برامج متخصصة في القانون والعلوم الاجتماعية، تؤهلك للعمل في المجالات القانونية والاجتماعية",
    "Design Programmes": 
      "برامج متخصصة في التصميم الجرافيكي والداخلي والصناعي، تؤهلك للعمل في مجالات التصميم الإبداعي والفني",
    "Business and Management Programmes":
      "برامج متخصصة في إدارة الأعمال والقيادة المؤسسية، تؤهلك لإدارة وتطوير المشاريع والمؤسسات التجارية"
  };
  return descriptions[categoryName] || "";
};

// Add a mapping from Arabic filter names to category keys
const filterCategories = [
  { label: 'تخصصات الهندسة', key: 'Engineering Programmes' },
  { label: 'تخصصات الحوسبة والتكنولوجيا وتطوير الألعاب', key: 'Computing, Technology & Game Development Programmes' },
  { label: 'تخصصات المحاسبة والبنوك والمالية والتأمين', key: 'Accounting, Banking, Finance and Actuarial Programmes' },
  { label: 'تخصصات إدارة الأعمال والإدارة والتسويق والسياحة', key: 'Business, Management, Marketing & Tourism Programmes' },
  { label: 'تخصصات الإعلام والعلاقات الدولية وعلم النفس', key: 'Media, International Relations & Psychology Programmes' },
  { label: 'تخصصات العلوم الطبية والصحية', key: 'Medical and Health Sciences Programmes' },
  { label: 'تخصصات التصميم', key: 'Design Programmes' },
  { label: 'تخصصات إدارة الأعمال والإدارة', key: 'Business and Management Programmes' },
];

export default function MajorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedMajor, setExpandedMajor] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const majorRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  const handleCategoryClick = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const handleMajorClick = (majorName: string) => {
    setExpandedMajor(expandedMajor === majorName ? null : majorName);
    if (majorRefs.current[majorName]) {
      majorRefs.current[majorName]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  // Filter by selected category and search term
  const filteredProgrammes = undergraduateProgrammes
    .filter(category => {
      if (!selectedCategory) return true;
      return category.name === selectedCategory;
    })
    .map(category => ({
      ...category,
      majors: category.majors.filter(major =>
        major.arabicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        major.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(category => category.majors.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-teal-50/50 to-white pt-20 pb-10 sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="mx-auto max-w-2xl"
            {...fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B294E] mb-4" style={{ fontFamily: 'Cairo, Tajawal, sans-serif' }}>
              التخصصات الجامعية
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-700 font-medium">
              أبرز التخصصات المتاحة في الجامعات الماليزية
            </p>
            <p className="mt-2 text-sm text-gray-500">
              للمزيد من التخصصات والاستفسارات، يرجى التواصل معنا
            </p>
          </motion.div>
          {/* Search & Filter Bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 bg-white/80 rounded-2xl shadow-lg p-3 sm:p-4 max-w-2xl mx-auto border border-gray-100">
            {/* Filter Dropdown */}
            <div className="flex items-center gap-2">
              <label className="text-blue-600 font-bold whitespace-nowrap cursor-pointer" htmlFor="category-filter">:تصفية</label>
              <select
                id="category-filter"
                className="rounded-xl border border-gray-200 py-2 px-4 text-base text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 min-w-[180px]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">الكل</option>
                {filterCategories.map((cat) => (
                  <option key={cat.key} value={cat.key}>{cat.label}</option>
                ))}
              </select>
            </div>
            {/* Search Input */}
            <div className="flex-1 flex items-center bg-white rounded-xl shadow-sm px-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-blue-500 mr-2" />
              <input
                type="text"
                className="w-full bg-transparent border-0 focus:ring-0 text-gray-900 placeholder:text-gray-400 py-3 text-base"
                placeholder="ابحث عن تخصص..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProgrammes
              .sort((a, b) => {
                const aIndex = orderedCategories.indexOf(a.name);
                const bIndex = orderedCategories.indexOf(b.name);
                return aIndex - bIndex;
              })
              .map((category, categoryIndex) => {
                const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || AcademicCapIcon;
                const categoryImage = categoryImages[category.name as keyof typeof categoryImages];
                
                return (
                  <motion.div
                    key={categoryIndex}
                    {...fadeInUp}
                    transition={{ delay: categoryIndex * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col"
                  >
                    {/* Category Header */}
                    <div 
                      className="cursor-pointer group flex-1"
                      onClick={() => handleCategoryClick(categoryIndex)}
                    >
                      <div className="relative">
                        {/* Category Image */}
                        {categoryImage && (
                          <div className="relative h-48 w-full">
                            <Image
                              src={categoryImage}
                              alt={category.arabicName}
                              fill
                              className="object-cover brightness-[0.85] group-hover:brightness-75 transition-all duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        )}

                        {/* Category Info Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                          <div className="flex items-start justify-between gap-4">
                            {/* Icon and Title */}
                            <div className="flex items-start gap-4">
                              <div className="bg-white/95 text-teal-600 p-3 rounded-xl shadow-lg backdrop-blur-sm">
                                <IconComponent className="h-6 w-6" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-white mb-2">{category.arabicName}</h3>
                                <p className="text-gray-200 text-sm">{category.name}</p>
                              </div>
                            </div>
                            
                            {/* Expand Button */}
                            <motion.div
                              animate={{ rotate: expandedCategory === categoryIndex ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-white/95 rounded-full p-2 shadow-lg backdrop-blur-sm"
                            >
                              <ChevronDownIcon className="h-5 w-5 text-teal-600" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="bg-gray-50 border-t border-gray-100 p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-50 p-2 rounded-lg mt-1">
                          <AcademicCapIcon className="h-4 w-4 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-1">نبذة عن التخصص</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {getCategoryDescription(category.name)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedCategory === categoryIndex && (
                      <motion.div
                        {...expandAnimation}
                        className="border-t border-gray-100"
                      >
                        <div className="p-6 grid gap-4">
                          {category.majors.map((major, majorIndex) => (
                            <motion.div
                              key={majorIndex}
                              ref={(el) => {
                                majorRefs.current[major.name] = el;
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: majorIndex * 0.05 }}
                              className="bg-gray-50 rounded-xl hover:bg-gray-100/80 transition-colors duration-200"
                              onClick={() => handleMajorClick(major.name)}
                            >
                              {/* Major Header */}
                              <div className="p-4 flex justify-between items-center">
                                <div className="space-y-1">
                                  <h4 className="text-lg font-bold text-gray-900">{major.arabicName}</h4>
                                  <p className="text-sm text-gray-600">{major.name}</p>
                                </div>
                                {major.specializations && (
                                  <div className="flex items-center gap-3">
                                    <span className="hidden sm:block bg-white text-teal-700 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                                      {major.specializations.length} مسارات
                                    </span>
                                    <motion.div
                                      animate={{ rotate: expandedMajor === major.name ? 180 : 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm"
                                    >
                                      <ChevronDownIcon className="h-5 w-5 text-gray-600" />
                                    </motion.div>
                                  </div>
                                )}
                              </div>

                              {/* Specializations */}
                              {expandedMajor === major.name && major.specializations && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="px-4 pb-4"
                                >
                                  <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm font-medium text-gray-900 mb-3">المسارات المتاحة:</p>
                                    <div className="grid gap-2">
                                      {major.specializations.map((spec, specIndex) => (
                                        <motion.div
                                          key={specIndex}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: specIndex * 0.1 }}
                                          className="bg-white rounded-lg p-3 shadow-sm"
                                        >
                                          <p className="font-medium text-gray-900">{spec.arabicName}</p>
                                          <p className="text-sm text-gray-600 mt-1">{spec.name}</p>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Add spacing at the bottom */}
      <div className="h-24"></div>
    </div>
  );
} 