'use client';

export default function FeaturesSection() {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden" style={{ background: '#050507' }}>
      {/* Purple vertical stripe - full height from top to bottom */}
      
      {/* Light circle at top left */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl z-0" style={{ background: '#881BE112' }}></div>
      
      {/* Light circle at bottom left */}
      
      {/* Dark circle overlay in bottom right */}
      <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] rounded-full translate-x-1/4 translate-y-1/4 z-0 blur-2xl opacity-90" style={{ background: '#181825' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Trusted by section */}
        <div className="text-center mb-16 relative">
          <p className="text-gray-400 text-sm mb-8">Trusted by market leaders</p>
          <div className="relative">
            {/* Gradient overlay behind company names - extends to section edges */}
            <div className="absolute left-1/2 -translate-x-1/2 w-screen pointer-events-none z-10" style={{ background: 'linear-gradient(90deg, #050507 0%, rgba(5, 5, 7, 0) 20%, rgba(5, 5, 7, 0) 80%, #050507 100%)', height: '100%' }}></div>
            <div className="flex items-center justify-center gap-20 flex-wrap opacity-40 relative z-20">
              <div className="text-gray-400 text-xl font-bold">NEXUS</div>
              <div className="text-gray-400 text-xl font-bold">ORBIT</div>
              <div className="text-gray-400 text-xl font-bold">LAYER</div>
              <div className="text-gray-400 text-xl font-bold">VERTEX</div>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-right mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            مصممة للأداء <span className="text-gray-400">الخارق</span>.
          </h2>
          <p className="text-gray-400 text-lg">
            كل ما يحتاجه لتنمية أعمالك في منصة واحدة متكاملة
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          
          {/* Left Column - 2 cards stacked */}
          <div className="space-y-8 w-full lg:w-auto">
            
            {/* Card 2 - Smart Infrastructure */}
            <div className="backdrop-blur-sm rounded-3xl p-8 lg:p-12 relative group hover:border-purple-500/50 transition-all w-full lg:w-[680px] h-auto lg:h-[340px] flex flex-col justify-between" style={{ border: '1px solid rgba(75, 85, 99, 0.5)', background: '#0A0A0C' }}>
              {/* Purple circle glow at top center - with gradient fade */}
              <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(136, 27, 225, 0.05) 0%, rgba(136, 27, 225, 0.4) 50%, rgba(136, 27, 225, 0.05) 100%)' }}></div>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Smart bot visualization */}
              <div className="relative h-32 lg:h-40 flex items-center justify-center mb-6">
                <svg className="w-full h-full" viewBox="0 0 300 200">
                  {/* Lines connecting to dots - even longer lines */}
                  <line x1="150" y1="100" x2="30" y2="10" stroke="#4a5568" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="150" y1="100" x2="270" y2="10" stroke="#4a5568" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="150" y1="100" x2="150" y2="195" stroke="#4a5568" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Center circles */}
                  {/* Outer circle - larger and dashed with lighter stroke */}
                  <circle cx="150" cy="100" r="65" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
                  {/* Inner circle - transparent with colored border only */}
                  <circle cx="150" cy="100" r="35" fill="transparent" stroke="#8b5cf6" strokeWidth="1" />
                  
                  {/* Connecting dots - smaller */}
                  <circle cx="30" cy="10" r="4" fill="#ec4899" />
                  <circle cx="270" cy="10" r="4" fill="#ec4899" />
                  <circle cx="150" cy="195" r="4" fill="#eab308" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 text-right">بنية تحتية ذكية</h3>
                <p className="text-gray-400 text-sm lg:text-base text-right">
                  تخصيص كامل (No-Code) يناسب حجم أعمالك.
                </p>
              </div>
            </div>

            {/* Card 3 - Growth Chart */}
            <div className="backdrop-blur-sm rounded-3xl p-8 lg:p-12 relative overflow-hidden group hover:border-purple-500/50 transition-all w-full lg:w-[680px] h-auto lg:h-[200px]" style={{ border: '1px solid rgba(75, 85, 99, 0.5)', background: '#0A0A0C' }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Text content at very top */}
              <div className="relative z-10 -mt-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1 text-right">نمو متصاعد</h3>
                <p className="text-gray-400 text-sm lg:text-base text-right">
                  تطبيقات دقيقة لنتائج البونات.
                </p>
              </div>

              {/* Growth chart visualization - moved up */}
              <div className="absolute bottom-4 left-0 right-0 h-32 px-0 z-10">
                <svg className="w-full h-full" viewBox="0 0 700 120" preserveAspectRatio="none">
                  {/* Filled area under the curve with gradient */}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EBE448" />
                      <stop offset="50%" stopColor="#EC1BB1" />
                      <stop offset="100%" stopColor="#881BE1" />
                    </linearGradient>
                    <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#EBE448" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgba(235, 228, 72, 0)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Filled area */}
                  <path
                    d="M 700 80 C 600 90, 550 95, 500 70 C 450 45, 400 30, 300 50 C 200 70, 150 60, 50 30 L 0 20 L 0 120 L 700 120 Z"
                    fill="url(#fillGradient)"
                  />
                  
                  {/* Line on top */}
                  <path
                    d="M 700 80 C 600 90, 550 95, 500 70 C 450 45, 400 30, 300 50 C 200 70, 150 60, 50 30 L 0 20"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>

          </div>

          {/* Right Column - Single large card */}
          <div className="backdrop-blur-sm rounded-3xl p-8 lg:p-12 relative group hover:border-purple-500/50 transition-all w-full lg:w-[480px] h-auto lg:h-[580px] lg:mr-12 flex flex-col justify-between" style={{ border: '1px solid rgba(75, 85, 99, 0.5)', background: '#0A0A0C' }}>
            {/* Pink circle glow at bottom center */}
            <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full blur-3xl opacity-30" style={{ background: '#EC1BB1' }}></div>
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Mock terminal/dashboard */}
            <div className="bg-black/40 rounded-xl p-8 border border-gray-700/30 relative min-h-[250px]">
              <div className="space-y-3">
                <div className="h-2 bg-gray-700 rounded w-1/3 mr-auto"></div>
                <div className="h-2 bg-gray-700 rounded w-1/2 mr-auto"></div>
                <div className="h-2 bg-gray-700 rounded w-3/4 mr-auto"></div>
                <div className="h-2 rounded w-full mt-6" style={{ background: '#2A9D8F80' }}></div>
              </div>
              <div className="absolute top-4 right-6">
                <span className="text-xs text-green-400 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">ONLINE</span>
              </div>
            </div>

            {/* Text at bottom */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 text-right">مراقبة حية 24/7</h3>
              <p className="text-gray-400 text-sm lg:text-base text-right">
                تقارير لحظية وأداء مستمر بدون توقف.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
