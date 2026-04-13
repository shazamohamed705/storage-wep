'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FolderOpen, TrendingUp, ExternalLink, LayoutGrid, Headphones, ShoppingCart, BarChart2, Heart } from 'lucide-react';

const categories = [
  { id: 'all', label: 'الكل', count: 6, icon: LayoutGrid },
  { id: 'customer-service', label: 'خدمة العملاء', count: 2, icon: Headphones },
  { id: 'ecommerce', label: 'التجارة الإلكترونية', count: 2, icon: ShoppingCart },
  { id: 'data', label: 'تحليل البيانات', count: 1, icon: BarChart2 },
  { id: 'health', label: 'الرعاية الصحية', count: 1, icon: Heart },
];

const projects = [
  {
    id: 1,
    category: 'customer-service',
    categoryLabel: 'خدمة العملاء',
    title: 'روبوت دردشة ذكي للدعم الفني',
    description: 'حل متكامل للرد الآلي على استفسارات العملاء على مدار الساعة قلل أوقات الانتظار بنسبة 85% وزاد رضا العملاء 60%',
    stat: '85% تقليل في أوقات الانتظار',
    client: 'شركة الاتصالات العربية',
    tags: ['React', 'Node.js', 'GPT-4'],
    type: 'تقنية',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80',
  },
  {
    id: 2,
    category: 'customer-service',
    categoryLabel: 'خدمة العملاء',
    title: 'منصة إدارة تذاكر الدعم',
    description: 'نظام متكامل لإدارة طلبات الدعم الفني وتتبعها آلياً مع تصنيف ذكي للأولويات وتقليل وقت الاستجابة بنسبة 70%',
    stat: '70% تسريع في الاستجابة',
    client: 'مجموعة التقنية الخليجية',
    tags: ['Next.js', 'Python', 'AI'],
    type: 'تقنية',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    id: 3,
    category: 'ecommerce',
    categoryLabel: 'التجارة الإلكترونية',
    title: 'متجر إلكتروني بتوصيات ذكية',
    description: 'منصة تجارة إلكترونية متكاملة مع محرك توصيات مدعوم بالذكاء الاصطناعي رفع معدل التحويل بنسبة 45% خلال 3 أشهر',
    stat: '45% زيادة في المبيعات',
    client: 'متاجر النخبة',
    tags: ['React', 'Stripe', 'ML'],
    type: 'تجارة',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    id: 4,
    category: 'ecommerce',
    categoryLabel: 'التجارة الإلكترونية',
    title: 'لوحة تحكم المبيعات والمخزون',
    description: 'نظام إدارة مخزون ذكي مع تنبؤ بالطلب وتحليل المبيعات في الوقت الفعلي وفّر 30% من تكاليف التخزين',
    stat: '30% توفير في التكاليف',
    client: 'شركة الأفق للتجزئة',
    tags: ['Vue.js', 'Django', 'Redis'],
    type: 'تجارة',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    id: 5,
    category: 'data',
    categoryLabel: 'تحليل البيانات',
    title: 'منصة تحليل بيانات العملاء',
    description: 'حل تحليلي شامل يجمع بيانات من مصادر متعددة ويقدم رؤى قابلة للتنفيذ ساعد في رفع الاحتفاظ بالعملاء 55%',
    stat: '55% تحسن في الاحتفاظ',
    client: 'بنك الابتكار الرقمي',
    tags: ['Python', 'Tableau', 'BigQuery'],
    type: 'بيانات',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
  },
  {
    id: 6,
    category: 'health',
    categoryLabel: 'الرعاية الصحية',
    title: 'تطبيق متابعة المرضى الذكي',
    description: 'منصة رقمية لمتابعة حالات المرضى عن بُعد مع تنبيهات ذكية للأطباء قلصت معدل إعادة الدخول للمستشفى 40%',
    stat: '40% تقليل في إعادة الدخول',
    client: 'مستشفيات الشفاء',
    tags: ['React Native', 'Node.js', 'IoT'],
    type: 'صحة',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
];

export default function PreviousProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#050507' }} dir="rtl">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #881BE1, #EC1BB1)', opacity: 0.15, zIndex: 0 }}
      />

      <Navbar />

      <main className="pt-32 md:pt-40 pb-20" style={{ position: 'relative', zIndex: 10 }}>

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs text-white border border-purple-500/40"
              style={{ background: 'rgba(136,27,225,0.15)', fontFamily: 'Alexandria, sans-serif' }}
            >
              <FolderOpen size={13} className="text-pink-400" />
              أكثر من 100+ مشروع ناجح
            </span>
          </div>

          {/* Hero */}
          <div className="text-center mb-14 px-4">
            <h1
              className="font-bold mb-4"
              style={{
                fontFamily: 'Alexandria, sans-serif',
                fontSize: 'clamp(36px, 7vw, 72px)',
                lineHeight: '1.2',
                letterSpacing: '0px',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <span
  style={{
    background: 'linear-gradient(90deg, #ffffff 0%, #EC1BB1 20%, #EC1BB1 50%, #EC1BB1 80%, #ffffff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block',
    lineHeight: '1.4',
    padding: '4px 0'
  }}
>
  قصص نجاحنا
</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '16px', lineHeight: '1.8' }}>
              اكتشف كيف حوّلت حلول الذكاء الاصطناعي الخاصة بنا أعمالنا وحققت نتائج استثنائية قابلة للقياس
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12" style={{ background: '#0D021FF2' }}>
            {/* Mobile scroll */}
            <div className="md:hidden overflow-x-auto hide-scrollbar py-4 px-4">
              <div className="flex gap-3 min-w-max">
                {categories.map(cat => (
                  <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm transition-all whitespace-nowrap"
                    style={{
                      fontFamily: 'Alexandria, sans-serif',
                      background: activeCategory === cat.id ? '#EC1BB1' : 'rgba(255,255,255,0.05)',
                      color: activeCategory === cat.id ? '#fff' : '#9ca3af',
                      border: activeCategory === cat.id ? '1px solid #EC1BB1' : '1px solid rgba(255,255,255,0.1)',
                      boxShadow: activeCategory === cat.id ? '0 0 18px 4px rgba(236,27,177,0.6)' : 'none',
                    }}>
                    <cat.icon size={14} />
                    {cat.label}
                    <span className="text-xs px-1.5 py-0.5 rounded-full"
                      style={{ background: activeCategory === cat.id ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)', color: activeCategory === cat.id ? '#fff' : '#6b7280' }}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* Desktop */}
            <div className="hidden md:flex flex-wrap justify-center gap-12 py-6 px-5">
              {categories.map(cat => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                  className="flex items-center gap-2 px-7 py-3 rounded-full text-base transition-all"
                  style={{
                    fontFamily: 'Alexandria, sans-serif',
                    background: activeCategory === cat.id ? '#EC1BB1' : 'rgba(255,255,255,0.05)',
                    color: activeCategory === cat.id ? '#fff' : '#9ca3af',
                    border: activeCategory === cat.id ? '1px solid #EC1BB1' : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: activeCategory === cat.id ? '0 0 18px 4px rgba(236,27,177,0.6)' : 'none',
                  }}>
                  <cat.icon size={16} />
                  {cat.label}
                  <span className="text-xs px-1.5 py-0.5 rounded-full"
                    style={{ background: activeCategory === cat.id ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)', color: activeCategory === cat.id ? '#fff' : '#6b7280' }}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="max-w-[1164px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden flex flex-col transition-all hover:scale-[1.02]"
                style={{
                  background: '#0D021F',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Image */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,2,31,0.7) 0%, transparent 60%)' }} />
                  {/* Stat badge */}
                  <div
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white"
                    style={{ background: 'rgba(236,27,177,0.25)', border: '1px solid rgba(236,27,177,0.4)', fontFamily: 'Alexandria, sans-serif' }}
                  >
                    <TrendingUp size={12} className="text-pink-400" />
                    {project.stat}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  {/* Category badge */}
                  <span
                    className="self-start text-xs px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(236,27,177,0.15)',
                      color: '#EC1BB1',
                      border: '1px solid rgba(236,27,177,0.3)',
                      fontFamily: 'Alexandria, sans-serif',
                    }}
                  >
                    {project.categoryLabel}
                  </span>

                  {/* Client */}
                  <p className="text-gray-500 text-xs flex items-center gap-1.5" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                    🏢 {project.client}
                  </p>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg leading-snug" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                    {project.description}
                  </p>

                  {/* Type */}
                  <p className="text-gray-600 text-xs" style={{ fontFamily: 'Alexandria, sans-serif' }}>• {project.type}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          color: '#9ca3af',
                          border: '1px solid rgba(255,255,255,0.08)',
                          fontFamily: 'Alexandria, sans-serif',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full mt-2 py-3 rounded-full text-white text-sm font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90"
                    style={{
                      background: 'linear-gradient(90deg, #EC1BB1, #881BE1)',
                      fontFamily: 'Alexandria, sans-serif',
                    }}
                  >
                    <ExternalLink size={15} />
                    عرض المشروع
                  </button>
                </div>
              </div>
            ))}
          </div>
          </div>

        </main>

      <Footer />
    </div>
  );
}
