import { Instagram, ExternalLink } from 'lucide-react';
import { brand, contact, nav, properties } from '../data/content';
import { JRDLogo } from './JRDLogo';

export function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[color:var(--color-royal-bg)] text-white pt-20 pb-12 overflow-hidden"
    >
      {/* Background Image with Dark Luxury Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/footer-bg.jpg"
          alt="Footer Ocean Background"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* JRD Hotels Logo Header */}
        <div className="flex flex-col items-center justify-center border-b border-white/15 pb-12 text-center">
          <JRDLogo size={72} variant="light" />
          <p className="text-xs md:text-sm text-white/80 tracking-[0.3em] uppercase mt-4 max-w-2xl font-mono">
            {brand.tagline}
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-14 border-b border-white/15 text-sm md:text-base">
          
          {/* Col 1: Properties */}
          <div>
            <p className="font-serif text-xl font-medium text-[color:var(--color-sand)] mb-5 tracking-wide">
              Our Business Hotels
            </p>
            <ul className="space-y-3.5 text-white/85">
              {properties.map((p) => (
                <li key={p.id}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--color-sand)] transition-colors font-semibold flex items-center gap-1.5 text-base">
                    <span>{p.name}</span>
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                  <span className="block text-xs text-white/60 font-light mt-0.5">{p.location}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Navigation & Quick Links */}
          <div>
            <p className="font-serif text-xl font-medium text-[color:var(--color-sand)] mb-5 tracking-wide">
              Quick Links
            </p>
            <ul className="space-y-3 text-white/85 font-medium">
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

          {/* Col 3: Direct Reservations */}
          <div>
            <p className="font-serif text-xl font-medium text-[color:var(--color-sand)] mb-5 tracking-wide">
              Reservations & Desk
            </p>
            <div className="space-y-4 text-white/85">
              <div>
                <strong className="block text-white text-sm uppercase tracking-wider mb-1 font-mono">Central Reservations</strong>
                <a href={`tel:${contact.primaryPhone.replace(/\s/g, '')}`} className="hover:text-[color:var(--color-sand)] text-base font-semibold transition-colors">
                  {contact.primaryPhone}
                </a>
              </div>
              <div>
                <strong className="block text-white text-sm uppercase tracking-wider mb-1 font-mono">JRD Pride Desk</strong>
                <a href={`tel:${contact.secondaryPhone.replace(/\s/g, '')}`} className="hover:text-[color:var(--color-sand)] text-base font-semibold transition-colors">
                  {contact.secondaryPhone}
                </a>
              </div>
              <div>
                <strong className="block text-white text-sm uppercase tracking-wider mb-1 font-mono">Direct Emails</strong>
                {contact.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block hover:text-[color:var(--color-sand)] text-sm transition-colors">
                    {e}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4: Executive Management & Socials */}
          <div>
            <p className="font-serif text-xl font-medium text-[color:var(--color-sand)] mb-5 tracking-wide">
              Executive Leadership
            </p>
            <ul className="space-y-3.5 text-white/85 mb-6">
              {contact.team.map((t) => (
                <li key={t.name}>
                  <span className="block text-white font-semibold text-base">{t.name}</span>
                  <span className="block text-xs text-white/70">{t.role} · <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="hover:text-[color:var(--color-sand)]">{t.phone}</a></span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/15">
              <p className="text-xs uppercase tracking-widest text-[color:var(--color-sand)] mb-3 font-semibold font-mono">Connect With Us</p>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors border border-white/15"
              >
                <Instagram size={15} />
                <span>@jrdhotels4</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-white/60 font-light">
          <p>© {new Date().getFullYear()} {brand.name} India · Chain of Business & Boutique Hotels in New Delhi</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-white transition-colors font-medium">
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
