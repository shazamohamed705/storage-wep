'use client';

import { useState, useRef } from 'react';

const categories = [
  { id: 'all', label: 'الكل', count: 8, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  )},
  { id: 'customer-service', label: 'خدمة العملاء', count: 2, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )},
  { id: 'website', label: 'موقع ويب', count: 2, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  )},
  { id: 'data', label: 'تحليل البيانات', count: 2, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  )},
  { id: 'mobile', label: 'تطبيق هاتف', count: 1, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  )},
  { id: 'automation', label: 'الأتمتة', count: 1, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  )},
];

const solutions = [
  {
    category: 'website', categoryLabel: 'موقع ويب',
    badge: '85% تقليل في أوقات الانتظار',
    title: 'نظام إدارة الحجوزات الذكي',
    description: 'تطبيق ويب متكامل لإدارة المواعيد، المدفوعات، وتنبيهات العملاء تلقائياً.',
    tags: ['SMS', 'Node.js', 'دفع الكتروني'], price: '250$',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80',
  },
  {
    category: 'customer-service', categoryLabel: 'خدمة العملاء',
    badge: '3x زيادة في التحويلات',
    title: 'بوت دعم عملاء بالذكاء الاصطناعي',
    description: 'نظام دردشة ذكي يرد على استفسارات العملاء على مدار الساعة بدقة عالية.',
    tags: ['GPT-4', 'Webhook', 'واتساب'], price: '350$',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80',
  },
  {
    category: 'data', categoryLabel: 'تحليل البيانات',
    badge: '90% دقة في التنبؤات',
    title: 'لوحة تحليلات المبيعات',
    description: 'داشبورد تفاعلي يحلل بيانات مبيعاتك ويقدم توصيات ذكية لزيادة الأرباح.',
    tags: ['Python', 'Charts', 'Excel'], price: '200$',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
  },
  {
    category: 'mobile', categoryLabel: 'تطبيق هاتف',
    badge: '50K+ تحميل',
    title: 'تطبيق توصيل طلبات',
    description: 'تطبيق موبايل متكامل لإدارة الطلبات والتوصيل مع تتبع فوري للسائقين.',
    tags: ['React Native', 'Maps', 'Push'], price: '500$',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80',
  },
  {
    category: 'automation', categoryLabel: 'الأتمتة',
    badge: '10x سرعة في التنفيذ',
    title: 'أتمتة سوشيال ميديا',
    description: 'نظام نشر تلقائي على جميع منصات التواصل الاجتماعي بجدولة ذكية.',
    tags: ['API', 'Scheduler', 'Analytics'], price: '150$',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
  },
  {
    category: 'website', categoryLabel: 'موقع ويب',
    badge: '99.9% وقت تشغيل',
    title: 'متجر إلكتروني متكامل',
    description: 'منصة تجارة إلكترونية كاملة مع إدارة المخزون والمدفوعات والشحن.',
    tags: ['Next.js', 'Stripe', 'SEO'], price: '400$',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
];

export default function SolutionsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'all'
    ? solutions
    : solutions.filter(s => s.category === activeCategory);

  const visibleCount = 3;
  const maxIndex = Math.max(0, filtered.length - visibleCount);
  const prev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const next = () => setCurrentIndex(i => Math.min(maxIndex, i + 1));
  const visible = filtered.slice(currentIndex, currentIndex + visibleCount);

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    // card width = 85vw + 16px gap
    const cardWidth = el.clientWidth * 0.85 + 16;
    el.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const cardWidth = el.clientWidth * 0.85 + 16;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setCurrentIndex(Math.min(idx, filtered.length - 1));
  };

  return (
    <section className="bg-black text-white py-20 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">حلول برمجية جاهزة للانطلاق</h2>
          <p className="text-gray-400 text-sm md:text-base">
            اختر من بين مجموعة مختارة من التطبيقات والأنظمة الذكية، مبرمجة مسبقاً وجاهزة لخدمة أعمالك فوراً.
          </p>
        </div>
      </div>

      {/* Category Filters - full width */}
      <div className="mb-10 py-4 overflow-x-auto hide-scrollbar" style={{ background: '#0D021FF2', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="flex gap-3 px-4 md:px-16 min-w-max md:min-w-0 md:justify-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setCurrentIndex(0); scrollRef.current?.scrollTo({ left: 0 }); }}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full border font-medium transition-all whitespace-nowrap text-sm md:text-base ${
                activeCategory === cat.id
                  ? 'bg-[#EC1BB1] border-[#EC1BB1] text-white shadow-[0_0_15px_rgba(236,27,177,0.5)]'
                  : 'border-gray-700 text-gray-400 hover:border-gray-500'
              }`}
            >
              {cat.icon}
              {cat.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat.id ? 'bg-white/20' : 'bg-gray-800'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop */}
        <div className="hidden md:flex relative items-center gap-4">
          <button onClick={prev} disabled={currentIndex === 0}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all disabled:opacity-30">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div className="flex-1 grid grid-cols-3 gap-6">
            {visible.map((sol, i) => <SolutionCard key={i} sol={sol} />)}
          </div>
          <button onClick={next} disabled={currentIndex >= maxIndex}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all disabled:opacity-30">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
        </div>

        {/* Mobile: snap scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="md:hidden hide-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
          style={{ direction: 'ltr' }}
        >
          {filtered.map((sol, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-[85vw]" style={{ direction: 'rtl' }}>
              <SolutionCard sol={sol} />
            </div>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="md:hidden flex justify-center items-center gap-2 mt-5">
          {filtered.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentIndex === i ? '32px' : '8px',
                height: '8px',
                background: currentIndex === i
                  ? 'linear-gradient(90deg, #881BE1, #EC1BB1)'
                  : 'rgba(255,255,255,0.2)',
                boxShadow: currentIndex === i ? '0 0 10px rgba(236,27,177,0.8)' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ sol }: { sol: typeof solutions[0] }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-800/50 flex flex-col h-full"
      style={{ background: 'linear-gradient(180deg, #1a0b2e 0%, #0d0618 100%)' }}>
      <div className="relative h-48 overflow-hidden">
        <img src={sol.image} alt={sol.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 right-3 bg-[#EC1BB1] text-white text-xs font-bold px-3 py-1 rounded-full">
          {sol.categoryLabel}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#EC1BB1]/60 bg-black/70 backdrop-blur-sm whitespace-nowrap">
          <svg className="w-4 h-4 text-[#EC1BB1] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
          <span className="text-xs text-white font-semibold">{sol.badge}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-right flex-1 font-bold text-lg leading-snug" style={{ fontFamily: 'Alexandria, sans-serif' }}>{sol.title}</h3>
          <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
          </svg>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>{sol.description}</p>
        <div className="mb-3">
          <span className="text-sm mb-2 flex items-center gap-1.5">
            <span className="text-[#EC1BB1]">●</span>
            <span className="text-white font-medium">المميزات</span>
          </span>
          <div className="flex flex-wrap gap-2">
            {sol.tags.map((tag, ti) => (
              <span key={ti} className="border border-gray-700 text-gray-300 text-xs px-3 py-2 rounded-lg" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 mb-4">
          <span className="text-[#EC1BB1] text-xs">●</span>
          <span className="text-gray-400 text-xs" style={{ fontFamily: 'Alexandria, sans-serif' }}>السعر:</span>
          <span className="text-[#EC1BB1] text-xl font-bold" style={{ fontFamily: 'Alexandria, sans-serif' }}>{sol.price}</span>
        </div>
        <button className="w-full flex items-center overflow-hidden rounded-full transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(90deg, #881BE1 0%, #EC1BB1 100%)' }}>
          <span className="flex-1 py-3 text-center text-white font-bold text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>معاينة وشراء</span>
          <span className="flex items-center justify-center px-4 py-3 border-r border-white/20">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
