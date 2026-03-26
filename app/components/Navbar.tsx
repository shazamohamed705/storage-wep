'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isArabic, setIsArabic] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-[50px] left-1/2 -translate-x-1/2 z-50 w-full max-w-[1280px] px-4 md:px-0">
      <div className="relative rounded-full h-[70px] group">
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
          <div className="flex items-center">
            <a href="/">
              <img src="/16748711948c681c74613bd74259d711f0030872.png" alt="Storage Logo" className="h-12 md:h-15 cursor-pointer" />
            </a>
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
        <div className="md:hidden mt-4 bg-[#1a0b2e]/95 backdrop-blur-xl rounded-3xl p-6 border border-purple-400/30">
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
