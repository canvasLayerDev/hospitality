export interface EventCategory {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  image: string;
  features: string[];
  subServices?: {
    heading: string;
    items: string[];
  }[];
}

export const harsheiPartnerInfo = {
  name: 'HARSHI EVENT MANAGEMENT',
  tagline: 'Associated Partner of JRD Group of Hotels & Banquets',
  description:
    'A one-stop luxury platform for event planning, conception, creation, and execution. Specializing in bespoke weddings, corporate galas, decor styling, and celebrity management for gatherings ranging from 50 to 5,000+ guests across India & internationally.',
  contactPerson: 'Mr. Hardik Kapoor',
  phone: '+91 98 1836 8342',
  phoneRaw: '+919818368342',
  email: 'harshiventures@gmail.com',
  website: 'http://harshiventures.com/harshi-event-management/',
  capacity: '50 Pax to 5,000+ Pax Gatherings',
  destinationsDomestic: ['Delhi / NCR', 'Jaipur', 'Udaipur', 'Mumbai', 'Goa', 'Lucknow', 'Varanasi', 'Manali'],
  destinationsForeign: ['Dubai', 'Europe', 'South Asia'],
};

export const eventCategories: EventCategory[] = [
  {
    id: 'weddings',
    title: 'Wedding Event Management',
    subtitle: 'Crafting Lifetime Bonds & Royal Celebrations',
    badge: 'Signature Specialty',
    description:
      'From intimate banquet gatherings to grand big-fat luxury weddings, we handle every detail from pre-wedding rituals to grand receptions for all religions and ethnicities.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Bespoke Mandap & Stage Styling',
      'Religious & Ethnic Wedding Customizations',
      'Exotic Venue & Banquet Logistics',
      'Bridal & Groom Hospitality Assistance',
    ],
    subServices: [
      {
        heading: 'Pre-Wedding Functions',
        items: ['Roka Ceremony', 'Sagai / Engagement', "Bachelor's Party", 'Mehandi ki Raat', 'Sangeet / Musical Night'],
      },
      {
        heading: 'Wedding Functions',
        items: ['Sehra Bandhi / Ghurchari', 'Barat Reception', 'Latest Jaimaala Themes', 'Phere Logistics', 'Vidai Setup'],
      },
      {
        heading: 'Post-Wedding Functions',
        items: ['Grand Royal Reception', 'Post-Wedding Dinner & Parties'],
      },
    ],
  },
  {
    id: 'destination',
    title: 'Destination Weddings',
    subtitle: 'Exotic Weddings Across India & Abroad',
    badge: 'Royal Experience',
    description:
      'Experience the magic of tying the knot at exotic destinations. We manage travel, stay, guest hospitality, vendor logistics, and event execution from start to finish.',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Complete Guest Travel & Hotel Accommodations',
      'On-site Destination Management Team',
      'Local Vendor & Legal Logistics Coordination',
      'Tailored Cultural & Modern Fusion Concepts',
    ],
    subServices: [
      {
        heading: 'Indian Destination Weddings',
        items: [
          'Jaipur Royal Palaces & Haveli Weddings',
          'Goa Sun & Beachfront Weddings',
          'Varanasi Divine Spiritual Weddings',
          'Manali Exotic Mountain Weddings',
        ],
      },
      {
        heading: 'International Destination Weddings',
        items: [
          'Dubai Luxury Skyscraper & Resort Weddings',
          'Europe Historic & Villa Weddings',
          'South Asian Tropical Island Weddings',
        ],
      },
    ],
  },
  {
    id: 'decor',
    title: 'Decor & Theme Management',
    subtitle: 'Transforming Spaces into Visual Masterpieces',
    badge: 'Artistic Execution',
    description:
      'We pay meticulous attention to every aesthetic detail,from floral arrangements and ambient lighting to luxurious linens, backdrops, and color schemes.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Customized Lighting & Audio-Visual Design',
      'Fresh Floral Mandaps & Entry Arches',
      'Theme Conceptualization & Blueprinting',
      'Table Scaping, Linens & Stage Decor',
    ],
    subServices: [
      {
        heading: 'Decor Services Includes',
        items: [
          'Entire Wedding & Mandap Decoration',
          'Luxury Hotel Venue Decoration',
          'Birthday & Theme Party Decoration',
          'Festival Flower & Balloon Installation',
          'Housewarming & Anniversary Styling',
          'Corporate Showroom & Gala Decor',
        ],
      },
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Event Management',
    subtitle: 'Seamless Planning for Meetings, Conferences & Galas',
    badge: 'Executive Standard',
    description:
      'High-impact corporate event management designed to elevate brand identity, dealer engagement, product launches, and annual awards nights.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    features: [
      'End-to-End Conference & AV Logistics',
      'Delegate Registration & Hospitality',
      'Media, PR & Stage Management',
      'Branding, Collaterals & Exhibition Booths',
    ],
    subServices: [
      {
        heading: 'Corporate Portfolio',
        items: [
          'Corporate Meet Ups & Conferences',
          'Seminars & Leadership Summits',
          'Corporate Media & PR Shows',
          'Dealers Meet & Product Launches',
          'Annual Awards Night & Theme Galas',
          'Trade Show & Fair Exhibitions',
        ],
      },
    ],
  },
  {
    id: 'celebrity',
    title: 'Celebrity & Artist Management',
    subtitle: 'Bringing Star Power to Your Special Occasions',
    badge: 'Star Attractions',
    description:
      'Direct coordination and arrangement of top Bollywood celebrities, playback singers, comedians, sports personalities, models, and TV stars at competitive rates.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Direct Celebrity & Artist Booking',
      'VVIP Security & Escort Logistics',
      'Artist Hospitality & Travel Arrangements',
      'Professional Stage Anchoring & Live Performances',
    ],
    subServices: [
      {
        heading: 'Artist Roster Options',
        items: [
          'Bollywood Actors & Actresses',
          'Playback Singers & Live Music Bands',
          'Stand-Up Comedians & Entertainers',
          'Sports Stars & Celebrity Influencers',
          'Models, Anchors & TV Stars',
        ],
      },
    ],
  },
  {
    id: 'social',
    title: 'Social & Private Events',
    subtitle: 'Unforgettable Gatherings Executed to Perfection',
    badge: 'Personalized Planning',
    description:
      'Stress-free planning for personal celebrations with curated menus, live entertainment, venue selection, and customized promotional decor.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Dedicated Social Event Specialists',
      'Custom Catering & Food Station Arrangements',
      'Entertainment & Host Arrangements',
      'Comprehensive Travel & Logistics Support',
    ],
    subServices: [
      {
        heading: 'Social Event Portfolio',
        items: [
          'Milestone Birthday Celebrations',
          'Family Get-Togethers & Reunions',
          'Housewarming Functions (Griha Pravesh)',
          'Naming Ceremonies (Namkaran)',
          'Baby Shower & Gender Reveal Events',
        ],
      },
    ],
  },
];
