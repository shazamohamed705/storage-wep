'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code2, CreditCard, MessageSquare, Database } from 'lucide-react';

const categories = [
  { id: 'all', label: 'الكل', count: 8, small: true, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  )},
  { id: 'customer-service', label: 'خدمة العملاء', count: 2, small: false, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )},
  { id: 'website', label: 'موقع ويب', count: 2, small: false, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  )},
  { id: 'data', label: 'تحليل البيانات', count: 2, small: false, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  )},
  { id: 'mobile', label: 'تطبيق هاتف', count: 1, small: false, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  )},
  { id: 'automation', label: 'الأتمنة', count: 1, small: false, icon: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  )},
];

const projects = [
  {
    id: 1,
    title: 'روبوت دردشة ذكي للدعم الفني',
    description: 'روبوت محادثة يعمل بالذكاء الاصطناعي يتعامل مع استفسارات العملاء تلقائياً على مدار الساعة',
    category: 'customer-service',
    badge: 'خدمة العملاء',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80',
  },
  {
    id: 2,
    title: 'تطبيق متجر إلكتروني',
    description: 'تطبيق متجر إلكتروني كامل مع تكامل الدفع وإدارة المخزون',
    category: 'mobile-app',
    badge: 'تطبيق موبايل',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
];

const selectedProject = {
  title: 'نظام إدارة الحجوزات الذكي',
  description: 'تطبيق ويب متكامل لإدارة الحجوزات والمواعيد',
  stats: [
    { label: 'المستخدمين النشطين', value: '+10K' },
    { label: 'وقت التشغيل', value: '99.9%' },
    { label: 'وقت الاستجابة', value: '< 200ms' },
  ],
  features: [
    'حجز المواعيد أونلاين',
    'إدارة العملاء',
    'تقارير وإحصائيات',
    'إشعارات تلقائية',
  ],
  images: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
  ],
  mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  badge: 'موقع ويب',
  successRate: '85% نجاح في أوقات الانتظار',
};

export default function SolutionsDetailsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(selectedProject.mainImage);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      <main className="pt-48 md:pt-48 pb-20 px-4 md:px-8 lg:px-16" dir="rtl">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
              حلول برمجية جاهزة للانطلاق
            </h1>
            <p className="text-gray-400 text-sm md:text-lg">
              اختر من بين مجموعة مختارة من التطبيقات والأنظمة الذكية، مبرمجة مسبقاً وجاهزة لخدمة أعمالك فوراً
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-10 py-6 overflow-x-auto hide-scrollbar" style={{ background: '#0D021FF2', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
            <div className="flex gap-3 px-6 md:px-16 min-w-max md:min-w-0 md:justify-right">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setCurrentIndex(0); }}
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

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 mt-8 md:mt-16" dir="ltr">

            {/* Left Side - Other Projects */}
            <div className="lg:col-span-1 space-y-6 order-2 lg:order-1" dir="rtl">
              <h3 className="text-2xl font-bold text-white mb-6">مشاريع أخرى</h3>
              
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative rounded-2xl overflow-hidden border border-gray-800/50 cursor-pointer hover:border-[#EC1BB1]/50 transition-all"
                  style={{ background: '#0D021FCC' }}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-[#EC1BB1] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {project.badge}
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                        <span className="text-[#EC1BB1] font-bold text-lg">{project.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Selected Project Details */}
            <div className="lg:col-span-2 order-1 lg:order-2" dir="rtl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="bg-[#EC1BB1] text-white text-sm font-bold px-4 py-2 rounded-full">
                    {selectedProject.badge}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <span>🔥</span>
                    {selectedProject.successRate}
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                {selectedProject.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
                {selectedProject.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-3 md:p-6 border border-gray-800/50"
                    style={{ background: '#EC1BB11A' }}
                  >
                    <div className="text-xl md:text-3xl font-bold text-[#EC1BB1] mb-1 md:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Main Image & Gallery */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">معاينة ولقطات الشاشة</h3>
                
                {/* Main Image */}
                <div className="rounded-2xl overflow-hidden mb-4 border border-gray-800/50">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="w-full h-52 md:h-96 object-cover"
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2 md:gap-4">
                  {selectedProject.images.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className={`rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                        selectedImage === img ? 'border-[#EC1BB1]' : 'border-gray-800/50 hover:border-gray-700'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-16 md:h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* الوصف الكامل */}
              <div className="mb-10 border border-gray-800/50 rounded-2xl p-6" style={{ background: '#0D021FCC' }}>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-right">الوصف الكامل</h3>
                <p className="text-right mb-3" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '26px', letterSpacing: '0px', color: '#9ca3af' }}>
                  نظام شامل لإدارة الحجوزات مصمم لتبسيط عمليات عملك. يتعامل هذا النظام الذكي مع الحجوزات والمواعيد وبيانات العملاء وتتبع المدفوعات في مكان واحد. تم بناؤه باستخدام تقنيات حديثة وأفضل الممارسات لضمان الموثوقية والأمان وقابلية التوسع.
                </p>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-[#EC1BB1] flex-shrink-0 mt-0.5">✓</span>
                  <span style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: '#d1d5db' }}>تطبيق ويب متكامل لإدارة الحجوزات والمواعيد وتتبع مدفوعات العملاء</span>
                </div>
              </div>

              {/* المميزات الرئيسية */}
              <div className="mb-10 border border-gray-800/50 rounded-2xl p-6" style={{ background: '#0D021FCC' }}>
                <h3 className="text-right mb-6" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: '42px', letterSpacing: '0px', color: 'white' }}>المميزات الرئيسية</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'وسائل تأكيد لتلقائية عبر البريد الإلكتروني والرسائل النصية',
                    'تقييم حجز فوري مع إدارة التوافر',
                    'معالجة الدفع المتكاملة',
                    'قاعدة بيانات العملاء مع تتبع السجل',
                    'لوحة تحليلات وتقارير تفصيلية',
                    'وصول متعدد المستخدمين مع أدوات قائمة على الأدوار',
                    'دعم تكامل API',
                    'تصميم متجاوب للجوال',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3" style={{
                      background: '#EC1BB10D',
                      borderRadius: '12px',
                      border: '1.11px solid rgba(236,27,177,0.2)',
                      padding: '15.99px',
                      minHeight: '79px',
                    }}>
                      <span className="text-[#EC1BB1] flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-gray-300 text-right" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.5vw, 15px)', lineHeight: '22.5px', letterSpacing: '0px' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* التقنيات المستخدمة */}
              <div className="mb-10 border border-gray-800/50 rounded-2xl p-6" style={{ background: '#0D021FCC' }}>
                <h3 className="text-3xl font-bold text-white mb-6 text-center">التقنيات المستخدمة</h3>
                <div className="flex gap-4 flex-wrap justify-start">
                  {[
                      { name: 'قاعدة البيانات', icon: Database },
                    { name: 'Node.js', icon: Code2 },
                    { name: 'بوابة الدفع', icon: CreditCard },
                    { name: 'تكامل الرسائل', icon: MessageSquare },
                  ].map((tech, i) => (
                    <div key={i} className="flex flex-col items-center justify-start w-[calc(50%-8px)] sm:w-[138px]" style={{
                      height: '168.18px',
                      borderRadius: '16px',
                      border: '1.11px solid rgba(236,27,177,0.25)',
                      paddingTop: '23.99px',
                      paddingBottom: '16px',
                      gap: '12px',
                      background: '#EC1BB10D',
                    }}>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #881BE1 0%, #EC1BB1 100%)' }}>
                        <tech.icon size={24} className="text-white" />
                      </div>
                      <span className="text-white text-sm font-medium text-center px-2" style={{ fontFamily: 'Alexandria, sans-serif' }}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* الفوائد التجارية */}
              <div className="border border-gray-800/50 rounded-2xl p-6 mb-10" style={{ background: '#0D021FCC' }}>
                <h3 className="text-right mb-6" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: '42px', color: 'white' }}>الفوائد التجارية</h3>
                <div className="space-y-3">
                  {[
                    'تقليل عبء العمل الإداري بنسبة 60%',
                    'القضاء على الحجوزات المزدوجة تماماً',
                    'زيادة رضا العملاء',
                    'رؤى الأعمال الفورية',
                    'تذكيرات الدفع التلقائية',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center justify-between" style={{
                      borderRadius: '12px',
                      border: '1.11px solid rgba(236,27,177,0.2)',
                      padding: '0 16px',
                      gap: '15.99px',
                      minHeight: '66px',
                      background: '#EC1BB10D',
                    }}>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #881BE1 0%, #EC1BB1 100%)' }}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-300 text-right flex-1" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 600, fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: '24px', letterSpacing: '0px' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* جاهز للبدء */}
              <div className="flex justify-center" dir="ltr">
              <div style={{
                width: '100%',
                maxWidth: '313px',
                minHeight: '245px',
                borderRadius: '20px',
                border: '1.11px solid #EC1BB1',
                background: 'linear-gradient(135deg, rgba(136, 27, 225, 0.2) 0%, rgba(143, 32, 222, 0.2) 7.14%, rgba(149, 36, 219, 0.2) 14.29%, rgba(156, 39, 215, 0.2) 21.43%, rgba(163, 41, 212, 0.2) 28.57%, rgba(170, 42, 209, 0.2) 35.71%, rgba(177, 43, 206, 0.2) 42.86%, rgba(185, 44, 202, 0.2) 50%, rgba(192, 43, 199, 0.2) 57.14%, rgba(199, 43, 195, 0.2) 64.29%, rgba(206, 41, 192, 0.2) 71.43%, rgba(214, 39, 188, 0.2) 78.57%, rgba(221, 36, 185, 0.2) 85.71%, rgba(229, 32, 181, 0.2) 92.86%, rgba(236, 27, 177, 0.2) 100%)',
                padding: '28px 24px',
              }} dir="ltr">
                <h3 className="text-right mb-6" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 700, fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: '30px', letterSpacing: '0px', color: 'white' }}>جاهز للبدء؟</h3>
                <div className="flex items-center justify-between mb-6">
                  <span style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 600, fontSize: '16px', color: '#EC1BB1' }}>شهري</span>
                  <span style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 400, fontSize: '16px', color: '#9ca3af' }}>:النوع</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', color: 'white' }}>$250</span>
                  
                  <span style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 400, fontSize: '16px', color: '#9ca3af' }}>:السعر</span>
                </div>
                
                <button className="w-full flex items-center justify-center gap-3 py-4 rounded-full transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(90deg, #881BE1 0%, #EC1BB1 100%)' }}>
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                  </svg>
                  <span style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 700, fontSize: 'clamp(15px, 2vw, 18px)', color: 'white' }}>اشتري الآن</span>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

