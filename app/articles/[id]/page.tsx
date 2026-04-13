'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const articles = [
  {
    id: 1, category: 'success', categoryLabel: 'شفرة النجاح', categoryColor: '#EC1BB1',
    title: 'بناء أول روبوت ذكاء اصطناعي: دليل خطوة بخطوة',
    description: 'تعلم كيفية إنشاء روبوت محادثة بسيط من الصفر باستخدام بايثون ومكتبات معالجة اللغة الطبيعية',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
    date: '12 مايو 2026', readTime: '5 د', views: '3.1K',
    author: 'د. أحمد محمود',
    authorRole: 'خبير الذكاء الاصطناعي',
    content: `
في عصر التحول الرقمي الذي نعيشه، أصبحت **روبوتات الدردشة المدعومة بالذكاء الاصطناعي** جزءاً لا يتجزأ من استراتيجيات خدمة العملاء والتسويق الرقمي. في هذا الدليل الشامل، سنتعلم كيفية بناء روبوت ذكاء اصطناعي من الصفر باستخدام أدوات بسيطة ومتاحة للجميع.

## ما هي روبوتات الذكاء الاصطناعي للعملاء؟

روبوتات الدردشة المدعومة بالذكاء الاصطناعي هي برامج حاسوبية مصممة لمحاكاة المحادثات البشرية والرد على استفسارات العملاء بطريقة ذكية وسريعة. تعتمد هذه الروبوتات على تقنيات **معالجة اللغة الطبيعية (NLP)** وخوارزميات **التعلم الآلي** لفهم السياق والرد بشكل مناسب.

## الفوائد الرئيسية لاستخدام الروبوتات الذكية

تقدم روبوتات الدردشة الذكية مجموعة واسعة من الفوائد للشركات من جميع الأحجام:

• **توفر على مدار الساعة**: خدمة عملاء 24/7 بدون انقطاع
• **استجابة فورية**: تقليل أوقات الانتظار إلى الصفر تقريباً
• **توفير التكاليف**: تقليل الحاجة لفريق دعم كبير
• **تعدد المهام**: القدرة على التعامل مع آلاف المحادثات في وقت واحد
• **تحليل البيانات**: جمع معلومات قيمة عن سلوك العملاء وتفضيلاتهم

## الخطوات الأساسية لبناء روبوت ذكي

### 1. تحديد الهدف والجمهور المستهدف

قبل البدء في البرمجة، يجب أن تحدد بوضوح:
- ما هي المشكلة التي سيحلها الروبوت؟
- من هم المستخدمون المستهدفون؟
- ما هي الأسئلة الأكثر شيوعاً التي يجب أن يجيب عليها؟

### 2. اختيار المنصة والأدوات المناسبة

هناك العديد من الأدوات المتاحة لبناء روبوتات الدردشة:
- **Python + NLTK**: للمطورين الذين يفضلون التحكم الكامل
- **Dialogflow**: منصة Google السهلة الاستخدام
- **Microsoft Bot Framework**: حل شامل من مايكروسوفت
- **Rasa**: إطار عمل مفتوح المصدر قوي

### 3. تصميم تدفق المحادثة

ارسم خريطة لكيفية سير المحادثة:
- نقاط البداية المحتملة
- الأسئلة المتوقعة
- الردود المناسبة
- نقاط التحويل لموظف بشري عند الحاجة
    `
  },
  {
    id: 2, category: 'tech', categoryLabel: 'تحديثات تقنية', categoryColor: '#EC1BB1',
    title: 'أفضل 10 أدوات ذكاء اصطناعي يجب أن يعرفها كل مطور في 2026',
    description: 'استكشف أحدث أدوات لتطوير الذكاء الاصطناعي التي تحدث ثورة في صناعة التكنولوجيا هذا العام',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80',
    date: '12 مايو 2026', readTime: '8 د', views: '2.1K',
    author: 'م. سارة الشمري',
    authorRole: 'مطورة واجهات متقدمة',
    content: `محتوى المقالة الثانية...`
  },
];

const relatedArticles = [
  { id: 4, title: 'إطلاق GPT-5: ما الجديد وماذا يعني ذلك للمطورين', category: 'تحديثات تقنية', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80' },
  { id: 5, title: 'مستقبل الذكاء الاصطناعي في أتمتة سر العمل', category: 'الأتمنة', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80' },
  { id: 6, title: 'كيف زادت الشركة س المبيعات بنسبة %65 بالأتمتة الذكية', category: 'قصص واقعية', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
];

export default function ArticleDetailPage() {
  const params = useParams();
  const articleId = parseInt(params.id as string);
  const article = articles.find(a => a.id === articleId);

  const [comments, setComments] = useState([
    { name: 'سارة أحمد', role: 'مديرة تجربة العملاء', time: 'منذ 3 ساعات', text: 'مقال ممتاز ومفيد جداً! نحن بالفعل نستخدم روبوت دردشة ذكي في شركتنا والنتائج كانت مذهلة. انخفضت أوقات الانتظار بشكل كبير وزاد رضا العملاء بنسبة 40%. أنصح الجميع بتجربة هذه التقنية 🚀' },
  ]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function handleSubmit() {
    if (!name.trim() || !text.trim()) return;
    setComments(prev => [...prev, { name, role, time: 'الآن', text }]);
    setName(''); setRole(''); setText('');
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#050507' }}>
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-4">المقالة غير موجودة</h1>
          <Link href="/articles" className="text-[#EC1BB1] hover:opacity-80">العودة للمقالات</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: '#050507' }} dir="rtl">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-15 pointer-events-none" style={{ background: '#881BE1' }} />
      <Navbar />

      <main className="pt-44 md:pt-44 pb-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Back Button */}
          <Link href="/articles" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowRight size={18} />
            <span style={{ fontFamily: 'Alexandria, sans-serif' }}>العودة للمقالات</span>
          </Link>

          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-start">

            {/* ===== Sidebar - Related Articles ===== */}
            <aside className="hidden sm:block w-full lg:w-72 flex-shrink-0 order-2 lg:order-1">
              <div className="sticky top-28 mt-32">
                <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2 text-right"
                  style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  <svg className="w-5 h-5 text-[#EC1BB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  محتوى ذو صلة
                </h3>
                <div className="flex flex-col gap-6">
                  {relatedArticles.map(related => (
                    <Link key={related.id} href={`/articles/${related.id}`}
                      className="rounded-xl overflow-hidden border border-gray-800/50 hover:border-[#EC1BB1]/50 transition-all group"
                      style={{ background: 'rgba(13,2,31,0.8)' }}>
                      <div className="relative h-36 overflow-hidden">
                        <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <span className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold text-white"
                          style={{ background: '#EC1BB1', fontFamily: 'Alexandria, sans-serif' }}>
                          {related.category}
                        </span>
                      </div>
                      <div className="p-3">
                        <h4 className="text-white font-bold text-sm text-right leading-relaxed"
                          style={{ fontFamily: 'Alexandria, sans-serif' }}>
                          {related.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* ===== Main Article Content ===== */}
            <article className="flex-1 order-1 lg:order-2 min-w-0">

              {/* Category Badge */}
              <div className="mb-6 reveal">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white"
                  style={{ background: article.categoryColor, fontFamily: 'Alexandria, sans-serif' }}>
                  {article.categoryLabel}
                </span>
              </div>

              {/* Title */}
              <h1 className="mb-6 reveal reveal-delay-1" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 700, fontStyle: 'normal', fontSize: 'clamp(24px, 5vw, 48px)', lineHeight: '1.5', letterSpacing: '0px', textAlign: 'right', background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(236, 27, 177, 0.5) 7.14%, rgba(236, 27, 177, 0.55) 14.29%, rgba(236, 27, 177, 0.6) 21.43%, rgba(236, 27, 177, 0.65) 28.57%, rgba(236, 27, 177, 0.7) 35.71%, rgba(236, 27, 177, 0.75) 42.86%, rgba(236, 27, 177, 0.8) 50%, rgba(236, 27, 177, 0.85) 57.14%, rgba(236, 27, 177, 0.9) 64.29%, #EC1BB1 71.43%, #EC1BB1 78.57%, #EC1BB1 85.71%, #EC1BB1 92.86%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-gray-800/50 gap-4 reveal reveal-delay-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #881BE1 0%, #EC1BB1 100%)' }}>
                    {article.author.charAt(article.author.indexOf('.') + 2)}
                  </div>
                  <div>
                    <p className="text-white font-medium" style={{ fontFamily: 'Alexandria, sans-serif' }}>{article.author}</p>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>{article.authorRole} · {article.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1"><Clock size={14} />{article.readTime}</span>
                  <span className="flex items-center gap-1"><Eye size={14} />{article.views} مشاهدة</span>
                </div>
              </div>

              {/* Action Buttons - removed from here, moved to bottom */}

              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden mb-10 reveal reveal-delay-3">
                <img src={article.image} alt={article.title} className="w-full h-auto object-cover" />
              </div>

              {/* Article Content */}
              <div className="prose prose-invert max-w-none reveal"
                style={{ fontFamily: 'Alexandria, sans-serif', color: '#e5e7eb', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: '2.4' }}>
                <div dangerouslySetInnerHTML={{ __html: article.content
                  .replace(/\n/g, '<br/>')
                  .replace(/## (.*?)(<br\/>)/g, '<div style="display:flex; align-items:stretch; gap:12px; margin-top:32px; margin-bottom:16px;"><div style="width:4px; border-radius:4px; flex-shrink:0; background:linear-gradient(180deg,rgba(236,27,177,0.1) 0%,#EC1BB1 100%);"></div><h2 style="color:white; font-size:28px; font-weight:bold; margin:0;">$1</h2></div>')
                  .replace(/### (.*?)(<br\/>)/g, '<div style="display:flex; align-items:stretch; gap:10px; margin-top:24px; margin-bottom:12px;"><div style="width:3px; border-radius:4px; flex-shrink:0; background:linear-gradient(180deg,rgba(236,27,177,0.1) 0%,#EC1BB1 100%);"></div><h3 style="color:white; font-size:22px; font-weight:bold; margin:0;">$1</h3></div>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong style="color: white;">$1</strong>')
                  .replace(/• /g, '<span style="color: #EC1BB1; margin-left: 8px;">•</span> ')
                }} />
              </div>

              {/* Tags & Share Section */}
              <div className="mt-10 pt-8 border-t border-gray-800/50 flex flex-col gap-6 reveal">

                {/* Tags */}
                <div className="flex flex-col gap-3 items-right">
                  <span className="text-white font-bold" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '16px' }}># الوسوم</span>
                  <div className="flex flex-wrap gap-2 justify-right">
                    {['#الذكاء_الاصطناعي', '#خدمة_العملاء', '#روبوتات_الدردشة', '#الأتمتة', '#التحول_الرقمي'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-sm cursor-pointer hover:opacity-80 transition-opacity"
                        style={{ border: '1px solid #EC1BB1', color: '#EC1BB1', fontFamily: 'Alexandria, sans-serif', background: 'rgba(236,27,177,0.05)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="flex flex-col gap-3 items-right">
                  <span className="text-white font-bold flex items-center gap-2" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '16px' }}>
                    شارك المقال
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#EC1BB1" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                  </span>
                  <div className="flex items-center gap-3">
                    {/* Twitter/X */}
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    {/* LinkedIn */}
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </button>
                    {/* Facebook */}
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </button>
                  </div>
                </div>

              </div>

            </article>
          </div>

          {/* ===== Comments Section ===== */}
          <div className="mt-16 max-w-4xl reveal">

            {/* Header */}
            <h2 className="text-white font-bold text-2xl mb-8 flex items-center gap-3" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              التعليقات
              <span className="text-gray-400 text-lg font-normal">({comments.length})</span>
            </h2>

            {/* Add Comment Form */}
            <div className="rounded-2xl p-6 mb-6" style={{ background: 'rgba(20,10,40,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-bold text-xl mb-5 text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>أضف تعليقك</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                {/* Name */}
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-gray-400 text-sm text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>الاسم الكامل</label>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="أدخل اسمك الكامل" className="bg-transparent text-white text-right w-full outline-none placeholder-gray-500 text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }} dir="rtl" />
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                </div>
                {/* Job Title */}
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-gray-400 text-sm text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>المسمى الوظيفي</label>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <input type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="مثال: مطور برمجيات" className="bg-transparent text-white text-right w-full outline-none placeholder-gray-500 text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }} dir="rtl" />
                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                  </div>
                </div>
              </div>
              {/* Comment */}
              <div className="flex flex-col gap-1 mb-5">
                <label className="text-gray-400 text-sm text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>التعليق</label>
                <textarea rows={4} value={text} onChange={e => setText(e.target.value)} placeholder="شاركنا رأيك..." className="w-full px-4 py-3 rounded-xl bg-transparent text-white text-right outline-none placeholder-gray-500 text-sm resize-none" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'Alexandria, sans-serif' }} dir="rtl" />
              </div>
              {/* Submit */}
              <div className="flex justify-center">
                <button onClick={handleSubmit} className="flex items-center gap-2 px-10 py-3 rounded-xl text-white font-bold hover:opacity-90 transition-opacity" style={{ background: '#EC1BB1', fontFamily: 'Alexandria, sans-serif', fontSize: '16px' }}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  نشر التعليق
                </button>
              </div>
            </div>

            {/* Comments List */}
            <div className={comments.length > 1 ? 'overflow-y-auto pr-1' : ''} style={comments.length > 1 ? { maxHeight: '420px' } : {}}>
              {comments.map((comment, i) => (
              <div key={i} className="rounded-2xl p-6 mb-4" style={{ background: 'rgba(20,10,40,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: '#25C16F' }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  {/* Name & Role beside avatar */}
                  <div className="flex flex-col">
                    <span className="text-white font-bold" style={{ fontFamily: 'Alexandria, sans-serif' }}>{comment.name}</span>
                    <span className="text-gray-400 text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>{comment.role}</span>
                  </div>
                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
                {/* Comment text & time */}
                <div className="mt-3 text-right">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3" style={{ fontFamily: 'Alexandria, sans-serif', lineHeight: '1.8' }}>{comment.text}</p>
                  <div className="flex items-center justify-end gap-4">
                    <span className="text-gray-500 text-xs" style={{ fontFamily: 'Alexandria, sans-serif' }}>{comment.time}</span>
                    <button className="text-sm font-bold hover:opacity-80 transition-opacity" style={{ color: '#EC1BB1', fontFamily: 'Alexandria, sans-serif' }}>رد</button>
                  </div>
                </div>
              </div>
            ))}
            </div>

          </div>

        </div>
      </main>

      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
        style={{ background: '#25D366' }}>
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <Footer />
    </div>
  );
}
