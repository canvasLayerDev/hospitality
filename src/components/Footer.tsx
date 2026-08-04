import { Instagram, ExternalLink } from 'lucide-react';
import { brand, contact, nav, properties } from '../data/content';
import { JRDLogo } from './JRDLogo';

export function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[color:var(--color-royal-bg)] text-white pt-16 pb-10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        
        {/* JRD Hotels Logo Header */}
        <div className="flex flex-col items-center justify-center border-b border-white/10 pb-10 text-center">
          <JRDLogo size={64} variant="light" />
          <p className="text-xs text-white/70 tracking-[0.25em] uppercase mt-3 max-w-xl">
            {brand.tagline}
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10 text-sm">
          
          {/* Col 1: Properties */}
          <div>
            <p className="font-serif text-lg text-[color:var(--color-sand)] mb-4">Our Business Hotels</p>
            <ul className="space-y-3 text-white/80">
              {properties.map((p) => (
                <li key={p.id}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium flex items-center gap-1.5">
                    <span>{p.name}</span>
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                  <span className="block text-xs text-white/50">{p.location}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Navigation & Quick Links */}
          <div>
            <p className="font-serif text-lg text-[color:var(--color-sand)] mb-4">Quick Links</p>
            <ul className="space-y-2.5 text-white/80">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Harshi Event Management
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Reservations */}
          <div>
            <p className="font-serif text-lg text-[color:var(--color-sand)] mb-4">Reservations & Desk</p>
            <div className="space-y-3 text-white/80">
              <p>
                <strong className="block text-white">Central Reservations:</strong>
                <a href={`tel:${contact.primaryPhone.replace(/\s/g, '')}`} className="hover:underline">
                  {contact.primaryPhone}
                </a>
              </p>
              <p>
                <strong className="block text-white">JRD Pride, Jangpura Desk:</strong>
                <a href={`tel:${contact.secondaryPhone.replace(/\s/g, '')}`} className="hover:underline">
                  {contact.secondaryPhone}
                </a>
              </p>
              <p>
                <strong className="block text-white">Direct Email Enquiries:</strong>
                {contact.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block hover:underline">
                    {e}
                  </a>
                ))}
              </p>
            </div>
          </div>

          {/* Col 4: Executive Management & Socials */}
          <div>
            <p className="font-serif text-lg text-[color:var(--color-sand)] mb-4">Executive Leadership</p>
            <ul className="space-y-3 text-white/80 mb-6">
              {contact.team.map((t) => (
                <li key={t.name}>
                  <span className="block text-white font-medium">{t.name}</span>
                  <span className="block text-xs text-white/60">{t.role} · <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="hover:underline">{t.phone}</a></span>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-white/10">
              <p className="text-xs uppercase tracking-wider text-[color:var(--color-sand)] mb-2 font-medium">Connect With Us</p>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-full text-xs transition-colors"
              >
                <Instagram size={14} />
                <span>@jrdhotels4</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {brand.name} India · Chain of Business & Boutique Hotels in New Delhi</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
