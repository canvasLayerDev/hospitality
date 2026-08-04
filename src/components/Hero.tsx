import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Calendar, Building2, Users, Search, Sparkles, ChevronDown } from 'lucide-react';
import { heroSlides, properties } from '../data/content';
import { JRDLogo } from './JRDLogo';

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState('exotica');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalFocus, setArrivalFocus] = useState(false);
  const [departureFocus, setDepartureFocus] = useState(false);
  const [guestConfig, setGuestConfig] = useState('2 Guests · 1 Room');

  const arrivalInputRef = useRef<HTMLInputElement | null>(null);
  const departureInputRef = useRef<HTMLInputElement | null>(null);
  const hotelSelectRef = useRef<HTMLSelectElement | null>(null);
  const guestSelectRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const activeSlide = heroSlides[idx];

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerArrivalPicker = () => {
    if (arrivalInputRef.current) {
      arrivalInputRef.current.focus();
      try {
        if ('showPicker' in HTMLInputElement.prototype) {
          arrivalInputRef.current.showPicker();
        }
      } catch (err) {
        // Fallback for browsers that restrict showPicker outside explicit gesture
      }
    }
  };

  const triggerDeparturePicker = () => {
    if (departureInputRef.current) {
      departureInputRef.current.focus();
      try {
        if ('showPicker' in HTMLInputElement.prototype) {
          departureInputRef.current.showPicker();
        }
      } catch (err) {
        // Fallback for browsers
      }
    }
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[850px] lg:h-screen w-full bg-[color:var(--color-royal-bg)] text-white overflow-hidden flex flex-col justify-between pt-24 pb-10"
    >
      {/* Background Hero Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-out pointer-events-none"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.title}
            className={`w-full h-full object-cover ${i === idx ? 'scale-105 transition-transform duration-[7000ms] ease-out' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-1 my-auto">
        
        {/* Brand Logo Emblem & Gold Title */}
        <div className="mb-4">
          <JRDLogo size={72} variant="gold" />
        </div>

        {/* Subtitle Line */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-200 text-xs tracking-[0.25em] uppercase font-mono mb-4 border border-white/15 shadow-sm">
          <Sparkles size={13} className="text-[color:var(--color-sand)]" />
          <span>JRD Hotels · New Delhi</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] tracking-tight font-normal text-white mb-6">
          Find the spirit of <span className="italic font-display text-[color:var(--color-sand)]">luxury & warmth.</span>
        </h1>

        {/* Description Paragraph */}
        <p className="text-base sm:text-lg text-white/90 max-w-3xl font-sans font-light leading-relaxed mb-8">
          Three signature business addresses across New Delhi — combining traditional Indian hospitality with modern boutique comfort, royal banquets, and diplomatic suites.
        </p>

        {/* CTA Button */}
        <div className="mb-8">
          <a
            href="#hotels"
            className="btn-royal py-3.5 px-8 text-xs tracking-wider uppercase group shadow-2xl bg-[color:var(--color-sand)] text-[color:var(--color-royal-dark)] hover:bg-amber-300 font-semibold transition-all cursor-pointer"
            data-testid="hero-cta-hotels"
          >
            <span>Discover the Houses</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Quick Reservation Booking Bar / Widget - Enhanced UX & 100% Clickable Cards */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-4 md:px-8 mb-6">
        <div className="bg-black/70 backdrop-blur-2xl border border-white/20 rounded-[28px] p-5 md:p-7 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
          
          <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest font-semibold text-[color:var(--color-sand)]">
            <Calendar size={14} />
            <span>Reserve a Stay</span>
          </div>

          <form onSubmit={handleCheckAvailability} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 items-center">
            
            {/* Hotel Field Card - Fully Clickable */}
            <div
              onClick={() => hotelSelectRef.current?.focus()}
              className="lg:col-span-3 bg-white/10 hover:bg-white/20 active:scale-[0.99] rounded-2xl p-3.5 border border-white/15 hover:border-[color:var(--color-sand)]/60 transition-all cursor-pointer group"
            >
              <label className="text-[10px] uppercase tracking-widest text-amber-200/90 font-medium block mb-1 pointer-events-none">
                Hotel
              </label>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 overflow-hidden w-full">
                  <Building2 size={16} className="text-[color:var(--color-sand)] shrink-0 transition-transform group-hover:scale-110" />
                  <select
                    ref={hotelSelectRef}
                    value={selectedHotel}
                    onChange={(e) => setSelectedHotel(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer truncate"
                  >
                    <option value="exotica" className="bg-[color:var(--color-royal-dark)] text-white">
                      JRD Exotica — Chanakyapuri
                    </option>
                    <option value="luxury" className="bg-[color:var(--color-royal-dark)] text-white">
                      JRD Luxury — Hauz Khas
                    </option>
                    <option value="pride" className="bg-[color:var(--color-royal-dark)] text-white">
                      JRD Pride — Jangpura
                    </option>
                  </select>
                </div>
                <ChevronDown size={14} className="text-white/60 group-hover:text-[color:var(--color-sand)] shrink-0 transition-colors" />
              </div>
            </div>

            {/* Arrival Date Field Card - Fully Clickable */}
            <div
              onClick={triggerArrivalPicker}
              className="lg:col-span-2 bg-white/10 hover:bg-white/20 active:scale-[0.99] rounded-2xl p-3.5 border border-white/15 hover:border-[color:var(--color-sand)]/60 transition-all cursor-pointer group"
            >
              <label className="text-[10px] uppercase tracking-widest text-amber-200/90 font-medium block mb-1 pointer-events-none">
                Arrival
              </label>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 w-full">
                  <Calendar size={16} className="text-[color:var(--color-sand)] shrink-0 transition-transform group-hover:scale-110" />
                  <input
                    ref={arrivalInputRef}
                    type={arrivalFocus || arrivalDate ? 'date' : 'text'}
                    onFocus={() => setArrivalFocus(true)}
                    onBlur={() => setArrivalFocus(false)}
                    min={new Date().toISOString().split('T')[0]}
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    placeholder="Add date"
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer placeholder:text-white/80"
                  />
                </div>
              </div>
            </div>

            {/* Departure Date Field Card - Fully Clickable */}
            <div
              onClick={triggerDeparturePicker}
              className="lg:col-span-2 bg-white/10 hover:bg-white/20 active:scale-[0.99] rounded-2xl p-3.5 border border-white/15 hover:border-[color:var(--color-sand)]/60 transition-all cursor-pointer group"
            >
              <label className="text-[10px] uppercase tracking-widest text-amber-200/90 font-medium block mb-1 pointer-events-none">
                Departure
              </label>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 w-full">
                  <Calendar size={16} className="text-[color:var(--color-sand)] shrink-0 transition-transform group-hover:scale-110" />
                  <input
                    ref={departureInputRef}
                    type={departureFocus || departureDate ? 'date' : 'text'}
                    onFocus={() => setDepartureFocus(true)}
                    onBlur={() => setDepartureFocus(false)}
                    min={arrivalDate || new Date().toISOString().split('T')[0]}
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    placeholder="Add date"
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer placeholder:text-white/80"
                  />
                </div>
              </div>
            </div>

            {/* Guests & Rooms Field Card - Fully Clickable */}
            <div
              onClick={() => guestSelectRef.current?.focus()}
              className="lg:col-span-3 bg-white/10 hover:bg-white/20 active:scale-[0.99] rounded-2xl p-3.5 border border-white/15 hover:border-[color:var(--color-sand)]/60 transition-all cursor-pointer group"
            >
              <label className="text-[10px] uppercase tracking-widest text-amber-200/90 font-medium block mb-1 pointer-events-none">
                Guests
              </label>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 overflow-hidden w-full">
                  <Users size={16} className="text-[color:var(--color-sand)] shrink-0 transition-transform group-hover:scale-110" />
                  <select
                    ref={guestSelectRef}
                    value={guestConfig}
                    onChange={(e) => setGuestConfig(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer truncate"
                  >
                    <option value="1 Guest · 1 Room" className="bg-[color:var(--color-royal-dark)] text-white">
                      1 Guest · 1 Room
                    </option>
                    <option value="2 Guests · 1 Room" className="bg-[color:var(--color-royal-dark)] text-white">
                      2 Guests · 1 Room
                    </option>
                    <option value="3 Guests · 1 Suite" className="bg-[color:var(--color-royal-dark)] text-white">
                      3 Guests · 1 Suite
                    </option>
                    <option value="4+ Guests · Group" className="bg-[color:var(--color-royal-dark)] text-white">
                      4+ Guests · Group Booking
                    </option>
                  </select>
                </div>
                <ChevronDown size={14} className="text-white/60 group-hover:text-[color:var(--color-sand)] shrink-0 transition-colors" />
              </div>
            </div>

            {/* Check Availability CTA Button */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-[color:var(--color-sand)] via-amber-300 to-[color:var(--color-sand)] hover:brightness-110 text-[color:var(--color-royal-dark)] font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Search size={15} strokeWidth={2.5} />
                <span>Check Availability</span>
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Bottom Carousel Navigation Dots & Caption */}
      <div className="relative z-10 px-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[1600px] mx-auto text-xs text-white/80">
        <p className="font-sans font-light text-center sm:text-left">{activeSlide.caption}</p>
        <div className="flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === idx ? 'w-8 bg-[color:var(--color-sand)]' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
