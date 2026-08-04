import { Instagram, ExternalLink } from 'lucide-react';
import { brand, contact, nav, properties } from '../data/content';
import { JRDLogo } from './JRDLogo';

export function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Background Image - Fully Visible 4K Ocean Waves & Golden Sand */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/footer-bg.jpg"
          alt="Footer Ocean Beach Background"
          className="w-full h-full object-cover opacity-85 transition-transform duration-1000 hover:scale-105"
        />
        {/* Soft Vignette Overlay for Crisp Edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      </div>

      {/* Main Footer Container with Dark Glassmorphic Card for 100% Legibility & Visual Brilliance */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="bg-black/65 backdrop-blur-xl border border-white/25 rounded-[36px] p-8 md:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
          
          {/* JRD Hotels Logo Header */}
          <div className="flex flex-col items-center justify-center border-b border-white/20 pb-12 text-center">
            <JRDLogo size={76} variant="light" />
            <p className="text-sm md:text-base text-amber-100/90 tracking-[0.3em] uppercase mt-4 max-w-2xl font-mono font-medium drop-shadow-md">
              {brand.tagline}
            </p>
          </div>

          {/* Directory Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-14 border-b border-white/20 text-sm md:text-base">
            
            {/* Col 1: Properties */}
            <div>
              <p className="font-serif text-2xl font-normal text-[color:var(--color-sand)] mb-5 tracking-wide drop-shadow-sm">
                Our Business Hotels
              </p>
              <ul className="space-y-3.5 text-white/90">
                {properties.map((p) => (
                  <li key={p.id}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--color-sand)] transition-colors font-bold flex items-center gap-1.5 text-base">
                      <span>{p.name}</span>
                      <ExternalLink size={14} className="opacity-80" />
                    </a>
                    <span className="block text-xs text-white/70 font-light mt-0.5">{p.location}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <p className="font-serif text-2xl font-normal text-[color:var(--color-sand)] mb-5 tracking-wide drop-shadow-sm">
                Quick Links
              </p>
              <ul className="space-y-3 text-white/90 font-semibold">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-[color:var(--color-sand)] transition-colors">
                      {n.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#events" className="hover:text-[color:var(--color-sand)] transition-colors">
                    Harshi Event Management
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[color:var(--color-sand)] transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Reservations & Desk */}
            <div>
              <p className="font-serif text-2xl font-normal text-[color:var(--color-sand)] mb-5 tracking-wide drop-shadow-sm">
                Reservations & Desk
              </p>
              <div className="space-y-4 text-white/90">
                <div>
                  <strong className="block text-amber-200 text-xs uppercase tracking-widest mb-1 font-mono font-bold">Central Reservations</strong>
                  <a href={`tel:${contact.primaryPhone.replace(/\s/g, '')}`} className="hover:text-[color:var(--color-sand)] text-base font-bold transition-colors">
                    {contact.primaryPhone}
                  </a>
                </div>
                <div>
                  <strong className="block text-amber-200 text-xs uppercase tracking-widest mb-1 font-mono font-bold">JRD Pride Desk</strong>
                  <a href={`tel:${contact.secondaryPhone.replace(/\s/g, '')}`} className="hover:text-[color:var(--color-sand)] text-base font-bold transition-colors">
                    {contact.secondaryPhone}
                  </a>
                </div>
                <div>
                  <strong className="block text-amber-200 text-xs uppercase tracking-widest mb-1 font-mono font-bold">Direct Emails</strong>
                  {contact.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block hover:text-[color:var(--color-sand)] text-sm font-semibold transition-colors">
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 4: Leadership & Socials */}
            <div>
              <p className="font-serif text-2xl font-normal text-[color:var(--color-sand)] mb-5 tracking-wide drop-shadow-sm">
                Executive Leadership
              </p>
              <ul className="space-y-3.5 text-white/90 mb-6">
                {contact.team.map((t) => (
                  <li key={t.name}>
                    <span className="block text-white font-bold text-base">{t.name}</span>
                    <span className="block text-xs text-white/75">{t.role} · <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="hover:text-[color:var(--color-sand)] font-medium">{t.phone}</a></span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/20">
                <p className="text-xs uppercase tracking-widest text-[color:var(--color-sand)] mb-3 font-bold font-mono">Connect With Us</p>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors border border-white/20 shadow-md"
                >
                  <Instagram size={16} />
                  <span>@jrdhotels4</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-white/75 font-normal">
            <p>© {new Date().getFullYear()} {brand.name} India · Chain of Business & Boutique Hotels in New Delhi</p>
            <div className="flex items-center gap-4">
              <a href="#top" className="hover:text-white transition-colors font-semibold">
                Back to top ↑
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
