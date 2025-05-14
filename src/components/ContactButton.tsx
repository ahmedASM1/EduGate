"use client";

import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

type ContactButtonProps = {
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export default function ContactButton({ fullWidth = true, size = 'md', className = '' }: ContactButtonProps) {
  const sizeClasses = {
    sm: 'text-sm py-2 px-4 gap-2',
    md: 'text-base py-3 px-6 gap-3',
    lg: 'text-lg py-4 px-8 gap-3',
  };
  
  return (
    <Link 
      href="/contact"
      className={`group flex items-center justify-center ${sizeClasses[size]} ${fullWidth ? 'w-full' : 'inline-flex'} bg-primary-color hover:bg-primary-color/90 text-white font-medium rounded-xl shadow-md transition text-center active:scale-95 ${className}`}
    >
      <FaWhatsapp className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'}`} />
      <span>للمزيد من المعلومات تواصل معنا</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} transform group-hover:translate-x-1 transition-transform`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
    </Link>
  );
} 