'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'الموافقة على الشروط',
    text: 'بمجرد دخولك واستخدامك لهذا الموقع فأنت تقر بموافقتك الكاملة على هذه الشروط. إذا كنت لا توافق على أي جزء منها يرجى التوقف عن استخدام الموقع وخدمات البوت فوراً.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'الحسابات والتسجيل',
    text: 'عند إنشاء حساب لصلتي يجب تقديم معلومات دقيقة وكاملة. أنت المسؤول عن الحفاظ على سرية بيانات حسابك ومن كافة الأنشطة التي تتم من خلاله. تلاحظ بأنه في تعليق أي حساب بتنتهك معايير الأمان الخاصة بنا.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'الاستخدام المقبول للبوت',
    text: '',
    bullets: [
      'استخدام البوتات لأغراض مشروعة فقط. يُمنع منها بتاً:',
      'استخدام البوت لإنشاء محتوى مسيء، ضار أو يحتوي على العنف.',
      'محاولة إجراء الهندسة العكسية أو "اختراق" أنظمة البوت أو الخوارزميات.',
      'استخدام الخدمة لإرسال رسائل سبام (Spam) أو محتوى احتيالي.',
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: 'إخلاء المسؤولية عن المحتوى',
    text: 'يتم توليد الردود بواسطة تقنيات الذكاء الاصطناعي (AI). نحن نبذل قصارى جهدنا لضمان الدقة، ولكننا لا نضمن أن تكون جميع إجابات البوت صحيحة بنسبة 100% أو خالية من الأخطاء. المستخدم يتحمل مسؤولية التحقق من المعلومات قبل اتخاذ قرارات بناءً عليها.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'الملكية الفكرية',
    text: 'الموقع وكافة محتوياته (النصوص، الرموز، التصميمات، والخوارزميات) هي ملكية حصرية للمنصة. يُمنع توزيع أي جزء من الموقع دون إذن كتابي مسبق منا.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'تعديل وإيقاف الخدمة',
    text: 'نحتفظ بالحق في تعديل أو إيقاف أي جزء من خدمات البوت أو الموقع في أي وقت دون إشعار مسبق، وذلك لأغراض الصيانة أو التحديث أو تكثيف الأداء التقني.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'تحديد المسؤولية',
    text: 'المنصة غير مسؤولة عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام أو عدم القدرة على استخدام خدمات البوت، أو عن أي فقدان للبيانات يحدث نتيجة عوامل تقنية خارجة عن إرادتنا.',
  },
];

export default function TermsPage() {
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
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: '#050507' }} dir="rtl">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15 pointer-events-none" style={{ background: '#EC1BB1' }} />
      <Navbar />

      <main className="pt-44 pb-20 px-4" dir="rtl">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-right mb-12 reveal">
            <div className="flex items-center justify-start gap-3 mb-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(236,27,177,0.15)' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h1 className="text-white font-bold" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '36px', lineHeight: '1.4' }}>
                سياسة الاستخدام
              </h1>
            </div>
            <p className="text-gray-400" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '14px' }}>
              آخر تحديث: مارس 2026
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-0">
            {sections.map((section, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="flex flex-col gap-3 py-8">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2 justify-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(236,27,177,0.1)' }}>
                      {section.icon}
                    </div>
                    <h2 className="text-white font-bold" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '15px' }}>
                      {section.title}
                    </h2>
                  </div>
                  {/* Text */}
                  <div className="text-right">
                    {section.text ? (
                      <p className="text-gray-400 text-sm" style={{ fontFamily: 'Alexandria, sans-serif', lineHeight: '1.9' }}>
                        {section.text}
                      </p>
                    ) : null}
                    {section.bullets ? (
                      <ul className="text-gray-400 text-sm flex flex-col gap-2" style={{ fontFamily: 'Alexandria, sans-serif', lineHeight: '1.9' }}>
                        {section.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 justify-start">
                            <span className="text-pink-500 mt-1 flex-shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
                {i < sections.length - 1 && (
                  <div className="mx-auto" style={{ width: '65%', height: '1px', background: '#FFFFFF', opacity: 0.1 }} />
                )}
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-gray-500 text-xs text-center mt-10 reveal" style={{ fontFamily: 'Alexandria, sans-serif', lineHeight: '1.8' }}>
            قد نقوم بتحديث هذه الشروط من وقت لآخر. استمرارك في استخدام الموقع بعد نشر التحديثات يعتبر موافقة منك على الشروط الجديدة.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8 reveal">
            <a href="/" className="px-8 py-3 rounded-full border border-pink-500 text-white text-sm font-medium hover:bg-pink-500/10 transition-all" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              أرفض
            </a>
            <a href="/" className="px-8 py-3 rounded-full text-white text-sm font-medium transition-all" style={{ background: 'linear-gradient(90deg, #EC1BB1, #881BE1)', fontFamily: 'Alexandria, sans-serif' }}>
              أوافق
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
