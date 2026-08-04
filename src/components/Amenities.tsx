import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Wifi, Dumbbell, Briefcase, Car, UtensilsCrossed, ShieldCheck } from 'lucide-react';
import { amenitiesList } from '../data/content';

const iconMap: Record<string, typeof Wifi> = {
  wifi: Wifi,
  dumbbell: Dumbbell,
  briefcase: Briefcase,
  car: Car,
  'utensils-crossed': UtensilsCrossed,
  'shield-check': ShieldCheck,
};

const whyChooseUsCards = [
  {
    id: 'gym',
    title: 'Gym at Hotel JRD Exotica New Delhi',
    image: 'https://images.unsplash.com/photo-1534368959876-26bf04f2c947?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'wifi',
    title: 'Complimentary Wifi at Hotel JRD Exotica New Delhi',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'travel-desk',
    title: 'Travel Desk at Hotel JRD Exotica New Delhi',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=85',
  },
];

const whyChooseUsFeatures = [
  {
    number: '1',
    title: 'Ultra Modern Facilities',
    text: 'Our JRD Business Hotels in New Delhi offer complimentary Wi-Fi, in-room safe, fully stocked minibar, 42" television, round-the-clock travel desk and a well-equipped gymnasium. With such facilities provided in a very reasonable price, our hotels make it an attractive choice for the travellers.',
  },
  {
    number: '2',
    title: 'Exciting Offers',
    text: 'JRD Hotels have a plethora of exciting offers awaiting you. Special discounts on laundry Services, food & beverages, complimentary meals, complimentary access to the business lounge and much more!',
  },
];

export function Amenities() {
  // Why Choose Us image carousel
  const [wcuIdx, setWcuIdx] = useState(0);
  const [isWcuHovered, setIsWcuHovered] = useState(false);

  useEffect(() => {
    if (isWcuHovered) return;
    const interval = setInterval(() => {
      setWcuIdx((i) => (i + 1) % whyChooseUsCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isWcuHovered]);

  const prevWcu = () => setWcuIdx((i) => (i - 1 + whyChooseUsCards.length) % whyChooseUsCards.length);
  const nextWcu = () => setWcuIdx((i) => (i + 1) % whyChooseUsCards.length);
  const activeWcu = whyChooseUsCards[wcuIdx];

  // Experiences Section State & Auto-Slide Timer
  const [expIdx, setExpIdx] = useState(0);
  const [isExpHovered, setIsExpHovered] = useState(false);

  const experiences = [
    {
      id: 'heritage',
      title: 'Delhi Heritage & Monuments',
      description: 'A unique collection of iconic monuments, Mughal architecture, and historic forts , Humayun\u2019s Tomb, Qutub Minar, and India Gate located minutes away.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=85'
    },
    {
      id: 'embassy',
      title: 'Diplomatic Enclave & Gardens',
      description: 'Stroll through Chanakyapuri\u2019s peaceful tree-lined avenues, embassy lawns, and Nehru Park gardens right outside your luxury suite.',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=85'
    },
    {
      id: 'markets',
      title: 'Boutique Bazaars & Shopping',
      description: 'Explore Hauz Khas Village boutiques, Khan Market culinary dining, and handcrafted artisan markets with private hotel chauffeur transfers.',
      image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&w=1000&q=85'
    }
  ];

  useEffect(() => {
    if (isExpHovered) return;
    const interval = setInterval(() => {
      setExpIdx((i) => (i + 1) % experiences.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isExpHovered, experiences.length]);

  const prevExp = () => setExpIdx((i) => (i - 1 + experiences.length) % experiences.length);
  const nextExp = () => setExpIdx((i) => (i + 1) % experiences.length);
  const activeExp = experiences[expIdx];

  return (
    <section
      id="facilities"
      data-testid="facilities-section"
      className="relative bg-[color:var(--color-cream)] py-6 md:py-10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 space-y-12">

        {/* SECTION 1: Why Choose Us? - Image Carousel + Feature Cards */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-xs uppercase tracking-widest text-[color:var(--color-bronze)] mb-1">JRD Hotels</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-royal-dark)]">
              Why Choose Us?
            </h2>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            onMouseEnter={() => setIsWcuHovered(true)}
            onMouseLeave={() => setIsWcuHovered(false)}
          >
            {/* Left: Image Carousel with 3 facility images */}
            <div className="lg:col-span-7">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl h-[360px] md:h-[420px] group">
                {whyChooseUsCards.map((card, i) => (
                  <div
                    key={card.id}
                    className="absolute inset-0 transition-opacity duration-700 ease-out"
                    style={{ opacity: i === wcuIdx ? 1 : 0 }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="image-cover transition-transform duration-1000 group-hover:scale-105"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-sans text-lg font-normal">{activeWcu.title}</p>
                </div>
              </div>

              {/* Image Dots + Arrows */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  {whyChooseUsCards.map((card, i) => (
                    <button
                      key={card.id}
                      onClick={() => setWcuIdx(i)}
                      aria-label={`View ${card.title}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === wcuIdx ? 'w-8 bg-[color:var(--color-royal-dark)]' : 'w-2 bg-black/20'
                        }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevWcu}
                    aria-label="Previous facility"
                    className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-cream-soft)] transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextWcu}
                    aria-label="Next facility"
                    className="w-10 h-10 rounded-full bg-[color:var(--color-royal-dark)] text-white flex items-center justify-center hover:bg-black transition-colors shadow-md"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Feature Text Cards */}
            <div className="lg:col-span-5 space-y-6">
              {whyChooseUsFeatures.map((feature) => (
                <div
                  key={feature.number}
                  className="bg-white rounded-[24px] p-6 md:p-7 border border-black/5 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-[color:var(--color-sand)]/15 text-[color:var(--color-sand)] flex items-center justify-center text-sm font-bold font-serif">
                      {feature.number}
                    </span>
                    <h3 className="font-sans text-lg font-medium text-[color:var(--color-charcoal)]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[color:var(--color-muted)] font-light leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: Curated Experiences Around JRD Hotels */}
        <div
          className="bg-[#f2ece3] rounded-[32px] p-6 md:p-10 border border-black/5 shadow-xs"
          onMouseEnter={() => setIsExpHovered(true)}
          onMouseLeave={() => setIsExpHovered(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 pr-2">
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-royal-dark)] font-normal leading-[1.15] mb-5">
                Curated Experiences Around JRD Hotels
              </h2>
              <p className="text-sm md:text-base text-[color:var(--color-muted)] font-light leading-relaxed mb-6">
                JRD Hotels in New Delhi is the perfect starting point for unforgettable cultural adventures, diplomatic summits, and heritage tours. Surrounded by iconic monuments, lush gardens, and vibrant markets, you'll find endless opportunities to enjoy the outdoors.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[color:var(--color-royal-dark)] text-[color:var(--color-royal-dark)] text-sm font-sans hover:bg-[color:var(--color-royal-dark)] hover:text-white transition-colors"
              >
                <span>Discover Experiences</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </div>

            <div className="lg:col-span-7 relative flex flex-col md:flex-row items-center">
              <div className="relative z-10 w-full md:w-[300px] h-[350px] md:h-[400px] rounded-[28px] overflow-hidden shadow-2xl shrink-0 mb-4 md:mb-0">
                <img
                  key={activeExp.id}
                  src={activeExp.image}
                  alt={activeExp.title}
                  className="image-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>

              <div className="w-full md:-ml-12 bg-white rounded-[28px] p-6 md:p-8 md:pl-14 min-h-[300px] flex flex-col justify-between shadow-md border border-black/5">
                <div>
                  <h3 className="font-sans text-2xl font-normal text-[color:var(--color-charcoal)] mb-3">
                    {activeExp.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-muted)] font-light leading-relaxed mb-5">
                    {activeExp.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end pt-2">
                  <button
                    onClick={prevExp}
                    aria-label="Previous experience"
                    className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center text-[color:var(--color-charcoal)] hover:bg-[color:var(--color-cream)] transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextExp}
                    aria-label="Next experience"
                    className="w-11 h-11 rounded-full bg-[color:var(--color-royal-dark)] text-white flex items-center justify-center hover:bg-black transition-colors shadow-md"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Facilities Grid */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-xs uppercase tracking-widest text-[color:var(--color-bronze)] mb-1">Hospitality & Services</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[color:var(--color-royal-dark)]">
              Our Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {amenitiesList.map((a) => {
              const Icon = iconMap[a.icon] ?? Wifi;
              return (
                <div
                  key={a.title}
                  data-testid={`amenity-${a.icon}`}
                  className="royal-card p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-full bg-[color:var(--color-cream)] flex items-center justify-center text-[color:var(--color-royal-dark)] mb-5">
                      <Icon size={20} strokeWidth={1.4} />
                    </div>
                    <span className="text-xs text-[color:var(--color-bronze)] font-medium mb-1 block">{a.number}</span>
                    <h3 className="font-sans text-lg font-medium text-[color:var(--color-charcoal)] mb-2">
                      {a.title}
                    </h3>
                    <p className="text-xs text-[color:var(--color-muted)] font-light leading-relaxed">
                      {a.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
