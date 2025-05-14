import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  HomeIcon,
  UserGroupIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

type ServiceCardProps = {
  type: 'academic' | 'visa' | 'housing' | 'reception';
  title: string;
  description: string;
};

const iconMap = {
  academic: AcademicCapIcon,
  visa: DocumentCheckIcon,
  housing: HomeIcon,
  reception: UserGroupIcon,
};

const iconBgColorMap = {
  academic: 'bg-blue-50',
  visa: 'bg-green-50',
  housing: 'bg-orange-50',
  reception: 'bg-purple-50',
};

export default function ServiceCard({ type, title, description }: ServiceCardProps) {
  const Icon = iconMap[type];
  const iconBgColor = iconBgColorMap[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-start gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-right">
            {description}
          </p>
        </div>
        
        <div className={`shrink-0 ${iconBgColor} rounded-xl p-3`}>
          <Icon className="h-6 w-6 text-gray-900" />
        </div>
      </div>
    </motion.div>
  );
} 