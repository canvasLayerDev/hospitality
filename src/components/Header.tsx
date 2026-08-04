import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { contact, nav, properties } from '../data/content';
import { JRDLogo } from './JRDLogo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[color:var(--color-cream)]/95 backdrop-blur-md border-b border-[color:var(--color-royal-dark)]/10 py-2 shadow-xs'
            : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-3 text-white'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          
          {/* Left: Logo */}
          <a
            href="#top"
            data-testid="brand-logo"
            className="flex flex-col items-center group cursor-pointer py-0.5 shrink-0"
          >
            <JRDLogo size={46} color={scrolled ? '#D4B066' : '#ffffff'} />
            <span className={`text-[9px] tracking-[0.3em] uppercase mt-0.5 font-sans font-medium ${
              scrolled ? 'text-[color:var(--color-royal-dark)]' : 'text-white/90'
            }`}>
              New Delhi
            </span>
          </a>

          {/* Center: Navigation Links - Our Hotels, Promotions, Facilities, Contact Us, Event Management */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="main-nav">
            {nav.filter(n => n.label !== 'Home').map((n) => (
              <a
                key={n.href + n.label}
                href={n.href}
                className={`text-sm font-sans font-normal tracking-wide hover:opacity-70 transition-opacity ${
                  scrolled ? 'text-[color:var(--color-charcoal)]' : 'text-white'
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Right: Call + Book + Mobile Menu */}
          <div className="flex items-center gap-4 shrink-0">

            {/* Call Button */}
            <a
              href={`tel:${contact.primaryPhone.replace(/\s/g, '')}`}
              className={`hidden sm:flex items-center gap-1.5 text-sm font-sans hover:opacity-70 transition-opacity ${
                scrolled ? 'text-[color:var(--color-charcoal)]' : 'text-white'
              }`}
            >
              <Phone size={14} strokeWidth={1.5} />
              <span>Call</span>
            </a>

            {/* Book Now Button */}
            <a
              href="#contact"
              data-testid="header-reserve-btn"
              className="btn-royal"
            >
              <span>Book Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              data-testid="menu-open-btn"
              className={`lg:hidden flex items-center gap-2 hover:opacity-70 transition-opacity font-normal ${
                scrolled ? 'text-[color:var(--color-charcoal)]' : 'text-white'
              }`}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Navigation Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-[color:var(--color-royal-bg)] text-[color:var(--color-ivory)] overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between border-b border-white/10">
              <button
                onClick={() => setOpen(false)}
                data-testid="menu-close-btn"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <X size={20} strokeWidth={1.5} />
                <span>Close</span>
              </button>

              <div className="flex flex-col items-center">
                <JRDLogo size={52} color="#ffffff" />
              </div>

              <a href="#contact" onClick={() => setOpen(false)} className="btn-royal bg-white text-[color:var(--color-royal-dark)] hover:bg-[color:var(--color-cream)]">
                <span>Book Now</span>
              </a>
            </div>

            {/* Menu Content Grid */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              
              {/* Navigation Links */}
              <div>
                <p className="font-serif text-2xl text-[color:var(--color-sand)] mb-6 border-b border-white/10 pb-3">
                  Navigate
                </p>
                <ul className="space-y-4 text-lg">
                  {nav.map((n) => (
                    <li key={n.href + n.label}>
                      <a
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="text-white/80 hover:text-white transition-colors block"
                      >
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Hotels */}
              <div>
                <p className="font-serif text-2xl text-[color:var(--color-sand)] mb-6 border-b border-white/10 pb-3">
                  Our Hotels
                </p>
                <ul className="space-y-4 text-lg">
                  {properties.map((p) => (
                    <li key={p.id}>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="text-white/80 hover:text-white transition-colors block"
                      >
                        {p.name}
                        <span className="block text-xs text-white/50">{p.location}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Reservations */}
              <div>
                <p className="font-serif text-2xl text-[color:var(--color-sand)] mb-6 border-b border-white/10 pb-3">
                  Contact Us
                </p>
                <div className="space-y-4 text-sm text-white/80">
                  {contact.team.map((t) => (
                    <p key={t.name}>
                      <strong className="block text-white">{t.name} ({t.role})</strong>
                      <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="hover:underline">{t.phone}</a>
                    </p>
                  ))}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <p><strong className="block text-white">Central Reservations:</strong> {contact.primaryPhone}</p>
                    <p><strong className="block text-white">Email:</strong> {contact.emails[0]}</p>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
