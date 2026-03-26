'use client';

import { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';

export default function OrdersLog() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState(6);

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

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <Sidebar isOpen={sidebarOpen} activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'mr-80' : 'mr-0'}`}>
        <Header />
        
        <main className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">سجل الطلبات</h1>
              <p className="text-gray-400 mt-1">تتبع حالة البوتات النمو والعمليات السابقة</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>تصدير CSV</span>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="ابحث برقم الطلب"
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:border-purple-600"
              />
              <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              الكل
            </button>
            <button className="px-6 py-3 bg-gray-900 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors">
              قيد التنفيذ (4)
            </button>
            <button className="px-6 py-3 bg-gray-900 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors">
              مكتمل (12)
            </button>
            <button className="px-6 py-3 bg-gray-900 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors">
              ملغي (1)
            </button>
          </div>

          {/* Orders Table */}
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl overflow-hidden">
            <table className="w-full">
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
                {orders.map((order, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
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
                    <td className="px-6 py-4">
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
        </main>
      </div>
    </div>
  );
}
