'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-20 px-4 pt-32 md:pt-40 relative overflow-hidden" dir="rtl">
        <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[200px] md:h-[400px] rounded-[40%] blur-3xl opacity-20" style={{ background: '#881BE1' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-32">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12">
              نحن نبني محرك <span className="text-gray-500">النمو الرقمي</span>.
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              أكثر من مجرد منصة أتمتة، نحن فريق من المهندسين والخبراء
              نسعى لإعادة تعريف كيفية انتشار العلامات التجارية وصناع المحتوى
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center mb-16 md:mb-32">

            {/* Text - first on mobile, right on desktop */}
            <div className="order-1 text-right w-full">
              <div className="relative inline-block mb-6 md:mb-8">
                <h2 className="text-xl md:text-3xl font-bold">الرؤية التي تحركنا</h2>
                <div className="absolute -bottom-4 right-0 w-16 h-1" style={{ background: 'linear-gradient(90deg, #881BE1 0%, #EC1BB1 50%, #EBE448 100%)' }}></div>
              </div>
              <div className="space-y-3 text-gray-300 text-sm mt-6" style={{ lineHeight: '1.6' }}>
                <p>
                  في عالم تتغير فيه الخوارزميات يومياً، أصبح الوصول للجمهور تحدياً معقداً. تأسست{' '}
                  <span className="text-white font-bold">Storage</span> لتكون الحل الجذري والآمن
                </p>
                <p>
                  نحن لا نبيع أرقاماً وهمية، بل نوفر بنية تحتية ذكية (Smart Tech) تتفاعل مع المنصات كأنها مستخدم بشري، لضمان نمو حقيقي، سريع، ومحمي بتقنية Ghost Mode المتطورة.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                <div className="flex items-start gap-2 bg-white/5 border border-gray-800 rounded-xl p-3 md:p-4">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h3 className="font-bold text-xs md:text-sm mb-0.5">أمان تام</h3>
                    <p className="text-xs text-gray-400">نظام وحماية من الحظر</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/5 border border-gray-800 rounded-xl p-3 md:p-4">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-pink-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                  <div>
                    <h3 className="font-bold text-xs md:text-sm mb-0.5">سرعة التنفيذ</h3>
                    <p className="text-xs text-gray-400">نتائج فورية خلال دقائق</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image - second on mobile, left on desktop */}
            <div className="order-2 flex justify-center w-full">
              <img
                src="/Screenshot 2026-03-25 194030.png"
                alt="Vision"
                className="w-full max-w-xs md:max-w-md h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-10 md:mb-16"></div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-1">2026</h3>
              <p className="text-xs md:text-sm text-gray-400">سنة التأسيس</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-1">+150K</h3>
              <p className="text-xs md:text-sm text-gray-400">مستخدم نشط للمنصة</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-1">+2.5M</h3>
              <p className="text-xs md:text-sm text-gray-400">طلب تم تنفيذه بنجاح</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-1">99.9%</h3>
              <p className="text-xs md:text-sm text-gray-400">نسبة استقرار النظام</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
