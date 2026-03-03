'use client';

export default function ControlSection() {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden" style={{ background: '#050507' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-yellow-500/30 rounded-full px-4 py-2 mb-8">
              <span className="text-yellow-400 text-sm">انضم معنا ⚡</span>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-right">
              سيطرة كاملة على<br /><span style={{ color: '#EBE448' }}>سناب شات.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12 leading-relaxed text-right">
              خوارزميات ذكية لتجاوز حدود المنصة بأمان تام.<br />
              زِد مشاهداتك، ارفع السكور، والتفاعل في "الخريطة" بسرعة.
            </p>

            {/* Features list */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-4 backdrop-blur-sm rounded-2xl p-4 w-auto" style={{ background: 'rgba(10, 10, 12, 0.5)', border: '1px solid rgba(75, 85, 99, 0.3)' }}>
                <div className="w-10 h-10 rounded-xl backdrop-blur-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-white text-base">إضافة مليونين حقيقيين</span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4 backdrop-blur-sm rounded-2xl p-4 w-auto" style={{ background: 'rgba(10, 10, 12, 0.5)', border: '1px solid rgba(75, 85, 99, 0.3)' }}>
                <div className="w-10 h-10 rounded-xl backdrop-blur-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-white text-base">مشاهدات ستوري فيروسية</span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4 backdrop-blur-sm rounded-2xl p-4 w-auto" style={{ background: 'rgba(10, 10, 12, 0.5)', border: '1px solid rgba(75, 85, 99, 0.3)' }}>
                <div className="w-10 h-10 rounded-xl backdrop-blur-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-white text-base">أمان تام لحسابك (Anti-Ban)</span>
              </div>
            </div>
          </div>

          {/* Left side - Phone mockup */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative">
              {/* Views badge - outside phone on right edge */}
              <div className="absolute top-32 -right-4 lg:-right-16 backdrop-blur-md border border-purple-500/30 rounded-lg lg:rounded-xl px-2 py-1.5 lg:px-4 lg:py-3 text-right z-20" style={{ background: 'rgba(10, 10, 12, 0.3)' }}>
                <p className="text-[10px] lg:text-sm font-semibold" style={{ color: '#EBE448' }}>مشاهدات جديدة</p>
                <div className="flex items-center gap-1 lg:gap-2 justify-end">
                  <span className="text-sm lg:text-xl">👁</span>
                  <p className="text-white font-bold text-sm lg:text-xl">+1,200</p>
                </div>
              </div>

              {/* Followers badge - outside phone on left edge, lower */}
              <div className="absolute bottom-36 -left-4 lg:-left-16 backdrop-blur-md rounded-lg lg:rounded-xl px-2 py-1.5 lg:px-4 lg:py-3 text-left z-30" style={{ background: 'rgba(10, 10, 12, 0.3)', border: '1px solid #EC1BB1' }}>
                <p className="text-[10px] lg:text-sm font-semibold" style={{ color: '#EC1BB1' }}>متابعين جدد</p>
                <div className="flex items-center gap-1 lg:gap-2 justify-start">
                  <span className="text-sm lg:text-xl">👥</span>
                  <p className="text-white font-bold text-sm lg:text-xl">+850</p>
                </div>
              </div>
              
              {/* Phone frame */}
              <div className="w-[320px] h-[650px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden relative">
                {/* Phone screen content */}
                <div className="w-full h-full bg-black p-4 pt-20">
                  {/* Snapchat UI mockup */}
                  <div className="space-y-4 text-right">
                    {/* Profile section */}
                    <div className="flex items-center gap-3 mb-6 flex-row-reverse">
                      <div className="w-16 h-16 rounded-full border-4 border-yellow-400 bg-gray-800"></div>
                      <div className="text-right">
                        <h3 className="text-white font-bold">Storage Growth</h3>
                        <p className="text-gray-400 text-xs">@storage_official</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-gray-900/50 rounded-2xl p-4 mb-4 text-left">
                      <p className="text-white font-bold text-xl mb-1">2.5M Subscribers</p>
                      <p className="text-gray-400 text-sm">من أسرع الحسابات نموًا على السناب 🔥</p>
                      <p className="text-yellow-400 text-xs mt-2">Snapchat Growth Experts</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mb-4 flex-row-reverse">
                      <button className="flex-1 bg-yellow-400 text-black font-bold py-3 rounded-full">
                        Subscribe
                      </button>
                      <button className="flex-1 bg-gray-800 text-white font-bold py-3 rounded-full">
                        Chat
                      </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-6 border-b border-gray-800 mb-4 flex-row-reverse justify-start">
                      <button className="text-white pb-2 border-b-2 border-white">Highlights</button>
                      <button className="text-gray-500 pb-2">Lenses</button>
                    </div>

                    {/* Content cards */}
                    <div className="flex gap-3 flex-row-reverse">
                      {/* Card 1 */}
                      <div className="flex-1 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl relative">
                        <div className="absolute bottom-2 right-2 flex items-center gap-1 text-white text-xs">
                          <span>▶</span>
                          <span>4.5M</span>
                        </div>
                        <div className="absolute bottom-2 left-2 text-white text-xl">🔥</div>
                      </div>

                      {/* Card 2 */}
                      <div className="flex-1 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl relative">
                        <div className="absolute bottom-2 right-2 flex items-center gap-1 text-white text-xs">
                          <span>▶</span>
                          <span>1.2M</span>
                        </div>
                      </div>
                    </div>

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
