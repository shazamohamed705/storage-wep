'use client';

export default function TikTokSection() {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden" style={{ background: '#050507' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8" style={{ border: '1px solid rgba(236, 27, 177, 0.3)' }}>
              <span className="text-sm" style={{ color: '#EC1BB1' }}> الأسرع انتشاراً 🚀</span>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-right">
              اصنع الترند في<br />
              <span style={{ 
                textShadow: '3px 3px 0px #EC1BB1, -3px -3px 0px #8B5CF6'
              }}>تيك توك</span>.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12 leading-relaxed text-right">
              خوارزميات مخصصة لدفع فيديوهاتك إلى الـ "For You" فورًا<br />
              سواء كنت صانع محتوى أو علامة تجارية، الوصول للملايين يبدأ هنا.
            </p>

            {/* Features list */}
            <div className="space-y-6 mb-12">
              {/* Feature 1 */}
              <div className="flex items-center gap-4 p-4" >
                 <div className="w-10 h-10 rounded-xl backdrop-blur-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">زيادة متابعين تدعمك</span>
                  <span className="text-gray-400 text-sm">الكثير من المتابعين حسب خطتك</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4 rounded-2xl p-4" >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">إكسلور فوري (FYP)</span>
                  <span className="text-gray-400 text-sm">دفع الفيديو للظهور في الصفحة الرئيسية</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4 rounded-2xl p-4" >
                 <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">دعم البث المباشر</span>
                  <span className="text-gray-400 text-sm">رفع مشاهدات اللايف وتصدر الترتيب</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-8 py-4 rounded-full font-bold text-white text-lg transition-all hover:scale-105" style={{ background: '#EC1BB1' }}>
              جرب باقات تيك توك
            </button>
          </div>

          {/* Right side - Phone mockup */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start  flex-shrink-0">
            <div className="relative">
              {/* Pink circle glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-2xl z-0" style={{ background: '#EC1BB1', opacity: 0.1 }}></div>
              
              {/* Growth badge - outside phone */}
              <div className="absolute backdrop-blur-md rounded-xl text-left z-20" style={{ 
                background: 'rgba(10, 10, 12, 0.8)', 
                border: '1px solid #EC1BB1',
                width: '260px',
                height: '100px',
                bottom: '80px',
                left: '-130px',
                padding: '16px 20px'
              }}>
                <p className="text-xs font-semibold text-white mb-1">معدل النمو</p>
                <p className="text-white font-bold text-2xl mb-2">+999%</p>
                <svg className="w-full h-10" viewBox="0 0 240 40" fill="none" preserveAspectRatio="none">
                  <path d="M15 20 L40 16 L72 18 L104 10 L136 7 L168 6 L200 5 L218 4" stroke="#d454bcff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M218 -2 L225 4 L218 10 Z" fill="#d454bcff" stroke="#d454bcff" strokeWidth="1"/>
                  
                </svg>
              </div>
              
              {/* Phone frame */}
              <div className="w-[320px] h-[650px] rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden relative transform -rotate-6 z-10" style={{ background: 'linear-gradient(166.88deg, #222222 0%, #000000 100%)' }}>
                {/* Phone screen content */}
                <div className="w-full h-full p-4 pt-20 relative">
                  {/* TikTok UI mockup */}
                  <div className="space-y-4 text-right">
                    {/* Live badge */}
                    <div className="flex items-center gap-2 justify-end mb-6">
                      <span className="text-white text-sm justify-end">👁️ 15.2k</span>
                      <div className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded">
                        <span className="text-white text-xs font-bold">LIVE</span>
                      </div>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-3 flex-row-reverse mb-8">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600"></div>
                      <div className="text-right">
                        <p className="text-white font-bold text-sm">Storge-elbagory</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress bars at bottom */}
                  <div className="absolute bottom-20 left-4 right-4 space-y-3 flex flex-col items-end">
                    {/* First line - shortest */}
                    <div className="h-2 bg-gray-700 rounded-full w-1/2"></div>
                    
                    {/* Second line - medium */}
                    <div className="h-2 bg-gray-700 rounded-full w-2/5"></div>
                    
                    {/* Third line with circle - longest */}
                    <div className="relative w-3/4">
                      <div className="h-2 bg-gray-700 rounded-full w-full"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-gray-600 bg-gray-700"></div>
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
