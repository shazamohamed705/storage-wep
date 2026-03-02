'use client';

export default function FacebookSection() {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #050507 0%, #0A1628 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-50">
          
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8" style={{ border: '1px solid rgba(59, 130, 246, 0.3)', background: 'rgba(59, 130, 246, 0.1)' }}>
              <span className="text-sm" style={{ color: '#3B82F6' }}>🔵 قوة المجتمع</span>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-right">
              هيمن على<br />
              <span className="text-gray-500">المنصة</span> الأكبر.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12 leading-relaxed text-right">
              حوّل صفحتك إلى آلة ربح لا تتوقف ومجتمع متفاعل.<br />
              أدوات كاملة للمسابقات، إدارة الجروبات، ورفع التفاعل على المنشورات.
            </p>

            {/* Features list */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                  <svg className="w-6 h-6" style={{ color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">شات بوت ذكي</span>
                  <span className="text-gray-400 text-sm">رد تلقائي ذكي، يستقبل لنا</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)' }}>
                  <svg className="w-6 h-6" style={{ color: '#0EA5E9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">تنمية الجروبات</span>
                  <span className="text-gray-400 text-sm">زيادة الأعضاء وكثافتهم في المجموعات</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-white text-base font-semibold block mb-1">انتشار فيروسي</span>
                  <span className="text-gray-400 text-sm">فيروسي، انشرها على كل شبكة</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center items-center flex-shrink-0">
            <div className="relative w-full max-w-[500px] h-[500px]">
              
              {/* Dotted circle behind like */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full z-0" style={{ border: '2px dashed rgba(59, 130, 246, 0.15)' }}></div>
              
              {/* Center - Big Like Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-22 h-22 rounded-full flex items-center justify-center z-10" style={{ background: '#3B82F6', boxShadow: '0 0 60px rgba(59, 130, 246, 0.5)' }}>
                <img src="/Like.png" alt="Like" className="w-15 h-15" />
              </div>

              {/* Top right badge */}
              <div className="absolute top-12 right-6 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-2 z-20" style={{ background: 'rgba(10, 10, 12, 0.8)', border: '1px solid rgba(59, 130, 246, 0.5)' }}>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-gray-900"></div>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-gray-900"></div>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-gray-900"></div>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm font-bold">+50K</p>
                  <p className="text-gray-400 text-xs">أعضاء الجروب</p>
                </div>
              </div>

              {/* Bottom left chat bubble */}
              <div className="absolute bottom-20 left-6 z-20">
                <div className="backdrop-blur-md px-4 py-3 relative" style={{ 
                  background: 'rgba(10, 10, 12, 0.1)', 
                  border: '1px solid rgba(34, 197, 94, 0.5)',
                  borderRadius: '0 16px 16px 16px',
                  width: '238px',
                  height: '117px'
                }}>
                  <div className="flex items-center gap-2 mb-2 justify-end">
                    <span className="text-gray-300 text-xs">تم إرسال الرد تلقائياً</span>
                    <div className="w-4 h-4 rounded flex items-center justify-center" style={{ background: '#22C55E' }}>
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg text-center" style={{ background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                    <p className="text-blue-400 text-xs font-semibold">Automated Reply</p>
                  </div>
                </div>
                {/* WhatsApp-style tail */}
                <svg className="absolute top-0 -left-2" width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ opacity: 0.1 }}>
                  <path d="M0 0C0 0 12 0 12 10C12 20 0 20 0 20V0Z" fill="rgba(10, 10, 12, 1)"/>
                </svg>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {/* Top right line */}
                <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2"/>
                <circle cx="85%" cy="20%" r="4" fill="#3B82F6"/>
                
                {/* Bottom left line */}
                <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2"/>
                <circle cx="15%" cy="75%" r="4" fill="#3B82F6"/>
                
                {/* Left line */}
                <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2"/>
                <circle cx="10%" cy="50%" r="4" fill="#3B82F6"/>
                
                {/* Right line */}
                <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2"/>
                <circle cx="90%" cy="50%" r="4" fill="#3B82F6"/>
                
                {/* Top left line */}
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="2"/>
                <circle cx="20%" cy="20%" r="4" fill="#3B82F6"/>
                
                {/* Bottom right line */}
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="2"/>
                <circle cx="80%" cy="80%" r="4" fill="#3B82F6"/>
              </svg>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
