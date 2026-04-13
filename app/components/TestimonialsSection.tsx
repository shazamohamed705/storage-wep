'use client';

import { useState, useRef } from 'react';

const testimonials = [
  {
    name: 'أحمد خالد',
    role: 'مهندس برمجيات',
    text: 'تجربة التعامل مع ستوريدج كانت استثنائية. البوت الذكي اللي قدموه لمشروعي ومر علينا ملك الشعاعات المتقدمة. الحجم التقني الدوجي والأداء كان مثالي السرعة.',
    time: 'منذ أسبوع',
    rating: 5,
    image: '/e6f36395282c0cd48ecdea882812e8af17a9b018.png',
  },
  {
    name: 'أحمد خالد',
    role: 'مهندس برمجيات',
    text: 'تجربة التعامل مع ستوريدج كانت استثنائية. البوت الذكي اللي قدموه لمشروعي ومر علينا ملك الشعاعات المتقدمة. الحجم التقني الدوجي والأداء كان مثالي السرعة.',
    time: 'منذ أسبوع',
    rating: 5,
    image: '/e6f36395282c0cd48ecdea882812e8af17a9b018.png',
  },
  {
    name: 'أحمد خالد',
    role: 'مهندس برمجيات',
    text: 'تجربة التعامل مع ستوريدج كانت استثنائية. البوت الذكي اللي قدموه لمشروعي ومر علينا ملك الشعاعات المتقدمة. الحجم التقني الدوجي والأداء كان مثالي السرعة.',
    time: 'منذ أسبوع',
    rating: 5,
    image: '/e6f36395282c0cd48ecdea882812e8af17a9b018.png',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const visibleCount = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const prev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const next = () => setCurrentIndex(i => Math.min(maxIndex, i + 1));
  const visible = testimonials.slice(currentIndex, currentIndex + visibleCount);

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.clientWidth) / 2, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const children = Array.from(el.children) as HTMLElement[];
    let closest = 0;
    let minDist = Infinity;
    const center = el.scrollLeft + el.clientWidth / 2;
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft + child.clientWidth / 2 - center);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setCurrentIndex(closest);
  };

  return (
    <section className="bg-black text-white py-20 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ابتكار نثق به، ونتائج تتحدث<br />عن نفسها.
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-yellow-400">★</span>
            <span className="font-bold">4.8/5</span>
            <span className="text-gray-400">(بناءً على أكثر من 500 مراجعة وتقييم).</span>
          </div>
        </div>

        {/* Cards with navigation */}
        <div className="relative flex items-center gap-6 mt-16">
          {/* Left side - Title & Progress */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <h3 className="text-3xl font-bold mb-8">
              ماذا يقول عملاؤنا<br />
              <span className="block text-center">عنا</span>
            </h3>
            
            {/* Navigation with progress bar */}
            <div className="flex items-center gap-4">
              <button onClick={prev} disabled={currentIndex === 0}
                className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center hover:opacity-70 transition-all disabled:opacity-30"
                style={{ color: '#EC1BB1' }}>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
              
              {/* Progress bar */}
              <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#EC1BB1] to-[#881BE1] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / (testimonials.length - visibleCount + 1)) * 100}%` }}>
                </div>
              </div>
              
              <button onClick={next} disabled={currentIndex >= maxIndex}
                className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center hover:opacity-70 transition-all disabled:opacity-30"
                style={{ color: '#EC1BB1' }}>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="flex-1 hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Mobile: snap scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory mt-10"
          style={{ direction: 'ltr' }}
        >
          {testimonials.map((testimonial, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-[75vw]" style={{ direction: 'rtl' }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="md:hidden flex justify-center items-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentIndex === i ? '32px' : '8px',
                height: '8px',
                background: currentIndex === i
                  ? 'linear-gradient(90deg, #881BE1, #EC1BB1)'
                  : 'rgba(255,255,255,0.2)',
                boxShadow: currentIndex === i ? '0 0 10px rgba(236,27,177,0.8)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="hidden lg:hidden justify-center gap-4 mt-8">
          <button onClick={prev} disabled={currentIndex === 0}
            className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-70 transition-all disabled:opacity-30"
            style={{ color: '#EC1BB1' }}>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          
          <div className="flex-1 max-w-xs h-1 bg-gray-800 rounded-full overflow-hidden self-center">
            <div className="h-full bg-gradient-to-r from-[#EC1BB1] to-[#881BE1] transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / (testimonials.length - visibleCount + 1)) * 100}%` }}>
            </div>
          </div>
          
          <button onClick={next} disabled={currentIndex >= maxIndex}
            className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-70 transition-all disabled:opacity-30"
            style={{ color: '#EC1BB1' }}>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="relative p-4 flex flex-col"
      style={{
        background: 'linear-gradient(135deg, #EC1BB1 0%, #D91BA8 100%)',
        width: '100%',
        maxHeight: '260px',
        overflow: 'hidden',
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px',
        borderBottomRightRadius: '40px',
        borderBottomLeftRadius: '0px',
      }}>
      <div className="flex items-center gap-3 mb-4">
        <img src={testimonial.image} alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/30" />
        <div>
          <h4 className="font-bold text-white text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>{testimonial.name}</h4>
          <p className="text-white/80 text-sm" style={{ fontFamily: 'Alexandria, sans-serif' }}>{testimonial.role}</p>
        </div>
      </div>
      <p className="text-white text-center flex-1 text-xs leading-relaxed overflow-hidden" style={{ fontFamily: 'Alexandria, sans-serif', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
        "{testimonial.text}"
      </p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-300">★</span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
          </svg>
          <span>{testimonial.time}</span>
        </div>
      </div>
    </div>
  );
}
