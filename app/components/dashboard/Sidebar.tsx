'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  activeSection: number;
  setActiveSection: (index: number) => void;
}

export default function Sidebar({ isOpen, activeSection, setActiveSection }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { icon: 'square', label: 'لوحة التحكم' },
    { icon: 'circle', label: 'سناب شات' },
    { icon: 'music', label: 'تيك توك' },
    { icon: 'instagram', label: 'إنستجرام' },
    { icon: 'x', label: 'إكس (تويتر)' },
    { icon: 'new-service', label: 'طلب خدمة جديدة' },
    { icon: 'list', label: 'سجل الطلبات' },
    { icon: 'question', label: 'الدعم الفني' },
  ];

  const renderIcon = (icon: string) => {
    if (icon === 'square') return <div className="w-5 h-5 border-2 border-pink-500 rounded flex-shrink-0"></div>;
    if (icon === 'circle') return <div className="w-5 h-5 border-2 border-gray-500 rounded-full flex-shrink-0"></div>;
    if (icon === 'music') return (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18V5l12-2v13M9 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm12-2c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
      </svg>
    );
    if (icon === 'instagram') return (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    );
    if (icon === 'x') return (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    );
    if (icon === 'new-service') return (
      <div className="w-5 h-5 rounded-full border-2 border-[#EC1BB1] flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-[#EC1BB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </div>
    );
    if (icon === 'list') return (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
      </svg>
    );
    if (icon === 'question') return (
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    );
    return null;
  };

  const SidebarContent = () => (
    <div className="p-6 h-full flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center mb-8">
        <Link href="/">
          <img src="/16748711948c681c74613bd74259d711f0030872.png" alt="Logo" className="h-16 cursor-pointer"/>
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="space-y-2 flex-1">
        {menuItems.map((item, index) => (
          <div key={index}>
            {index === 6 && <div className="border-t border-gray-800 my-4"></div>}
            <button
              onClick={() => { setActiveSection(index); setMobileOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative group ${
                activeSection === index
                  ? 'bg-purple-600/20 text-white border border-purple-600/30'
                  : 'text-gray-400 hover:bg-purple-600/20 hover:text-white hover:border hover:border-purple-600/30'
              }`}
            >
              <div className={`absolute right-0 top-0 bottom-0 w-1 bg-pink-500 rounded-l-full transition-opacity ${activeSection === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              {renderIcon(item.icon)}
              <span className={item.icon === 'new-service' ? 'text-white' : ''}>{item.label}</span>
            </button>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-red-400 hover:bg-red-600/20 hover:text-red-300 mt-4" onClick={() => router.push('/login')}>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        <span>تسجيل الخروج</span>
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:block fixed right-0 top-0 h-full bg-[#0a0a0a] border-l border-gray-800 transition-all duration-300 z-50 ${isOpen ? 'w-80' : 'w-0'} overflow-hidden`}>
        <SidebarContent />
      </aside>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-50 w-10 h-10 bg-[#0a0a0a] border border-gray-700 rounded-lg flex items-center justify-center"
      >
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside className={`lg:hidden fixed right-0 top-0 h-full w-72 bg-[#0a0a0a] border-l border-gray-800 z-50 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <SidebarContent />
      </aside>
    </>
  );
}
