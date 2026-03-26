'use client';

export default function StatsCards() {
  return (
    <>
      <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 h-[140px] flex items-center">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-3 justify-end" dir="ltr">
            <span className="text-gray-400 text-sm">الطلبات النشطة</span>
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-gray-800">
              <div className="w-6 h-6 border-2 border-pink-600 rounded"></div>
            </div>
          </div>
          <div className="flex items-baseline gap-3 justify-end" dir="ltr">
            <span className="text-green-500 text-sm">3+ اليوم</span>
            <span className="text-5xl font-bold">12</span>
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 h-[140px] flex items-center">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-3 justify-end" dir="ltr">
            <span className="text-gray-400 text-sm">إجمالي النمو</span>
            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-800" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}>
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-end" dir="ltr">
            <span className="text-gray-400 text-sm">متابع جديد</span>
            <span className="text-5xl font-bold">+84K</span>
          </div>
        </div>
      </div>
    </>
  );
}
