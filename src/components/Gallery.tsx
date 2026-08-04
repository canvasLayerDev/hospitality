import { ArrowRight, Sparkles } from 'lucide-react';

export function Gallery() {
  const offerCards = [
    {
      id: 'direct-offer',
      title: 'Direct Booking Privilege',
      subtitle: 'Receive 5% flat off plus complimentary afternoon Hi-Tea (4-6 PM) when booking on our official portal.',
      image: '/images/promotions/promo-direct.jpg',
      badge: '5% Direct Savings',
    },
    {
      id: 'wedding-package',
      title: 'Royal Wedding Banquets',
      subtitle: 'Exclusive wedding packages with Harshi Event Management for luxury celebrations in South Delhi.',
      image: '/images/promotions/promo-wedding.jpg',
      badge: 'Banquets & Celebrations',
    },
    {
      id: 'summit-specials',
      title: 'Corporate Delegations',
      subtitle: 'Executive conference packages including Technogym access, gigabit fiber, and airport shuttles.',
      image: '/images/promotions/promo-summit.jpg',
      badge: 'Business Delegations',
    },
    {
      id: 'weekend-stay',
      title: 'Boutique Staycations',
      subtitle: 'Tailored luxury escapes in Chanakyapuri and Hauz Khas with complimentary priority late check-out.',
      image: '/images/promotions/promo-weekend.jpg',
      badge: 'Leisure Escapes',
    },
  ];

  return (
    <section
      id="promotions"
      data-testid="promotions-section"
      className="relative bg-[color:var(--color-royal-bg)] py-16 md:py-24 overflow-hidden text-white"
    >
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/promotions/promo-bg.jpg"
          alt="Promotions Background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[color:var(--color-sand)]/20 text-[color:var(--color-sand)] text-xs uppercase tracking-widest font-mono mb-3 border border-[color:var(--color-sand)]/30">
              <Sparkles size={14} />
              <span>Special Offers & Packages</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white tracking-tight">
              Exclusive Promotions
            </h2>
          </div>

          <a
            href="#contact"
            className="btn-royal bg-[color:var(--color-sand)] text-[color:var(--color-royal-dark)] hover:bg-amber-300 py-3 px-6 text-xs tracking-wider uppercase font-semibold shadow-lg inline-flex items-center gap-2 self-start md:self-auto cursor-pointer"
          >
            <span>Claim Direct Benefit</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 4 Cards Grid - Crisp White Cards with perfect vertical alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerCards.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl p-5 shadow-2xl text-[color:var(--color-charcoal)] flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-stone-200"
            >
              <div>
                <div className="relative h-52 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[color:var(--color-royal-dark)] text-white text-[10px] font-mono tracking-widest uppercase shadow-md border border-[color:var(--color-sand)]/40">
                    {offer.badge}
                  </span>
                </div>

                <div className="px-1">
                  <h3 className="font-serif text-2xl font-normal text-[color:var(--color-royal-dark)] mb-2 group-hover:text-[color:var(--color-sand)] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[color:var(--color-muted)] font-light leading-relaxed mb-6">
                    {offer.subtitle}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-2.5 px-4 rounded-xl bg-[color:var(--color-cream)] hover:bg-[color:var(--color-royal-dark)] hover:text-white text-xs font-semibold text-[color:var(--color-royal-dark)] flex items-center justify-between transition-all duration-300 border border-stone-200"
              >
                <span>Enquire Package</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 text-center text-xs text-amber-100/70 font-light tracking-wide">
          Seasonal packages available for a limited time. Contact central reservations for promo code redemption.
        </div>
      </div>
    </section>
  );
}
