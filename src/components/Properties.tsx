import { ArrowRight, Sparkles } from 'lucide-react';
import { properties } from '../data/content';

export function Properties() {
  const roomCards = [
    {
      id: 'exotica-suite',
      name: 'JRD Exotica Suite',
      price: 'From ₹7,500 / night',
      image: '/images/assets/Executive_Rooms,_Hotel_JRD_Exotica.webp',
      description: 'Panoramic balcony with views of South Delhi, comfortably furnished with luxury teak interiors, quiet acoustics, and private parking.',
      tag: 'Chanakyapuri',
    },
    {
      id: 'luxury-deluxe',
      name: 'JRD Luxury Deluxe',
      price: 'From ₹8,900 / night',
      image: '/images/assets/club_9_akz6cv.webp',
      description: 'Spacious executive room in Safdarjung Enclave, diplomatic enclave views, high-quality Italian marble bath, and 24-hour room service.',
      tag: 'Hauz Khas',
    },
    {
      id: 'pride-executive',
      name: 'JRD Pride Executive',
      price: 'From ₹6,500 / night',
      image: '/images/assets/Superior_1_qraunk.avif',
      description: 'Contemporary new-build suite in Jangpura with gigabit fiber, workstation, acoustic insulation, and 24-hour lounge access.',
      tag: 'Jangpura',
    },
    {
      id: 'exotica-club',
      name: 'Exotica Club Room',
      price: 'From ₹8,200 / night',
      image: '/images/assets/Club_Rooms,_Hotel_JRD_Exotica.webp',
      description: 'Intimate garden-facing suite with complimentary afternoon Hi-Tea and priority early check-in privilege.',
      tag: 'Panchsheel',
    },
  ];

  return (
    <section
      id="hotels"
      data-testid="properties-section"
      className="relative bg-[color:var(--color-cream)] py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-12">
        
        {/* Top Hero Card Container */}
        <div className="relative rounded-[32px] overflow-hidden bg-[color:var(--color-royal-bg)] p-8 md:p-14 shadow-2xl text-white">
          {/* Background Room Photo with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/assets/executive_4_abub1l.webp"
              alt="Room Background"
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[color:var(--color-sand)]/20 text-[color:var(--color-sand)] text-xs uppercase tracking-widest font-mono border border-[color:var(--color-sand)]/30">
                <Sparkles size={14} />
                <span>Our Hotels & Executive Suites</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-white">
                Cozy comfort rooms & spacious luxury suites
              </h2>
            </div>

            {/* Right Subtext & CTA */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
                Experience quiet boutique luxury across South Delhi, Chanakyapuri, and Jangpura with high-quality teak furnishings, acoustic insulation, and 24/7 concierge assistance.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {properties.map((p) => (
                  <a
                    key={p.id}
                    href="#contact"
                    className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white border border-white/15 transition-all"
                  >
                    {p.name.split(' - ')[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Room Suites Grid - Clean 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roomCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-5 shadow-xl text-[color:var(--color-charcoal)] flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-stone-200"
            >
              <div>
                {/* Photo with Badge */}
                <div className="relative h-52 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[color:var(--color-royal-dark)] shadow-sm">
                    {card.price}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-[color:var(--color-royal-dark)]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-[color:var(--color-sand)] border border-[color:var(--color-sand)]/30">
                    {card.tag}
                  </span>
                </div>

                {/* Details */}
                <h3 className="font-serif text-2xl font-normal text-[color:var(--color-royal-dark)] mb-2 group-hover:text-[color:var(--color-sand)] transition-colors">
                  {card.name}
                </h3>
                <p className="text-xs text-[color:var(--color-muted)] font-light leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <a
                href="#contact"
                className="w-full py-2.5 px-4 rounded-xl bg-[color:var(--color-cream)] hover:bg-[color:var(--color-royal-dark)] hover:text-white text-xs font-semibold text-[color:var(--color-royal-dark)] flex items-center justify-between transition-all duration-300 border border-stone-200"
              >
                <span>Book Suite</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
