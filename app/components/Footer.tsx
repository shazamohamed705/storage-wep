export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden" style={{ background: '#000000' }}>
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, #050507 0%, #881BE1 20%, #EC1BB1 50%, #EBE448 80%, #050507 100%)', opacity: 0.3 }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            مستعد لكسر <span className="text-gray-500">الأرقام القياسية؟</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            انضم للآلاف الممتازين الذين اختاروا نموهم الرقمي مع Storage
          </p>
          <button className="px-10 py-4 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50" style={{ background: 'linear-gradient(to right, #881BE1, #EC1BB1)', fontFamily: 'Alexandria', fontWeight: 700, fontSize: '18px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }}>
          ابدأ رحلة النمو الآن
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 text-right">
          
          {/* Column 1 - About */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-bold text-lg md:text-xl mb-4 md:mb-6">نبذتنا</h3>
            <p className="text-gray-400 text-sm md:text-base mb-6" style={{ fontFamily: 'Alexandria', fontWeight: 400, fontSize: '14px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right' }}>
              المنصة الأولى لزيادة النمو الرقمي<br />
              نقدم خطط دقيقة وحلول احترافية<br />
              المتخصصون والتفاعل على كافة المنصات
            </p>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-4 md:mb-6">الشركة</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">من نحن</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">الأسعار</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-4 md:mb-6">الخدمات</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">سناب شات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">تيك توك</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">إنستجرام</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">إكس (تويتر)</a></li>
            </ul>
          </div>

          {/* Column 4 - Follow Us */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-bold text-lg md:text-xl mb-4 md:mb-6">تابعنا</h3>
            
            {/* Social Icons in a row */}
            <div className="flex gap-3 md:gap-4 items-center mb-4 md:mb-6 justify-end md:justify-start">
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full  border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full  border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full  border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            
            {/* Podcast Link */}
            <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-full bg-gray-900 border border-gray-800 w-full">
              <span className="text-gray-400 text-xs">أدخل بريدك الإلكتروني...</span>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #881BE1 0%, #EC1BB1 100%)' }}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>جميع الحقوق محفوظة Storage© 2025</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
