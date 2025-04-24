import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              بوابتك للدراسة في ماليزيا
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              نقدم لكم خدمات تسجيل الطلاب للدراسة في ماليزيا و تسهيل إجراءات القبول الدراسي لطلاب اللغة الإنجليزية والجامعات
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/student-registration"
                className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                سجل الآن
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                تواصل معنا <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600">خدماتنا</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              كل ما تحتاج لبدء رحلتك الدراسية
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  الجامعات الخاصة
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    تعرف على أفضل الجامعات الخاصة في ماليزيا وبرامجها الأكاديمية المتميزة
                  </p>
                  <p className="mt-6">
                    <Link href="/private-universities" className="text-sm font-semibold leading-6 text-teal-600">
                      اكتشف المزيد <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  الجامعات الحكومية
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    استكشف الجامعات الحكومية الماليزية المرموقة وفرص الدراسة المتاحة
                  </p>
                  <p className="mt-6">
                    <Link href="/public-universities" className="text-sm font-semibold leading-6 text-teal-600">
                      اكتشف المزيد <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  معاهد اللغة
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    اختر من بين أفضل معاهد اللغة الإنجليزية في ماليزيا لتطوير مهاراتك اللغوية
                  </p>
                  <p className="mt-6">
                    <Link href="/language-institutes" className="text-sm font-semibold leading-6 text-teal-600">
                      اكتشف المزيد <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
