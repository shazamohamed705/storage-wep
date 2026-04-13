'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Plus, Clock, Lock, Unlock, X, ChevronDown, CheckCircle } from 'lucide-react';

const tickets = [
  { id: 1, title: 'استفسار عن الخدمة', description: 'كيف يمكنني الاستفادة من الخدمة بشكل أفضل؟', category: 'استفسار عام', date: '1 مارس 2026', status: 'قيد المعالجة', statusColor: '#EC1BB1' },
  { id: 2, title: 'مشكلة في الدفع', description: 'لا أستطيع إتمام عملية الدفع', category: 'استفسار مالي', date: '2 مارس 2026', status: 'مغلقة', statusColor: '#6b7280' },
  { id: 3, title: 'تسريع', description: 'مممم', category: 'مشكلة تقنية', date: '4 مارس 2026', status: 'مفتوحة', statusColor: '#22c55e' },
];

const statusIcon = (status: string) => {
  if (status === 'قيد المعالجة') return <Clock size={12} />;
  if (status === 'مغلقة') return <Lock size={12} />;
  return <Unlock size={12} />;
};

export default function SupportPage() {
  const [showForm, setShowForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({ category: '', orderNumber: '', message: '' });

  const handleSubmit = () => {
    setShowForm(false);
    setShowToast(true);
    setForm({ category: '', orderNumber: '', message: '' });
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: '#050507' }} dir="rtl">
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: '#EC1BB1', zIndex: 0}} />
      <Navbar />

      <main className="pt-52 pb-20 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-white mb-3" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(32px, 5vw, 56px)' }}>
            الدعم الفني
          </h1>
          <p className="text-gray-400" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '16px' }}>
            تواصل معنا لأي استفسار أو مشكلة
          </p>
          <button onClick={() => setShowForm(true)}
            className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(90deg, #881BE1 0%, #EC1BB1 100%)', fontFamily: 'Alexandria, sans-serif', fontSize: '16px', color: 'white' }}>
            <Plus size={18} />
            إنشاء تذكرة جديدة
          </button>
        </div>

        {/* Tickets Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="rounded-2xl p-5 border border-gray-800/60 flex flex-col gap-3"
              style={{ background: 'rgba(13,2,31,0.7)', backdropFilter: 'blur(10px)' }}>
              <div className="flex justify-end">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                  style={{ color: ticket.statusColor, borderColor: ticket.statusColor + '50', background: ticket.statusColor + '15', fontFamily: 'Alexandria, sans-serif' }}>
                  {statusIcon(ticket.status)}
                  {ticket.status}
                </span>
              </div>
              <h3 className="font-bold text-white text-right" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(16px, 2vw, 20px)' }}>{ticket.title}</h3>
              <p className="text-gray-400 text-right text-sm" style={{ fontFamily: 'Alexandria, sans-serif', lineHeight: '22px' }}>{ticket.description}</p>
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-800/50">
                <span className="text-gray-500 text-xs">{ticket.date}</span>
                <span className="text-gray-400 text-xs" style={{ fontFamily: 'Alexandria, sans-serif' }}>{ticket.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showForm && (
          <>
            <div className="fixed inset-0 z-[9998]" style={{ background: 'rgba(0,0,0,0.75)' }} onClick={() => setShowForm(false)} />
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
              <div className="w-full max-w-lg rounded-2xl p-8 relative" style={{ background: '#0D021F', border: '1px solid rgba(255,255,255,0.1)', animation: 'modalIn 0.5s ease-out' }}>
                {/* X */}
                <button onClick={() => setShowForm(false)}
                  className="absolute top-4 left-4 flex items-center justify-center rounded-full text-gray-400 hover:text-white transition-colors"
                  style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.08)' }}>
                  <X size={16} />
                </button>

                <h2 className="text-white font-bold text-center mb-2" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(20px, 3vw, 26px)' }}>
                  إنشاء تذكرة جديدة
                </h2>
                <div className="w-full h-px mb-6" style={{ background: 'rgba(255,255,255,0.1)' }} />

                <div className="space-y-5">
                  {/* نوع الطلب */}
                  <div>
                    <label className="block text-white text-sm text-right mb-2 font-medium" style={{ fontFamily: 'Alexandria, sans-serif' }}>نوع الطلب</label>
                    <div className="relative">
                      <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
                        className="w-full rounded-xl px-4 py-4 text-right text-white focus:outline-none appearance-none"
                        style={{ background: 'rgba(13,2,31,0.95)', border: '1.5px solid #EC1BB1', fontFamily: 'Alexandria, sans-serif', colorScheme: 'dark' }}>
                        <option value="" disabled style={{ background: '#0D021F', color: '#6b7280' }}></option>
                        <option value="استفسار عام" style={{ background: '#0D021F', color: 'white' }}>استفسار عام</option>
                        <option value="استفسار مالي" style={{ background: '#0D021F', color: 'white' }}>استفسار مالي</option>
                        <option value="مشكلة تقنية" style={{ background: '#0D021F', color: 'white' }}>مشكلة تقنية</option>
                        <option value="شكوى" style={{ background: '#0D021F', color: 'white' }}>شكوى</option>
                      </select>
                      <ChevronDown size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* رقم الطلب */}
                  <div>
                    <label className="block text-white text-sm text-right mb-2 font-medium" style={{ fontFamily: 'Alexandria, sans-serif' }}>رقم الطلب (اختياري)</label>
                    <input value={form.orderNumber} onChange={e => setForm({ ...form, orderNumber: e.target.value })}
                      className="w-full rounded-xl px-4 py-4 text-right text-white focus:outline-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'Alexandria, sans-serif' }}
                      placeholder="أدخل رقم الطلب" />
                  </div>

                  {/* الرسالة */}
                  <div>
                    <label className="block text-white text-sm text-right mb-2 font-medium" style={{ fontFamily: 'Alexandria, sans-serif' }}>الرسالة</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={5} className="w-full rounded-xl px-4 py-4 text-right text-white focus:outline-none resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: 'Alexandria, sans-serif' }}
                      placeholder="اشرح مشكلتك أو استفسارك بالتفصيل..." />
                  </div>

                  <button onClick={handleSubmit}
                    className="w-full py-4 rounded-full font-bold text-white transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(90deg, #881BE1 0%, #EC1BB1 100%)', fontFamily: 'Alexandria, sans-serif', fontSize: '18px' }}>
                    إنشاء التذكرة
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl"
          style={{ background: '#0D021F', border: '1px solid rgba(236,27,177,0.4)', minWidth: '300px' }}>
          <CheckCircle size={22} className="text-green-400 flex-shrink-0" />
          <div className="text-right">
            <p className="text-white font-bold text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>تم إنشاء التذكرة بنجاح</p>
            <p className="text-gray-400 text-xs" style={{ fontFamily: 'Alexandria, sans-serif' }}>سيتم الرد عليك في أقرب وقت</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
