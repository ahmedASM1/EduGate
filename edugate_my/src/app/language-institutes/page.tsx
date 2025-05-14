import Navbar from '@/components/Navbar';
import InstitutionCard from '@/components/InstitutionCard';

const institutes = [
  {
    name: 'معهد شيفيلد',
    description: 'معهد شيفيلد للغة الإنجليزية يوفر برامج تعليمية متميزة مع خبرة طويلة في تعليم اللغة الإنجليزية',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    link: '/language-institutes/sheffield',
    fees: 'RM 2800 - RM 24000',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد EMS',
    description: 'واحد من اقدم المعاهد في ماليزيا لدراسة اللغة الانجليزية في ماليزيا في كوالالمبور يتميز المعهد بجودة التعليم المثالية وكادر من المعلمين الاجانب',
    imageUrl: '/images/institutes/ems-logo.png',
    link: '/language-institutes/ems',
    fees: 'RM 2750 - RM 24550',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد برايت',
    description: 'معهد متخصص في تعليم اللغة الإنجليزية مع منهج تعليمي متطور وبيئة دراسية محفزة',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    link: '/language-institutes/bright',
    fees: 'RM 2900 - RM 25000',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد BIG BEN',
    description: 'معهد بيج بن يقدم برامج متنوعة لتعليم اللغة الإنجليزية مع تركيز على المهارات العملية',
    imageUrl: '/images/institutes/BigBen-logo.png',
    link: '/language-institutes/big-ben',
    fees: 'RM 2700 - RM 23000',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد Awesome',
    description: 'معهد أوسوم يوفر تجربة تعليمية فريدة مع أساليب تدريس حديثة وتفاعلية',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
    link: '/language-institutes/awesome',
    fees: 'RM 2850 - RM 24500',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد وول ستريت',
    description: 'معهد متخصص في تعليم اللغة الإنجليزية للأعمال والتجارة',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    link: '/language-institutes/wall-street',
    fees: 'RM 3000 - RM 26000',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد ELS',
    description: 'معهد متميز لتعليم اللغة الإنجليزية في قلب كوالالمبور',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    link: '/language-institutes/els',
    fees: 'RM 3000 - RM 25000',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد كاليفورنيا',
    description: 'معهد يجمع بين الأساليب الأمريكية الحديثة في تعليم اللغة الإنجليزية والخبرة الماليزية',
    imageUrl: 'https://images.unsplash.com/photo-1515923152115-758a6b16f35e',
    link: '/language-institutes/california',
    fees: 'RM 2950 - RM 25500',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد ELEC',
    description: 'معهد متخصص في تعليم اللغة الإنجليزية مع التركيز على المهارات الإلكترونية والتقنية',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    link: '/language-institutes/elec',
    fees: 'RM 2800 - RM 24000',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد إيريكان',
    description: 'معهد يقدم برامج متخصصة في تعليم اللغة الإنجليزية مع منهج أمريكي معتمد',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    link: '/language-institutes/erican',
    fees: 'RM 2900 - RM 25000',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد ELC',
    description: 'مركز متخصص في تعليم اللغة الإنجليزية مع برامج مكثفة ومرنة',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
    link: '/language-institutes/elc',
    fees: 'RM 2750 - RM 23500',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد Excel',
    description: 'معهد يركز على التميز في تعليم اللغة الإنجليزية مع برامج متخصصة للطلاب',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    link: '/language-institutes/excel',
    fees: 'RM 2800 - RM 24000',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد IABT',
    description: 'معهد دولي متخصص في تعليم اللغة الإنجليزية للأعمال والتكنولوجيا',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585',
    link: '/language-institutes/iabt',
    fees: 'RM 3100 - RM 26500',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد ELIT',
    description: 'معهد النخبة لتعليم اللغة الإنجليزية مع برامج متقدمة ومتخصصة',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    link: '/language-institutes/elit',
    fees: 'RM 3000 - RM 25500',
    duration: 'شهر - 12 شهر'
  },
  {
    name: 'معهد ستراتفورد',
    description: 'يقدم برامج متنوعة لتعليم اللغة الإنجليزية مع مدرسين ذوي خبرة',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    link: '/language-institutes/stratford',
    fees: 'RM 2800 - RM 24000',
    duration: 'شهر - 12 شهر'
  }
];

export default function LanguageInstitutes() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              معاهد اللغة الإنجليزية في ماليزيا
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              اختر من بين أفضل معاهد اللغة الإنجليزية في ماليزيا لتطوير مهاراتك اللغوية
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {institutes.map((institute) => (
              <InstitutionCard
                key={institute.name}
                {...institute}
                type="institute"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 