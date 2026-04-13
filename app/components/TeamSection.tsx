'use client';

import { useState, useRef } from 'react';

const team = [
  {
    name: 'زينب القحطاني',
    role: 'خبيرة هندسة الذكاء الاصطناعي',
    bio: 'متخصصة في بناء وتدريب نماذج لغوية مخصصة (LLMs) وتطوير الأنظمة الذكية المعقدة',
    image: '/e6f36395282c0cd48ecdea882812e8af17a9b018.png',
  },
  {
    name: 'محمد العتيبي',
    role: 'مهندس بنية تحتية سحابية',
    bio: 'متخصص في تصميم وإدارة الأنظمة السحابية عالية الأداء وضمان استمرارية الخدمة بنسبة 99.9%',
    image: '/e6f36395282c0cd48ecdea882812e8af17a9b018.png',
  },
  {
    name: 'سارة الشمري',
    role: 'مطورة واجهات متقدمة',
    bio: 'متخصصة في بناء تجارب مستخدم استثنائية باستخدام أحدث تقنيات الويب والتطبيقات',
    image: '/e6f36395282c0cd48ecdea882812e8af17a9b018.png',
  },
  {
    name: 'خالد الدوسري',
    role: 'خبير أمن المعلومات',
    bio: 'متخصص في حماية الأنظمة وتطوير بروتوكولات الأمان لضمان سلامة بيانات العملاء',
    image: '/e6f36395282c0cd48ecdea882812e8af17a9b018.png',
  },
  {
    name: 'نورة الحربي',
    role: 'محللة بيانات ونمو',
    bio: 'متخصصة في تحليل بيانات النمو وتطوير استراتيجيات التوسع الرقمي للعلامات التجارية',
    image: '/e6f36395282c0cd48ecdea882812e8af17a9b018.png',
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const visibleCount = 3;
  const maxIndex = Math.max(0, team.length - visibleCount);

  const prev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const next = () => setCurrentIndex(i => Math.min(maxIndex, i + 1));
  const visible = team.slice(currentIndex, currentIndex + visibleCount);

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.82 + 16;
    el.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const cardWidth = el.clientWidth * 0.82 + 16;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setCurrentIndex(Math.min(idx, team.length - 1));
  };

  return (
    <section className="text-white" style={{ background: '#0D021F' }} dir="rtl">
      {/* Header */}
      <div className="bg-black pt-16 pb-40 px-4 text-center" style={{ borderRadius: '0 0 60px 60px' }}>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">العقول المبدعة خلف الكواليس</h2>
        <p className="text-gray-400 text-sm md:text-base">
          نخبة من المبرمجين وخبراء الذكاء الاصطناعي مكرسون لتحويل رؤيتك إلى واقع برمجي متميز
        </p>
      </div>

      {/* Cards area */}
      <div className="relative px-4 pb-8" style={{ marginTop: '-120px' }}>

      <div className="max-w-6xl mx-auto">
        <div className="relative flex items-center gap-3 md:gap-6">
          {/* Prev Arrow */}
          <button onClick={prev} disabled={currentIndex === 0}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-[#EC1BB1]/50 flex items-center justify-center text-[#EC1BB1] hover:bg-[#EC1BB1]/10 transition-all disabled:opacity-20">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          {/* Cards - Desktop */}
          <div className="flex-1 hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {visible.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>

          {/* Next Arrow */}
          <button onClick={next} disabled={currentIndex >= maxIndex}
            className="hidden md:flex flex-shrink-0 w-9 h-9 rounded-full border border-[#EC1BB1]/50 items-center justify-center text-[#EC1BB1] hover:bg-[#EC1BB1]/10 transition-all disabled:opacity-20">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </div>

        {/* Mobile snap scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 mt-4"
          style={{ direction: 'ltr' }}
        >
          {team.map((member, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-[82vw]" style={{ direction: 'rtl' }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="md:hidden flex justify-center items-center gap-2 mt-5">
          {team.map((_, i) => (
            <button key={i} onClick={() => scrollToCard(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentIndex === i ? '32px' : '8px',
                height: '8px',
                background: currentIndex === i ? 'linear-gradient(90deg, #881BE1, #EC1BB1)' : 'rgba(255,255,255,0.2)',
                boxShadow: currentIndex === i ? '0 0 10px rgba(236,27,177,0.8)' : 'none',
              }}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: typeof team[0] }) {
  return (
    <div className="relative mx-auto w-full" style={{ maxWidth: '370px' }}>
      <div className="absolute" style={{
        top: '8px', left: '8px', right: '-8px', bottom: '-8px',
        borderRadius: '20px', border: '2px solid rgba(236,27,177,0.6)', zIndex: 0,
      }} />
      <div className="relative flex flex-col items-center text-center md:h-[517px]"
        style={{
          borderRadius: '20px', background: 'rgba(13,2,31,0.5)',
          padding: '28px 20px 24px', border: '1px solid #EC1BB1', zIndex: 1,
        }}>
        <div className="w-28 h-28 md:w-[172px] md:h-[172px] rounded-full overflow-hidden mb-4 flex-shrink-0 mt-0 md:mt-[35px]">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-white" style={{ fontFamily: 'Alexandria, sans-serif' }}>{member.name}</h3>
        <p className="text-sm font-medium mb-3 text-white">{member.role}</p>
        <div className="w-3/4 h-px mb-3" style={{ background: 'linear-gradient(90deg, transparent, white, transparent)' }} />
        <p className="text-sm leading-relaxed mb-4 text-gray-200">{member.bio}</p>
        <div className="flex items-center gap-4 mt-auto">
          {[
            <path key="li" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>,
          ].map((_, i) => null)}
          <a href="#" className="hover:opacity-70 transition-opacity text-[#EC1BB1]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity text-[#EC1BB1]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
