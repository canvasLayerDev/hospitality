import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { heroSlides } from '../data/content';
import { JRDLogo } from './JRDLogo';

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const activeSlide = heroSlides[idx];

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative h-screen min-h-[700px] w-full bg-[color:var(--color-royal-bg)] text-white overflow-hidden flex items-center justify-center text-center"
    >
      {/* Background Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.title}
            className={`image-cover ${i === idx ? 'kenburns' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/45 backdrop-brightness-90" />
        </div>
      ))}

      {/* Centered JRD Hotels Hero Layout */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 flex flex-col items-center">

        {/* Prominent JRD Logo Emblem & Typography in Gold #D4B066 */}
        <div className="mb-3">
          <JRDLogo size={76} />
        </div>

        {/* Subtitle */}
        <p className="tag-line text-white/90 text-xs tracking-[0.3em] uppercase mb-4 font-sans font-medium">
          JRD Hotels · New Delhi
        </p>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight font-normal text-white mb-6">
          Find the spirit of <span className="italic font-display">luxury & warmth.</span>
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-white/85 max-w-2xl font-sans font-light leading-relaxed mb-8">
          Three signature business addresses across New Delhi , combining traditional Indian hospitality with modern boutique comfort, royal banquets, and diplomatic suites.
        </p>

        {/* Pill Action Button */}
        <a
          href="#about"
          className="btn-royal py-3.5 px-8 text-sm group shadow-lg"
          data-testid="hero-cta-hotels"
        >
          <span>Discover our houses</span>
          <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
        </a>

      </div>

      {/* Bottom Carousel Navigation Dots & Caption */}
      <div className="absolute bottom-8 left-0 right-0 z-10 px-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[1600px] mx-auto text-xs text-white/80">
        <p className="font-sans font-light">{activeSlide.caption}</p>
        <div className="flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
