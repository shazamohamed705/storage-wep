'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bot, Globe, Palette, Search, Upload, Send } from 'lucide-react';

const serviceTypes = [
  { id: 'bot', label: 'بوت ذكاء اصطناعي', icon: Bot, active: true },
  { id: 'web', label: 'تطبيق ويب', icon: Globe },
  { id: 'design', label: 'تصميم وهوية', icon: Palette },
  { id: 'consult', label: 'استشارة تقنية', icon: Search },
];

const budgetOptions = [
  'أقل من 500$',
  '500$ - 1,000$',
  '1,000$ - 3,000$',
  '3,000$ - 5,000$',
  'أكثر من 5,000$',
];

export default function NewServicePage() {
  const [selectedService, setSelectedService] = useState('bot');
  const [budget, setBudget] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState('');
  const [serviceNumber] = useState(() => Math.floor(100000 + Math.random() * 900000));
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 100, 255, ${d.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const selectedServiceData = serviceTypes.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#050507' }} dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: 'linear-gradient(135deg, #881BE1, #EC1BB1)', opacity: 0.3, zIndex: 0 }} />
      <Navbar />

      <main className="pt-45 md:pt-40 pb-20 px-4" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-[860px] mx-auto">

          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs text-white border border-purple-500/40" style={{ background: 'rgba(136,27,225,0.15)', fontFamily: 'Alexandria, sans-serif' }}>
              <Bot size={13} className="text-pink-400" />
              حلول مدعومة بالذكاء الاصطناعي
            </span>
          </div>

          {/* Hero Text */}
          <div className="text-center mb-10">
            <h1 className="text-white font-bold mb-2" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(28px, 6vw, 52px)', lineHeight: '1.3' }}>
              حوّل أفكارك إلى واقع
            </h1>
            <h2 className="font-bold mb-4" style={{
              fontFamily: 'Alexandria, sans-serif',
              fontSize: 'clamp(28px, 6vw, 52px)',
              lineHeight: '1.4',
              display: 'inline-block',
              background: 'linear-gradient(90deg, #EC1BB1 0%, #DC09A0 7.14%, #FA03B4 14.29%, #EC1BB1 21.43%, #EC1BB1 35.71%, rgba(236,27,177,0.8) 42.86%, #BF40FF 50%, #C243FB 57.14%, #C546F6 64.29%, #C948F2 71.43%, #CC4BED 78.57%, #CF4DE9 85.71%, #D34EE5 92.86%, #D650E0 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              ذكي
            </h2>
            <p className="text-gray-400 mb-8 text-sm md:text-base" style={{ fontFamily: 'Alexandria, sans-serif', lineHeight: '1.8' }}>
              أخبرنا عن ملخص مشروعك، وسنقوم بتصميم حل مخصص يناسب رؤيتك.
            </p>
          </div>

          {/* Form Card */}
          <div className="w-full px-4 sm:px-8 md:px-16 py-8 md:py-12" style={{ background: '#060607', border: '1.11px solid rgba(255,255,255,0.1)', borderRadius: '24px' }}>

            {/* Service Type */}
            <div className="mb-6">
              <p className="text-white text-base font-semibold mb-4 text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>اختر نوع الخدمة</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-0 sm:px-8">
                {serviceTypes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className="flex flex-col items-center gap-2 py-4 px-2 rounded-xl text-sm transition-all"
                    style={{
                      fontFamily: 'Alexandria, sans-serif',
                      background: selectedService === s.id
                        ? 'rgba(214,80,224,0.1)'
                        : 'rgba(255,255,255,0.05)',
                      boxShadow: selectedService === s.id
                        ? '0 0 20px 6px rgba(214,80,224,0.5), 0 0 40px 10px rgba(214,80,224,0.2), inset 0 0 40px rgba(214,80,224,0.35)'
                        : 'none',
                      color: selectedService === s.id ? '#fff' : '#9ca3af',
                      border: selectedService === s.id
                        ? '1.5px solid rgba(214,80,224,0.6)'
                        : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <span style={{
                      background: 'linear-gradient(135deg, #00FFFF 0%, #47F4FF 7.14%, #62E8FF 14.29%, #75DDFF 21.43%, #83D1FF 28.57%, #8FC6FF 35.71%, #99BAFF 42.86%, #A1ADFF 50%, #A7A1FF 57.14%, #AD94FF 64.29%, #B286FF 71.43%, #B677FF 78.57%, #BA68FF 85.71%, #BD56FF 92.86%, #BF40FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      display: 'flex',
                    }}>
                      <s.icon size={18} />
                    </span>
                    <span className="text-center leading-tight" style={{ fontSize: '13px' }}>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Service Card */}
            <div className="rounded-xl p-4 mb-6 flex flex-col items-right gap-2" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(136,27,225,0.2)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{                       background: 'linear-gradient(135deg, #00FFFF 0%, #47F4FF 7.14%, #62E8FF 14.29%, #75DDFF 21.43%, #83D1FF 28.57%, #8FC6FF 35.71%, #99BAFF 42.86%, #A1ADFF 50%, #A7A1FF 57.14%, #AD94FF 64.29%, #B286FF 71.43%, #B677FF 78.57%, #BA68FF 85.71%, #BD56FF 92.86%, #BF40FF 100%)',
 }}>
                {selectedServiceData && <selectedServiceData.icon size={18} className="text-white" />}
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-base" style={{ fontFamily: 'Alexandria, sans-serif' }}>{selectedServiceData?.label}</p>
                <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>رقم الخدمة المميزة</p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>رقم الخدمة: SRV-{serviceNumber}</p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>التاريخ: {new Date().toLocaleDateString('ar-EG')}</p>
              </div>
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2 text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>الاسم</label>
              <input
                type="text"
                placeholder="من فضلك أدخل اسمك"
                className="w-full rounded-xl px-4 py-3 text-right text-sm text-gray-300 outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'Alexandria, sans-serif' }}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2 text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>البريد الإلكتروني</label>
              <input
                type="email"
                placeholder="your@company.com"
                className="w-full rounded-xl px-4 py-3 text-right text-sm text-gray-300 outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'Alexandria, sans-serif', direction: 'ltr', textAlign: 'right' }}
              />
            </div>

            {/* Project Description */}
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2 text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>وصف المشروع</label>
              <textarea
                rows={4}
                placeholder="صف متطلبات مشروعك، أهدافه وميزاته الرئيسية..."
                className="w-full rounded-xl px-4 py-3 text-right text-sm text-gray-300 outline-none resize-none transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'Alexandria, sans-serif' }}
              />
            </div>

            {/* Budget */}
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2 text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>نطاق الميزانية</label>
              <div className="relative">
                <select
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-right text-sm text-gray-300 outline-none appearance-none cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'Alexandria, sans-serif' }}
                >
                  <option value="" disabled style={{ background: '#0D021F' }}>اختر نطاق الميزانية</option>
                  {budgetOptions.map((o, i) => (
                    <option key={i} value={o} style={{ background: '#0D021F' }}>{o}</option>
                  ))}
                </select>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▾</span>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2 text-right" style={{ fontFamily: 'Alexandria, sans-serif' }}>المرفقات: رفع الملخص / المخططات الهيكلية الاختياري</label>
              <div
                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) setFileName(f.name); }}
                className="rounded-xl p-5 md:p-8 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all"
                style={{ background: dragOver ? 'rgba(136,27,225,0.1)' : 'rgba(255,255,255,0.03)', border: `1px dashed ${dragOver ? '#EC1BB1' : 'rgba(255,255,255,0.15)'}` }}
                onClick={() => document.getElementById('fileInput')?.click()}
              >
                <Upload size={24} className="text-pink-400" />
                <p className="text-gray-400 text-sm text-center" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  {fileName || 'اسحب وأفلت ملفاتك هنا أو انقر لتصفح'}
                </p>
                <p className="text-gray-600 text-xs" style={{ fontFamily: 'Alexandria, sans-serif' }}>PDF, DOC, PNG, JPG</p>
                <input id="fileInput" type="file" className="hidden" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={e => { if (e.target.files?.[0]) setFileName(e.target.files[0].name); }} />
              </div>
            </div>

            {/* Submit */}
            <button
              className="w-full py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:shadow-lg hover:shadow-pink-500/30"
              style={{ background: 'linear-gradient(90deg, #EC1BB1, #881BE1)', fontFamily: 'Alexandria, sans-serif', fontSize: '16px' }}
            >
              <Send size={18} />
              إرسال الطلب
            </button>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
