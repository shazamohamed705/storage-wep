'use client';

export default function TwitterSection() {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden" style={{ background: '#050507' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-yellow-500/30 rounded-full px-4 py-2 mb-8">
              <span className="text-yellow-400 text-sm">تفوق نفسي 💛</span>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-right">
              قد الهاشتاج..<br />
           <span className="text-gray-500">واصنع</span> الحدث.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12 leading-relaxed text-right">
              أدوات متقدمة للسيطرة على الترايد المحلي والعالمي<br />
              ارفع صوت علامتك التجارية وشارك في "المساحات" بجمهور حقيقي.
            </p>

            {/* Features list */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-4 backdrop-blur-sm rounded-2xl p-4 w-auto" >
                <div className="w-10 h-10 rounded-xl backdrop-blur-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">مستمعين للمساحات</span>
                  <span className="text-gray-400 text-sm">تكبير الحضور في أي مساحة</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4 backdrop-blur-sm rounded-2xl p-4 w-auto">
                <div className="w-10 h-10 rounded-xl backdrop-blur-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">تصدر الترايد</span>
                  <span className="text-gray-400 text-sm">حركات منسقة لرفع الهاشتاج</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4 backdrop-blur-sm rounded-2xl p-4 w-auto">
                <div className="w-10 h-10 rounded-xl backdrop-blur-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(251, 146, 60, 0.1)', border: '1px solid rgba(251, 146, 60, 0.3)' }}>
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">ملايين مرات الظهور</span>
                  <span className="text-gray-400 text-sm">تضخيم انتشار تغريداتك</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left side - Twitter card mockup */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative">
              {/* Twitter card */}
              <div className="w-[420px] rounded-3xl p-6 backdrop-blur-md relative" style={{ background: 'linear-gradient(109.75deg, rgba(255, 255, 255, 0.05) -0.24%, rgba(0, 0, 0, 0.3) 100.24%)', border: '1px solid rgba(75, 85, 99, 0.3)' }}>
                {/* Profile header */}
                <div className="flex items-center gap-3 mb-6 flex-row-reverse">
                  <div className="w-16 h-16 rounded-full bg-gray-700"></div>
                  <div className="text-right flex-1">
                    <div className="flex items-center gap-2 justify-end">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#EBE448' }}>
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <h3 className="text-white font-bold text-lg">Storage Bot</h3>
                    </div>
                    <p className="text-gray-400 text-sm">@storage_app</p>
                  </div>
                </div>

                {/* Tweet content */}
                <div className="mb-6 text-left">
                  <p className="text-white text-lg leading-relaxed mb-2">
                    أقوى أدوات النمو الرقمي اللّي بين يديك.
                  </p>
                  <p className="text-white text-lg leading-relaxed mb-3">
                    سيطر على الترايد. واجعل الجميع يتحدث عنك! 🚀
                  </p>
                  <p className="text-blue-400 text-lg">#نمو_بلا_حدود</p>
                </div>

                {/* Divider */}
                <div className="w-full h-px mb-4" style={{ background: 'rgba(75, 85, 99, 0.3)' }}></div>

                {/* Stats */}
                <div className="flex gap-8 mb-4 text-sm flex-row-reverse">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Views</span>
                    <span className="text-white font-bold text-base">1.2M</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Reposts</span>
                    <span className="text-white font-bold text-base">15K</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Likes</span>
                    <span className="text-pink-400 font-bold text-base">24K</span>
                  </div>
                </div>

                {/* Trend badge - positioned half outside */}
                <div className="absolute bottom-5 -right-25 flex items-center justify-between p-3 rounded-2xl flex-row-reverse" style={{ 
                  background: 'rgba(0, 0, 0, 0.8)', 
                  border: '1px solid rgba(34, 197, 94, 0.5)',
                  width: '180px',
                  height: '70px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <svg className="w-8 h-8" style={{ color: '#22C55E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-1">Trend Rank</p>
                    <p className="font-bold text-xl" style={{ color: '#22C55E' }}>#1 KSA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
