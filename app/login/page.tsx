'use client';

import { useState, useEffect } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#0a0a0f' }}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(136,27,225,0.15) 0%, transparent 70%)' }}></div>
      </div>

      {/* Card with animation */}
      <div
        className="relative z-10 w-full max-w-md rounded-3xl p-8 transition-all duration-700"
        style={{
          background: 'rgba(20, 15, 35, 0.85)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 80px 50px #EC1BB11A',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <a href="/"><img src="/16748711948c681c74613bd74259d711f0030872.png" alt="logo" className="h-14 cursor-pointer" /></a>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-white mb-2">مرحباً بعودتك</h2>
          <p className="text-gray-400 text-sm">سجل الدخول لإدارة لوحة التحكم الخاصة بك.</p>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3 mb-5">
          <button className="flex-1 flex items-center justify-center gap-3 py-3.5 rounded-2xl text-white text-base font-bold transition-all hover:opacity-80" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.15)' }}>
            Apple
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </button>
          <button className="flex-1 flex items-center justify-center gap-3 py-3.5 rounded-2xl text-white text-base font-bold transition-all hover:opacity-80" style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.15)' }}>
            Google
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
          <span className="text-gray-500 text-xs">أو بالبريد الإلكتروني</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
        </div>

        {/* Form */}
        <form className="space-y-4" autoComplete="off" onSubmit={e => { e.preventDefault(); window.location.href = '/dashboard'; }}>
          {/* Email */}
          <div className="text-right">
            <label className="text-gray-200 text-sm font-medium block mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="name@example.com"
              autoComplete="off"
              className="w-full px-5 py-4 rounded-2xl text-gray-100 text-base text-right outline-none transition-all placeholder-gray-500"
              style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.12)', color: 'white', WebkitTextFillColor: 'white' }}
              onFocus={e => (e.target.style.borderColor = 'rgba(136,27,225,0.6)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
            />
          </div>

          {/* Password */}
          <div className="text-right">
            <div className="flex items-center justify-between mb-2">
              <a href="#" className="text-sm font-medium" style={{ color: '#EC1BB1' }}>نسيت كلمة المرور؟</a>
              <label className="text-gray-200 text-sm font-medium">كلمة المرور</label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                autoComplete="new-password"
                className="w-full px-5 py-4 rounded-2xl text-gray-100 text-base text-right outline-none transition-all pr-14 placeholder-gray-500"
                style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.12)', color: 'white', WebkitTextFillColor: 'white' }}
                onFocus={e => (e.target.style.borderColor = 'rgba(136,27,225,0.6)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" />
                  ) : (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-[1.02] mt-2 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(90deg, #881BE1 0%, #EC1BB1 100%)',
              boxShadow: '0 0 30px 8px rgba(255,255,255,0.15), 0 0 60px 15px rgba(236,27,177,0.3)',
            }}
          >
            <span className="relative z-10">تسجيل الدخول</span>
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)' }}
            ></span>
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-gray-400 text-base mt-6">
          ليس لديك حساب؟{' '}
          <a href="/register" className="font-bold text-base" style={{ color: '#EBE448' }}>إنشاء حساب جديد</a>
        </p>

      </div>
    </div>
  );
}
