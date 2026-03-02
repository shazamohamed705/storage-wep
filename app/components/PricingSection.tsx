'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [selectedPlatform, setSelectedPlatform] = useState('Snapchat');
  const [selectedService, setSelectedService] = useState('زيادة متابعين');
  const [quantity, setQuantity] = useState(10000);

  return (
    <section className="min-h-screen relative py-20 overflow-hidden" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            خطط مرنة تناسب <span style={{ color: '#EBE448' }}>طموحك</span>
          </h2>
          <p className="text-gray-400 text-lg">
            ادفع فقط مقابل ما تحتاج. لا رسوم خفية. لا اشتراكات معقدة.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center gap-7 mb-12 flex-wrap">
          {[
            { name: 'Snapchat', emoji: '👻' },
            { name: 'X (Twitter)', emoji: '🐦' },
            { name: 'TikTok', emoji: '🎵' },
            { name: 'Instagram', emoji: '📸' }
          ].map((platform) => (
            <button
              key={platform.name}
              onClick={() => setSelectedPlatform(platform.name)}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedPlatform === platform.name
                  ? ''
                  : 'text-gray-500 hover:text-gray-400'
              }`}
              style={selectedPlatform === platform.name ? { background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(235, 228, 72, 0.3) 100%)', border: '2px solid rgba(235, 228, 72, 0.4)', color: '#EBE448' } : { background: 'rgba(60, 60, 65, 0.5)', border: '1px solid rgba(100, 100, 105, 0.3)' }}
            >
              {platform.name} {platform.emoji}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-40 items-start">
          
          {/* Right side - Service Selection */}
          <div className="order-1 lg:order-1">
            
            {/* Service Type */}
            <div className="mb-8">
              <h4 className="text-white text-xl font-bold mb-4 text-right">نوع الخدمة</h4>
              <div className="flex gap-4 flex-wrap">
                {['زيادة متابعين', 'مشاهدات (Views)', 'رفع للسكور'].map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedService === service
                        ? 'text-white'
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                    }`}
                    style={selectedService === service ? { border: '2px solid #EBE448' } : {}}
                  >
                    {service} {selectedService === service && '💛'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-white text-xl font-bold text-right">الكمية المطلوبة</h4>
                <p className="text-3xl font-bold" style={{ color: '#EBE448' }}>{quantity.toLocaleString()} متابع</p>
              </div>
              
              <div className="relative" dir="rtl">
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to left, #EBE448 0%, #EBE448 ${((quantity - 1000) / 99000) * 100}%, rgba(75, 85, 99, 0.3) ${((quantity - 1000) / 99000) * 100}%, rgba(75, 85, 99, 0.3) 100%)`
                  }}
                />
                <style jsx>{`
                  input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 20%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%);
                    cursor: pointer;
                    box-shadow: 0 0 40px 15px rgba(255, 255, 255, 0.6), 0 0 80px 30px rgba(255, 255, 255, 0.3);
                  }
                  input[type="range"]::-moz-range-thumb {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 20%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 100%);
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 0 40px 15px rgba(255, 255, 255, 0.6), 0 0 80px 30px rgba(255, 255, 255, 0.3);
                  }
                `}</style>
              </div>

              <div className="flex justify-between text-gray-500 text-sm mt-2">
                <span>1K</span>
                <span>25K</span>
                <span>50K</span>
                <span>75K</span>
                <span>100K+</span>
              </div>
            </div>

          </div>

          {/* Left side - Price Card */}
          <div className="order-2 lg:order-2">
            <div className="rounded-3xl p-8 w-full lg:w-[380px] lg:h-[420px] flex flex-col justify-between relative overflow-hidden" style={{ background: 'rgba(30, 30, 35, 0.8)', border: '1px solid rgba(75, 85, 99, 0.3)' }}>
              {/* Yellow gradient inside box */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, #EBE448 0%, rgba(235, 228, 72, 0) 100%)', opacity: 0.09 }}></div>
              
              <div className="relative z-10">
                <p className="text-gray-400 text-sm mb-2 text-center">الإجمالي الشهر</p>
                <h3 className="text-6xl font-bold text-white text-center mb-4">$49.99</h3>
                {/* Dotted line */}
                <div className="w-full h-px mb-4" style={{ backgroundImage: 'radial-gradient(circle, #f6f6f2ff 1px, transparent 1px)', backgroundSize: '8px 2px', backgroundRepeat: 'repeat-x', backgroundPosition: 'center' }}></div>
              </div>
              
              <div className="space-y-3 mb-8 relative z-10">
                <div className="flex items-center justify-center gap-3 text-white">
                  <span style={{ color: '#EBE448', minWidth: '10px', textAlign: 'center' }}>●</span>
                  <span>ضمانة استبدال كامل</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <span style={{ color: '#EBE448', minWidth: '10px', textAlign: 'center' }}>●</span>
                  <span>استجابة متابعين حقيقيين</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <span style={{ color: '#EBE448', minWidth: '10px', textAlign: 'center' }}>●</span>
                  <span>التسليم 30 يوم بتوصي</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <span style={{ color: '#EBE448', minWidth: '10px', textAlign: 'center' }}>●</span>
                  <span>دعم فني 24/7 مجاني</span>
                </div>
              </div>

              <div className="relative z-10">
                <button className="w-full py-4 rounded-full font-bold text-black text-lg transition-all hover:scale-105" style={{ background: '#EBE448', boxShadow: '0 10px 40px rgba(235, 228, 72, 0.5), 0 5px 20px rgba(235, 228, 72, 0.3)' }}>
                  اتمام الطلب الآن
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
