import React, { useState } from 'react';
import { Phone, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { contact } from '../data/content';

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredButton, setHoveredButton] = useState<'whatsapp' | 'phone' | null>(null);

  // Clean formatted phone number for tel: link
  const rawPhone = contact.kapurDirect.replace(/[^\d+]/g, '');
  // WhatsApp format: digits without leading '+'
  const whatsappPhone = rawPhone.replace(/^\+/, '');
  const whatsappMessage = encodeURIComponent(
    'Hello JRD Hotels, I would like to enquire about room booking and reservations.'
  );

  return (
    <aside
      aria-label="Quick Contact Options"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 select-none"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex flex-col items-end gap-3"
          >
            {/* Phone Call Floating Button */}
            <div className="relative flex items-center gap-3">
              <AnimatePresence>
                {hoveredButton === 'phone' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.15 }}
                    className="hidden sm:flex flex-col items-end px-3 py-1.5 rounded-lg bg-[color:var(--color-royal-dark)] text-white text-xs shadow-xl border border-[color:var(--color-sand)]/30 backdrop-blur-md whitespace-nowrap"
                  >
                    <span className="font-medium tracking-wide">Call Reservations</span>
                    <span className="text-[10px] text-amber-200/90">{contact.kapurDirect}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href={`tel:${rawPhone}`}
                aria-label={`Call JRD Hotels at ${contact.kapurDirect}`}
                title={`Call JRD Hotels: ${contact.kapurDirect}`}
                onMouseEnter={() => setHoveredButton('phone')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[color:var(--color-royal-dark)] text-white shadow-2xl hover:shadow-[0_8px_25px_rgba(74,64,54,0.4)] border border-[color:var(--color-sand)]/40 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-sand)] focus:ring-offset-2"
              >
                {/* Subtle Pulse background effect */}
                <span className="absolute inset-0 rounded-full bg-[color:var(--color-sand)]/20 animate-ping opacity-75 pointer-events-none" />

                <Phone className="w-6 h-6 text-[color:var(--color-sand)] group-hover:rotate-12 transition-transform duration-300" />

                {/* Status Dot */}
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[color:var(--color-cream)] rounded-full" />
              </a>
            </div>

            {/* WhatsApp Floating Button */}
            <div className="relative flex items-center gap-3">
              <AnimatePresence>
                {hoveredButton === 'whatsapp' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.15 }}
                    className="hidden sm:flex flex-col items-end px-3 py-1.5 rounded-lg bg-emerald-950/90 text-white text-xs shadow-xl border border-emerald-400/30 backdrop-blur-md whitespace-nowrap"
                  >
                    <span className="font-medium tracking-wide">WhatsApp Desk</span>
                    <span className="text-[10px] text-emerald-200">Instant Chat Response</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href={`https://wa.me/${whatsappPhone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with JRD Hotels on WhatsApp"
                title="Chat with JRD Hotels on WhatsApp"
                onMouseEnter={() => setHoveredButton('whatsapp')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                {/* Subtle Pulse background effect */}
                <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none" />

                {/* WhatsApp Brand SVG Icon */}
                <svg
                  className="w-7 h-7 fill-current group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.705 1.464h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.174-1.238-6.159-3.485-8.406" />
                </svg>

                {/* Status Dot */}
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[color:var(--color-cream)] rounded-full animate-pulse" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button to collapse or expand floating action group */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Collapse floating buttons' : 'Expand floating buttons'}
        title={isOpen ? 'Collapse floating contact buttons' : 'Quick Contact Options'}
        className="w-8 h-8 rounded-full bg-[color:var(--color-royal-dark)]/90 text-[color:var(--color-sand)] hover:bg-[color:var(--color-royal-dark)] hover:text-white flex items-center justify-center border border-[color:var(--color-sand)]/30 shadow-md backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-sand)] cursor-pointer"
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronUp className="w-4 h-4" />
        </motion.div>
      </button>
    </aside>
  );
}
