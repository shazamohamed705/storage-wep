'use client';

import Link from 'next/link';

export default function BalanceCard() {
  return (
    <div className="relative rounded-xl p-[1.5px] bg-gradient-to-r from-[#881BE1] via-[#EC1BB1] to-[#EBE448] h-[140px]">
      <div className="rounded-xl p-6 relative overflow-hidden w-full h-full flex items-center" style={{ backgroundColor: '#1f101c' }}>
        <div className="relative z-10 w-full">
          <p className="text-gray-400 text-sm mb-2">الرصيد المتاح</p>
          <div className="flex items-center justify-between gap-3">
            <span className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-none" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              $1,250.00
            </span>
            <Link 
              href="/recharge"
              className="text-black text-sm font-bold rounded-full hover:opacity-90 transition-opacity cursor-pointer" 
              style={{ 
                backgroundColor: '#EBE448',
                width: '120px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              شحن الرصيد
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
