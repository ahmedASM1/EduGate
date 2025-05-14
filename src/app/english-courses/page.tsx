import EnglishCourses from '@/components/EnglishCourses';
import Head from 'next/head';

export default function EnglishCoursesPage() {
  return (
    <>
      <Head>
        <title>دورات اللغة الإنجليزية في ماليزيا | EduGate</title>
        <meta name="description" content="دورات متخصصة في اللغة الإنجليزية والتحضير للاختبارات الدولية في ماليزيا مع مدرسين متخصصين. تعرف على الأسعار، التفاصيل، وسجل الآن عبر EduGate." />
      </Head>
      <main className="min-h-screen bg-surface">
        <EnglishCourses />
      </main>
    </>
  );
} 