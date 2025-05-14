export interface University {
  name: string;
  arabicName: string;
  shortName: string; // Added shortName field for abbreviations like UTM, UM, etc.
  description: string;
  imageUrl: string;
  type: 'private' | 'public';
  link: string;
  hasLogo: boolean; // Flag to indicate if a logo is available
}

export const universities: University[] = [
  {
    name: "Asia Pacific University of Technology & Innovation",
    arabicName: "جامعة أسيا باسيفيك",
    shortName: "APU",
    description: "جامعة رائدة في مجالات التكنولوجيا والهندسة وإدارة الأعمال.",
    imageUrl: "/images/universities/apu-logo.webp",
    type: "private",
    link: "/universities/apu",
    hasLogo: true
  },
  {
    name: "International Islamic University Malaysia",
    arabicName: "الجامعة الإسلامية العالمية",
    shortName: "IIUM",
    description: "جامعة تجمع بين التعليم الحديث والقيم الإسلامية.",
    imageUrl: "/images/universities/IIUM-logo.png",
    type: "public",
    link: "/universities/iium",
    hasLogo: true
  },
  {
    name: "University of Malaya",
    arabicName: "جامعة ملايا",
    shortName: "UM",
    description: "أعرق وأفضل الجامعات الماليزية تصنيفاً عالمياً.",
    imageUrl: "/images/universities/um-logo.webp",
    type: "public",
    link: "/universities/um",
    hasLogo: true
  },
  {
    name: "Multimedia University",
    arabicName: "جامعة الملتيميديا",
    shortName: "MMU",
    description: "جامعة متخصصة في تكنولوجيا المعلومات والاتصالات.",
    imageUrl: "/images/universities/mmu-logo.webp",
    type: "private",
    link: "/universities/mmu",
    hasLogo: true
  },
  {
    name: "Taylor's University",
    arabicName: "جامعة تايلور",
    shortName: "Taylor's",
    description: "جامعة خاصة رائدة في الهندسة وإدارة الأعمال.",
    imageUrl: "/images/universities/taylor-logo.webp",
    type: "private",
    link: "/universities/taylor",
    hasLogo: true
  },
  {
    name: "UCSI University",
    arabicName: "جامعة يو سي إس آي",
    shortName: "UCSI",
    description: "جامعة خاصة معروفة ببرامجها في الطب والهندسة.",
    imageUrl: "/images/universities/UCSI-logo.webp",
    type: "private",
    link: "/universities/ucsi",
    hasLogo: true
  },
  {
    name: "Universiti Tenaga Nasional",
    arabicName: "جامعة تناجا",
    shortName: "UNITEN",
    description: "جامعة متخصصة في الهندسة والطاقة.",
    imageUrl: "/images/universities/UNITEN-logo.png",
    type: "private",
    link: "/universities/uniten",
    hasLogo: true
  },
  {
    name: "Management and Science University",
    arabicName: "جامعة الإدارة والعلوم",
    shortName: "MSU",
    description: "جامعة خاصة تركز على العلوم الطبية والإدارية.",
    imageUrl: "/images/universities/logo_msu.webp",
    type: "private",
    link: "/universities/msu",
    hasLogo: true
  },
  {
    name: "City University Malaysia",
    arabicName: "جامعة سيتي",
    shortName: "CITY",
    description: "جامعة تقدم برامج متنوعة في الإدارة والهندسة.",
    imageUrl: "/images/universities/city-logo.png",
    type: "private",
    link: "/universities/city",
    hasLogo: true
  },
  {
    name: "University of Cyberjaya",
    arabicName: "جامعة سايبرجايا",
    shortName: "Cyberjaya",
    description: "جامعة متخصصة في تكنولوجيا المعلومات والصحة.",
    imageUrl: "/images/universities/cyberjaya-uni-logo.webp",
    type: "private",
    link: "/universities/cyberjaya",
    hasLogo: true
  },
  {
    name: "SEGi University",
    arabicName: "جامعة سيجي",
    shortName: "SEGi",
    description: "جامعة تقدم برامج في الطب والهندسة.",
    imageUrl: "/images/universities/SEGi-logo.png",
    type: "private",
    link: "/universities/segi",
    hasLogo: true
  },
  {
    name: "MAHSA University",
    arabicName: "جامعة ماهسا",
    shortName: "MAHSA",
    description: "جامعة متخصصة في العلوم الصحية والطبية.",
    imageUrl: "/images/universities/MAHSA-Logo.webp",
    type: "private",
    link: "/universities/mahsa",
    hasLogo: true
  },
  {
    name: "Limkokwing University of Creative Technology",
    arabicName: "جامعة ليمكوكوينج",
    shortName: "Limkokwing",
    description: "جامعة رائدة في الفنون والتصميم والتكنولوجيا.",
    imageUrl: "/images/universities/Limkokwing-logo.webp",
    type: "private",
    link: "/universities/limkokwing",
    hasLogo: true
  },
  {
    name: "Universiti Kuala Lumpur",
    arabicName: "جامعة كوالالمبور",
    shortName: "UniKL",
    description: "جامعة تقنية تقدم برامج في الهندسة والتكنولوجيا.",
    imageUrl: "/images/universities/UniKL-Logo.webp",
    type: "public",
    link: "/universities/unikl",
    hasLogo: true
  },
  {
    name: "Universiti Teknologi PETRONAS",
    arabicName: "جامعة تيروناس",
    shortName: "UTP",
    description: "جامعة متخصصة في الهندسة والطاقة.",
    imageUrl: "/images/universities/UTP-logo.png",
    type: "private",
    link: "/universities/utp",
    hasLogo: true
  },
  {
    name: "Infrastructure University Kuala Lumpur",
    arabicName: "جامعة البنية التحتية",
    shortName: "IUKL",
    description: "جامعة متخصصة في البنية التحتية والهندسة.",
    imageUrl: "/images/universities/logo-iukl.png",
    type: "private",
    link: "/universities/iukl",
    hasLogo: true
  },
  {
    name: "Lincoln University College",
    arabicName: "جامعة لينكولن",
    shortName: "Lincoln",
    description: "جامعة تقدم برامج متنوعة في الطب والإدارة.",
    imageUrl: "/images/universities/LINCOLN-logo.webp",
    type: "private",
    link: "/universities/lincoln",
    hasLogo: true
  },
  {
    name: "INTI International University & Colleges",
    arabicName: "جامعة INTI",
    shortName: "INTI",
    description: "جامعة خاصة معروفة ببرامجها الدولية.",
    imageUrl: "/images/universities/INTI-logo.png",
    type: "private",
    link: "/universities/inti",
    hasLogo: true
  },
  {
    name: "Sunway University",
    arabicName: "جامعة صنواي",
    shortName: "Sunway",
    description: "جامعة رائدة في إدارة الأعمال والعلوم.",
    imageUrl: "/images/universities/sunway-logo.webp",
    type: "private",
    link: "/universities/sunway",
    hasLogo: true
  },
  {
    name: "HELP University",
    arabicName: "جامعة هيليب",
    shortName: "HELP",
    description: "جامعة تقدم برامج في علم النفس والإدارة.",
    imageUrl: "/images/universities/HELP-logo.webp",
    type: "private",
    link: "/universities/help",
    hasLogo: true
  },
  {
    name: "Universiti Tunku Abdul Rahman",
    arabicName: "جامعة أوتار",
    shortName: "UTAR",
    description: "جامعة تقدم برامج في الهندسة والإدارة.",
    imageUrl: "/images/universities/UTAR-LOGO.png",
    type: "private",
    link: "/universities/utar",
    hasLogo: true
  },
  {
    name: "University Malaysia of Computer Science & Engineering",
    arabicName: "جامعة يوني ماي",
    shortName: "UNIMY",
    description: "جامعة متخصصة في علوم الحاسوب والهندسة.",
    imageUrl: "/images/universities/UNIMY-logo.png",
    type: "private",
    link: "/universities/unimy",
    hasLogo: true
  },
  {
    name: "International Medical University",
    arabicName: "الجامعة الطبية",
    shortName: "IMU",
    description: "جامعة متخصصة في العلوم الطبية.",
    imageUrl: "/images/universities/IMU-Logo.webp",
    type: "private",
    link: "/universities/imu",
    hasLogo: true
  },
  {
    name: "Universiti Teknologi Malaysia",
    arabicName: "جامعة التكنولوجيا",
    shortName: "UTM",
    description: "جامعة رائدة في الهندسة والتكنولوجيا.",
    imageUrl: "/images/universities/utm-logo.webp",
    type: "public",
    link: "/universities/utm",
    hasLogo: true
  },
  {
    name: "Universiti Putra Malaysia",
    arabicName: "جامعة بوترا",
    shortName: "UPM",
    description: "جامعة متخصصة في الزراعة والهندسة.",
    imageUrl: "/images/universities/UPM-logo.jpg",
    type: "public",
    link: "/universities/upm",
    hasLogo: true
  },
  {
    name: "Universiti Teknikal Malaysia Melaka",
    arabicName: "جامعة ملاكا",
    shortName: "UTeM",
    description: "جامعة تقنية في ولاية ملاكا.",
    imageUrl: "/images/universities/logo-utem.webp",
    type: "public",
    link: "/universities/utem",
    hasLogo: true
  },
  {
    name: "Universiti Sains Malaysia",
    arabicName: "جامعة العلوم",
    shortName: "USM",
    description: "جامعة رائدة في العلوم والهندسة.",
    imageUrl: "/images/universities/USM-logo.webp",
    type: "public",
    link: "/universities/usm",
    hasLogo: true
  },
  {
    name: "Universiti Kebangsaan Malaysia",
    arabicName: "الجامعة الوطنية",
    shortName: "UKM",
    description: "جامعة وطنية تقدم برامج في جميع التخصصات.",
    imageUrl: "/images/universities/LogoUKM.png",
    type: "public",
    link: "/universities/ukm",
    hasLogo: true
  },
  {
    name: "Universiti Malaysia Perlis",
    arabicName: "جامعة بيرليس",
    shortName: "UniMAP",
    description: "جامعة تقنية في ولاية بيرليس.",
    imageUrl: "/images/universities/unimap_logo.png",
    type: "public",
    link: "/universities/unimap",
    hasLogo: true
  },
  {
    name: "Universiti Malaysia Sarawak",
    arabicName: "جامعة ساراواك",
    shortName: "UNIMAS",
    description: "جامعة في ولاية ساراواك.",
    imageUrl: "/images/universities/UNIMAS-logo.png",
    type: "public",
    link: "/universities/unimas",
    hasLogo: true
  },
  {
    name: "Universiti Teknologi MARA",
    arabicName: "جامعة مارا",
    shortName: "UiTM",
    description: "جامعة تقدم برامج في جميع التخصصات.",
    imageUrl: "/images/universities/logoUiTM.png",
    type: "public",
    link: "/universities/uitm",
    hasLogo: true
  },
  {
    name: "Universiti Utara Malaysia",
    arabicName: "جامعة اوتارا",
    shortName: "UUM",
    description: "جامعة متخصصة في الإدارة والاقتصاد.",
    imageUrl: "/images/universities/UUM-logo.png",
    type: "public",
    link: "/universities/uum",
    hasLogo: true
  },
  {
    name: "Universiti Tun Hussein Onn Malaysia",
    arabicName: "جامعة تون حسين أون",
    shortName: "UTHM",
    description: "جامعة تقنية في ولاية جوهور.",
    imageUrl: "/images/universities/UTHM-logo.webp",
    type: "public",
    link: "/universities/uthm",
    hasLogo: true
  },
  {
    name: "Al-Madinah International University",
    arabicName: "جامعة المدينة العالمية",
    shortName: "MEDIU",
    description: "جامعة إسلامية توفر برامج تعليمية عبر الإنترنت وحضورياً.",
    imageUrl: "/images/universities/MEDIU-LOGO.png",
    type: "private",
    link: "/universities/mediu",
    hasLogo: true
  }
];

// Helper function to get universities by type
export const getUniversitiesByType = (type: 'public' | 'private') => {
  return universities.filter(uni => uni.type === type);
};

// Get universities with available logos
export const getUniversitiesWithLogos = () => {
  return universities.filter(uni => uni.hasLogo);
};

// Get public universities (الجامعات الحكومية)
export const publicUniversities = getUniversitiesByType('public');

// Get private universities (الجامعات الخاصة)
export const privateUniversities = getUniversitiesByType('private');