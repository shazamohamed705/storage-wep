'use client';

import { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import BalanceCard from '../components/dashboard/BalanceCard';
import StatsCards from '../components/dashboard/StatsCards';
import GrowthChart from '../components/dashboard/GrowthChart';
import LiveActivities from '../components/dashboard/LiveActivities';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('تيك توك');
  const [selectedService, setSelectedService] = useState('دعم بث مباشر (Live)');
  const [quantity, setQuantity] = useState(5000);
  const [liveLink, setLiveLink] = useState('');

  const orders = [
    {
      id: '#ST-8829',
      service: 'مشاهدة خريطة 100K',
      platform: 'سناب شات',
      icon: '👻',
      date: '15 Oct 2026',
      time: '10:24 AM',
      progress: 75,
      status: 'قيد التنفيذ',
      statusColor: 'yellow'
    },
    {
      id: '#ST-8810',
      service: '5,000 متابع حقيقي',
      platform: 'إنستجرام',
      icon: '📸',
      date: '12 Oct 2026',
      time: '08:15 PM',
      progress: 100,
      status: 'مكتمل',
      statusColor: 'green'
    },
    {
      id: '#ST-8805',
      service: 'دعم بث مباشر (Live)',
      platform: 'تيك توك',
      icon: '🎵',
      date: '10 Oct 2026',
      time: '11:40 PM',
      progress: 35,
      status: 'قيد التنفيذ',
      statusColor: 'pink'
    },
    {
      id: '#ST-8799',
      service: 'تصدر الترند (#)',
      platform: 'إكس (تويتر)',
      icon: '❌',
      date: '08 Oct 2026',
      time: '02:30 PM',
      progress: 0,
      status: 'قيد المراجعة',
      statusColor: 'purple'
    },
    {
      id: '#ST-8750',
      service: 'أتمتة ماسنجر',
      platform: 'يوتيوب',
      icon: '🎬',
      date: '01 Oct 2026',
      time: '10:00 AM',
      progress: 0,
      status: 'ملغي',
      statusColor: 'red'
    },
  ];

  // Filter orders based on selected status
  const filteredOrders = filterStatus === 'all' 
    ? orders 
    : orders.filter(order => {
        if (filterStatus === 'in-progress') return order.status === 'قيد التنفيذ';
        if (filterStatus === 'completed') return order.status === 'مكتمل';
        if (filterStatus === 'cancelled') return order.status === 'ملغي';
        if (filterStatus === 'pending') return order.status === 'قيد المراجعة';
        return true;
      });

  // Count orders by status
  const statusCounts = {
    inProgress: orders.filter(o => o.status === 'قيد التنفيذ').length,
    completed: orders.filter(o => o.status === 'مكتمل').length,
    cancelled: orders.filter(o => o.status === 'ملغي').length,
  };

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <Sidebar isOpen={sidebarOpen} activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:mr-80' : 'mr-0'} pb-20 lg:pb-0`}>
        {activeSection === 0 && <Header />}
        
        <main className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {activeSection === 0 && (
            <>
              {/* Welcome Section */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl sm:text-3xl font-bold flex items-center gap-2">
                   أهلاً بك، مصطفى 👋
                  </h1>
                  <p className="text-gray-400 mt-1 text-sm">نظرة عامة على نشاط حسابك اليوم</p>
                </div>
              </div>

              {/* Balance and Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <BalanceCard />
                <StatsCards />
              </div>

              {/* Growth Chart and Live Activities */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <LiveActivities />
                <GrowthChart />
              </div>
            </>
          )}

          {activeSection === 5 && (
            <div className="w-full max-w-[1240px] mx-auto px-2 sm:px-4">
              {/* Header */}
              <div className="mb-6 pr-12 lg:pr-0">
                <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">طلب خدمة جديدة 🚀</h1>
                <p className="text-gray-400 mt-1 text-sm">قم بإعداد طلبك بخطوات بسيطة وسيتم التنفيذ فوراً</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Left - Form */}
                <div className="w-full lg:w-[630px] lg:min-h-[598px] space-y-5 flex-shrink-0">
                  {/* Step 1 - Platform */}
                  <div>
                    <h2 className="text-base font-bold mb-3">١. اختر المنصة</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { name: 'سناب شات', emoji: '👻' },
                        { name: 'إنستجرام', emoji: '📸' },
                        { name: 'تيك توك', emoji: '🎵' },
                        { name: 'إكس', emoji: '✖️' },
                      ].map((p) => (
                        <button key={p.name} onClick={() => setSelectedPlatform(p.name)}
                          className={`relative flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl transition-all ${
                            selectedPlatform === p.name
                              ? 'border-0 shadow-[0_0_60px_rgba(236,27,177,0.8)]'
                              : 'border border-gray-800 bg-[#1a1a1a] hover:border-gray-600'
                          }`}
                          style={selectedPlatform === p.name ? { background: 'rgba(236,27,177,0.15)' } : {}}
                        >
                          {selectedPlatform === p.name && (
                            <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-[#EC1BB1] flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                            </div>
                          )}
                          <span className="text-xl sm:text-2xl">{p.emoji}</span>
                          <span className={`text-xs sm:text-sm font-medium ${selectedPlatform === p.name ? 'text-[#EC1BB1]' : 'text-gray-300'}`}>{p.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2 - Service Type */}
                  <div>
                    <h2 className="text-base font-bold mb-3">٢. نوع الخدمة</h2>
                    <div className="flex flex-wrap gap-2">
                      {['زيادة متابعين', 'مشاهدات فيديو', 'دعم بث مباشر (Live)', 'حركة إكسبلور'].map((s) => (
                        <button key={s} onClick={() => setSelectedService(s)}
                          className={`px-3 py-1.5 rounded-full border text-xs sm:text-sm transition-all ${selectedService === s ? 'border-[#EC1BB1] bg-[#EC1BB1]/10 text-[#EC1BB1]' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}>
                          {selectedService === s && <span className="ml-1">●</span>}{s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3 - Link */}
                  <div>
                    <h2 className="text-base font-bold mb-1">٣. رابط البث المباشر (الهدف)</h2>
                    <p className="text-gray-500 text-xs mb-2">تأكد من أن الحساب عام (Public) وليس خاص (Private).</p>
                    <div className="relative">
                      <input type="text" value={liveLink} onChange={(e) => setLiveLink(e.target.value)}
                        placeholder="https://www.tiktok.com/@storage_growth/live"
                        className="w-full bg-black border border-[#881BE1]/50 rounded-xl px-4 py-3 pr-10 text-xs sm:text-sm focus:outline-none focus:border-[#EC1BB1] text-gray-300 placeholder-gray-600" dir="ltr"/>
                      <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                      </svg>
                    </div>
                  </div>

                  {/* Step 4 - Quantity */}
                  <div>
                    <h2 className="text-base font-bold mb-1">٤. الكمية المطلوبة</h2>
                    <p className="text-gray-500 text-xs mb-2">الحد الأدنى 100 مشاهد | الحد الأقصى 100,000 مشاهد</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 bg-black border border-gray-800 rounded-xl px-4 py-3 flex items-center justify-between">
                        <span className="text-white font-bold text-lg">{quantity.toLocaleString()}</span>
                        <span className="text-gray-500 text-sm">مشاهد</span>
                      </div>
                      <div className="flex-1 relative">
                        <select className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 pr-24 text-xs sm:text-sm text-gray-300 focus:outline-none appearance-none">
                          <option>تدريجي (خلال 15 دقيقة)</option>
                          <option>فوري</option>
                          <option>بطيء (خلال ساعة)</option>
                        </select>
                        <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none">سرعة الدخول:</span>
                      </div>
                    </div>
                    <button className="mt-3 flex items-center gap-2 text-gray-500 text-sm hover:text-gray-300 transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                      إعدادات متقدمة
                    </button>
                  </div>
                </div>

                {/* Right - Summary */}
                <div className="flex-1">
                  <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 sticky top-6 w-full lg:w-[380px] lg:min-h-[540px] mx-auto relative overflow-hidden">
                    {/* Pink glow at top */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#EC1BB1]/25 to-transparent"></div>
                    <div className="text-right mb-6">
                      <h2 className="text-xl font-bold">ملخص الطلب</h2>
                      <div className="w-full h-px bg-gray-800 mt-4"></div>
                    </div>
                    <div className="space-y-4 text-sm border-b border-gray-800 pb-6 mb-6">
                      <div className="flex justify-between"><span className="font-bold">{selectedPlatform} 🎵</span><span className="text-gray-400">المنصة</span></div>
                      <div className="flex justify-between"><span className="font-bold">{selectedService}</span><span className="text-gray-400">نوع الخدمة</span></div>
                      <div className="flex justify-between"><span className="font-bold">{quantity.toLocaleString()} مشاهد</span><span className="text-gray-400">الكمية</span></div>
                      <div className="flex justify-between"><span className="font-bold">تدريجي (15د)</span><span className="text-gray-400">سرعة الدخول</span></div>
                      <div className="flex justify-between"><span className="font-bold">$5.00</span><span className="text-gray-400">تكلفة الـ 1000</span></div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[#EC1BB1] text-2xl font-bold">$25.00</span>
                      <span className="text-xl font-bold">الإجمالي</span>
                    </div>
                    <div className="bg-black rounded-xl p-4 mb-6 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-green-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span> $1,250.00</span>
                        <span className="text-gray-400">الرصيد المتاح:</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">$1,225.00</span>
                        <span className="text-gray-400">الرصيد بعد الطلب:</span>
                      </div>
                    </div>
                    <button className="w-full py-4 rounded-full font-bold text-lg transition-all text-white bg-[#EC1BB1] hover:bg-[#d4189f] shadow-[0_0_30px_rgba(236,27,177,0.7)] hover:shadow-[0_0_50px_rgba(236,27,177,0.9)]">
                      تأكيد وبدء التنفيذ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 6 && (            <div className="w-full max-w-[1240px] mx-auto px-4 md:px-0">
              {/* Back Button */}
              <button 
                onClick={() => setActiveSection(0)}
                className="text-gray-400 hover:text-white transition-colors mb-4 md:mb-6"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>

              {/* Orders Log Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 md:mb-16 gap-4">
                {/* Title - Right side */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">سجل الطلبات</h1>
                  <p className="text-gray-400 mt-1 text-sm md:text-base">تتبع حالة البوتات النمو والعمليات السابقة</p>
                </div>

                {/* Export Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-black border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors w-fit">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span className="text-sm">تصدير CSV</span>
                </button>
              </div>

              {/* Orders Table Container */}
              <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl overflow-hidden">
                {/* Search and Filters - Inside the box */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 p-4 md:p-6 border-b border-gray-800">
                  <div className="flex-1 max-w-full md:max-w-md relative">
                    <input
                      type="text"
                      placeholder="ابحث برقم الطلب"
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:border-purple-600"
                    />
                    <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                    <button 
                      onClick={() => setFilterStatus('all')}
                      className={`px-3 md:px-4 py-2 border rounded-lg transition-colors whitespace-nowrap text-xs md:text-sm flex-shrink-0 ${
                        filterStatus === 'all' 
                          ? 'text-purple-500 border-purple-600' 
                          : 'text-gray-400 border-gray-700 hover:bg-gray-800'
                      }`}
                    >
                      الكل
                    </button>
                    <button 
                      onClick={() => setFilterStatus('in-progress')}
                      className={`px-3 md:px-4 py-2 border rounded-lg transition-colors whitespace-nowrap text-xs md:text-sm flex-shrink-0 ${
                        filterStatus === 'in-progress' 
                          ? 'text-purple-500 border-purple-600' 
                          : 'text-gray-400 border-gray-700 hover:bg-gray-800'
                      }`}
                    >
                      قيد التنفيذ ({statusCounts.inProgress})
                    </button>
                    <button 
                      onClick={() => setFilterStatus('completed')}
                      className={`px-3 md:px-4 py-2 border rounded-lg transition-colors whitespace-nowrap text-xs md:text-sm flex-shrink-0 ${
                        filterStatus === 'completed' 
                          ? 'text-purple-500 border-purple-600' 
                          : 'text-gray-400 border-gray-700 hover:bg-gray-800'
                      }`}
                    >
                      مكتمل ({statusCounts.completed})
                    </button>
                    <button 
                      onClick={() => setFilterStatus('cancelled')}
                      className={`px-3 md:px-4 py-2 border rounded-lg transition-colors whitespace-nowrap text-xs md:text-sm flex-shrink-0 ${
                        filterStatus === 'cancelled' 
                          ? 'text-purple-500 border-purple-600' 
                          : 'text-gray-400 border-gray-700 hover:bg-gray-800'
                      }`}
                    >
                      ملغي ({statusCounts.cancelled})
                    </button>
                  </div>
                </div>

                {/* Table - Scrollable on mobile */}
                <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">الخدمة والمنصة</th>
                      <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">رقم الطلب</th>
                      <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">تاريخ الطلب</th>
                      <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">التقدم (Progress)</th>
                      <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">الحالة</th>
                      <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">إجراء</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-xl">
                              {order.icon}
                            </div>
                            <div>
                              <div className="font-medium">{order.service}</div>
                              <div className="text-sm text-gray-400">{order.platform}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-mono text-gray-300">{order.id}</td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div>{order.date}</div>
                            <div className="text-gray-400">{order.time}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-full ${
                                  order.statusColor === 'yellow' ? 'bg-yellow-500' :
                                  order.statusColor === 'green' ? 'bg-green-500' :
                                  order.statusColor === 'pink' ? 'bg-pink-500' :
                                  'bg-gray-700'
                                }`}
                                style={{ width: `${order.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-400 min-w-[40px]">{order.progress}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm border ${
                            order.statusColor === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500' :
                            order.statusColor === 'green' ? 'bg-green-500/10 border-green-500/30 text-green-500' :
                            order.statusColor === 'pink' ? 'bg-pink-500/10 border-pink-500/30 text-pink-500' :
                            order.statusColor === 'purple' ? 'bg-purple-500/10 border-purple-500/30 text-purple-500' :
                            'bg-red-500/10 border-red-500/30 text-red-500'
                          }`}>
                            {order.progress > 0 && order.progress < 100 && <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>}
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 relative">
                          {/* Yellow line on left - shows on hover */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <button className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="1"/>
                              <circle cx="12" cy="5" r="1"/>
                              <circle cx="12" cy="19" r="1"/>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-800">
                  <div className="text-sm text-gray-400">
                    إظهاراً 1 إلى 5 من 24 طلب
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600 text-white">1</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">2</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">3</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
