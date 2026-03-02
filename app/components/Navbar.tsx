'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isArabic, setIsArabic] = useState(true);

  return (
    <nav className="fixed top-[50px] left-1/2 -translate-x-1/2 z-50 w-[1280px] h-[70px]">
      <div className="relative rounded-full h-full group">
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
        <div className="absolute inset-0 flex items-center justify-between px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/16748711948c681c74613bd74259d711f0030872.png" alt="Storage Logo" className="h-15" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="text-white hover:text-pink-400 transition-colors">
              الرئيسية
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition-colors">
              المميزات
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition-colors">
              الأسعار
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition-colors">
              من نحن
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="px-4 py-2 text-white border border-purple-400/30 rounded-full hover:bg-purple-500/10 transition-colors"
            >
              {isArabic ? 'EN' : 'AR'} ▼
            </button>
            <button className="px-10 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all border border-transparent text-base font-medium">
              ابدأ الآن
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
