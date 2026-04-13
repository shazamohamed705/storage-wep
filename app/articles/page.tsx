'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, SlidersHorizontal, ArrowLeft, Clock, Eye, Flame, Zap, Rocket, Lightbulb, BookOpen } from 'lucide-react';

const categories = [
  { id: 'all', label: 'الكل', icon: Flame },
  { id: 'automation', label: 'الأتمنة', icon: Zap },
  { id: 'tech', label: 'تحديثات تقنية', icon: Rocket },
  { id: 'success', label: 'شفرة النجاح', icon: Lightbulb },
  { id: 'stories', label: 'قصص واقعية', icon: BookOpen },
];

const articles = [
  {
    id: 1, category: 'success', categoryLabel: 'شفرة النجاح', categoryColor: '#EC1BB1',
    title: 'بناء أول روبوت ذكاء اصطناعي: دليل خطوة بخطوة',
    description: 'تعلم كيفية إنشاء روبوت محادثة بسيط من الصفر باستخدام بايثون ومكتبات معالجة اللغة الطبيعية',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
    date: '12 مايو 2026', readTime: '5 د', views: '3.1K',
  },
  {
    id: 2, category: 'tech', categoryLabel: 'تحديثات تقنية', categoryColor: '#EC1BB1',
    title: 'أفضل 10 أدوات ذكاء اصطناعي يجب أن يعرفها كل مطور في 2026',
    description: 'استكشف أحدث أدوات لتطوير الذكاء الاصطناعي التي تحدث ثورة في صناعة التكنولوجيا هذا العام',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    date: '12 مايو 2026', readTime: '8 د', views: '2.1K',
  },
  {
    id: 3, category: 'automation', categoryLabel: 'الأتمنة', categoryColor: '#EC1BB1',
    title: 'كيف لجأت روبوتات الذكاء الاصطناعي في خدمة العملاء نورة في صناعة التكنولوجيا',
    description: 'اكتشف كيف تعمل الروبوتات الحديثة الذكية على تحسين أوقات الاستجابة',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80',
    date: '15 مارس 2026', readTime: '6 د', views: '2.5K',
  },
  {
    id: 4, category: 'tech', categoryLabel: 'تحديثات تقنية', categoryColor: '#EC1BB1',
    title: 'إطلاق GPT-5: ما الجديد وماذا يعني ذلك للمطورين',
    description: 'تحليل أحدث المزايا والقدرات لأحدث نموذج لغوي متقدم',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    date: '12 مارس 2026', readTime: '7 د', views: '4.2K',
  },
  {
    id: 5, category: 'automation', categoryLabel: 'الأتمنة', categoryColor: '#EC1BB1',
    title: 'مستقبل الذكاء الاصطناعي في أتمتة سر العمل',
    description: 'استكشاف الاتجاهات القادمة والتقنيات لأتمتة العمليات التجارية بالذكاء الاصطناعي',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    date: '1 مارس 2026', readTime: '5 د', views: '2.1K',
  },
  {
    id: 6, category: 'stories', categoryLabel: 'قصص واقعية', categoryColor: '#EC1BB1',
    title: 'كيف زادت الشركة س المبيعات بنسبة %65 بالأتمتة الذكية',
    description: 'دراسة حالة تفصيلية حول تطبيق الأتمتة المدعومة بالذكاء الاصطناعي لتنمية المبيعات الإلكترونية',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    date: '9 مارس 2026', readTime: '4 د', views: '1.9K',
  },
];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'all' || a.category === activeCategory;
    const matchSearch = a.title.includes(search) || a.description.includes(search);
    return matchCat && matchSearch;
  });

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);

  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: '#050507' }} dir="rtl">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15 pointer-events-none" style={{ background: '#881BE1' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse at top, #EC1BB126 0%, transparent 70%)',
        borderRadius: '0 0 50% 50%',
      }} />
      <Navbar />

      <main className="pt-60 pb-20 px-4">

        {/* Header */}
        <div className="text-center mb-11 max-w-4xl mx-auto reveal">
          <h1 className="font-bold text-white mb-6 whitespace-nowrap" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(28px, 5vw, 36px)', color: '#ffffff' }}>
            بوابة المستقبل الرقمي
          </h1>
          <p className="md:whitespace-nowrap" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 500, fontSize: 'clamp(14px, 2.5vw, 32px)', lineHeight: '100%', letterSpacing: '0%', color: '#ffffff' }}>
            دليلك العملي لاحتراف الأتمتة وتطوير أعمالك بالذكاء الاصطناعي
          </p>
        </div>

        {/* Search */}
        <div className="max-w-4xl mx-auto mb-10 flex gap-3 justify-end pl-20">
          <div className="flex-1 relative">
            <input value={search} onChange={e => setSearch(e.target.value)}
              className="w-full text-right text-white focus:outline-none"
              style={{
                background: 'rgba(13,2,31,0.8)',
                border: '1.25px solid #EC1BB1',
                borderRadius: '14px',
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingRight: '48px',
                paddingLeft: '16px',
                fontFamily: 'Alexandria, sans-serif',
                height: 'clamp(44px, 5vw, 52px)',
                width: '100%',
                maxWidth: '1000px',
              }}
              placeholder="ابحث عن المقالات..." />
            <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button className="flex items-center gap-3 text-white text-sm flex-shrink-0"
            style={{
              fontFamily: 'Alexandria, sans-serif',
              background: 'rgba(13,2,31,0.8)',
              border: '1px solid #EC1BB1',
              borderRadius: '10px',
              width: 'clamp(90px, 12vw, 119px)',
              height: 'clamp(44px, 5vw, 58px)',
              justifyContent: 'center',
              gap: '11px',
            }}>
            <SlidersHorizontal size={16} />
            تصفية
          </button>
          
        </div>

        {/* Categories */}
        <div className="mb-12">
          {/* Mobile: horizontal scroll */}
          <div className="md:hidden overflow-x-auto hide-scrollbar" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
            <div className="flex gap-3 px-4 min-w-max">
              {categories.map(cat => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                  className="flex items-center gap-2 text-sm font-medium transition-all whitespace-nowrap flex-shrink-0"
                  style={{
                    fontFamily: 'Alexandria, sans-serif',
                    background: activeCategory === cat.id ? '#EC1BB1' : '#0D021F',
                    border: '1.25px solid #EC1BB1',
                    borderRadius: '9999px',
                    color: 'white',
                    height: '46px',
                    padding: '0 20px',
                  }}>
                  <cat.icon size={16} />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          {/* Desktop: original centered wrap */}
          <div className="hidden md:flex justify-center gap-3 flex-wrap">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  fontFamily: 'Alexandria, sans-serif',
                  background: activeCategory === cat.id ? '#EC1BB1' : '#0D021F',
                  border: '1.25px solid #EC1BB1',
                  borderRadius: '9999px',
                  color: 'white',
                  height: '46px',
                  padding: '0 20px',
                }}>
                <cat.icon size={16} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, idx) => (
            <a key={article.id} href={`/articles/${article.id}`}
              className={`reveal rounded-2xl overflow-hidden border border-gray-800/50 flex flex-col hover:border-[#EC1BB1]/50 transition-all`}
              style={{ background: 'rgba(13,2,31,0.8)', transitionDelay: `${(idx % 3) * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: article.categoryColor, fontFamily: 'Alexandria, sans-serif' }}>
                  {article.categoryLabel}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-white text-right mb-2" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: '1.5' }}>
                  {article.title}
                </h3>
                <p className="text-gray-400 text-right text-sm mb-4 flex-1" style={{ fontFamily: 'Alexandria, sans-serif', lineHeight: '22px' }}>
                  {article.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-800/50">
                  <div className="flex items-center gap-3 text-gray-500 text-xs">
                    <span className="flex items-center gap-1"><Eye size={12} />{article.views}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{article.date}</span>
                  </div>
                  <a href={`/articles/${article.id}`} className="flex items-center gap-1 text-[#EC1BB1] text-sm font-medium hover:opacity-80 transition-opacity"
                    style={{ fontFamily: 'Alexandria, sans-serif' }}>
                    اقرأ المزيد
                    <ArrowLeft size={14} />
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

    

      <Footer />
    </div>
  );
}
