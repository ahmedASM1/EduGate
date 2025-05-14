"use client";

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ContactButton from './ContactButton';

type ContactModalProps = {
  className?: string;
};

export default function ContactModal({ className = '' }: ContactModalProps) {
  return (
    <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300"
      >
        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-green-50 rounded-xl">
              <FaWhatsapp className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">تواصل معنا</h3>
          </div>
          
          <p className="text-lg text-gray-600 mb-10">
            لمزيد من المعلومات حول الأسعار والتخصصات، يمكنك التواصل معنا عبر صفحة التواصل
          </p>
          
          <ContactButton size="lg" />
        </div>
      </motion.div>
    </div>
  );
} 