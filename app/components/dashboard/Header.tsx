'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#0a0a0a] border-b border-gray-800 px-4 pr-16 lg:pr-4 py-3">
      <div className="flex items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-xs hidden sm:block">
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="ابحث عن خدمة" className="w-full bg-black border border-gray-800 rounded-full px-4 py-2 pr-9 text-sm focus:outline-none focus:border-purple-600"/>
        </div>

        {/* Logo on mobile - links to home */}
        <div className="sm:hidden">
          <Link href="/">
            <img src="/16748711948c681c74613bd74259d711f0030872.png" alt="Logo" className="h-8 cursor-pointer"/>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="relative w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-pink-500 rounded-full"></span>
          </button>
          
          <div className="text-right hidden sm:block">
            <h2 className="font-bold text-sm">Mustafa</h2>
            <p className="text-xs text-green-500">متصل الآن</p>
          </div>
          
          <div className="relative w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #881BE1 0%, #EC1BB1 50%, #EBE448 100%)' }}>
            <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
              <span className="text-lg font-bold text-white">M</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
