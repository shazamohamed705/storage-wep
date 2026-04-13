'use client';

import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, Send, Upload, CheckCircle } from 'lucide-react';

const existingReviews = [
  { name: 'أحمد خالد', role: 'مهندس برمجيات', text: 'تجربة التعامل مع ستوريدج كانت استثنائية. البوت الذكي الذي أسند تطويره وفر علينا مئات الساعات من الدعم اليدوي والأداء كان فائق المعدة.', rating: 5, time: 'منذ أسبوع', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { name: 'أحمد خالد', role: 'مهندس برمجيات', text: 'تجربة التعامل مع ستوريدج كانت استثنائية. البوت الذكي الذي أسند تطويره وفر علينا مئات الساعات من الدعم اليدوي والأداء كان فائق المعدة.', rating: 5, time: 'منذ أسبوع', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { name: 'أحمد خالد', role: 'مهندس برمجيات', text: 'تجربة التعامل مع ستوريدج كانت استثنائية. البوت الذكي الذي أسند تطويره وفر علينا مئات الساعات من الدعم اليدوي والأداء كان فائق المعدة.', rating: 5, time: 'منذ أسبوع', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
];

export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [form, setForm] = useState({ name: '', role: '', comment: '' });
  const [showToast, setShowToast] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [mobileDotIndex, setMobileDotIndex] = useState(0);
  const mobileReviewRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    setShowToast(true);
    setForm({ name: '', role: '', comment: '' });
    setRating(0);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: '#050507' }} dir="rtl">
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full blur-[100px] opacity-15 pointer-events-none" style={{ background: '#EC1BB1' }} />
      <Navbar />
      <main className="pt-45 md:pt-44 pb-20 px-4">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="font-bold text-white mb-4" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(28px, 5vw, 52px)', lineHeight: '1.2' }}>
            ابتكار نثق به، ونتائج تتحدث عن نفسها.
          </h1>
          <p className="text-gray-400" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '16px' }}>
            ⭐ 4.8/5 (بناءً على أكثر من 500 مراجعة وتقييم).
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-20">
          <div className="relative flex items-center gap-8">
            {/* Desktop sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <h3 className="text-3xl font-bold text-white mb-8">
                ماذا يقول عملاؤنا<br />
                <span className="block text-center">عنا</span>
              </h3>
              <div className="flex items-center gap-4">
                <button onClick={() => setReviewIndex(i => Math.max(0, i - 1))} disabled={reviewIndex === 0}
                  className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center hover:opacity-70 transition-all disabled:opacity-30"
                  style={{ color: '#EC1BB1' }}>
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
                <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full transition-all duration-300" style={{ width: `${((reviewIndex + 1) / existingReviews.length) * 100}%`, background: 'linear-gradient(90deg, #EC1BB1, #881BE1)' }} />
                </div>
                <button onClick={() => setReviewIndex(i => Math.min(existingReviews.length - 3, i + 1))} disabled={reviewIndex >= existingReviews.length - 3}
                  className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center hover:opacity-70 transition-all disabled:opacity-30"
                  style={{ color: '#EC1BB1' }}>
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
              </div>
            </div>

            {/* Mobile title */}
            <div className="lg:hidden w-full">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">ماذا يقول عملاؤنا عنا</h3>

              {/* Mobile snap scroll */}
              <div
                ref={mobileReviewRef}
                onScroll={e => {
                  const el = e.currentTarget;
                  const firstCard = el.firstElementChild as HTMLElement;
                  if (!firstCard) return;
                  const cardW = firstCard.offsetWidth + 16;
                  const idx = Math.round(el.scrollLeft / cardW);
                  setMobileDotIndex(Math.min(Math.max(idx, 0), existingReviews.length - 1));
                }}
                className="overflow-x-auto hide-scrollbar flex gap-4 snap-x snap-mandatory pb-2"
                style={{ direction: 'ltr' }}
              >
                {existingReviews.map((review, i) => (
                  <div key={i} className="snap-center flex-shrink-0 w-[82vw]" style={{ direction: 'rtl' }}>
                    <div className="relative p-6 flex flex-col gap-3"
                      style={{ background: 'linear-gradient(135deg, #EC1BB1 0%, #D91BA8 100%)', minHeight: '260px', borderTopLeftRadius: '60px', borderTopRightRadius: '60px', borderBottomRightRadius: '60px', borderBottomLeftRadius: '0px' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0">
                          <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-white text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>{review.name}</p>
                          <p className="text-white/70 text-xs" style={{ fontFamily: 'Alexandria, sans-serif' }}>{review.role}</p>
                        </div>
                      </div>
                      <p className="text-white text-right flex-1" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '14px', lineHeight: '22px' }}>"{review.text}"</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-white/70 text-xs">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                          <span style={{ fontFamily: 'Alexandria, sans-serif' }}>{review.time}</span>
                        </div>
                        <div className="flex gap-0.5">{[...Array(review.rating)].map((_, si) => <span key={si} className="text-yellow-300 text-sm">★</span>)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile dots */}
              <div className="flex justify-center items-center gap-2 mt-4">
                {existingReviews.map((_, i) => (
                  <button key={i}
                    onClick={() => {
                      const el = mobileReviewRef.current;
                      if (!el) return;
                      const firstCard = el.firstElementChild as HTMLElement;
                      if (!firstCard) return;
                      el.scrollTo({ left: (firstCard.offsetWidth + 16) * i, behavior: 'smooth' });
                      setMobileDotIndex(i);
                    }}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: mobileDotIndex === i ? '32px' : '8px',
                      height: '8px',
                      background: mobileDotIndex === i ? 'linear-gradient(90deg, #881BE1, #EC1BB1)' : 'rgba(255,255,255,0.2)',
                      boxShadow: mobileDotIndex === i ? '0 0 10px rgba(236,27,177,0.8)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Desktop cards grid */}
            <div className="hidden lg:grid flex-1 grid-cols-3 gap-6">
              {existingReviews.slice(reviewIndex, reviewIndex + 3).map((review, i) => (
                <div key={i} className="relative p-6 flex flex-col gap-3"
                  style={{ background: 'linear-gradient(135deg, #EC1BB1 0%, #D91BA8 100%)', minHeight: '280px', borderTopLeftRadius: '60px', borderTopRightRadius: '60px', borderBottomRightRadius: '60px', borderBottomLeftRadius: '0px' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0">
                      <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>{review.name}</p>
                      <p className="text-white/70 text-xs" style={{ fontFamily: 'Alexandria, sans-serif' }}>{review.role}</p>
                    </div>
                  </div>
                  <p className="text-white text-right flex-1" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '14px', lineHeight: '22px' }}>"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-white/70 text-xs">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      <span style={{ fontFamily: 'Alexandria, sans-serif' }}>{review.time}</span>
                    </div>
                    <div className="flex gap-0.5">{[...Array(review.rating)].map((_, si) => <span key={si} className="text-yellow-300 text-sm">★</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl p-8 relative" style={{ background: '#0D021F', border: '1.5px solid #EC1BB1' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #881BE1 0%, #EC1BB1 100%)' }}>
                <Send size={22} className="text-white" />
              </div>
            </div>
            <h2 className="text-white font-bold text-center mb-1" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(20px, 3vw, 26px)' }}>
              شاركنا تجربتك
            </h2>
            <p className="text-gray-400 text-center text-sm mb-6" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              نحب أن نسمع رأيك في خدماتنا
            </p>

            <div className="flex flex-col items-center gap-2 mb-6">
              <button className="flex items-center justify-center transition-colors"
                style={{ width: '96px', height: '96px', borderRadius: '50%', border: '3.33px solid #EC1BB1', background: '#EC1BB11A' }}>
                <Upload size={24} className="text-[#EC1BB1]" />
              </button>
              <span className="text-gray-400 text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>قم برفع صورتك</span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm text-right mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>المسمى الوظيفي</label>
                  <input value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-right text-white focus:outline-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'Alexandria, sans-serif' }}
                    placeholder="مثال: مهندس برمجيات" />
                </div>
                <div>
                  <label className="block text-white text-sm text-right mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>الاسم</label>
                  <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-right text-white focus:outline-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'Alexandria, sans-serif' }}
                    placeholder="اسمك الكامل" />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm text-right mb-2" style={{ fontFamily: 'Alexandria, sans-serif' }}>التقييم</label>
                <div className="flex gap-2 justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}>
                      <Star size={28} fill={(hoverRating || rating) >= star ? '#EBE448' : 'none'}
                        stroke={(hoverRating || rating) >= star ? '#EBE448' : '#6b7280'}
                        className="transition-all" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white text-sm text-right mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>تعليقك</label>
                <textarea value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })}
                  rows={4} className="w-full rounded-xl px-4 py-3 text-right text-white focus:outline-none resize-none"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'Alexandria, sans-serif' }}
                  placeholder="شاركنا تجربتك مع خدماتنا..." />
              </div>

              <button onClick={handleSubmit}
                className="w-full py-4 rounded-full font-bold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(90deg, #881BE1 0%, #EC1BB1 100%)', fontFamily: 'Alexandria, sans-serif', fontSize: '17px' }}>
                <Send size={18} />
                إرسال التقييم
              </button>
            </div>
          </div>
        </div>
      </main>

      {showToast && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl"
          style={{ background: '#0D021F', border: '1px solid rgba(236,27,177,0.4)', animation: 'modalIn 0.5s ease-out' }}>
          <CheckCircle size={22} className="text-green-400 flex-shrink-0" />
          <div className="text-right">
            <p className="text-white font-bold text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>شكراً على تقييمك!</p>
            <p className="text-gray-400 text-xs" style={{ fontFamily: 'Alexandria, sans-serif' }}>تم إرسال تقييمك بنجاح</p>
          </div>
        </div>
      )}

      
      <Footer />
    </div>
  );
}
