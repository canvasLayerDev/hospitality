// Official Content Dataset extracted from https://www.jrdhotels.com/

export const brand = {
  name: 'JRD Hotels',
  tagline: 'JRD Hotels India is a chain of business hotels in Delhi offering 3 to 4 star experiences.',
  metaTitle: 'JRD Hotels | Business Hotels in Delhi | Boutique Hotel Chain in New Delhi',
  metaDescription: 'JRD Hotels - JRD Hotels is a premium hotel chain with business hotels in Delhi such as JRD Exotica, JRD Luxury and newly built JRD Pride under the name.',
  keywords: 'JRD Hotels, JRD Exotica, JRD Pride, JRD Luxury hotel',
  instagram: 'https://www.instagram.com/jrdhotels4/',
};

export const contact = {
  primaryPhone: '+91 11 3545 9566',
  secondaryPhone: '+91 11 4090 7700',
  kapurDirect: '+91 99587 99551',
  emails: ['jrdexoticahotel@gmail.com', 'jrdhotel@gmail.com', 'jrdpride@gmail.com'],
  team: [
    { name: 'Mr. Sarkar', role: 'Group GM', phone: '+91 96 5001 6944' },
    { name: 'Mr. Kapoor', role: 'ED', phone: '+91 99 5879 9551' },
    { name: 'Ms. Mehta Duggal', role: 'Chairperson', phone: '+91 98 1013 5281' },
  ],
  locations: [
    { property: 'JRD Exotica', name: 'A-1/284, Safdarjung Enclave, New Delhi-110029' },
    { property: 'JRD Luxury', name: 'B-7/113 A, Near Sukhmani Hospital Safdarjung Enclave, New Delhi-110029' },
    { property: 'JRD Pride', name: '744-Main Mathura Road, Jangpura, New Delhi-110014' },
  ],
};

export interface HotelDirectoryItem {
  id: string;
  name: string;
  subtitle: string;
  address: string;
  mapUrl: string;
  landlines: string[];
  executives: { name: string; role: string; phone: string }[];
  email: string;
  image: string;
}

export const hotelDirectory: HotelDirectoryItem[] = [
  {
    id: 'exotica',
    name: 'JRD Exotica',
    subtitle: 'Executive Rooms & Business Suites',
    address: 'A-1/284, Safdarjung Enclave, New Delhi-110029',
    mapUrl: 'https://maps.google.com/?q=A-1/284,+Safdarjung+Enclave,+New+Delhi-110029',
    landlines: ['+91 11 3545 9566', '+91 11 3504 9022'],
    executives: [
      { name: 'Mr. Sarkar', role: 'Group GM', phone: '+91 96 5001 6944' },
      { name: 'Mr. Kapoor', role: 'ED', phone: '+91 99 5879 9551' },
      { name: 'Ms. Mehta Duggal', role: 'Chairperson', phone: '+91 98 1013 5281' },
    ],
    email: 'jrdexoticahotel@gmail.com',
    image: '/images/properties/exotica-main.jpg',
  },
  {
    id: 'luxury',
    name: 'JRD Luxury',
    subtitle: 'Luxury Suites & Boutique Living',
    address: 'B-7/113 A, Near Sukhmani Hospital Safdarjung Enclave, New Delhi-110029',
    mapUrl: 'https://maps.google.com/?q=B-7/113+A,+Near+Sukhmani+Hospital+Safdarjung+Enclave,+New+Delhi-110029',
    landlines: ['+91 11 4090 7700'],
    executives: [
      { name: 'Mr. Sarkar', role: 'Group GM', phone: '+91 96 5001 6944' },
      { name: 'Mr. Kapoor', role: 'ED', phone: '+91 99 5879 9551' },
      { name: 'Ms. Mehta Duggal', role: 'Chairperson', phone: '+91 98 1013 5281' },
    ],
    email: 'jrdhotel@gmail.com',
    image: '/images/properties/luxury-main.jpg',
  },
  {
    id: 'pride',
    name: 'JRD Pride',
    subtitle: 'Newly Built Boutique Business Hotel',
    address: '744-Main Mathura Road, Jangpura, New Delhi-110014',
    mapUrl: 'https://maps.google.com/?q=744-Main+Mathura+Road,+Jangpura,+New+Delhi-110014',
    landlines: ['+91 11 4054 0444'],
    executives: [
      { name: 'Mr. Sarkar', role: 'Group GM', phone: '+91 96 5001 6944' },
      { name: 'Mr. Kapoor', role: 'ED', phone: '+91 99 5879 9551' },
      { name: 'Ms. Mehta Duggal', role: 'Chairperson', phone: '+91 98 1013 5281' },
    ],
    email: 'jrdpride@gmail.com',
    image: '/images/properties/pride-main.jpg',
  },
];

export const heroSlides = [
  {
    src: '/images/hero/hero-exotica.jpg',
    title: 'Hotel JRD Exotica, New Delhi',
    subtitle: 'Chanakyapuri Enclave & Panchsheel Park',
    caption: 'Hotel JRD Exotica · Luxury Business Hotel in South Delhi',
  },
  {
    src: '/images/hero/hero-luxury.jpg',
    title: 'Hotel JRD Luxury, New Delhi',
    subtitle: 'Near Hauz Khas, Delhi',
    caption: 'Hotel JRD Luxury · Uniquely Designed for Refined Living',
  },
  {
    src: '/images/hero/hero-pride.jpg',
    title: 'Hotel JRD Pride, New Delhi',
    subtitle: 'Jangpura, New Delhi',
    caption: 'Hotel JRD Pride · Newly Built Luxury Boutique Hotel',
  },
  {
    src: '/images/hero/hero-club-rooms.jpg',
    title: 'Club Rooms, Hotel JRD Exotica',
    subtitle: 'Ultra Modern Facilities & Teak Interiors',
    caption: 'Club Rooms · JRD Exotica Business Hotel',
  },
  {
    src: '/images/hero/hero-premium-rooms.jpg',
    title: 'Premium Rooms, JRD Luxury',
    subtitle: 'Refined Comfort & High-Class Hospitality',
    caption: 'Premium Rooms · JRD Luxury Hotel New Delhi',
  },
];

export const properties = [
  {
    id: 'exotica',
    name: 'Hotel JRD Exotica - Business Hotel',
    short: 'Chanakyapuri / Panchsheel',
    number: '01',
    description: 'The Luxury Boutique Hotel in South Delhi promises to provide a pleasant, comfortable and memorable stay and cater to all the needs of its esteemed guests.',
    location: 'Chanakyapuri (Near all Embassy offices) / Panchsheel Park, South Delhi',
    image: '/images/properties/exotica-main.jpg',
    url: 'https://www.jrdhotels.com/jrd-exotica-new-delhi/',
    meta: [
      { label: 'Inventory', value: '32 Club & Executive Suites' },
      { label: 'Facilities', value: 'Gym, Travel Desk, Wi-Fi' },
      { label: 'Address', value: 'Panchsheel Park / Chanakyapuri' },
    ],
  },
  {
    id: 'luxury',
    name: 'Hotel JRD Luxury - Business Hotel',
    short: 'Near Hauz Khas',
    number: '02',
    description: 'Hotel JRD Luxury is situated in the heart of New Delhi and is uniquely designed for travellers with a refined style of living.',
    location: 'Near Hauz Khas, New Delhi',
    image: '/images/properties/luxury-main.jpg',
    url: 'https://www.jrdhotels.com/jrd-luxury-new-delhi/',
    meta: [
      { label: 'Inventory', value: '28 Premium Suites' },
      { label: 'Facilities', value: 'In-room Safe, 42" TV, Minibar' },
      { label: 'Address', value: 'Near Hauz Khas, Delhi' },
    ],
  },
  {
    id: 'pride',
    name: 'Hotel JRD Pride - Business Hotel',
    short: 'Jangpura',
    number: '03',
    description: 'JRD Pride is a newly built luxury boutique hotel with ultra modern facilities. Perfect for business trips, our hotel provides an enchanting staying experience.',
    location: 'Jangpura, New Delhi',
    image: '/images/properties/pride-main.jpg',
    url: 'https://www.jrdhotels.com/jrd-pride-new-delhi/',
    meta: [
      { label: 'Inventory', value: '36 Superior & Deluxe Rooms' },
      { label: 'Facilities', value: 'Conference Room, Lounge, Parking' },
      { label: 'Address', value: 'Jangpura, New Delhi' },
    ],
  },
];

export const perks = [
  'Book direct and get 5% flat off on all bookings',
  'Complimentary Hi-Tea from 4-6 PM',
  'Early check-in upto 3 hours (subject to availability)',
  'Free Room Upgrade for Website bookings only (Subject to Availability)',
];

export const aboutStats = [
  { value: '3', label: 'Boutique Business Hotels across New Delhi' },
  { value: '3-4★', label: 'Star Rated Luxury Hospitality Experiences' },
  { value: '100%', label: 'Top Most Hygiene Protocol Maintained' },
  { value: '24/7', label: 'Round-the-Clock Travel Desk & Room Service' },
];

export const amenitiesList = [
  {
    number: '01',
    title: 'Ultra Modern Facilities',
    text: 'Our JRD Business Hotels in New Delhi offer complimentary Wi-Fi, in-room safe, fully stocked minibar, 42" television, round-the-clock travel desk and a well-equipped gymnasium. With such facilities provided in a very reasonable price, our hotels make it an attractive choice for the travellers.',
    icon: 'wifi',
  },
  {
    number: '02',
    title: 'Exciting Offers',
    text: 'JRD Hotels have a plethora of exciting offers awaiting you. Special discounts on laundry services, food & beverages, complimentary meals, complimentary access to the business lounge and much more!',
    icon: 'briefcase',
  },
  {
    number: '03',
    title: 'Well-Equipped Gymnasium',
    text: 'Technogym cardio machines, weight racks, and wellness studio space at Hotel JRD Exotica New Delhi.',
    icon: 'dumbbell',
  },
  {
    number: '04',
    title: '24/7 Travel Desk & Chauffeur',
    text: 'Round-the-clock airport transfers, city sightseeing tours, and diplomatic car hire.',
    icon: 'car',
  },
  {
    number: '05',
    title: 'In-Room Safe & Stocked Minibar',
    text: 'Digital electronic safes and fully stocked minibars in every room for complete peace of mind.',
    icon: 'shield-check',
  },
  {
    number: '06',
    title: 'Culinary Restaurant & Room Service',
    text: 'Artisanal regional Indian cuisine, buffet breakfast spreads, and 24-hour in-room dining.',
    icon: 'utensils-crossed',
  },
];

export const galleryImages = [
  {
    src: 'https://assets.simplotel.com/simplotel/image/upload/x_0,y_140,w_4368,h_2457,r_0,c_crop,q_80,fl_progressive/w_550,f_auto,c_fit/jrd-exotica/Club_Rooms,_Hotel_JRD_Exotica',
    alt: 'Website Direct Offer - 5% Off',
    location: 'Official Promotion',
  },
  {
    src: 'https://assets.simplotel.com/simplotel/image/upload/x_0,y_38,w_1024,h_575,r_0,c_crop,q_80,fl_progressive/w_550,f_auto,c_fit/jrd-hotels/premium_room_m4njnu',
    alt: 'Royal Wedding & Event Banquets',
    location: 'Harshi Event Management',
  },
  {
    src: 'https://assets.simplotel.com/simplotel/image/upload/x_0,y_378,w_4032,h_2268,r_0,c_crop,q_80,fl_progressive/w_550,f_auto,c_fit/jrd-hotels/executive_4_sy3ze8',
    alt: 'Corporate Summits & Conference Halls',
    location: 'Business Lounges',
  },
  {
    src: 'https://assets.simplotel.com/simplotel/image/upload/x_0,y_378,w_4032,h_2268,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/jrd-hotels/interior_1_hltg3b',
    alt: 'Ultra Modern Interior & Hygiene Standards',
    location: 'JRD Hotels New Delhi',
  },
];

export const testimonials = [
  {
    quote: 'Very pleasant surprise! Friendly and welcoming staff, excellent dishes, and spotlessly clean rooms. Ideal location for all diplomatic meetings and family stays.',
    author: 'Helmuth Pirhofer',
    role: 'Corporate Guest',
  },
  {
    quote: 'A hotel to enjoy! Quiet location, gourmet cuisine, beautiful and spacious rooms with magnificent views of South Delhi courtyards, and above all, authentic hospitality.',
    author: 'Christoph Krebs',
    role: 'Leisure Traveller',
  },
  {
    quote: 'I can only agree with the many positive reviews. In my opinion there is no negative criticism. Thank you very much, dear JRD Hotels team!',
    author: 'Lena Hoch',
    role: 'Diplomatic Visitor',
  },
  {
    quote: 'The wedding banquet arrangements at JRD Exotica were beyond expectations. Every detail from floral mandaps to regional catering was executed flawlessly.',
    author: 'Bettina E.',
    role: 'Event Host',
  },
  {
    quote: 'We stayed at JRD Hotels for almost 2 weeks and couldn\'t have been happier. As a guest, you get such a warm welcome feeling as soon as you arrive.',
    author: 'Rajesh Verma',
    role: 'Business Executive',
  },
  {
    quote: 'The food was excellent and tasted at the highest level. I would particularly like to highlight the staff: incredibly friendly, warm-hearted, attentive, and personal.',
    author: 'Ananya Sharma',
    role: 'Family Trip',
  },
  {
    quote: 'Technogym facilities and in-room breakfast plus made our executive stay seamless. High-speed gigabit fiber worked flawlessly for our video calls.',
    author: 'David Miller',
    role: 'Conference Delegate',
  },
  {
    quote: 'Diplomatic enclave location with peaceful garden lawns in the heart of New Delhi. Truly a boutique sanctuary.',
    author: 'Elena Rostova',
    role: 'Long Stay Guest',
  },
];

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Our Hotels', href: '#hotels' },
  { label: 'Promotions', href: '#promotions' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Event Management', href: '#events' },
  { label: 'Contact Us', href: '#contact' },
];
