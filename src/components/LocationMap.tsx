import { useState } from 'react';
import { MapPin } from 'lucide-react';

export function LocationMap() {
  const [activeDestination, setActiveDestination] = useState<string | null>(null);

  const destinations = [
    {
      id: 'airport',
      name: 'Indira Gandhi Int. Airport',
      dist: '14 km / 25 mins',
      coords: { x: '22%', y: '68%' },
      arcPath: 'M 250,340 Q 320,380 480,310',
      description: 'Direct airport chauffeur transfers & diplomatic arrival assistance.'
    },
    {
      id: 'chanakyapuri',
      name: 'Diplomatic Enclave',
      dist: '4 km / 10 mins',
      coords: { x: '35%', y: '32%' },
      arcPath: 'M 350,160 Q 400,220 480,310',
      description: 'Embassy quarter, green parks, and high-security diplomatic residences.'
    },
    {
      id: 'cp',
      name: 'Connaught Place',
      dist: '8 km / 15 mins',
      coords: { x: '58%', y: '22%' },
      arcPath: 'M 580,110 Q 520,200 480,310',
      description: 'Heritage Georgian architecture, central shopping circle, and dining.'
    },
    {
      id: 'noida',
      name: 'Noida Tech Hub',
      dist: '18 km / 25 mins',
      coords: { x: '82%', y: '48%' },
      arcPath: 'M 820,240 Q 650,260 480,310',
      description: 'Major corporate headquarters, IT parks, and trade convention centers.'
    },
    {
      id: 'gurugram',
      name: 'Gurugram Cyber City',
      dist: '22 km / 30 mins',
      coords: { x: '18%', y: '45%' },
      arcPath: 'M 180,225 Q 320,280 480,310',
      description: 'Fortune 500 corporate hubs and luxury shopping malls.'
    },
    {
      id: 'agra',
      name: 'Taj Mahal (Agra)',
      dist: '210 km / 3 hrs',
      coords: { x: '86%', y: '82%' },
      arcPath: 'M 860,410 Q 670,390 480,310',
      description: 'Expressway access for day tours to the UNESCO World Heritage Taj Mahal.'
    }
  ];

  return (
    <section
      id="location"
      data-testid="location-section"
      className="relative bg-[color:var(--color-cream)] py-6 md:py-10 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        
        {/* Warm Rounded Map Card matching Hotel Royal Screenshot */}
        <div className="bg-[#f4efe6] rounded-[32px] p-6 md:p-10 border border-black/5 shadow-xs text-center">
          
          {/* Top Centered Caption matching Screenshot */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[color:var(--color-royal-dark)] font-normal max-w-4xl mx-auto leading-relaxed mb-8">
            View our central locations in New Delhi and explore nearby diplomatic enclaves & heritage landmarks.
          </h2>

          {/* Interactive Vector Map Container matching Screenshot */}
          <div className="relative min-h-[420px] md:min-h-[460px] w-full max-w-[1100px] mx-auto flex items-center justify-center">
            
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 500"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M 160,200 C 220,170 310,190 380,140 C 450,90 540,110 620,80 C 700,50 780,120 740,210 C 700,300 760,370 700,430 C 640,490 520,440 440,470 C 360,500 240,430 180,380 C 120,330 100,230 160,200 Z"
                fill="none"
                stroke="#4a4036"
                strokeWidth="2"
                strokeOpacity="0.25"
              />

              {destinations.map((d) => {
                const isActive = activeDestination === d.id;
                return (
                  <path
                    key={d.id}
                    d={d.arcPath}
                    fill="none"
                    stroke="#a68955"
                    strokeWidth={isActive ? '2.5' : '1.5'}
                    strokeDasharray="6,6"
                    strokeOpacity={isActive ? '0.9' : '0.4'}
                    className="transition-all duration-300"
                  />
                );
              })}

              <circle cx="480" cy="310" r="8" fill="#4a4036" />
              <circle cx="480" cy="310" r="14" fill="none" stroke="#a68955" strokeWidth="1.5" className="animate-ping" />
            </svg>

            {destinations.map((d) => {
              const isActive = activeDestination === d.id;
              return (
                <div
                  key={d.id}
                  style={{ left: d.coords.x, top: d.coords.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 text-left group cursor-pointer"
                  onMouseEnter={() => setActiveDestination(d.id)}
                  onMouseLeave={() => setActiveDestination(null)}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-sans text-xs md:text-sm font-normal text-[color:var(--color-royal-dark)] group-hover:text-black transition-colors">
                      {d.name}
                    </span>
                    <span className="text-[11px] text-[color:var(--color-muted)] font-mono">
                      {d.dist}
                    </span>
                  </div>

                  <div className={`w-2.5 h-2.5 rounded-full mt-1 transition-all ${
                    isActive ? 'bg-[color:var(--color-royal-dark)] scale-125 shadow-md' : 'bg-[color:var(--color-sand)]'
                  }`} />
                </div>
              );
            })}

            <div className="absolute left-[48%] top-[62%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none text-center">
              <div className="bg-[color:var(--color-royal-dark)] text-white px-3.5 py-1.5 rounded-full text-xs font-serif tracking-wider uppercase shadow-xl flex items-center gap-1.5 border border-white/20">
                <MapPin size={13} className="text-[color:var(--color-sand)]" />
                <span>Hotel Royal · New Delhi</span>
              </div>
            </div>

          </div>

          {activeDestination && (
            <div className="mt-6 bg-white rounded-2xl p-3.5 max-w-lg mx-auto border border-black/5 shadow-md text-xs text-[color:var(--color-charcoal)] font-sans transition-all">
              {destinations.find((d) => d.id === activeDestination)?.description}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
