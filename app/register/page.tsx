'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-row-reverse" style={{ background: '#0a0a0f' }}>
      
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col items-center justify-center py-16" style={{ background: 'linear-gradient(135deg, #1a0b2e 0%, #0d0618 100%)' }}>
        
        {/* Text + Orb + Badge stacked */}
        <div className="relative z-10 flex flex-col items-center text-center mt-16 w-full px-16">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-nowrap mb-3">
            أهلاً بك في <span className="text-gray-500">المستقبل.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10">منصتك الأولى للسيطرة على خوارزميات السوشيال ميديا</p>
        </div>

        {/* Orb */}
        <div className="relative flex items-center justify-center">
          <div className="w-[380px] h-[380px] rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, #EC1BB1 0%, #9B30FF 40%, #5B0EA6 70%, #59198a 100%)' }}></div>
          {/* White glow ellipse on top */}
          <div className="absolute w-[180px] h-[100px] rounded-full blur-2xl" style={{ background: 'rgba(255,255,255,0.25)', top: '40px', right: '60px' }}></div>
          {/* Dark overlay on bottom half only */}
          <div className="absolute w-[380px] h-[380px] rounded-full" style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(10,0,16,0.97) 100%)' }}></div>
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10"></div>
          {/* Badge - half inside orb */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[320px] flex items-center justify-between gap-3 px-5 py-4 rounded-2xl" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(12px)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(34,197,94,0.3)', border: '2px solid rgba(34,197,94,0.7)' }}>
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-right flex-1">
              <p className="text-white font-bold text-base">أتمنة فائقة السرعة</p>
              <p className="text-gray-300 text-sm whitespace-nowrap">انضم لأكثر من 10,000 حساب نشط يومياً</p>
            </div>
          </div>
        </div>

      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12" style={{ background: '#111116' }}>
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <a href="/"><img src="/16748711948c681c74613bd74259d711f0030872.png" alt="Storage" className="h-16 cursor-pointer" /></a>
          </div>

          {/* Heading */}
          <div className="text-right mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">أنشئ حسابك الآن</h2>
            <p className="text-gray-400 text-sm">ابدأ رحلتك لتصدر الإكسبلور في دقائق.</p>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl text-white text-base font-bold transition-all hover:opacity-80" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.15)' }}>
              Apple
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </button>
            <button className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl text-white text-base font-bold transition-all hover:opacity-80" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.15)' }}>
              Google
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
            <span className="text-gray-500 text-xs">أو باستخدام الإيميل</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
          </div>

            {/* Form */}
          <form className="space-y-4" autoComplete="off" onSubmit={e => { e.preventDefault(); window.location.href = '/dashboard'; }}>
            <div className="text-right">
              <label className="text-gray-200 text-sm font-medium block mb-2">الاسم الكامل</label>
              <input type="text" placeholder="أدخل اسمك هنا..." autoComplete="off" className="w-full px-5 py-4 rounded-2xl text-gray-100 text-base text-right outline-none transition-all placeholder-gray-500" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.12)', color: 'white', WebkitTextFillColor: 'white' }}
                onFocus={e => e.target.style.borderColor = 'rgba(136,27,225,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
            </div>

            <div className="text-right">
              <label className="text-gray-200 text-sm font-medium block mb-2">البريد الإلكتروني</label>
              <input type="email" placeholder="name@example.com" autoComplete="off" className="w-full px-5 py-4 rounded-2xl text-gray-100 text-base text-right outline-none transition-all placeholder-gray-500" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.12)', color: 'white', WebkitTextFillColor: 'white' }}
                onFocus={e => e.target.style.borderColor = 'rgba(136,27,225,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
            </div>

            <div className="text-right">
              <label className="text-gray-200 text-sm font-medium block mb-2">كلمة المرور</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" autoComplete="new-password" className="w-full px-5 py-4 rounded-2xl text-gray-100 text-base text-right outline-none transition-all pr-14 placeholder-gray-500" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.12)', color: 'white', WebkitTextFillColor: 'white' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(136,27,225,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" /> : <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>}
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" className="w-full py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-[1.02] mt-2 relative overflow-hidden group" style={{ background: 'linear-gradient(90deg, #881BE1 0%, #EC1BB1 100%)', boxShadow: '0 0 30px 8px rgba(255,255,255,0.15), 0 0 60px 15px rgba(236,27,177,0.3)' }}>
              <span className="relative z-10">إنشاء حساب جديد</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)' }}></span>
            </button>
          </form>

          <p className="text-center text-gray-400 text-base mt-6">
            لديك حساب بالفعل؟{' '}
            <a href="/login" className="font-bold text-base" style={{ color: '#EBE448' }}>سجل الدخول</a>
          </p>

        </div>
      </div>
    </div>
  );
}
