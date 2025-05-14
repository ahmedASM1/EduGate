"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface InstitutionCardProps {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  fees?: string;
  duration?: string;
  type: 'university' | 'institute';
}

const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='16' fill='%236b7280'%3EImage not available%3C/text%3E%3C/svg%3E";

// Helper function to determine if an image is a logo based on filename or path
const isLogo = (path: string): boolean => {
  const logoIndicators = ['logo', 'Logo', 'ems.webp', 'StratfordLogo'];
  return logoIndicators.some(indicator => path.includes(indicator));
};

export default function InstitutionCard({
  name,
  description,
  imageUrl,
  link,
  fees,
  duration,
  type
}: InstitutionCardProps) {
  const [imageError, setImageError] = useState(false);
  const isImageLogo = isLogo(imageUrl);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="flex-shrink-0 relative h-56 bg-white flex items-center justify-center">
        <Image
          className="object-contain w-full h-full"
          src={imageError ? placeholderImage : imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImageError(true)}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <Link href={link} className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{name}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </Link>
        </div>
        {(fees || duration) && (
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
            {fees && (
              <div className="flex items-center">
                <span className="ml-2">الرسوم:</span>
                <span className="font-semibold text-gray-900">{fees}</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center">
                <span className="ml-2">المدة:</span>
                <span className="font-semibold text-gray-900">{duration}</span>
              </div>
            )}
          </div>
        )}
        <div className="mt-6">
          <Link
            href={link}
            className="text-sm font-medium text-teal-600 hover:text-teal-500"
          >
            اقرأ المزيد →
          </Link>
        </div>
      </div>
    </div>
  );
} 