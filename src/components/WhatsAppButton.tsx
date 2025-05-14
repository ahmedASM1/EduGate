"use client";

import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="تواصل معنا للمزيد من المعلومات"
    >
      <FaWhatsapp className="h-6 w-6" />
    </Link>
  );
} 