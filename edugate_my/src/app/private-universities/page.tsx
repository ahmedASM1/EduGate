import Navbar from '@/components/Navbar';
import InstitutionCard from '@/components/InstitutionCard';

const universities = [
  {
    name: 'جامعة APU',
    description: 'جامعة آسيا باسيفيك للتكنولوجيا والابتكار تعد خياراً مثالياً للراغبين في الحصول على تعليم عالمي يجمع بين الجودة والابتكار',
    imageUrl: 'https://www.apu.edu.my/sites/default/files/2020-09/apu-campus-day.jpg',
    link: '/private-universities/apu',
    fees: 'RM 40,000 - RM 80,000',
    duration: '3-4 سنوات'
  },
  {
    name: 'جامعة تايلورز',
    description: 'واحدة من أفضل الجامعات الخاصة في ماليزيا، معروفة بجودة التعليم والبرامج المتميزة',
    imageUrl: 'https://www.taylors.edu.my/sites/default/files/2019-05/lakeside-campus-banner.jpg',
    link: '/private-universities/taylors',
    fees: 'RM 45,000 - RM 90,000',
    duration: '3-4 سنوات'
  },
  {
    name: 'جامعة صنواي',
    description: 'جامعة رائدة في مجال التعليم العالي في ماليزيا مع شراكات دولية قوية',
    imageUrl: 'https://university.sunway.edu.my/sites/default/files/styles/hero_banner/public/2020-03/Sunway%20University%20Campus.jpg',
    link: '/private-universities/sunway',
    fees: 'RM 42,000 - RM 85,000',
    duration: '3-4 سنوات'
  },
  {
    name: 'جامعة UCSI',
    description: 'جامعة متميزة تقدم مجموعة واسعة من البرامج الأكاديمية في مختلف التخصصات',
    imageUrl: 'https://www.ucsiuniversity.edu.my/sites/default/files/public/2020-03/KL-Campus.jpg',
    link: '/private-universities/ucsi',
    fees: 'RM 38,000 - RM 75,000',
    duration: '3-4 سنوات'
  },
  // Add more universities here
];

export default function PrivateUniversities() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              الجامعات الخاصة في ماليزيا
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              اكتشف أفضل الجامعات الخاصة في ماليزيا وابدأ رحلتك الأكاديمية
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {universities.map((university) => (
              <InstitutionCard
                key={university.name}
                {...university}
                type="university"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 