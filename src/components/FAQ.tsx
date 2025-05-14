'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface FAQItem {
  question: string;
  answer: string;
  showRegistrationLink?: boolean;
}

const faqs: FAQItem[] = [
  {
    question: "ما هي متطلبات القبول في الجامعات الماليزية؟",
    answer: "تختلف متطلبات القبول حسب المستوى الدراسي والتخصص. للبكالوريوس، عادةً ما تشترط شهادة الثانوية العامة بمعدل جيد، وشهادة كفاءة في اللغة الإنجليزية مثل الأيلتس أو التوفل. للدراسات العليا، تشترط شهادة البكالوريوس وخبرة عملية في بعض التخصصات.",
    showRegistrationLink: true
  },
  {
    question: "كم تبلغ تكلفة الدراسة في ماليزيا؟",
    answer: "تعتبر تكاليف الدراسة في ماليزيا معقولة مقارنة بالدول الغربية. تتراوح رسوم البكالوريوس في الجامعات الحكومية من 3,000 إلى 7,000 دولار أمريكي سنوياً، وفي الجامعات الخاصة من 4,000 إلى 10,000 دولار أمريكي سنوياً، وتختلف حسب التخصص والجامعة."
  },
  {
    question: "ما هي برامج اللغة الإنجليزية المتاحة في ماليزيا؟",
    answer: "توفر ماليزيا مجموعة متنوعة من برامج اللغة الإنجليزية المكثفة والعامة، بدءاً من المستوى المبتدئ وحتى المتقدم. تتميز هذه البرامج بمدرسين ذوي خبرة عالية ومناهج معتمدة دولياً. تتراوح مدة البرامج عادةً بين 3 إلى 12 شهراً حسب المستوى المطلوب والهدف من الدراسة."
  },
  {
    question: "ما هو الحد الأدنى لدرجة الأيلتس المطلوبة للدراسة في ماليزيا؟",
    answer: "عادةً ما تطلب الجامعات الماليزية درجة 5.5 إلى 6.0 في اختبار الأيلتس الأكاديمي للقبول في برامج البكالوريوس، و6.0 إلى 6.5 لبرامج الدراسات العليا. تختلف المتطلبات حسب الجامعة والتخصص، حيث تطلب الكليات الطبية والصحية غالباً درجات أعلى تصل إلى 7.0."
  },
  {
    question: "هل يمكنني دراسة اللغة الإنجليزية قبل بدء الدراسة الأكاديمية؟",
    answer: "نعم، توفر العديد من الجامعات والمعاهد برامج تأسيسية للغة الإنجليزية للطلاب الدوليين. يمكنك الحصول على قبول مشروط من الجامعة وإكمال برنامج اللغة الإنجليزية أولاً، ثم الانتقال مباشرة إلى البرنامج الأكاديمي بعد تحقيق المستوى المطلوب دون الحاجة لاختبار الأيلتس."
  },
  {
    question: "ما هي مدة الحصول على تأشيرة الطالب؟",
    answer: "تستغرق عملية الحصول على تأشيرة الطالب في ماليزيا عادةً من 3 إلى 5 أسابيع عمل بعد تقديم جميع المستندات المطلوبة والحصول على خطاب القبول من الجامعة. نحن في EduGate نساعد في تسريع وتسهيل هذه العملية."
  },
  {
    question: "هل الشهادات الماليزية معترف بها دولياً؟",
    answer: "نعم، الشهادات الصادرة عن الجامعات الماليزية المعتمدة معترف بها دولياً. تخضع جميع البرامج الأكاديمية في ماليزيا لنظام اعتماد صارم من وكالة المؤهلات الماليزية (MQA)، مما يضمن جودة التعليم ومطابقته للمعايير الدولية."
  },
  {
    question: "ما هي خيارات السكن المتاحة للطلاب؟",
    answer: "تتنوع خيارات السكن للطلاب في ماليزيا بين سكن الجامعة (الحرم الجامعي) والشقق المشتركة خارج الحرم الجامعي. تتراوح تكلفة السكن الشهرية من 150 إلى 400 دولار أمريكي حسب الموقع ونوع السكن. نوفر خدمة مساعدة في إيجاد السكن المناسب لميزانيتك واحتياجاتك."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            إجابات لأكثر الأسئلة شيوعاً حول الدراسة في ماليزيا
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="mb-4"
            >
              <div
                className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all ${
                  activeIndex === index ? 'ring-2 ring-primary-color' : ''
                }`}
              >
                <button
                  className="w-full p-6 text-right flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className={`h-5 w-5 transition-colors ${
                      activeIndex === index ? 'text-primary-color' : 'text-gray-500'
                    }`} />
                  </motion.div>
                </button>
                
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                    
                    {/* Registration Link for Admission Requirements */}
                    {faq.showRegistrationLink && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="mt-4"
                      >
                        <Link 
                          href="/student-registration" 
                          className="inline-flex items-center justify-center gap-2 bg-primary-color hover:bg-primary-color/90 text-white py-2 px-4 rounded-lg transition-all duration-200"
                        >
                          <span>سجل الآن للحصول على المزيد من المعلومات</span>
                          <ArrowLeftIcon className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 