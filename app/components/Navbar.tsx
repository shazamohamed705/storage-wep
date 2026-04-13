'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LayoutGrid, Users, Ticket, Star, BookOpen, Shield, FileText, PlusCircle, FolderOpen, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isArabic, setIsArabic] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppsMenuOpen, setIsAppsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const appsPages = [
    { name: 'تطبيقات جاهزة', href: '/solutions-details', icon: LayoutGrid },
    { name: 'فريق المبرمجين', href: '/about', icon: Users },
    { name: 'تذاكر الدعم', href: '/support', icon: Ticket },
    { name: 'شاركنا تقييمك', href: '/review', icon: Star },
    { name: 'المقالات', href: '/articles', icon: BookOpen },
    { name: 'سياسة الخصوصية', href: '/privacy', icon: Shield },
    { name: 'سياسة الاستخدام', href: '/terms', icon: FileText },
    { name: 'طلب خدمة جديدة', href: '/new-service', icon: PlusCircle },
    { name: 'مشاريعنا السابقة', href: '/previous-projects', icon: FolderOpen },
  ];

  return (
    <nav className="fixed top-[50px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[1280px] px-4 md:px-0 overflow-visible">
      <div className="relative rounded-full h-[70px] group overflow-visible">
        {/* Background */}
        <div className="absolute inset-0 bg-[#1a0b2e]/60 backdrop-blur-xl rounded-full" />
        
        {/* Gradient border - faded by default, bright on hover */}
        <div 
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(90.17deg, rgba(136, 27, 225, 0.4) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(236, 27, 177, 0.4) 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
        
        {/* Gradient border on hover - bright */}
        <div 
          className="absolute inset-0 rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(90.17deg, rgba(136, 27, 225, 0.8) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(236, 27, 177, 0.8) 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/">
              <img src="/16748711948c681c74613bd74259d711f0030872.png" alt="Storage Logo" className="h-12 md:h-15 cursor-pointer" />
            </a>
            {/* Apps Menu Button */}
            <div className="relative">
              <button
                onClick={() => setIsAppsMenuOpen(!isAppsMenuOpen)}
                className="p-2 text-white hover:text-pink-400 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/>
                </svg>
              </button>
              {/* Apps Slide Panel - rendered via portal outside nav stacking context */}
              {mounted && isAppsMenuOpen && createPortal(
                <>
                  <div
                    className="fixed inset-0"
                    style={{ background: 'rgba(0,0,0,0.5)', zIndex: 9998 }}
                    onClick={() => setIsAppsMenuOpen(false)}
                  />
                  <div
                    className="fixed right-0 top-0 bottom-0 w-72 overflow-y-auto"
                    style={{ background: '#0D021F', borderLeft: '1px solid rgba(236,27,177,0.2)', zIndex: 9999 }}
                  >
                    <div className="px-4 py-8 flex flex-col gap-3">
                      {appsPages.map((page, i) => (
                        <a
                          key={i}
                          href={page.href}
                          onClick={() => setIsAppsMenuOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 rounded-full border border-gray-700 text-gray-400 hover:border-[#EC1BB1] hover:text-white transition-all"
                          dir="rtl"
                        >
                          <page.icon size={18} className="text-pink-500 flex-shrink-0" />
                          <span className="text-base font-medium">{page.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </>,
                document.body
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <a href="/" className="text-white hover:text-pink-400 transition-colors">
              الرئيسية
            </a>
            <a href="/features" className="text-white hover:text-pink-400 transition-colors">
              المميزات
            </a>
            <a href="/pricing" className="text-white hover:text-pink-400 transition-colors">
              الأسعار
            </a>
            <a href="/about" className="text-white hover:text-pink-400 transition-colors">
              من نحن
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Cart Icon */}
            <a href="/orders" className="p-2 text-white hover:text-pink-400 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </a>
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="px-3 md:px-4 py-2 text-white border border-purple-400/30 rounded-full hover:bg-purple-500/10 transition-colors text-sm"
            >
              {isArabic ? 'EN' : 'AR'} ▼
            </button>
            <a href="/register" className="hidden md:block px-10 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all border border-transparent text-base font-medium">
              ابدأ الآن
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[#1a0b2e]/95 backdrop-blur-xl rounded-3xl p-6 border border-purple-400/30 overflow-visible">
          <div className="flex flex-col gap-4">
            <a href="/" className="text-white hover:text-pink-400 transition-colors text-right py-2">
              الرئيسية
            </a>
            <a href="/features" className="text-white hover:text-pink-400 transition-colors text-right py-2">
              المميزات
            </a>
            <a href="/pricing" className="text-white hover:text-pink-400 transition-colors text-right py-2">
              الأسعار
            </a>
            <a href="/about" className="text-white hover:text-pink-400 transition-colors text-right py-2">
              من نحن
            </a>
            
            <a href="/register" className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all mt-2 text-center block">
              ابدأ الآن
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
