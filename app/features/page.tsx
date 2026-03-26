'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-20 px-4 pt-32 md:pt-40" dir="rtl">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-32">
            <div className="inline-block bg-[#EBE448]/10 border border-[#EBE448]/30 rounded-full px-6 py-2 mb-6">
              <span className="text-[#EBE448] text-sm">✦ المميزات التقنية ✦</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              ضُممت للتفوق <span className="text-gray-400">على الخوارزميات</span>.
            </h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
              بنية تحتية قوية تضمن لك الأمان المطلق، السرعة الفائقة، والنمو المستمر
              على كافة منصات التواصل الاجتماعي
            </p>
          </div>

          {/* Main Feature Card - Ghost Mode */}
          <div className="bg-gradient-to-br from-[#1a1a0a] via-[#0f0f0a] to-[#0a0a0a] border border-gray-800/30 rounded-3xl p-6 md:p-12 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3a3a1a]/20 via-transparent to-transparent"></div>
            
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10" dir="ltr">
              {/* Visual - hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex order-2 lg:order-1 justify-start relative">
                <div className="relative w-48 h-56">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 120" fill="none">
                    <path d="M 50 5 L 90 20 L 90 50 C 90 80, 50 110, 50 110 C 50 110, 10 80, 10 50 L 10 20 Z" stroke="#8B8B3D" strokeWidth="1.5" strokeDasharray="5,5" strokeOpacity="0.4" fill="none"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-36 h-36 text-[#6B6B2D]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                </div>
                <div className="absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-gray-700/50 rounded-xl p-4 w-64 shadow-2xl">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-green-400 font-mono text-xs space-y-1.5">
                    <div>&gt; [x] Ghost_Protocol...</div>
                    <div>&gt; Bypassing AI detection</div>
                    <div>&gt; Status: 100% SECURE</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-right order-1 lg:order-2 relative">
                <div className="absolute -top-16 right-0 w-10 h-10 md:w-12 md:h-12 bg-[#8B8B3D]/10 border border-[#8B8B3D]/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#8B8B3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">(Ghost Mode) تقنية التخفي</h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  نظام محاكاة يُحرّك بنسبة 100% خوارزمياتنا لتتصرف تماماً كالمستخدم الطبيعي. الحركات راندم، توقيع في التفاصيل، تغيير IPs مما يضمن حماية حسابك من الحظر أو القيود نهائياً
                </p>
                {/* Terminal on mobile */}
                <div className="lg:hidden mt-6 bg-black border border-gray-700/50 rounded-xl p-4 w-full">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-green-400 font-mono text-xs space-y-1.5">
                    <div>&gt; [x] Ghost_Protocol...</div>
                    <div>&gt; Bypassing AI detection</div>
                    <div>&gt; Status: 100% SECURE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Card 1 - خوادم سحابية */}
            <div className="bg-[#0a0a0a] border border-gray-800/50 rounded-3xl p-6 md:p-12 relative overflow-hidden">
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 gap-6 items-center" dir="ltr">
                {/* Left - Visual - desktop only */}
                <div className="relative order-2 lg:order-1 hidden lg:block">
                  <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 200 100">
                    <line x1="20" y1="10" x2="80" y2="60" stroke="#EC1BB1" strokeWidth="1.5" strokeDasharray="4,4" strokeOpacity="0.4" />
                    <line x1="40" y1="10" x2="80" y2="60" stroke="#EC1BB1" strokeWidth="1.5" strokeDasharray="4,4" strokeOpacity="0.4" />
                  </svg>
                  <div className="space-y-3 mt-16">
                    <div className="bg-transparent border-2 border-[#EC1BB1] rounded-lg p-3">
                      <div className="h-1 bg-gray-800 rounded-full mx-3"></div>
                    </div>
                    <div className="bg-transparent border border-gray-700 rounded-lg p-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></div>
                      <div className="h-1 bg-gray-800 rounded-full flex-1 mr-3"></div>
                    </div>
                    <div className="bg-transparent border border-gray-700 rounded-lg p-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></div>
                      <div className="h-1 bg-gray-800 rounded-full flex-1 mr-3"></div>
                    </div>
                  </div>
                </div>
                {/* Right - Content */}
                <div className="text-right order-1 lg:order-2">
                  <div className="flex items-center justify-end gap-3 mb-4 lg:mb-20">
                    <h3 className="text-xl md:text-3xl font-bold whitespace-nowrap">خوادم سحابية لا تتعطل</h3>
                    <div className="w-12 h-12 bg-[#EC1BB1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#EC1BB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    نمتلك شبكة خوادم (Servers) موزعة عالمياً لضمان تنفيذ طلباتك في أجزاء من الثانية، مع نسبة استقرار 99.9%
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - استهداف ذكي */}
            <div className="bg-[#0a0a0a] border border-gray-800/50 rounded-3xl p-6 md:p-12 relative overflow-hidden">
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 gap-6 items-center" dir="ltr">
                {/* Left - Circles */}
                <div className="flex justify-center order-2 lg:order-1">
                  <div className="relative w-36 h-36 md:w-48 md:h-48">
                    <div className="absolute inset-0 rounded-full border-2 border-gray-700"></div>
                    <div className="absolute inset-6 md:inset-8 rounded-full border-2 border-dashed border-[#881BE1]/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#881BE1] blur-2xl opacity-60"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#881BE1] blur-md opacity-80 z-10"></div>
                      <div className="absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#881BE1] z-10"></div>
                    </div>
                    <div className="absolute top-6 right-12">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EBE448]"></div>
                      <div className="absolute top-1 left-1 w-16 h-0.5 bg-[#EBE448]/50 origin-left" style={{ transform: 'rotate(225deg)' }}></div>
                    </div>
                    <div className="absolute bottom-10 left-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EC1BB1]"></div>
                      <div className="absolute top-1 left-1 w-16 h-0.5 bg-[#EC1BB1]/50 origin-left" style={{ transform: 'rotate(45deg)' }}></div>
                    </div>
                  </div>
                </div>
                {/* Right - Content */}
                <div className="text-right order-1 lg:order-2">
                  <div className="flex items-center justify-end gap-3 mb-4 lg:mb-6">
                    <h3 className="text-xl md:text-3xl font-bold whitespace-nowrap">استهداف ذكي (AI)</h3>
                    <div className="w-12 h-12 bg-[#881BE1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#881BE1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    لا مزيد من المتابعين "الفانتوم"، محركنا المدعوم بالذكاء الاصطناعي يحلل اهتماماتك لجلب تفاعل من ناس حقيقية وذات اهتمامات.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card - تحليلات */}
          <div className="bg-[#0a0a0a] border border-gray-800/50 rounded-3xl p-6 md:p-12 relative overflow-hidden">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center" dir="ltr">
              {/* Chart */}
              <div className="flex justify-center w-full">
                <div className="relative w-full max-w-[400px] h-44 md:h-52 bg-gradient-to-br from-black via-gray-950 to-black rounded-2xl border border-gray-800/20 overflow-hidden p-6">
                  <div className="absolute top-4 right-4 bg-green-500/10 text-green-400 text-xs font-medium px-2.5 py-1 rounded-md border border-green-500/20">
                    +24%
                  </div>
                  <div className="absolute top-16 right-24 w-2.5 h-2.5 rounded-full bg-green-400 z-20 shadow-lg shadow-green-400/50"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-green-500/5 rounded-full blur-2xl"></div>
                  <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 400 208" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 208 L 0 150 Q 60 135, 100 110 Q 140 85, 180 95 Q 220 105, 260 85 Q 300 65, 340 75 Q 370 85, 400 70 L 400 208 Z" fill="url(#waveGradient)"/>
                    <path d="M 0 150 Q 60 135, 100 110 Q 140 85, 180 95 Q 220 105, 260 85 Q 300 65, 340 75 Q 370 85, 400 70" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="text-right">
                <div className="flex items-center justify-end gap-3 mb-4">
                  <h3 className="text-xl md:text-3xl font-bold">تحليلات عميقة ولحظية</h3>
                  <div className="w-12 h-12 bg-green-400/10 border border-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  لوحة تحكمك ليست لطلب الخدمات فقط، بل هي مركز قيادة لرصد معدلات نموك، وتحليل عائد الاستثمار (ROI) بدقة متناهية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
