'use client';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden pb-32">
      {/* Main background with gradient from light top to dark bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d1b4e] via-[#881BE11A] to-[#0D021F]"></div>
      
      {/* Pink circular overlay in bottom right */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#EC1BB126] rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
      
      {/* Shooting star/comet effect on left side top */}
      <div className="absolute top-90 right-370">
        {/* Comet with elongated shape and tail */}
        <div className="relative w-64 h-32">
          {/* Main glow */}
          <div className="absolute top-1/2 right-0 w-48 h-24 bg-gradient-to-l from-yellow-200/80 via-yellow-400/50 to-transparent blur-2xl transform -translate-y-1/2 -rotate-12"></div>
          {/* Bright center streak */}
          <div className="absolute top-1/2 right-0 w-32 h-2 bg-gradient-to-l from-white via-yellow-300 to-transparent blur-sm transform -translate-y-1/2 -rotate-12"></div>
        </div>
      </div>
      
      {/* Decorative stars */}
      <div className="absolute top-20 left-10 text-white text-2xl animate-pulse">✦</div>
      <div className="absolute top-40 right-20 text-purple-300 text-sm animate-pulse">✦</div>
      <div className="absolute bottom-40 left-20 text-pink-300 text-lg animate-pulse">✦</div>
      <div className="absolute bottom-20 right-40 text-white text-2xl animate-pulse">✦</div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-40 pb-12 md:pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Right Side - Content (Arabic RTL) */}
          <div className="order-2 md:order-1 text-right space-y-4 md:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-purple-200">
              <span className="text-yellow-400">+</span>
              <span>تقنية بونات متقدمة</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              بونات ذكية..
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-purple-400">
                تشتغل بدالك
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
              حلول أمنة متكاملة لنمو حساباتك وأعمالك بسرعة فائقة
              لا مزيد من العمل اليدوي، دع التكنولوجيا تقودك للصدارة
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col-reverse md:flex-row items-stretch md:items-center gap-3 md:gap-4 justify-start pt-2 md:pt-4">
              <button className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm md:text-base rounded-full font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105">
                ابدأ الآن مجاناً
              </button>
              
              <button className="flex items-center justify-center gap-2 px-8 md:px-10 py-2.5 md:py-3 bg-white/10 text-white text-sm md:text-base rounded-full hover:bg-white/20 transition-all">
                <span>شاهد الفيديو</span>
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Left Side - Image with badges */}
          <div className="order-1 md:order-2 relative">
            <div className="relative">
              {/* Dashed border container */}
              <div className="border-2 border-dashed border-purple-400/40 rounded-2xl md:rounded-3xl p-4 md:p-8 relative">
                
                {/* 24/7 Badge */}
                <div className="absolute top-4 md:top-8 right-4 md:right-8 bg-[#1a0b2e] border-2 border-yellow-400 rounded-xl md:rounded-2xl px-3 md:px-4 py-1.5 md:py-2 text-center">
                  <div className="text-lg md:text-2xl font-bold text-white">24/7</div>
                  <div className="text-[10px] md:text-xs text-yellow-400">خدمة متواصلة</div>
                </div>

                {/* Main Image */}
                <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden mt-12 md:mt-0">
                  <img 
                    src="/e6f36395282c0cd48ecdea882812e8af17a9b018.png" 
                    alt="Smart Bot" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Growth Badge */}
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white rounded-xl md:rounded-2xl px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-1.5 md:gap-2 shadow-xl">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs md:text-sm font-semibold text-gray-800">نمو مضمون 100%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
