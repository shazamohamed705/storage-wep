export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            مستعد لكسر <span className="text-gray-500">الأرقام القياسية؟</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            انضم للآلاف الممتازين الذين اختاروا نموهم الرقمي مع Storage
          </p>
          <button className="px-10 py-4 rounded-full font-bold text-white text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50" style={{ background: 'linear-gradient(to right, #881BE1, #EC1BB1)' }}>
            ابدأ رحلة النمو الآن
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-right">
          
          {/* Column 1 - Services */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">الخدمات</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">سناب شات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">تيك توك</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">إنستجرام</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">إكس (تويتر)</a></li>
            </ul>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">الشركة</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الأسعار</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Column 3 - About */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">نبذتنا</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              المنصة الأولى لزيادة النمو الرقمي<br />
              نقدم خطط دقيقة وحلول احترافية<br />
              المتخصصون والتفاعل على كافة المنصات
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all" style={{ background: 'linear-gradient(135deg, #EC1BB1 0%, #FF1744 100%)' }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5H8zm0 2h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                </svg>
              </a>
            </div>

            {/* Podcast Link */}
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #EC1BB1 0%, #FF1744 100%)' }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-gray-400">لدينا بودكاست إبداعي</span>
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
