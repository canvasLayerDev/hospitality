import { useState } from 'react';
import { JRDLogo } from './JRDLogo';

export function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);

  const row1 = [
    {
      id: 1,
      quote: "Very pleasant surprise! Friendly and welcoming staff, excellent dishes, and spotlessly clean rooms. Ideal location for all diplomatic meetings and family stays.",
      author: "Helmuth Pirhofer"
    },
    {
      id: 2,
      quote: "A hotel to enjoy! Quiet location, gourmet cuisine, beautiful and spacious rooms with magnificent views of South Delhi courtyards, and above all, authentic hospitality.",
      author: "Christoph Krebs"
    },
    {
      id: 3,
      quote: "I can only agree with the many positive reviews. In my opinion there is no negative criticism. Thank you very much, dear JRD Hotels team!",
      author: "Lena Hoch"
    },
    {
      id: 4,
      quote: "The wedding banquet arrangements at JRD Exotica were beyond expectations. Every detail from floral mandaps to regional catering was executed flawlessly.",
      author: "Bettina E."
    }
  ];

  const row2 = [
    {
      id: 5,
      quote: "We stayed at JRD Hotels for almost 2 weeks and couldn't have been happier. As a guest, you get such a warm welcome feeling as soon as you arrive.",
      author: "Rajesh Verma"
    },
    {
      id: 6,
      quote: "The food was excellent and tasted at the highest level. I would particularly like to highlight the staff: incredibly friendly, warm-hearted, attentive, and personal.",
      author: "Ananya Sharma"
    },
    {
      id: 7,
      quote: "Technogym facilities and in-room breakfast plus made our executive stay seamless. High-speed gigabit fiber worked flawlessly for our international video calls.",
      author: "David Miller"
    },
    {
      id: 8,
      quote: "Diplomatic enclave location with peaceful garden lawns in the heart of New Delhi. Truly a boutique sanctuary.",
      author: "Elena Rostova"
    }
  ];

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative bg-[color:var(--color-cream)] py-12 md:py-16 overflow-hidden text-[color:var(--color-charcoal)]"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center mb-10">
        
        {/* JRD Hotels SVG Logo Crest Emblem */}
        <div className="flex justify-center mb-3">
          <JRDLogo size={52} variant="dark" iconOnly />
        </div>

        {/* Section Title & Subtitle */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-royal-dark)] font-normal mb-3">
          What our guests say
        </h2>
        <p className="text-sm md:text-base text-[color:var(--color-muted)] font-light max-w-2xl mx-auto leading-relaxed">
          Real stories, happy memories, and heartfelt impressions from the people who stayed at JRD Hotels.
        </p>

      </div>

      {/* Dual Row Opposite Direction Infinite Marquee Track */}
      <div
        className="space-y-6 overflow-hidden py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* ROW 1: Moving LEFT */}
        <div className="flex overflow-hidden group">
          <div
            className="flex gap-6 shrink-0 marquee"
            style={{
              animationPlayState: isHovered ? 'paused' : 'running',
              animationDuration: '45s',
            }}
          >
            {[...row1, ...row1, ...row1].map((item, i) => (
              <div
                key={`r1-${i}`}
                className="shrink-0 w-[320px] sm:w-[360px] md:w-[400px] h-[210px] bg-white rounded-[28px] p-6 shadow-sm border border-black/5 flex flex-col justify-between text-left transition-transform hover:-translate-y-1"
              >
                <p className="text-xs sm:text-sm text-[color:var(--color-charcoal)] font-light leading-relaxed line-clamp-4">
                  “{item.quote}”
                </p>
                <p className="font-sans text-sm font-medium text-[color:var(--color-royal-dark)] mt-4">
                  {item.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moving RIGHT (Opposite Direction) */}
        <div className="flex overflow-hidden group">
          <div
            className="flex gap-6 shrink-0 marquee-reverse"
            style={{
              animationPlayState: isHovered ? 'paused' : 'running',
              animationDuration: '45s',
            }}
          >
            {[...row2, ...row2, ...row2].map((item, i) => (
              <div
                key={`r2-${i}`}
                className="shrink-0 w-[320px] sm:w-[360px] md:w-[400px] h-[210px] bg-white rounded-[28px] p-6 shadow-sm border border-black/5 flex flex-col justify-between text-left transition-transform hover:-translate-y-1"
              >
                <p className="text-xs sm:text-sm text-[color:var(--color-charcoal)] font-light leading-relaxed line-clamp-4">
                  “{item.quote}”
                </p>
                <p className="font-sans text-sm font-medium text-[color:var(--color-royal-dark)] mt-4">
                  {item.author}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
