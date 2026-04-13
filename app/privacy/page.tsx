'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'بيان الخصوصية',
    text: 'نحن ملتزمون بخلق تجربة آمنة وسهلة لكل مستخدم يزور موقعنا. هدفنا هو الشفافية التامة حول كيفية معالجة أنظمة البوت (Bots) والذكاء الاصطناعي لبياناتك، لضمان أعلى مستويات الأمان والخصوصية كما هو موضح في سياساتنا الواضحة.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
    title: 'ما هي "بيانات البوت"؟',
    text: 'عند التفاعل مع المحادثات الآلية على موقعنا، تقوم النصوص والبيانات التقنية اللازمة لتحسين دقة الردود. هذه البيانات تُستخدم فقط لفهم سياق طلباتك وتقديم حلول ذكية وفورية تناسب احتياجاتك.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'لماذا نستخدم الذكاء الاصطناعي والكوكيز؟',
    text: 'ملفات تعريف الارتباط (Cookies) هي ملفات نصية صغيرة تساعد الموقع على تذكر تفضيلاتك (مثل اللغة أو سجل المحادثة السابق). نستخدمها مع تقنيات الذكاء الاصطناعي لجعل زيارتك القادمة أسرع وأكثر تخصيصاً، وتجنب تكرار إدخال نفس المعلومات في كل مرة.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'ما هي المعلومات التي نجمعها تحديداً؟',
    text: 'المعلومات التي نجمعها هي ما تقدمه أنت عند التسجيل أو أثناء الدردشة مع البوت (مثل الاستفسارات أو الاسم) بالإضافة إلى معلومات عامة مثل نوع المتصفح، وعنوان الـ IP، والوقت المستغرق في الموقع، لضمان استقرار الخدمة وتطوير الأداء التقني.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'مع من نشارك معلوماتك؟',
    text: 'نحن لا نبيع بياناتك الشخصية لأي جهة. قد يتم مشاركة بعض البيانات المشفرة فقط مع شركائنا التقنيين أمثل مزودي خدمات السحاب أو معالجي البيانات لأغراض تشغيل الموقع وضمان عمل البوتات بكفاءة على مدار الساعة.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'حقوق الملكية والمحتوى',
    text: 'جميع الردود والمحتويات الناتجة عن البوتات على هذا الموقع هي ملكية فكرية للمنصة. نحن نسعى لتقديم أدق المعلومات، ولكن يرجى العلم أن استجابات البوت يتم إنشاؤها آلياً وتخضع للتحديث المستمر بناءً على خوارزميات التعلم الآلي.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: 'التحكم في معلوماتك',
    text: 'لديك الحق الكامل في طلب نسخة من سجل محادثاتك أو طلب حذف بياناتك تماماً من سجلاتنا. نحن نسعى أيضاً لتقديم تحديثات جديدة يمكنك تعطيل ملفات تعريف الارتباط من إعدادات متصفحك، ولكن يرجى العلم أن بعض خصائص البوت قد لا تعمل بشكل صحيح حينها.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/>
      </svg>
    ),
    title: 'التحديثات',
    text: 'سياسة الخصوصية الخاصة بنا تخضع للتغيير لمواكبة التطورات التكنولوجية والقانونية. أي تحديثات جديدة ستظهر فوراً على هذه الصفحة لضمان علمك الدائم بحقوقك.',
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: '#050507' }}>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15 pointer-events-none" style={{ background: '#881BE1' }} />
      <Navbar />

      <main className="pt-45 pb-20 px-4" dir="ltr">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-right mb-12 reveal">
            <h1 className="text-white font-bold mb-3" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '36px', lineHeight: '1.4' }}>
              سياسة الخصوصية
            </h1>
            <p className="text-gray-400" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '16px' }}>
              التزامنا بحماية بياناتك، تفاعلات البوت، وأمن المستخدم.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-0">
            {sections.map((section, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="flex items-start gap-6 py-8">
                  {/* Text */}
                  <div className="flex-1 text-right">
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Alexandria, sans-serif', lineHeight: '1.9' }}>
                      {section.text}
                    </p>
                  </div>
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2 flex-shrink-0 w-52 justify-end">
                    <h2 className="text-white font-bold text-right" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '15px' }}>
                      {section.title}
                    </h2>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(236,27,177,0.1)' }}>
                      {section.icon}
                    </div>
                  </div>
                </div>
                {i < sections.length - 1 && (
                  <div className="mx-auto" style={{ width: '65%', height: '1px', background: '#FFFFFF', opacity: 1 }} />
                )}
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
