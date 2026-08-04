import { ArrowRight, Tag } from 'lucide-react';

export function Gallery() {
  const offerCards = [
    {
      id: 'direct-offer',
      title: 'Direct Booking Offers',
      subtitle: 'Book direct on our official website to receive 5% off plus complimentary afternoon Hi-Tea.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
      badge: 'Exclusive Direct Savings',
    },
    {
      id: 'wedding-package',
      title: 'Royal Wedding Packages',
      subtitle: 'Tailored wedding banquet packages with Harshi Event Management for memorable luxury celebrations.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85',
      badge: 'Banquets & Celebrations',
    },
    {
      id: 'summit-specials',
      title: 'Corporate Summits',
      subtitle: 'Executive conference packages including Technogym access, high-speed fiber, and airport shuttles.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85',
      badge: 'Business Delegation',
    },
    {
      id: 'weekend-stay',
      title: 'Weekend Getaways',
      subtitle: 'Boutique staycation experiences in Chanakyapuri and Hauz Khas with complimentary late check-out.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85',
      badge: 'Leisure Escapes',
    },
  ];

  return (
    <section
      id="promotions"
      data-testid="promotions-section"
      className="relative bg-[color:var(--color-royal-bg)] py-12 md:py-16 overflow-hidden text-white min-h-[580px]"
    >
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=85"
          alt="Promotions Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[color:var(--color-sand)]/20 text-[color:var(--color-sand)] text-xs uppercase tracking-widest font-mono mb-2 border border-[color:var(--color-sand)]/30">
              <Tag size={13} />
              <span>Special Offers & Packages</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white">
              Promotions
            </h2>
          </div>

          <a
            href="#contact"
            className="btn-royal bg-white text-[color:var(--color-royal-dark)] hover:bg-[color:var(--color-cream)] py-2.5 px-5 text-xs tracking-wider uppercase font-medium shadow-md inline-flex items-center gap-2 self-start sm:self-auto cursor-pointer"
          >
            <span>Claim Direct Offer</span>
            <ArrowRight size={15} strokeWidth={1.5} />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerCards.map((offer) => (
            <div
              key={offer.id}
              className="bg-[color:var(--color-royal-dark)]/90 backdrop-blur-md border border-white/10 rounded-[24px] p-4 flex flex-col justify-between group cursor-pointer transition-transform duration-500 hover:-translate-y-1.5 shadow-xl"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-[color:var(--color-sand)] border border-[color:var(--color-sand)]/30">
                  {offer.badge}
                </span>
              </div>

              <div className="text-center px-2 pb-2">
                <h3 className="font-serif text-xl font-normal text-white mb-2">
                  {offer.title}
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  {offer.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-8 text-center text-xs text-amber-100/60 font-light">
          Seasonal packages available for a limited time. Contact central reservations for promo code redemption.
        </div>
      </div>
    </section>
  );
}
