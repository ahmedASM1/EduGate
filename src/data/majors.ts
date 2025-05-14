export interface Major {
  name: string;
  arabicName: string;
  specializations?: {
    name: string;
    arabicName: string;
  }[];
}

export interface MajorCategory {
  name: string;
  arabicName: string;
  majors: Major[];
}

export interface EnglishCourse {
  name: string;
  arabicName: string;
  description: string;
  arabicDescription: string;
  monthlyPrice: number;
  durations: number[];
}

export const undergraduateProgrammes: MajorCategory[] = [
  {
    name: "Computing, Technology & Game Development Programmes",
    arabicName: "تخصصات الحوسبة والتكنولوجيا وتطوير الألعاب",
    majors: [
      { 
        name: "Bachelor of Science (Honours) in Information Technology",
        arabicName: "بكالوريوس العلوم (مع مرتبة الشرف) في تكنولوجيا المعلومات",
        specializations: [
          { name: "Information System Security", arabicName: "أمن نظم المعلومات" },
          { name: "Cloud Engineering", arabicName: "هندسة الحوسبة السحابية" },
          { name: "Internet of Things (IoT)", arabicName: "إنترنت الأشياء" },
          { name: "Digital Transformation", arabicName: "التحول الرقمي" },
          { name: "Financial Technology (FinTech)", arabicName: "التكنولوجيا المالية" },
          { name: "Business Information Systems", arabicName: "نظم المعلومات التجارية" },
          { name: "Sustainable Computing", arabicName: "الحوسبة المستدامة" }
        ]
      },
      { 
        name: "Bachelor of Science (Honours) in Computer Science",
        arabicName: "بكالوريوس العلوم (مع مرتبة الشرف) في علوم الحاسوب",
        specializations: [
          { name: "Data Analytics", arabicName: "تحليل البيانات" },
          { name: "Digital Forensics", arabicName: "التحقيق الجنائي الرقمي" }
        ]
      },
      { 
        name: "Bachelor of Science (Honours) in Computer Science (Cyber Security)",
        arabicName: "بكالوريوس العلوم (مع مرتبة الشرف) في علوم الحاسوب (الأمن السيبراني)"
      },
      { 
        name: "Bachelor of Science (Hons) in Software Engineering",
        arabicName: "بكالوريوس العلوم (مع مرتبة الشرف) في هندسة البرمجيات"
      },
      { 
        name: "Bachelor of Computer Science (Hons) (Artificial Intelligence)",
        arabicName: "بكالوريوس علوم الحاسوب (مع مرتبة الشرف) (الذكاء الاصطناعي)"
      },
      { 
        name: "Bachelor in Interactive Media and Immersive Technology (Honours)",
        arabicName: "بكالوريوس في الوسائط التفاعلية والتكنولوجيا الغامرة (مع مرتبة الشرف)",
        specializations: [
          { name: "VR/AR", arabicName: "الواقع الافتراضي/المعزز" }
        ]
      },
      { 
        name: "Bachelor of Science (Honours) in Computer Games Development",
        arabicName: "بكالوريوس العلوم (مع مرتبة الشرف) في تطوير ألعاب الحاسوب"
      }
    ]
  },
  {
    name: "Accounting, Banking, Finance and Actuarial Programmes",
    arabicName: "تخصصات المحاسبة والبنوك والمالية والتأمين",
    majors: [
      { 
        name: "Bachelor of Accounting and Finance (Honours)",
        arabicName: "بكالوريوس المحاسبة والمالية (مع مرتبة الشرف)",
        specializations: [
          { name: "Forensic Accounting", arabicName: "المحاسبة الجنائية" },
          { name: "Forex and Investments", arabicName: "الفوركس والاستثمارات" },
          { name: "Accounting Technology", arabicName: "تكنولوجيا المحاسبة" }
        ]
      },
      { 
        name: "Bachelor in Banking and Finance (Hons)",
        arabicName: "بكالوريوس في البنوك والمالية (مع مرتبة الشرف)",
        specializations: [
          { name: "Investment Analytics", arabicName: "تحليل الاستثمار" },
          { name: "Financial Technology", arabicName: "التكنولوجيا المالية" }
        ]
      },
      { 
        name: "Bachelor of Science (Honours) in Actuarial Studies",
        arabicName: "بكالوريوس العلوم (مع مرتبة الشرف) في الدراسات الاكتوارية",
        specializations: [
          { name: "Data Analytics", arabicName: "تحليل البيانات" },
          { name: "Financial Technology", arabicName: "التكنولوجيا المالية" }
        ]
      },
      { 
        name: "Bachelor of Financial Technology (Honours)",
        arabicName: "بكالوريوس التكنولوجيا المالية (مع مرتبة الشرف)"
      }
    ]
  },
  {
    name: "Business, Management, Marketing & Tourism Programmes",
    arabicName: "تخصصات إدارة الأعمال والإدارة والتسويق والسياحة",
    majors: [
      { 
        name: "Bachelor of Arts (Honours) in Business Management",
        arabicName: "بكالوريوس الآداب (مع مرتبة الشرف) في إدارة الأعمال",
        specializations: [
          { name: "E-Business", arabicName: "الأعمال الإلكترونية" },
          { name: "Digital Leadership", arabicName: "القيادة الرقمية" },
          { name: "Business Analytics", arabicName: "تحليلات الأعمال" }
        ]
      },
      { 
        name: "Bachelor of Arts (Honours) in Human Resource Management",
        arabicName: "بكالوريوس الآداب (مع مرتبة الشرف) في إدارة الموارد البشرية"
      },
      { 
        name: "Bachelor of Arts (Honours) in International Business Management",
        arabicName: "بكالوريوس الآداب (مع مرتبة الشرف) في إدارة الأعمال الدولية"
      },
      { 
        name: "Bachelor of Arts (Honours) in Marketing Management",
        arabicName: "بكالوريوس الآداب (مع مرتبة الشرف) في إدارة التسويق",
        specializations: [
          { name: "Digital Marketing", arabicName: "التسويق الرقمي" }
        ]
      },
      { 
        name: "Bachelor of Arts (Honours) in Tourism Management",
        arabicName: "بكالوريوس الآداب (مع مرتبة الشرف) في إدارة السياحة",
        specializations: [
          { name: "Hospitality", arabicName: "الضيافة" }
        ]
      },
      { 
        name: "Bachelor of Science (Honours) in Hospitality and Tourism",
        arabicName: "بكالوريوس العلوم (مع مرتبة الشرف) في الضيافة والسياحة",
        specializations: [
          { name: "Hospitality Innovation", arabicName: "ابتكار الضيافة" },
          { name: "Events Management", arabicName: "إدارة الفعاليات" },
          { name: "Aviation Management", arabicName: "إدارة الطيران" }
        ]
      }
    ]
  },
  {
    name: "Media, International Relations & Psychology Programmes",
    arabicName: "تخصصات الإعلام والعلاقات الدولية وعلم النفس",
    majors: [
      { 
        name: "Bachelor of Arts (Honours) in Media and Communication Studies",
        arabicName: "بكالوريوس الآداب (مع مرتبة الشرف) في دراسات الإعلام والاتصال"
      },
      { 
        name: "Bachelor of Arts (Honours) in International Relations",
        arabicName: "بكالوريوس الآداب (مع مرتبة الشرف) في العلاقات الدولية"
      },
      { 
        name: "Bachelor of Science (Honours) in Psychology",
        arabicName: "بكالوريوس العلوم (مع مرتبة الشرف) في علم النفس"
      }
    ]
  },
  {
    name: "Medical and Health Sciences Programmes",
    arabicName: "تخصصات العلوم الطبية والصحية",
    majors: [
      {
        name: "Bachelor of Medicine and Surgery (MBBS)",
        arabicName: "الطب البشري"
      },
      {
        name: "Bachelor of Dental Surgery",
        arabicName: "طب الاسنان"
      },
      {
        name: "Bachelor of Pharmacy",
        arabicName: "الصيدلة"
      },
      {
        name: "Bachelor of Nursing",
        arabicName: "التمريض"
      },
      {
        name: "Bachelor of Nutrition",
        arabicName: "التغذية"
      },
      {
        name: "Bachelor of Medical Laboratory Science",
        arabicName: "المختبرات الطبية"
      },
      {
        name: "Bachelor of Physiotherapy",
        arabicName: "العلاج الطبيعي"
      },
      {
        name: "Bachelor of Psychology",
        arabicName: "علم النفس"
      }
    ]
  },
  {
    name: "Business and Management Programmes",
    arabicName: "تخصصات إدارة الأعمال والإدارة",
    majors: [
      {
        name: "Bachelor of Business Administration",
        arabicName: "إدارة الأعمال"
      },
      {
        name: "Bachelor of Accounting",
        arabicName: "المحاسبة"
      },
      {
        name: "Bachelor of Economics",
        arabicName: "الاقتصاد"
      },
      {
        name: "Bachelor of Marketing",
        arabicName: "التسويق"
      },
      {
        name: "Bachelor of Banking and Finance",
        arabicName: "المالية والمصرفية"
      },
      {
        name: "Bachelor of Digital Marketing",
        arabicName: "التسويق الإلكتروني"
      },
      {
        name: "Bachelor of Tourism Management",
        arabicName: "إدارة السياحة"
      },
      {
        name: "Bachelor of Hospitality Management",
        arabicName: "إدارة الضيافة"
      },
      {
        name: "Bachelor of Entrepreneurship",
        arabicName: "ريادة الأعمال"
      },
      {
        name: "Bachelor of Supply Chain Management",
        arabicName: "إدارة سلسلة الامدادات"
      },
      {
        name: "Bachelor of International Business",
        arabicName: "إدارة الأعمال الدولية"
      },
      {
        name: "Bachelor of Human Resource Management",
        arabicName: "إدارة الموارد البشرية"
      },
      {
        name: "Bachelor of Aviation and Airport Management",
        arabicName: "إدارة الطيران والمطارات"
      }
    ]
  },
  {
    name: "Engineering Programmes",
    arabicName: "تخصصات الهندسة",
    majors: [
      {
        name: "Bachelor of Electrical Engineering",
        arabicName: "الهندسة الكهربائية"
      },
      {
        name: "Bachelor of Electronic Engineering",
        arabicName: "الهندسة الإلكترونية"
      },
      {
        name: "Bachelor of Software Engineering",
        arabicName: "هندسة البرمجيات"
      },
      {
        name: "Bachelor of Mechanical Engineering",
        arabicName: "الهندسة الميكانيكية"
      },
      {
        name: "Bachelor of Mechatronics Engineering",
        arabicName: "هندسة الميكاترونكس"
      },
      {
        name: "Bachelor of Biomedical Engineering",
        arabicName: "الهندسة الطبية الحيوية"
      },
      {
        name: "Bachelor of Medical Equipment Engineering",
        arabicName: "هندسة المعدات الطبية"
      },
      {
        name: "Bachelor of Civil Engineering",
        arabicName: "الهندسة المدنية"
      },
      {
        name: "Bachelor of Architecture Engineering",
        arabicName: "الهندسة المعمارية"
      },
      {
        name: "Bachelor of Chemical Engineering",
        arabicName: "الهندسة الكيميائية"
      },
      {
        name: "Bachelor of Petroleum Engineering",
        arabicName: "هندسة البترول"
      },
      {
        name: "Bachelor of Aerospace Engineering",
        arabicName: "هندسة الطيران"
      }
    ]
  },
  {
    name: "Design Programmes",
    arabicName: "تخصصات التصميم",
    majors: [
      {
        name: "Bachelor of Graphic Design",
        arabicName: "جرافيك ديزاين"
      }
    ]
  }
];

export const englishCourses: EnglishCourse[] = [
  {
    name: "Intensive English Course",
    arabicName: "دورة اللغة الإنجليزية المكثفة",
    description: "Comprehensive English language program covering all aspects of language learning",
    arabicDescription: "برنامج شامل لتعلم اللغة الإنجليزية يغطي جميع جوانب تعلم اللغة",
    monthlyPrice: 600,
    durations: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    name: "IELTS Preparation Course",
    arabicName: "دورة تحضير اختبار IELTS",
    description: "Expert preparation for all IELTS sections with practice tests, strategies, and personalized feedback",
    arabicDescription: "تحضير متخصص لجميع أقسام اختبار IELTS مع اختبارات تجريبية واستراتيجيات وتقييم شخصي. يشمل تدريباً على مهارات الاستماع والقراءة والكتابة والمحادثة مع مدربين معتمدين",
    monthlyPrice: 600,
    durations: [1, 2]
  },
  {
    name: "Linguaskill Preparation Course",
    arabicName: "دورة تحضير اختبار Linguaskill",
    description: "Comprehensive preparation for Linguaskill exam with focus on all test modules and computer-based testing skills",
    arabicDescription: "تحضير شامل لاختبار Linguaskill مع التركيز على جميع وحدات الاختبار ومهارات الاختبار المحوسب. يشمل تدريباً مكثفاً على المهارات اللغوية الأربع وتقنيات الاختبار",
    monthlyPrice: 600,
    durations: [1, 2]
  }
]; 