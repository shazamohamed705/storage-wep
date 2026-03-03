'use client';

export default function InstagramSection() {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-20">
          
          {/* Left side - Phone mockup */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative">
              {/* Growth indicator badge */}
              <div className="absolute -left-4 lg:-left-30 bottom-15 lg:bottom-15 backdrop-blur-md rounded-lg lg:rounded-xl px-2 py-1.5 lg:px-4 lg:py-3 z-20 w-[120px] lg:w-auto" style={{ background: 'rgba(10, 10, 12, 0.8)', border: '1px solid rgba(236, 27, 177, 0.5)' }}>
                <p className="text-[10px] lg:text-xs text-gray-400 mb-0.5 lg:mb-1 text-right">المتابعين</p>
                <div className="flex items-center gap-1 lg:gap-2">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <p className="text-white font-bold text-base lg:text-2xl">250.4K</p>
                </div>
              </div>

              {/* Phone frame */}
              <div className="w-[320px] h-[650px] rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-visible relative" style={{ background: '#000000' }}>
                {/* New Viral Post badge - half outside */}
                <div className="absolute top-32 -right-4 lg:-right-24 z-30 flex items-center gap-2 lg:gap-3 px-2 py-1.5 lg:px-4 lg:py-2 rounded-lg lg:rounded-xl w-[140px] lg:w-auto" style={{ background: 'rgba(50, 50, 55, 0.9)' }}>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #EC1BB1 0%, #FF1744 100%)' }}>
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs lg:text-sm font-bold text-white">New Viral Post</p>
                    <p className="text-[10px] lg:text-xs text-gray-400">Trending now 🔥</p>
                  </div>
                </div>

                {/* Phone screen content */}
                <div className="w-full h-full relative overflow-hidden rounded-[2.5rem]">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 px-6 py-2 flex items-center justify-between">
                    <p className="text-white text-sm font-semibold">9:41</p>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-1 bg-white rounded"></div>
                      <div className="w-4 h-1 bg-white rounded"></div>
                    </div>
                  </div>

                  {/* Instagram header */}
                  <div className="absolute top-10 left-0 right-0 bg-black px-4 py-3 flex items-center justify-between z-10">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                    <p className="text-white font-semibold">Instagram</p>
                    <div className="w-6"></div>
                  </div>

                  {/* Profile section */}
                  <div className="absolute top-24 left-0 right-0 px-4">
                    <div className="flex items-center mb-4 flex-row-reverse">
                      <div className="flex items-center gap-3 flex-row-reverse">
                        <div className="p-0.5 rounded-full" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                          <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black"></div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 justify-end">
                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <p className="text-white font-semibold text-sm">Storage.Growth</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instagram post */}
                    <div className="rounded-xl overflow-hidden mb-3">
                      <img src="/Screenshot 2026-03-02 142658.png" alt="Instagram Post" className="w-full h-64 object-cover" />
                    </div>

                    {/* Post actions */}
                    <div className="flex items-center gap-4 mb-2 flex-row-reverse">
                      <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>

                    {/* Likes and caption */}
                    <p className="text-white font-bold text-sm mb-1 text-left">15,402 likes</p>
                    <p className="text-white text-sm mb-1 text-left">
                      <span className="font-semibold">Storage.Growth</span> 🚀 اسرع طريق للنجاح الآن
                    </p>
                    <p className="text-gray-400 text-sm mb-1 text-left">View all 120 comments</p>
                    <p className="text-gray-500 text-xs text-left">2 HOURS AGO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8" style={{ border: '1px solid rgba(236, 27, 177, 0.3)', background: 'rgba(236, 27, 177, 0.1)' }}>
              <span className="text-sm" style={{ color: '#EC1BB1' }}>تفاعل حقيقي 💗</span>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-right">
              واجهة الشهرة<br />
              <span className="text-gray-500">الرقمية.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12 leading-relaxed text-right">
              حوّل حسابك إلى مغناطيس للمتابعين والمعجبين.<br />
              استهدف جمهورك بدقة. وضاعف وصول الريلز (Reels) لتتصدر الإكسبلور.
            </p>

            {/* Features list */}
            <div className="space-y-4">
              {/* Feature 1 */}
              <div className="flex items-center gap-4 p-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(236, 27, 177, 0.1)', border: '2px solid rgba(236, 27, 177, 0.3)' }}>
                  <svg className="w-7 h-7" style={{ color: '#EC1BB1' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">انتشار الريلز</span>
                  <span className="text-gray-400 text-sm">ملايين المشاهدات عبر Reels</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4 p-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(249, 115, 22, 0.1)', border: '2px solid rgba(249, 115, 22, 0.3)' }}>
                  <svg className="w-7 h-7 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">تفاعل ذكي</span>
                  <span className="text-gray-400 text-sm">لايكات وكومنتات من حسابات حقيقية</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4 p-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '2px solid rgba(59, 130, 246, 0.3)' }}>
                  <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">تجهيز للتوثيق</span>
                  <span className="text-gray-400 text-sm">بناء معايير الحصول على العلامة</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
