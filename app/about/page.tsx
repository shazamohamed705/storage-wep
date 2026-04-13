'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Trophy, Star, ThumbsUp, Briefcase, Award } from 'lucide-react';

const stats = [
  { value: '6+', label: 'أعضاء الفريق', icon: Users },
  { value: '250+', label: 'مشروع مكتمل', icon: Trophy },
  { value: '47+', label: 'سنوات خبرة مجمعة', icon: Star },
  { value: '98%', label: 'تقييم العملاء', icon: ThumbsUp },
];

const team = [
  {
    name: 'زينب القحطاني',
    role: 'خبيرة هندسة الذكاء الاصطناعي',
    shortBio: 'متخصصة في بناء وتدريب نماذج لغوية مخصصة (LLMs) وتطوير الأنظمة الذكية المعقدة',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    experience: '8 سنوات خبرة',
    followers: '44 متابع',
    fullBio: 'خبرة رائدة في مجال الذكاء الاصطناعي مع شغف كبير بتطوير حلول ذكاء اصطناعي تخدم المجتمع العربي. تخرجت من معهد ماساتشوستس للتكنولوجيا (MIT) وعملت في كبرى شركات التكنولوجيا العالمية قبل تأسيس فريقها الخاص.',
    specialization: 'متخصصة في بناء وتدريب نماذج لغوية مخصصة (LLMs) وتطوير الأنظمة الذكية المعقدة',
    domains: ['معالجة اللغة الطبيعية', 'التعلم العميق', 'LLMs نماذج لغوية', 'TensorFlow & PyTorch'],
    achievements: [
      'قادت تطوير نموذج لغوي يخدم أكثر من 2 مليون مستخدم',
      'حاصلة على 1 براءات ابتكار في مجال الذكاء الاصطناعي',
      'متحدثة رئيسية في +15 مؤتمر دولي للذكاء الاصطناعي',
      'نشرت 12 ورقة بحثية في مجلات علمية محكمة',
    ],
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Machine Learning', level: 90 },
      { name: 'Deep Learning', level: 85 },
      { name: 'NLP', level: 90 },
    ],
  },
  {
    name: 'محمد العتيبي',
    role: 'مهندس بنية تحتية سحابية',
    shortBio: 'متخصص في تصميم وإدارة الأنظمة السحابية عالية الأداء وضمان استمرارية الخدمة',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    experience: '10 سنوات خبرة',
    followers: '120 متابع',
    fullBio: 'خبير في البنية التحتية السحابية مع خلفية قوية في AWS وGCP وAzure. عمل مع كبرى الشركات التقنية في المنطقة.',
    specialization: 'متخصص في تصميم وإدارة الأنظمة السحابية عالية الأداء وضمان استمرارية الخدمة بنسبة 99.9%',
    domains: ['AWS', 'Kubernetes', 'DevOps', 'Terraform'],
    achievements: [
      'صمم بنية تحتية تتحمل أكثر من 10 مليون طلب يومياً',
      'خفّض تكاليف البنية التحتية بنسبة 40% لعملائه',
      'حاصل على 12 شهادة سحابية معتمدة',
      'قاد فرق هندسية في 5 دول مختلفة',
    ],
    skills: [
      { name: 'AWS', level: 95 },
      { name: 'Kubernetes', level: 88 },
      { name: 'DevOps', level: 92 },
      { name: 'Terraform', level: 85 },
    ],
  },
  {
    name: 'سارة الشمري',
    role: 'مطورة واجهات متقدمة',
    shortBio: 'متخصصة في بناء تجارب مستخدم استثنائية باستخدام أحدث تقنيات الويب',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    experience: '6 سنوات خبرة',
    followers: '88 متابع',
    fullBio: 'مطورة واجهات أمامية متخصصة في React وNext.js مع شغف بتصميم تجارب مستخدم جميلة وسهلة الاستخدام.',
    specialization: 'متخصصة في بناء تجارب مستخدم استثنائية باستخدام أحدث تقنيات الويب والتطبيقات',
    domains: ['React', 'Next.js', 'TypeScript', 'UI/UX Design'],
    achievements: [
      'طورت أكثر من 50 تطبيق ويب ناجح',
      'حاصلة على جائزة أفضل مطورة واجهات في المنطقة 2024',
      'مساهمة في مشاريع مفتوحة المصدر بأكثر من 500 نجمة',
      'تدرّب أكثر من 200 مطور مبتدئ',
    ],
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'UI/UX', level: 85 },
    ],
  },
  {
    name: 'خالد الدوسري',
    role: 'خبير أمن المعلومات',
    shortBio: 'متخصص في حماية الأنظمة وتطوير بروتوكولات الأمان لضمان سلامة البيانات',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    experience: '9 سنوات خبرة',
    followers: '65 متابع',
    fullBio: 'خبير أمن معلومات معتمد مع خبرة واسعة في اختبار الاختراق وتطوير أنظمة الحماية للشركات الكبرى.',
    specialization: 'متخصص في حماية الأنظمة وتطوير بروتوكولات الأمان لضمان سلامة بيانات العملاء',
    domains: ['Penetration Testing', 'Cybersecurity', 'OWASP', 'Zero Trust'],
    achievements: [
      'اكتشف أكثر من 200 ثغرة أمنية في أنظمة كبرى',
      'حاصل على شهادات CISSP وCEH وOSCP',
      'أمّن بيانات أكثر من 5 مليون مستخدم',
      'مستشار أمني لعدة حكومات في المنطقة',
    ],
    skills: [
      { name: 'Penetration Testing', level: 95 },
      { name: 'Network Security', level: 92 },
      { name: 'Cryptography', level: 88 },
      { name: 'Incident Response', level: 90 },
    ],
  },
  {
    name: 'نورة الحربي',
    role: 'محللة بيانات ونمو',
    shortBio: 'متخصصة في تحليل بيانات النمو وتطوير استراتيجيات التوسع الرقمي',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    experience: '7 سنوات خبرة',
    followers: '92 متابع',
    fullBio: 'محللة بيانات متخصصة في تحويل البيانات الضخمة إلى قرارات استراتيجية تدفع النمو وتزيد الإيرادات.',
    specialization: 'متخصصة في تحليل بيانات النمو وتطوير استراتيجيات التوسع الرقمي للعلامات التجارية',
    domains: ['Python', 'SQL', 'Power BI', 'Growth Hacking'],
    achievements: [
      'حققت نمواً بنسبة 300% لعملائها خلال سنة',
      'حللت بيانات أكثر من 10 مليون مستخدم',
      'طورت نماذج تنبؤية بدقة 94%',
      'متحدثة في مؤتمرات تحليل البيانات الدولية',
    ],
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 95 },
      { name: 'Power BI', level: 88 },
      { name: 'Statistics', level: 92 },
    ],
  },
];

function TeamCard({ member, selectedMember, onSelect }: { member: typeof team[0], selectedMember: typeof team[0] | null, onSelect: (m: typeof team[0]) => void }) {
  return (
    <div className="relative cursor-pointer w-full" onClick={() => onSelect(member)}>
      <div className="absolute" style={{ top: '8px', left: '8px', right: '-8px', bottom: '-8px', borderRadius: '20px', border: '2px solid rgba(236,27,177,0.5)', zIndex: 0 }} />
      <div className="relative flex flex-col items-center text-center p-6 md:p-8 rounded-[20px] border-2 z-10 transition-all"
        style={{
          background: selectedMember?.name === member.name ? 'rgba(236,27,177,0.08)' : 'rgba(13,2,31,0.8)',
          borderColor: '#EC1BB1',
          width: '100%',
          maxWidth: '370px',
          minHeight: 'clamp(380px, 50vw, 517px)',
        }}>
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#EC1BB1]/30 mt-4 md:mt-6 mb-4 md:mb-5">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-bold text-white mb-1" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '18px' }}>{member.name}</h3>
        <p className="text-sm mb-3" style={{ color: '#EC1BB1', fontFamily: 'Alexandria, sans-serif' }}>{member.role}</p>
        <div className="w-3/4 h-px mb-4" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }} />
        <p className="text-gray-400 text-sm leading-relaxed mb-auto px-2" style={{ fontFamily: 'Alexandria, sans-serif' }}>{member.shortBio}</p>
        <div className="flex gap-4 mt-6 mb-2">
          {['linkedin', 'github', 'twitter'].map((s, si) => (
            <a key={si} href="#" className="text-[#EC1BB1] hover:opacity-70 transition-opacity" onClick={e => e.stopPropagation()}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                {s === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>}
                {s === 'github' && <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>}
                {s === 'twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const visibleCount = 3;
  const gap = 32;
  const maxIndex = Math.max(0, team.length - visibleCount);

  useEffect(() => {
    if (!trackRef.current) return;
    const obs = new ResizeObserver(entries => setTrackWidth(entries[0].contentRect.width));
    obs.observe(trackRef.current);
    return () => obs.disconnect();
  }, []);

  const cardWidth = trackWidth > 0 ? (trackWidth - gap * (visibleCount - 1)) / visibleCount : 0;
  const offset = currentIndex * (cardWidth + gap);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const firstCard = el.firstElementChild as HTMLElement;
    if (!firstCard) return;
    const cardW = firstCard.offsetWidth + 16; // card width + gap-4
    const idx = Math.round(el.scrollLeft / cardW);
    setMobileIndex(Math.min(Math.max(idx, 0), team.length - 1));
  };

  const scrollMobileTo = (i: number) => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement;
    if (!firstCard) return;
    const cardW = firstCard.offsetWidth + 16;
    el.scrollTo({ left: cardW * i, behavior: 'smooth' });
    setMobileIndex(i);
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden" dir="rtl">
      <Navbar />

      <main className="pt-0 pb-20" style={{ background: '#0D021F' }}>

        {/* Header - black section with rounded bottom */}
        <div className="bg-black pt-44 md:pt-48 pb-16 md:pb-24 px-4 text-center" style={{ borderRadius: '0 0 60px 60px' }}>
          <h1 className="font-bold text-white mb-4" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: '1.2' }}>
            العقول المبدعة خلف الكواليس
          </h1>
          <p className="text-gray-400" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(13px, 1.5vw, 16px)' }}>
            نخبة من المبرمجين وخبراء الذكاء الاصطناعي مكرسون لتحويل رؤيتك إلى واقع برمجي متميز
          </p>
        </div>

        {/* Stats - overlapping the border */}
        <div className="grid grid-cols-2 md:flex md:justify-center gap-3 md:gap-4 flex-wrap px-4 mb-18" style={{ marginTop: '40px', position: 'relative', zIndex: 10 }}>
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 rounded-[20px] border" style={{
              background: '#EC1BB11A',
              borderWidth: '1.11px',
              borderColor: 'rgba(236,27,177,0.3)',
              width: '100%',
              maxWidth: '241px',
              minHeight: 'clamp(130px, 18vw, 216px)',
              padding: '20px 12px',
              justifyContent: 'center',
            }}>
              <div className="flex items-center justify-center flex-shrink-0" style={{
                width: 'clamp(48px, 6vw, 64px)',
                height: 'clamp(48px, 6vw, 64px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #881BE1 0%, #8F20DE 7.14%, #9524DB 14.29%, #9C27D7 21.43%, #A329D4 28.57%, #AA2AD1 35.71%, #B12BCE 42.86%, #B92CCA 50%, #C02BC7 57.14%, #C72BC3 64.29%, #CE29C0 71.43%, #D627BC 78.57%, #DD24B9 85.71%, #E520B5 92.86%, #EC1BB1 100%)',
              }}>
                <stat.icon size={24} className="text-white" />
              </div>
              <span className="font-bold text-white" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(20px, 3vw, 28px)' }}>{stat.value}</span>
              <span className="text-gray-400 text-xs text-center" style={{ fontFamily: 'Alexandria, sans-serif' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Team Cards Carousel */}
        <div className="relative px-4 mb-16 mt-8 md:mt-0">
          <div className="max-w-6xl mx-auto">

            {/* Desktop carousel with arrows + real translateX scroll */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} disabled={currentIndex === 0}
                className="flex-shrink-0 flex items-center justify-center transition-all disabled:opacity-20 hover:scale-110"
                style={{ color: '#EC1BB1', width: 'clamp(40px, 5vw, 60px)', height: 'clamp(40px, 5vw, 60px)' }}>
                <svg style={{ width: 'clamp(40px, 5vw, 60px)', height: 'clamp(40px, 5vw, 60px)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>

              <div className="flex-1 overflow-hidden" ref={trackRef}>
                <div className="flex" style={{
                  gap: `${gap}px`,
                  transform: `translateX(${offset}px)`,
                  transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}>
                  {team.map((member, i) => (
                    <div key={i} style={{ width: cardWidth > 0 ? `${cardWidth}px` : `calc((100% - ${gap * (visibleCount - 1)}px) / ${visibleCount})`, flexShrink: 0 }}>
                      <TeamCard member={member} selectedMember={selectedMember} onSelect={setSelectedMember} />
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={() => setCurrentIndex(i => Math.min(maxIndex, i + 1))} disabled={currentIndex >= maxIndex}
                className="flex-shrink-0 flex items-center justify-center transition-all disabled:opacity-20 hover:scale-110"
                style={{ color: '#EC1BB1', width: 'clamp(40px, 5vw, 60px)', height: 'clamp(40px, 5vw, 60px)' }}>
                <svg style={{ width: 'clamp(40px, 5vw, 60px)', height: 'clamp(40px, 5vw, 60px)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
            </div>

            {/* Mobile snap scroll */}
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="md:hidden overflow-x-auto hide-scrollbar flex gap-4 snap-x snap-mandatory pb-2"
              style={{ direction: 'ltr' }}
            >
              {team.map((member, i) => (
                <div key={i} className="snap-center flex-shrink-0 w-[82vw]" style={{ direction: 'rtl' }}>
                  <TeamCard member={member} selectedMember={selectedMember} onSelect={setSelectedMember} />
                </div>
              ))}
            </div>

            {/* Mobile dots — synced with real scroll */}
            <div className="md:hidden flex justify-center items-center gap-2 mt-5">
              {team.map((_, i) => (
                <button key={i} onClick={() => scrollMobileTo(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: mobileIndex === i ? '32px' : '8px',
                    height: '8px',
                    background: mobileIndex === i ? 'linear-gradient(90deg, #881BE1, #EC1BB1)' : 'rgba(255,255,255,0.2)',
                    boxShadow: mobileIndex === i ? '0 0 10px rgba(236,27,177,0.8)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Selected Member Profile */}
        {selectedMember && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-[24px] overflow-hidden w-full relative" style={{
            background: '#0D021F',
            border: '1.11px solid #EC1BB1',
            maxWidth: '1035px',
            margin: '0 auto',
          }}>
            {/* X button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 left-4 z-10 flex items-center justify-center rounded-full transition-all hover:scale-110"
              style={{ width: '36px', height: '36px', background: 'rgba(236,27,177,0.15)', border: '1px solid rgba(236,27,177,0.4)', color: '#EC1BB1' }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0" dir="ltr">

              {/* Left - Details */}
              <div className="p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-gray-800/50" dir="rtl">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#EC1BB1]/50 mx-auto" style={{ width: 'clamp(160px, 20vw, 243px)', height: 'clamp(160px, 20vw, 243px)' }}>
                        <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-bold text-white mb-1 text-center w-full" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: '48px', letterSpacing: '0px' }}>{selectedMember.name}</h3>
                      <p className="text-sm mb-4 text-center w-full mt-2" style={{ color: '#EC1BB1', fontFamily: 'Alexandria, sans-serif', fontWeight: 600, fontSize: 'clamp(15px, 2vw, 20px)', lineHeight: '30px', letterSpacing: '0px' }}>{selectedMember.role}</p>
                      <div className="flex flex-col items-center gap-5 text-gray-400 mb-6">
                        <div className="flex items-center gap-3">
                          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '16px' }}>{selectedMember.experience}</span>
                          <Briefcase size={20} className="text-gray-400" />
                        </div>
                        <div className="flex items-center gap-3">
                          <span style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '16px' }}>{selectedMember.followers}</span>
                          <Award size={20} className="text-gray-400" />
                        </div>
                      </div>                <div className="flex gap-4 justify-center mb-6">
                  {[
                    { href: '#', icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                    )},
                    { href: '#', icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    )},
                    { href: '#', icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                      </svg>
                    )},
                    { href: '#', icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    )},
                  ].map((s, si) => (
                    <a key={si} href={s.href} className="flex items-center justify-center rounded-full transition-all hover:scale-110"
                      style={{ width: 'clamp(40px, 5vw, 48px)', height: 'clamp(40px, 5vw, 48px)', padding: '12px', background: 'rgba(236,27,177,0.15)', border: '1px solid rgba(236,27,177,0.3)', color: '#EC1BB1' }}>
                      {s.icon}
                    </a>
                  ))}
                </div>

                {/* Skills */}
                <div className="w-full mt-6 rounded-2xl p-6" style={{ border: '1px solid rgba(236,27,177,0.4)', background: 'rgba(13,2,31,0.6)' }}>
                  <h4 className="font-bold text-white mb-6 text-center" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: 'clamp(18px, 2.5vw, 24px)' }}>المهارات التقنية</h4>
                  <div className="space-y-5">
                    {selectedMember.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span style={{ color: '#EC1BB1', fontFamily: 'Alexandria, sans-serif', fontSize: '15px', fontWeight: 600 }}>{skill.level}%</span>
                                                    <span className="text-white font-medium" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '15px' }}>{skill.name}</span>

                        </div>
                        
                        <div className="h-2 rounded-full flex justify-end overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                          <div className="h-full rounded-full" style={{ 
                            width: `${skill.level}%`,
                            background: 'linear-gradient(90deg, #EC1BB1 0%, #881BE1 100%)',
                          }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Profile Card */}
              <div className="lg:col-span-2 p-8 flex flex-col items-start text-right" dir="rtl">
                {/* نبذة شخصية */}
                <div>
                  <h4 className="font-bold text-white mb-4 text-right mt-6" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '18px' }}>نبذة شخصية</h4>
                  <p className="text-right" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: 'clamp(14px, 1.8vw, 18px)', lineHeight: '29.25px', letterSpacing: '0px', color: '#9ca3af' }}>{selectedMember.fullBio}</p>
                </div>

                {/* التخصص */}
                <div className="mt-12">
                  <h4 className="font-bold text-white mb-3 text-right" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '18px' }}>التخصص</h4>
                  <div style={{
                    borderRadius: '16px',
                    border: '1.11px solid rgba(236,27,177,0.2)',
                    background: '#EC1BB10D',
                    padding: 'clamp(16px, 2vw, 25px)',
                    paddingBottom: '1.11px',
                    width: '100%',
                  }}>
                    <p className="text-right pb-6" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: 'clamp(14px, 1.8vw, 18px)', lineHeight: '29.25px', letterSpacing: '0px', color: '#9ca3af' }}>{selectedMember.specialization}</p>
                  </div>
                </div>

                {/* مجالات التخصص */}
                <div className="mt-10">
                  <h4 className="font-bold text-white mb-3 text-right" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '18px' }}>مجالات التخصص</h4>
                  <div className="flex flex-wrap gap-2" dir="rtl">
                    {selectedMember.domains.map((d, i) => (
                      <span key={i} className="text-sm" style={{
                        background: '#EC1BB11A',
                        border: '1.11px solid rgba(236,27,177,0.3)',
                        borderRadius: '9999px',
                        height: 'clamp(36px, 4vw, 42px)',
                        padding: '0 clamp(12px, 2vw, 20px)',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#e5e7eb',
                        fontFamily: 'Alexandria, sans-serif',
                        whiteSpace: 'nowrap',
                      }}>{d}</span>
                    ))}
                  </div>
                </div>

                {/* الإنجازات البارزة */}
                <div className="mt-10">
                  <h4 className="font-bold text-white mb-3 text-right" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '18px' }}>الإنجازات البارزة</h4>
                  <div className="space-y-4">
                    {selectedMember.achievements.map((a, i) => (
                      <div key={i} className="flex items-center justify-between" style={{
                        borderRadius: '12px',
                        border: '1.11px solid rgba(236,27,177,0.3)',
                        background: 'linear-gradient(90deg, rgba(136,27,225,0.1) 0%, rgba(143,32,222,0.1) 7.14%, rgba(149,36,219,0.1) 14.29%, rgba(156,39,215,0.1) 21.43%, rgba(163,41,212,0.1) 28.57%, rgba(170,42,209,0.1) 35.71%, rgba(177,43,206,0.1) 42.86%, rgba(185,44,202,0.1) 50%, rgba(192,43,199,0.1) 57.14%, rgba(199,43,195,0.1) 64.29%, rgba(206,41,192,0.1) 71.43%, rgba(214,39,188,0.1) 78.57%, rgba(221,36,185,0.1) 85.71%, rgba(229,32,181,0.1) 92.86%, rgba(236,27,177,0.1) 100%)',
                        minHeight: 'clamp(56px, 6vw, 70px)',
                        width: '100%',
                        padding: '12px 16px',
                      }}>
                        <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                          style={{ background: 'linear-gradient(135deg, #881BE1 0%, #EC1BB1 100%)' }}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-right flex-1 pr-3" style={{ fontFamily: 'Alexandria, sans-serif', fontWeight: 400, fontSize: 'clamp(13px, 1.5vw, 15px)', lineHeight: '24px', color: '#e5e7eb' }}>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
