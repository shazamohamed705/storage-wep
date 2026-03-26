'use client';

export default function GrowthChart() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-right">تحليل النمو</h3>
      <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 w-full min-h-[430px]">
        <div className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 600 300" className="w-full h-[350px]">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="60" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            <line x1="0" y1="75" x2="600" y2="75" stroke="#1f1f1f" strokeWidth="1" />
            <line x1="0" y1="150" x2="600" y2="150" stroke="#1f1f1f" strokeWidth="1" />
            <line x1="0" y1="225" x2="600" y2="225" stroke="#1f1f1f" strokeWidth="1" />

            {/* Curved Line */}
            <path
              d="M 100 250 C 200 200, 250 280, 350 180 S 500 50, 550 40"
              fill="none"
              stroke="#EC1BB1"
              strokeWidth="12"
              strokeOpacity="0.35"
              filter="url(#glow)"
            />

            {/* Points */}
            <circle cx="100" cy="250" r="6" fill="#EC1BB1" filter="url(#glow)" />
            <circle cx="350" cy="180" r="6" fill="#a855f7" filter="url(#glow)" />
            <circle cx="550" cy="40" r="6" fill="#EBE448" filter="url(#glow)" />
          </svg>

          {/* Stats Badge */}
          <div className="absolute top-4 right-4 bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2">
            <span className="text-white text-sm font-bold">+15.2K</span>
          </div>

          {/* Month Labels */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-between px-12 text-xs text-gray-500">
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
          </div>
        </div>
      </div>
    </div>
  );
}
