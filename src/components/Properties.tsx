import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Properties() {
  const [scrollPos, setScrollPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const roomCards = [
    {
      id: 'exotica-suite',
      name: 'JRD Exotica Suite',
      price: 'From ₹7,500',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
      description: 'Panoramic balcony with views of South Delhi, comfortably furnished with luxury teak interiors, quiet acoustics, and private parking.'
    },
    {
      id: 'luxury-deluxe',
      name: 'JRD Luxury Deluxe',
      price: 'From ₹8,900',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85',
      description: 'Spacious executive room in Chanakyapuri, diplomatic enclaves views, high-quality Italian marble bath, and 24-hour room service.'
    },
    {
      id: 'pride-executive',
      name: 'JRD Pride Executive',
      price: 'From ₹6,500',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
      description: 'Contemporary new-build suite in Jangpura with gigabit fiber, workstation, acoustic insulation, and 24-hour lounge access.'
    },
    {
      id: 'exotica-club',
      name: 'Exotica Club Room',
      price: 'From ₹8,200',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      description: 'Intimate garden-facing suite with complimentary afternoon Hi-Tea and priority early check-in privilege.'
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setScrollPos((p) => (p >= roomCards.length - 2 ? 0 : p + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, roomCards.length]);

  const prev = () => setScrollPos((p) => Math.max(0, p - 1));
  const next = () => setScrollPos((p) => Math.min(roomCards.length - 2, p + 1));

  return (
    <section
      id="hotels"
      data-testid="properties-section"
      className="relative bg-[color:var(--color-cream)] py-6 md:py-10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Full-width Container with Room Background Image matching Screenshot 1 */}
        <div
          className="relative rounded-[32px] overflow-hidden min-h-[580px] bg-[color:var(--color-royal-bg)] p-6 md:p-10 flex flex-col justify-between"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Room Photo with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=85"
              alt="Room Background"
              className="image-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Main Layout Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full pt-4">
            
            {/* Left Side: Overlaid Text matching Screenshot 1 */}
            <div className="lg:col-span-5 text-white pr-4">
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal leading-[1.1] tracking-tight mb-5">
                Cozy comfort rooms and spacious suites
              </h2>
              <p className="text-sm md:text-base text-white/80 font-light max-w-md leading-relaxed">
                Experience quiet luxury across South Delhi, Chanakyapuri, and Jangpura with high-quality furnishings, acoustic insulation, and round-the-clock service.
              </p>
            </div>

            {/* Right Side: Floating White Cards Grid matching Screenshot 1 */}
            <div className="lg:col-span-7 overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${scrollPos * 340}px)` }}
              >
                {roomCards.map((card) => (
                  <div
                    key={card.id}
                    className="shrink-0 w-[300px] sm:w-[320px] md:w-[340px] bg-white rounded-[28px] p-5 shadow-2xl text-[color:var(--color-charcoal)] group cursor-pointer transition-transform hover:-translate-y-1"
                  >
                    {/* Top Photo with Price Pill Badge */}
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="image-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-sans text-[color:var(--color-charcoal)] shadow-sm">
                        {card.price}
                      </span>
                    </div>

                    {/* Room Details */}
                    <h3 className="font-sans text-2xl font-normal text-[color:var(--color-charcoal)] mb-2">
                      {card.name}
                    </h3>
                    <p className="text-xs text-[color:var(--color-muted)] font-light leading-relaxed mb-4 line-clamp-3">
                      {card.description}
                    </p>

                    <a
                      href="#contact"
                      className="text-xs text-[color:var(--color-royal-dark)] font-medium hover:underline flex items-center gap-1.5"
                    >
                      <span>Book suite</span>
                      <span>⟶</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Center Circular Slider Arrows matching Screenshot 1 */}
          <div className="relative z-10 flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              disabled={scrollPos === 0}
              aria-label="Previous rooms"
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                scrollPos === 0
                  ? 'bg-white/20 text-white/40 cursor-not-allowed'
                  : 'bg-white text-[color:var(--color-royal-dark)] hover:bg-[color:var(--color-cream)] shadow-lg'
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={scrollPos >= roomCards.length - 2}
              aria-label="Next rooms"
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                scrollPos >= roomCards.length - 2
                  ? 'bg-white/20 text-white/40 cursor-not-allowed'
                  : 'bg-white text-[color:var(--color-royal-dark)] hover:bg-[color:var(--color-cream)] shadow-lg'
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
