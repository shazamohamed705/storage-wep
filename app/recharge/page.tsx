'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RechargePage() {
  const router = useRouter();
  const [amount, setAmount] = useState('100.00');
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

  const quickAmounts = [50, 100, 250];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 relative" dir="rtl">
      {/* Background overlay in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl h-96 rounded-full blur-3xl opacity-30" style={{ background: '#881BE114' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Bar with Back Arrow and Label */}
        <div className="flex items-center justify-between mb-8">
          {/* Back Arrow on left */}
          <button 
            onClick={() => router.push('/dashboard')}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Label on right */}
          <div className="flex items-center gap-2 text-green-400 border border-green-600 rounded-full px-4 py-2 w-fit">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span className="text-sm">دقيقة واحدة ومستعد 100$</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-right mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">شحن الرصيد والمحفظة</h1>
          <p className="text-gray-400">أضف رصيداً لمحفظتك للاستخدام في أتمتة البوتات فوراً</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Right Side - Balance and Amount */}
          <div className="space-y-6 order-1 lg:order-1 w-full lg:max-w-[500px]">
            {/* Current Balance */}
            <div className="bg-transparent border border-gray-800 rounded-xl p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div className="text-right flex-1">
                  <p className="text-gray-400 text-xs md:text-sm mb-1">الرصيد الحالي</p>
                  <p className="text-2xl md:text-3xl font-bold">$1,250.00</p>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-bold text-right mb-4 md:mb-6">حدد مبلغ الشحن</h3>
              
              <div className="flex justify-center gap-2 md:gap-3">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setAmount(amt.toFixed(2));
                    }}
                    className={`relative w-[100px] md:w-[140px] h-[45px] md:h-[50px] flex items-center justify-center rounded-lg transition-all text-sm md:text-base font-bold ${
                      selectedAmount === amt
                        ? 'bg-transparent border-[2px] md:border-[3px] border-pink-500 text-pink-500 shadow-[0_0_15px_rgba(236,27,177,0.4)] md:shadow-[0_0_20px_rgba(236,27,177,0.5)]'
                        : 'bg-transparent border border-gray-800 text-white hover:border-gray-700'
                    }`}
                  >
                    {amt === 100 && selectedAmount === 100 && (
                      <span className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-[9px] md:text-[10px] px-1 md:px-1.5 py-0.5 rounded-full whitespace-nowrap">
                        الأكثر طلباً
                      </span>
                    )}
                    ${amt}
                  </button>
                ))}
              </div>

              <p className="text-center text-gray-400 text-[10px] md:text-xs">أو أدخل مبلغاً مخصصاً (الحد الأدنى 10$)</p>

              <div className="relative max-w-lg mx-auto">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  className="w-full bg-transparent border border-gray-800 rounded-xl px-3 md:px-4 py-2 md:py-3 text-right text-lg md:text-xl font-bold text-white placeholder:text-white/70 focus:outline-none focus:border-purple-600"
                  placeholder="100.00"
                />
                <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs md:text-sm">$ USD</span>
              </div>
            </div>

            {/* Charge Button */}
            <button 
              onClick={() => router.push('/dashboard')}
              className="w-full md:w-3/4 mx-auto block bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:opacity-90 transition-opacity mt-8 md:mt-16"
            >
              شَحن المحفظة بـ {amount}$
            </button>
          </div>

          {/* Left Side - Payment Method */}
          <div className="space-y-6 order-2 lg:order-2 lg:-mt-8">
            {/* Card Display Container */}
            {true && (
              <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-3 md:p-4 space-y-4">
                {/* Payment Method Tabs - Inside the box */}
<div className="flex gap-2 md:gap-3 mb-8 md:mb-12">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 py-2 md:py-2.5 rounded-lg border transition-all text-xs md:text-sm ${
                      paymentMethod === 'card'
                        ? 'bg-purple-600/20 border-purple-600 text-white'
                        : 'bg-transparent border-gray-800 text-gray-400'
                    }`}
                  >
                    بطاقة الائتمان
                  </button>
                  <button
                    onClick={() => setPaymentMethod('crypto')}
                    className={`flex-1 py-2 md:py-2.5 rounded-lg border transition-all text-xs md:text-sm ${
                      paymentMethod === 'crypto'
                        ? 'bg-purple-600/20 border-purple-600 text-white'
                        : 'bg-transparent border-gray-800 text-gray-400'
                    }`}
                  >
                    عملات رقمية
                  </button>
                  <button
                    onClick={() => setPaymentMethod('apple')}
                    className={`flex-1 py-2 md:py-2.5 rounded-lg border transition-all text-xs md:text-sm ${
                      paymentMethod === 'apple'
                        ? 'bg-purple-600/20 border-purple-600 text-white'
                        : 'bg-transparent border-gray-800 text-gray-400'
                    }`}
                  >
                    Apple Pay
                  </button>
                </div>
                {/* Credit Card Visual */}
                <div className="relative w-full max-w-[360px] h-[180px] md:h-[220px] mx-auto rounded-2xl overflow-hidden p-4 md:p-6 flex flex-col justify-between mt-4 md:mt-8 shadow-[0_0_20px_rgba(236,27,177,0.3)] md:shadow-[0_0_30px_rgba(236,27,177,0.4)]" style={{ background: 'linear-gradient(110.48deg, #881BE1 0%, #EC1BB1 50%, #EBE448 100%)' }}>
                  {/* Top Row: Logo on left, Chip on right */}
                  <div className="flex justify-between items-start">
                    {/* Storage Logo */}
                    <img 
                      src="/16748711948c681c74613bd74259d711f0030872.png" 
                      alt="Storage" 
                      className="h-6 md:h-8"
                    />

                    {/* Chip - on the right side */}
                    <div className="w-10 h-7 md:w-12 md:h-9 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-md flex items-center justify-center">
                      <div className="w-7 h-5 md:w-9 md:h-6 border-2 border-yellow-600/50 rounded"></div>
                    </div>
                  </div>

                  {/* Card Number */}
                  <div className="text-white text-base md:text-xl font-mono tracking-widest mt-0.5 text-left">
                    **** 8832 1102 4023
                  </div>

                  {/* Bottom Row: Name on far left, Expiry in middle, Mastercard on right */}
                  <div className="flex justify-between items-end w-full">
                    <div className="text-left absolute left-4 md:left-6 bottom-4 md:bottom-6">
                      <p className="text-white/60 text-[9px] md:text-[10px] mb-0.5 md:mb-1">CARD HOLDER</p>
                      <p className="text-white font-semibold text-xs md:text-sm">MUSTAFA AL-HUSSEINI</p>
                    </div>
                    <div className="text-left absolute left-[60%] -translate-x-1/2 bottom-4 md:bottom-6">
                      <p className="text-white/60 text-[9px] md:text-[10px] mb-0.5 md:mb-1">EXPIRES</p>
                      <p className="text-white font-semibold text-xs md:text-sm">12/28</p>
                    </div>
                  </div>

                  {/* Mastercard Logo */}
                  <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4">
                    <div className="flex">
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-red-500 rounded-full opacity-90"></div>
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-yellow-400 rounded-full opacity-90 -ml-3"></div>
                    </div>
                  </div>
                </div>

                {/* Card Form */}
                <div className="space-y-2 md:space-y-3">
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block text-right">الاسم على البطاقة</label>
                    <input
                      type="text"
                      placeholder="الاسم على البطاقة"
                      className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-sm text-right text-white placeholder:text-white/70 focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 mb-1 block text-right">رقم البطاقة</label>
                    <input
                      type="text"
                      placeholder="4023 1102 8832 ****"
                      className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-sm text-right text-white placeholder:text-white/70 focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block text-right">CVC</label>
                      <input
                        type="text"
                        placeholder="***"
                        className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-sm text-center text-white placeholder:text-white/70 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block text-right">MM/YY</label>
                      <input
                        type="text"
                        placeholder="12 / 28"
                        className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-sm text-center text-white placeholder:text-white/70 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
