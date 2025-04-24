"use client";

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/YOUR_WHATSAPP_NUMBER"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="تواصل معنا عبر واتساب"
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
} 