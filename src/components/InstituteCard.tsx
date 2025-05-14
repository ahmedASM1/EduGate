import Link from 'next/link';
import Image from 'next/image';

interface InstituteProps {
  name: string;
  englishName: string;
  color: string;
  textColor: string;
  borderColor: string;
  abbr: string;
  imageUrl?: string;
  description: string;
}

export default function InstituteCard({ institute }: { institute: InstituteProps }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Logo Container */}
      <div className="relative h-44 bg-white flex items-center justify-center p-4 border-b">
        <div className="relative w-full h-full">
          {institute.imageUrl ? (
            <Image
              src={institute.imageUrl}
              alt={`${institute.name} logo`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <span className="text-3xl font-bold text-gray-400">
              {institute.abbr}
            </span>
          )}
        </div>
      </div>
      {/* Content Container */}
      <div className="p-5 flex-grow flex flex-col text-center">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 inline-flex items-center justify-center flex-wrap gap-1">
            <span>{institute.name}</span>
            <span className="text-gray-600 px-1">|</span>
            <span className="text-gray-700">{institute.englishName}</span>
          </h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 text-center">
          {institute.description}
        </p>
        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>
        {/* CTA Section */}
        <div className="flex justify-center mt-4">
          <Link 
            href="/contact"
            className="text-blue-600 font-medium hover:underline flex items-center gap-1 justify-center text-base sm:text-lg"
          >
            سجل الآن
            <span aria-hidden="true">&larr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 