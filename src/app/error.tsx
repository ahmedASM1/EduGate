'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <ExclamationTriangleIcon className="h-16 w-16 text-red-500" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">عذراً، حدث خطأ ما</h2>
          <p className="text-gray-600 mb-8">
            نواجه مشكلة في تحميل هذه الصفحة. يرجى المحاولة مرة أخرى
          </p>
          <button
            onClick={reset}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200"
          >
            حاول مرة أخرى
          </button>
        </motion.div>
      </div>
    </div>
  );
} 