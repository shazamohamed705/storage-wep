'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PricingPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('snapchat');
  const [selectedPlan, setSelectedPlan] = useState(0);

  const platforms = [
    { id: 'snapchat', name: 'سناب شات', icon: '👻' },
    { id: 'tiktok', name: 'تيك توك', icon: '🎵' },
    { id: 'instagram', name: 'إنستجرام', icon: '📷' },
    { id: 'x', name: 'إكس', icon: '❌' },
  ];

  const pricingPlans = [
    {
      title: 'زيادة المتابعين',
      subtitle: 'متابعين متفاعلين لحساباتك',
      price: '$25',
      originalPrice: '5,000 متابع',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      features: ['بدء فوري لطلب 5 دقائق', 'ضمان تعويض 30 يوم', 'لا يطلب كلمة المرور'],
    },
    {
      title: 'رفع السكور (Score)',
      subtitle: 'خطة شاملة لزيادة وتقوية حساباتك',
      price: '$15',
      originalPrice: 'نقطة 50K',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      features: ['سرعة تصل لـ 10K باليوم', 'نقاط ثابتة لا تنتهي', 'آمن دائماً على الحساب'],
    },
    {
      title: 'مشاهدات الخريطة',
      subtitle: 'تصدر خريطة سناب شات بطلباتك',
      price: '$10',
      originalPrice: '10,000 مشاهدة',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      features: ['حسابات من نفس الدولة', 'تثبيت على الخريطة', 'تنفيذ احترافي ضميني'],
    },
    {
      title: 'مشاهدات القصة (Story)',
      subtitle: 'روّج لقصتك الرسمية فوراً',
      price: '$8',
      originalPrice: '5,000 مشاهدة',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      ),
      features: ['مشاهدات حقيقية 100%', 'نسبة تخطي (Skip) طبيعية', 'وصول للأكسبلور'],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-20 px-4 pt-32 md:pt-40" dir="rtl">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 flex items-center justify-center gap-2 md:gap-3">
              <span>👻</span>
              <span>أسعار خدمات سناب شات</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg">
              اختر الباقة المناسبة لطموحك، جميع الخدمات تتضمن ضمان الجودة وسرعة التنفيذ
            </p>
          </div>

          {/* Platform Tabs */}
          <div className="grid grid-cols-2 md:flex md:justify-center gap-2 md:gap-4 mb-8 md:mb-16">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`px-4 md:px-8 py-3 md:py-4 rounded-full transition-all flex items-center justify-center gap-2 md:gap-3 font-medium text-sm md:text-base ${
                  selectedPlatform === platform.id
                    ? 'border-0 shadow-[0_0_60px_rgba(235,228,72,0.8)]'
                    : 'bg-[#1a1a1a] border-2 border-gray-800 text-gray-400 hover:border-gray-700'
                }`}
                style={selectedPlatform === platform.id ? { background: 'rgba(235, 228, 72, 0.15)', color: '#EBE448' } : {}}
              >
                <span className="text-xl">{platform.icon}</span>
                <span>{platform.name}</span>
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                onClick={() => setSelectedPlan(index)}
                className={`relative rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all cursor-pointer w-full mx-auto ${
                  selectedPlan === index
                    ? 'bg-gradient-to-b from-[#EBE448]/10 to-transparent border-2 shadow-[0_0_40px_rgba(235,228,72,0.4)]'
                    : 'bg-[#0f0f0f] border-2 border-gray-800'
                }`}
                style={selectedPlan === index ? { borderColor: '#EBE448' } : {}}
              >
                {selectedPlan === index && index === 0 && (
                  <div className="absolute -top-3 right-4 text-black text-xs px-2 md:px-3 py-1 rounded-full font-bold" style={{ background: '#EBE448' }}>
                    الأكثر مبيعاً
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-start mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-transparent border border-gray-700 rounded-xl md:rounded-2xl flex items-center justify-center">
                    {plan.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-xl font-bold text-right mb-1 md:mb-2">{plan.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm text-right mb-3 md:mb-4 hidden sm:block">{plan.subtitle}</p>

                {/* Price */}
                <div className="text-right mb-3 md:mb-4">
                  <div className="flex items-baseline gap-1 md:gap-2 justify-start flex-wrap">
                    <span className="text-2xl md:text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 text-xs md:text-sm">/ {plan.originalPrice}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-800 mb-3 md:mb-4"></div>

                {/* Features */}
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm">
                      <span className="mt-0.5 md:mt-1 flex-shrink-0" style={{ color: '#EBE448' }}>●</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`w-full py-2 md:py-3 rounded-full font-bold transition-all text-xs md:text-base ${
                    selectedPlan === index
                      ? 'text-black hover:shadow-lg'
                      : 'bg-transparent border border-gray-700 text-white hover:border-gray-600'
                  }`}
                  style={selectedPlan === index ? { background: '#EBE448', boxShadow: '0 0 20px rgba(235, 228, 72, 0.5)' } : {}}
                >
                  اطلب الآن
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
