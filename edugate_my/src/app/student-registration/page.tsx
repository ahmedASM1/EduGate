import Navbar from '@/components/Navbar';
import { IdentificationIcon } from '@heroicons/react/24/outline';

export default function StudentRegistration() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              تسجيل طالب جديد
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن
            </p>
          </div>
          <form className="mx-auto mt-16 max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  الاسم الكامل
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  البريد الإلكتروني
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="whatsapp" className="block text-sm font-semibold leading-6 text-gray-900">
                  رقم الواتساب
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="whatsapp"
                    id="whatsapp"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="institution" className="block text-sm font-semibold leading-6 text-gray-900">
                  الجامعة/المعهد المطلوب
                </label>
                <div className="mt-2.5">
                  <select
                    id="institution"
                    name="institution"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">اختر الجامعة/المعهد</option>
                    <option value="apu">جامعة APU</option>
                    <option value="taylors">جامعة تايلورز</option>
                    <option value="sunway">جامعة صنواي</option>
                    <option value="ems">معهد EMS</option>
                    <option value="els">معهد ELS</option>
                    {/* Add more options */}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="major" className="block text-sm font-semibold leading-6 text-gray-900">
                  التخصص المطلوب (اختياري)
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="major"
                    id="major"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  ملاحظات إضافية
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                إرسال الطلب
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 