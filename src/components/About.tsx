import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { aboutStats, perks } from '../data/content';
import { JRDLogo } from './JRDLogo';

export function About() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const reelImages = [
    {
      src: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_378,w_4032,h_2268,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/jrd-hotels/club_5_iavmsy",
      title: "JRD Exotica Courtyard",
      sub: "South Delhi · Panchsheel Park"
    },
    {
      src: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_38,w_1024,h_575,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/jrd-hotels/premium_room_m4njnu",
      title: "Royal Wedding Mandap Lawn",
      sub: "Harshi Event Management"
    },
    {
      src: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_281,w_4362,h_2456,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/jrd-exotica/Club_Rooms,_Hotel_JRD_Exotica",
      title: "JRD Luxury Diplomatic Suite",
      sub: "Chanakyapuri Enclave"
    },
    {
      src: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_378,w_4032,h_2268,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/jrd-hotels/executive_4_sy3ze8",
      title: "Executive Convention Hall",
      sub: "Corporate Summits"
    },
    {
      src: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_193,w_1022,h_575,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/hotel-jrd-pride-new-delhi/Superior_1_qraunk",
      title: "JRD Pride Facade",
      sub: "Central Delhi · Jangpura"
    },
    {
      src: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_378,w_4032,h_2268,r_0,c_crop,q_80,fl_progressive/w_1650,f_auto,c_fit/jrd-hotels/interior_1_hltg3b",
      title: "Italian Marble Bath Suites",
      sub: "Boutique Craftsmanship"
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 50) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-[color:var(--color-cream)] py-8 md:py-12 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center">
        
        {/* Official JRD Hotels Center Logo Emblem */}
        <div className="flex justify-center mb-4">
          <JRDLogo size={56} variant="dark" />
        </div>

        {/* JRD Hotels Centered Narrative Statement */}
        <div className="max-w-4xl mx-auto mb-6 space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[color:var(--color-royal-dark)] font-normal">
            JRD Business Hotels in Delhi
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl leading-[1.5] text-[color:var(--color-royal-dark)] font-light tracking-tight">
            Situated in the most convenient locations in the capital city of India, the JRD Hotels offer ultra-modern facilities to all its guests and an unceasing comfort and orderly services.
          </p>
          <p className="font-sans text-sm sm:text-base md:text-lg leading-[1.6] text-[color:var(--color-muted)] font-light">
            If you are travelling for leisure or for business purposes, our business hotels in Delhi offer to be the best choice for you. The high-class services and hospitality that our immensely talented and courteous staff demonstrates are one of our forte.
          </p>
        </div>

        {/* Centered Pill Action Button: Send request ⟶ */}
        <div className="mb-10">
          <a
            href="#contact"
            className="btn-royal py-3 px-7 text-sm group shadow-md"
          >
            <span>Send request</span>
            <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* JRD Hotels Curved 3D Auto-Sliding Photo Reel Carousel */}
        <div
          className="relative mb-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Scroll Navigation Controls */}
          <div className="flex items-center justify-end gap-3 mb-3 max-w-[1500px] mx-auto px-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-9 h-9 rounded-full border border-black/10 flex items-center justify-center transition-all ${
                canScrollLeft ? 'bg-white text-[color:var(--color-royal-dark)] hover:bg-[color:var(--color-royal-dark)] hover:text-white shadow-sm' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-9 h-9 rounded-full border border-black/10 flex items-center justify-center transition-all ${
                canScrollRight ? 'bg-white text-[color:var(--color-royal-dark)] hover:bg-[color:var(--color-royal-dark)] hover:text-white shadow-sm' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Curved Perspective Horizontal Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory px-4 md:px-10 pb-4 pt-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              perspective: '1200px',
            }}
          >
            {reelImages.map((img, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[270px] sm:w-[320px] md:w-[360px] h-[340px] md:h-[400px] rounded-[24px] overflow-hidden bg-white border border-black/5 shadow-lg group relative transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="image-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                  <p className="text-[11px] uppercase tracking-widest text-[color:var(--color-sand)] mb-1 font-medium">{img.sub}</p>
                  <h3 className="font-serif text-lg md:text-xl font-normal leading-tight">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="border-y border-[color:var(--color-royal-dark)]/10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {aboutStats.map((st) => (
            <div key={st.label} className="flex flex-col items-center">
              <span className="font-serif text-3xl md:text-4xl text-[color:var(--color-royal-dark)] mb-1">
                {st.value}
              </span>
              <span className="text-xs text-[color:var(--color-muted)] font-light max-w-[20ch]">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Direct Booking Privilege Perks */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-[color:var(--color-royal-dark)]/10 text-left">
          <p className="text-xs uppercase tracking-widest text-[color:var(--color-bronze)] font-medium mb-1">Direct Booking Privilege</p>
          <h3 className="font-serif text-xl md:text-2xl text-[color:var(--color-charcoal)] mb-5">
            Exclusive perks when booking directly with JRD Hotels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {perks.map((perk) => (
              <div key={perk} className="flex items-start gap-2.5 bg-[color:var(--color-cream)] p-3.5 rounded-xl">
                <Check size={15} className="text-[color:var(--color-bronze)] shrink-0 mt-0.5" />
                <span className="text-xs text-[color:var(--color-charcoal)] font-sans">{perk}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
