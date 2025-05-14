import Navbar from '@/components/Navbar';
import InstitutionCard from '@/components/InstitutionCard';

const universities = [
  {
    name: 'جامعة APU',
    description: 'جامعة آسيا باسيفيك للتكنولوجيا والابتكار تعد خياراً مثالياً للراغبين في الحصول على تعليم عالمي يجمع بين الجودة والابتكار',
    imageUrl: '/images/universities/apu-logo.webp',
    link: '/private-universities/apu',
    fees: 'RM 40,000 - RM 80,000',
    duration: '3-4 سنوات'
  },
  {
    name: 'جامعة تايلورز',
    description: 'واحدة من أفضل الجامعات الخاصة في ماليزيا، معروفة بجودة التعليم والبرامج المتميزة',
    imageUrl: '/images/universities/taylor-logo.webp',
    link: '/private-universities/taylors',
    fees: 'RM 45,000 - RM 90,000',
    duration: '3-4 سنوات'
  },
  {
    name: 'جامعة صنواي',
    description: 'جامعة رائدة في مجال التعليم العالي في ماليزيا مع شراكات دولية قوية',
    imageUrl: '/images/universities/sunway-logo.webp',
    link: '/private-universities/sunway',
    fees: 'RM 42,000 - RM 85,000',
    duration: '3-4 سنوات'
  },
  {
    name: 'جامعة UCSI',
    description: 'جامعة متميزة تقدم مجموعة واسعة من البرامج الأكاديمية في مختلف التخصصات',
    imageUrl: '/images/universities/UCSI-logo.webp',
    link: '/private-universities/ucsi',
    fees: 'RM 38,000 - RM 75,000',
    duration: '3-4 سنوات'
  },
  {
    name: 'جامعة مالايا',
    description: 'جامعة مالايا هي أقدم جامعة في ماليزيا وتعد من أفضل الجامعات في آسيا والعالم العربي.',
    imageUrl: '/images/universities/um-logo.webp',
    link: '/private-universities/um',
    fees: 'RM 30,000 - RM 60,000',
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