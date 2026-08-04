import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Building2, MapPin, Users, Percent, ChevronDown, Sparkles, CheckCircle, X } from 'lucide-react';
import { heroSlides } from '../data/content';
import { JRDLogo } from './JRDLogo';

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState('Chanakyapuri (Near to all Embassy office)');
  const [selectedHotel, setSelectedHotel] = useState('JRD Exotica - Business Hotel');
  const [checkInDate, setCheckInDate] = useState('2026-08-04');
  const [checkOutDate, setCheckOutDate] = useState('2026-08-05');
  const [checkInFocus, setCheckInFocus] = useState(false);
  const [checkOutFocus, setCheckOutFocus] = useState(false);
  const [roomGuestConfig, setRoomGuestConfig] = useState('1 Room, 2 Guests');
  const [promoCode, setPromoCode] = useState('');
  const [showWhyBookDirect, setShowWhyBookDirect] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const activeSlide = heroSlides[idx];

  const handleBookNowSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[900px] lg:h-screen w-full bg-[color:var(--color-royal-bg)] text-white overflow-hidden flex flex-col justify-between pt-24 pb-8"
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-1 my-auto pt-4">
        
        {/* Brand Logo Emblem & Gold Title */}
        <div className="mb-3">
          <JRDLogo size={76} variant="gold" />
        </div>

        {/* Subtitle Line */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-200 text-xs tracking-[0.25em] uppercase font-mono mb-4 border border-white/15 shadow-sm">
          <Sparkles size={13} className="text-[color:var(--color-sand)]" />
          <span>JRD Hotels · New Delhi</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[78px] leading-[1.08] tracking-tight font-normal text-white mb-5">
          Find the spirit of <span className="italic font-display text-[color:var(--color-sand)]">luxury & warmth.</span>
        </h1>

        {/* Description Paragraph */}
        <p className="text-base sm:text-lg text-white/90 max-w-3xl font-sans font-light leading-relaxed mb-6">
          Three signature business addresses across New Delhi — combining traditional Indian hospitality with modern boutique comfort, royal banquets, and diplomatic suites.
        </p>

        {/* CTA Button */}
        <div className="mb-4">
          <a
            href="#hotels"
            className="btn-royal py-3.5 px-8 text-xs tracking-wider uppercase group shadow-2xl bg-[color:var(--color-sand)] text-[color:var(--color-royal-dark)] hover:bg-amber-300 font-semibold transition-all cursor-pointer inline-flex items-center gap-2"
            data-testid="hero-cta-hotels"
          >
            <span>Discover the Houses</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Official JRD Hotels Quick Booking Bar Widget matching Screenshots 1 & 2 */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-4 md:px-8 mb-4">
        <div className="bg-[#1f1b16]/85 backdrop-blur-md border border-white/15 rounded-sm p-4 md:p-5 shadow-2xl text-stone-900">
          
          <form onSubmit={handleBookNowSubmit} className="space-y-3">
            
            {/* Top Row: Place & Hotel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Place */}
              <div>
                <label className="block text-white text-xs font-serif mb-1 tracking-wide">
                  Place
                </label>
                <div className="relative bg-white rounded-sm border border-stone-300 flex items-center px-3 py-2 shadow-xs">
                  <MapPin size={16} className="text-stone-500 shrink-0 mr-2" />
                  <select
                    value={selectedPlace}
                    onChange={(e) => setSelectedPlace(e.target.value)}
                    className="w-full bg-transparent text-xs font-sans text-stone-800 focus:outline-none appearance-none cursor-pointer pr-6"
                  >
                    <option value="Chanakyapuri (Near to all Embassy office)">
                      Chanakyapuri (Near to all Embassy office)
                    </option>
                    <option value="Safdarjung Enclave / Hauz Khas">
                      Safdarjung Enclave / Hauz Khas
                    </option>
                    <option value="Jangpura / Main Mathura Road">
                      Jangpura / Main Mathura Road
                    </option>
                  </select>
                  <ChevronDown size={14} className="text-stone-500 absolute right-3 pointer-events-none" />
                </div>
              </div>

              {/* Hotel */}
              <div>
                <label className="block text-white text-xs font-serif mb-1 tracking-wide">
                  Hotel
                </label>
                <div className="relative bg-white rounded-sm border border-stone-300 flex items-center px-3 py-2 shadow-xs">
                  <Building2 size={16} className="text-stone-500 shrink-0 mr-2" />
                  <select
                    value={selectedHotel}
                    onChange={(e) => setSelectedHotel(e.target.value)}
                    className="w-full bg-transparent text-xs font-sans text-stone-800 focus:outline-none appearance-none cursor-pointer pr-6"
                  >
                    <option value="JRD Exotica - Business Hotel">
                      JRD Exotica - Business Hotel
                    </option>
                    <option value="JRD Luxury - Business Hotel">
                      JRD Luxury - Business Hotel
                    </option>
                    <option value="JRD Pride - Business Hotel">
                      JRD Pride - Business Hotel
                    </option>
                  </select>
                  <ChevronDown size={14} className="text-stone-500 absolute right-3 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Bottom Row: Check In, Check Out, Rooms & Guests, Promo Code, Book Now */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end pt-1">
              
              {/* Check In */}
              <div className="lg:col-span-3">
                <label className="block text-white text-xs font-serif mb-1 tracking-wide">
                  Check In
                </label>
                <div className="relative bg-white rounded-sm border border-stone-300 flex items-center px-3 py-2 shadow-xs">
                  <Calendar size={15} className="text-stone-500 shrink-0 mr-2" />
                  <input
                    type={checkInFocus || checkInDate ? 'date' : 'text'}
                    onFocus={() => setCheckInFocus(true)}
                    onBlur={() => setCheckInFocus(false)}
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    placeholder="Add date"
                    className="w-full bg-transparent text-xs font-sans text-stone-800 focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div className="lg:col-span-3">
                <label className="block text-white text-xs font-serif mb-1 tracking-wide">
                  Check Out
                </label>
                <div className="relative bg-white rounded-sm border border-stone-300 flex items-center px-3 py-2 shadow-xs">
                  <Calendar size={15} className="text-stone-500 shrink-0 mr-2" />
                  <input
                    type={checkOutFocus || checkOutDate ? 'date' : 'text'}
                    onFocus={() => setCheckOutFocus(true)}
                    onBlur={() => setCheckOutFocus(false)}
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    placeholder="Add date"
                    className="w-full bg-transparent text-xs font-sans text-stone-800 focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Rooms & Guests */}
              <div className="lg:col-span-2">
                <label className="block text-white text-xs font-serif mb-1 tracking-wide">
                  Rooms & Guests
                </label>
                <div className="relative bg-white rounded-sm border border-stone-300 flex items-center px-3 py-2 shadow-xs">
                  <Users size={15} className="text-stone-500 shrink-0 mr-2" />
                  <select
                    value={roomGuestConfig}
                    onChange={(e) => setRoomGuestConfig(e.target.value)}
                    className="w-full bg-transparent text-xs font-sans text-stone-800 focus:outline-none appearance-none cursor-pointer pr-4"
                  >
                    <option value="1 Room, 1 Guest">1 Room, 1 Guest</option>
                    <option value="1 Room, 2 Guests">1 Room, 2 Guests</option>
                    <option value="1 Suite, 3 Guests">1 Suite, 3 Guests</option>
                    <option value="2 Rooms, 4 Guests">2 Rooms, 4 Guests</option>
                  </select>
                </div>
              </div>

              {/* Promo Code */}
              <div className="lg:col-span-2">
                <label className="block text-white text-xs font-serif mb-1 tracking-wide">
                  Promo Code
                </label>
                <div className="relative bg-white rounded-sm border border-stone-300 flex items-center px-3 py-2 shadow-xs">
                  <Percent size={14} className="text-stone-400 shrink-0 mr-2" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo Code"
                    className="w-full bg-transparent text-xs font-sans text-stone-800 focus:outline-none placeholder:text-stone-400"
                  />
                </div>
              </div>

              {/* Book Now Button */}
              <div className="lg:col-span-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-sm bg-[#cca242] hover:bg-[#b88f34] text-white font-serif font-semibold text-sm tracking-wider uppercase shadow-md transition-colors cursor-pointer flex items-center justify-center"
                >
                  Book Now
                </button>
              </div>

            </div>

            {/* Bottom Sub-links matching Screenshots 1 & 2 */}
            <div className="flex items-center justify-between pt-2 px-1 text-[11px] text-white/80 font-serif">
              <button
                type="button"
                onClick={() => setShowWhyBookDirect(true)}
                className="hover:text-[color:var(--color-sand)] underline cursor-pointer transition-colors"
              >
                Why Book Direct?
              </button>
              <a
                href="#contact"
                className="hover:text-[color:var(--color-sand)] underline cursor-pointer transition-colors"
              >
                Manage Booking
              </a>
            </div>

          </form>
        </div>
      </div>

      {/* Why Book Direct Modal / Popover */}
      {showWhyBookDirect && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-stone-800 shadow-2xl relative border border-amber-200">
            <button
              onClick={() => setShowWhyBookDirect(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={20} className="text-[#cca242]" />
              <h3 className="font-serif text-xl font-normal text-[color:var(--color-royal-dark)]">Why Book Direct with JRD Hotels?</h3>
            </div>
            <div className="space-y-3 text-xs text-stone-600 font-light leading-relaxed mb-5">
              <div className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#cca242] shrink-0 mt-0.5" />
                <p><strong className="text-stone-800">5% Flat Off:</strong> Save instantly on all room categories when booking on official website.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#cca242] shrink-0 mt-0.5" />
                <p><strong className="text-stone-800">Complimentary Hi-Tea:</strong> Enjoy daily high tea from 4 PM - 6 PM on us.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#cca242] shrink-0 mt-0.5" />
                <p><strong className="text-stone-800">Early Check-In Privilege:</strong> Up to 3 hours priority check-in subject to availability.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#cca242] shrink-0 mt-0.5" />
                <p><strong className="text-stone-800">Free Room Upgrade:</strong> Exclusive eligibility for room upgrade for direct website bookings.</p>
              </div>
            </div>
            <button
              onClick={() => setShowWhyBookDirect(false)}
              className="w-full py-2.5 rounded-xl bg-[color:var(--color-royal-dark)] text-white text-xs uppercase font-semibold tracking-wider hover:bg-black transition-colors"
            >
              Close Perks
            </button>
          </div>
        </div>
      )}

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
