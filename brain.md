# JRD Hotels , Hotel Royal Replica Project Documentation (`brain.md`)

Welcome to the central documentation (`brain.md`) for the **JRD Hotels** web application, redesigned to mirror the exact design language, layout, section order, and animation architecture of **Hotel Royal San Remo / Sesto** ([hotel-royal.it](https://www.hotel-royal.it/en)).

---

## 1. Design System & Hotel Royal Tokens

The design system incorporates Hotel Royal's signature warm off-white, dark cocoa/royal backgrounds, pill buttons, rounded cards (`rounded-[28px]`), and crown insignia:

```css
:root {
  --color-cream: #f7f5f0;       /* Hotel Royal warm background */
  --color-cream-soft: #efebe4;  /* Card background contrast */
  --color-ivory: #faf8f5;       /* Header & drawer background */
  --color-sand: #d9c9ad;        /* Accent gold / crown color */
  --color-bronze: #a68955;      /* Subtitles & badge accent */
  --color-royal-dark: #4a4036;  /* Primary dark text & buttons */
  --color-royal-bg: #3d352c;    /* Dark section background */
  --color-charcoal: #231f1a;    /* Card obsidian background */
  --color-muted: #73675c;       /* Muted text */
}
```

### Signature UI Utilities
- **`.btn-royal`**: Rounded pill button (`rounded-full`) in dark taupe or white.
- **`.pill-badge`**: Translucent floating price & category badge with backdrop blur.
- **`.pill-toggle`**: Dual-state toggle pill (`Leisure | Business`).
- **`.royal-card`**: Rounded container cards (`rounded-[28px]`) with soft shadows and hover elevation.

---

## 2. Replicated Section Structure

1. **Header ([Header.tsx](file:///d:/hospitality/hotels/src/components/Header.tsx))**:
   - `Menu | Call | Enquire` + Center Crown Insignia + `Leisure/Business` toggle + `Book` button.
   - Categorized drawer menu (`Stay`, `Enjoy`, `Experience`, `Discover`).
2. **Hero Banner ([Hero.tsx](file:///d:/hospitality/hotels/src/components/Hero.tsx))**:
   - Centered crown logo, *"Find the spirit of luxury & warmth."*, pill CTA, ambient slider.
3. **Welcome & Intro ([About.tsx](file:///d:/hospitality/hotels/src/components/About.tsx))**:
   - Centered narrative text, `Send request ⟶`, preview card carousel, statistics row.
4. **Rooms & Suites Showcase ([Properties.tsx](file:///d:/hospitality/hotels/src/components/Properties.tsx))**:
   - Price pill badges (`From ₹7,500/night`), suite images, carousel controls (`<` and `>`).
5. **Dining & Experiences ([Amenities.tsx](file:///d:/hospitality/hotels/src/components/Amenities.tsx))**:
   - Tab switcher (`Services & Amenities`, `Culinary & Dining`, `Banquets & Weddings`).
6. **Special Offers & Packages ([Gallery.tsx](file:///d:/hospitality/hotels/src/components/Gallery.tsx))**:
   - Dark background grid with rounded cards for weddings, summits, and stay packages.
7. **Guest Impressions ([Testimonials.tsx](file:///d:/hospitality/hotels/src/components/Testimonials.tsx))**:
   - Crown logo, star ratings (`★★★★★`), review quotes, slider navigation.
8. **Direct Reservation Inquiry ([Contact.tsx](file:///d:/hospitality/hotels/src/components/Contact.tsx))**:
   - Split card layout with reservation desk contacts and inquiry form.
9. **Multi-Column Footer ([Footer.tsx](file:///d:/hospitality/hotels/src/components/Footer.tsx))**:
   - Crown logo, directory links, executive contacts, copyright notice.

---

## 3. Development Commands

```bash
# Start dev server
npm run dev

# Build production bundle
npm run build
```
