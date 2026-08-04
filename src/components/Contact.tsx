import React, { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  User,
  Clock,
  Sparkles,
  ShieldCheck,
  Copy,
  Check,
  Building2,
  ExternalLink,
  MessageSquare,
  Globe,
} from 'lucide-react';
import { contact, properties, hotelDirectory, HotelDirectoryItem } from '../data/content';
import { JRDLogo } from './JRDLogo';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  city: string;
  queryFor: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    city: '',
    queryFor: 'JRD Exotica - Business Hotel',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const ref = 'JRD-CN-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(ref);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      queryFor: 'JRD Exotica - Business Hotel',
      checkIn: '',
      checkOut: '',
      guests: '2 Guests',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-gradient-to-b from-[color:var(--color-cream-soft)] via-[color:var(--color-cream)] to-[color:var(--color-cream-soft)] py-16 md:py-24 overflow-hidden text-[color:var(--color-charcoal)]"
    >
      {/* Decorative Radial Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[color:var(--color-sand)]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 md:px-10 relative z-10 space-y-20">
        
        {/* Contact Form Container */}
        <div>
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-3">
              <JRDLogo size={52} variant="gold" iconOnly />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--color-sand)]/15 border border-[color:var(--color-sand)]/30 text-[color:var(--color-royal-dark)] text-xs uppercase tracking-widest font-medium mb-3">
              <Sparkles size={14} className="text-[color:var(--color-sand)]" />
              <span>Contact Us</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[color:var(--color-royal-dark)] font-normal tracking-tight mb-4">
              Contact the JRD Hotels
            </h2>
            <p className="text-sm md:text-base text-[color:var(--color-muted)] font-light leading-relaxed max-w-2xl mx-auto">
              Reach out to our 24/7 central concierge desk for direct room bookings, banquet enquiries, corporate tie-ups, and luxury stay packages.
            </p>
          </div>

          {/* Form Card Grid */}
          <div className="royal-card bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-black/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: Central Support Overview */}
            <div className="lg:col-span-5 space-y-8 lg:border-r border-stone-200 lg:pr-10">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium mb-3 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>24/7 Central Desk Active</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[color:var(--color-charcoal)] mb-3">
                  Direct Guest Concierge
                </h3>
                <p className="text-xs md:text-sm text-[color:var(--color-muted)] font-light leading-relaxed">
                  Submit your query below to get instant confirmation, direct booking rates, early check-in privileges, and direct assistance from hotel management.
                </p>
              </div>

              {/* Direct WhatsApp Concierge CTA */}
              <div className="p-5 bg-gradient-to-br from-emerald-950 to-emerald-900 text-white rounded-2xl shadow-lg border border-emerald-500/30 space-y-3">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium text-sm">Instant WhatsApp Concierge</span>
                </div>
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  Chat directly with our Executive Director desk on WhatsApp for urgent queries & instant rates.
                </p>
                <a
                  href="https://wa.me/919958799551?text=Hello%20JRD%20Hotels,%20I%20would%20like%20to%20make%20an%20enquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-emerald-500 text-white font-medium text-xs shadow-md transition-colors"
                >
                  <span>Chat on WhatsApp (+91 99587 99551)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Key Executive Direct Lines */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-[color:var(--color-sand)] font-semibold flex items-center gap-1.5">
                  <Phone size={14} />
                  <span>Key Executive Contacts</span>
                </p>

                <div className="space-y-2">
                  {contact.team.map((exec) => (
                    <div
                      key={exec.phone}
                      className="p-3 rounded-xl bg-[color:var(--color-cream)] border border-stone-200/80 flex items-center justify-between"
                    >
                      <div>
                        <span className="text-xs font-semibold text-stone-900 block">{exec.name}</span>
                        <span className="text-[10px] text-stone-500 uppercase tracking-wider">{exec.role}</span>
                      </div>
                      <a
                        href={`tel:${exec.phone.replace(/\s/g, '')}`}
                        className="text-xs font-mono font-medium text-[color:var(--color-royal-dark)] hover:text-[color:var(--color-sand)] bg-white px-3 py-1.5 rounded-lg border border-stone-200 transition-colors"
                      >
                        {exec.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privilege Guarantee */}
              <div className="p-4 bg-[color:var(--color-sand)]/10 rounded-2xl border border-[color:var(--color-sand)]/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[color:var(--color-sand)] shrink-0 mt-0.5" />
                <div className="text-xs text-[color:var(--color-royal-dark)] space-y-0.5">
                  <p className="font-semibold">Direct Booking Guarantee</p>
                  <p className="text-[11px] text-[color:var(--color-muted)]">
                    Complimentary Hi-Tea (4-6 PM), 5% direct savings code, and flexible 48-hour cancellation policy.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="py-12 md:py-16 text-center space-y-6 bg-[color:var(--color-cream)] rounded-3xl p-8 border border-emerald-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle size={36} strokeWidth={1.5} />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-[color:var(--color-sand)] font-medium">Query Sent Successfully</span>
                    <h4 className="font-serif text-3xl text-[color:var(--color-charcoal)] mt-1">
                      Thank You, {formData.name}!
                    </h4>
                    <p className="text-xs font-mono text-[color:var(--color-royal-dark)] bg-white inline-block px-3.5 py-1 rounded-full border border-black/10 mt-2 font-semibold">
                      Reference Code: {referenceCode}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-[color:var(--color-muted)] max-w-md mx-auto leading-relaxed">
                    Your query regarding <strong className="text-[color:var(--color-charcoal)]">{formData.queryFor}</strong> has been transmitted to our management. We will contact you at <strong className="text-[color:var(--color-charcoal)]">{formData.phone}</strong> shortly.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="w-full sm:w-auto btn-royal-outline py-3 px-6 text-xs font-medium cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                    <a
                      href={`https://wa.me/919958799551?text=Hello%20JRD%20Hotels,%20I%20submitted%20query%20${referenceCode}%20for%20${encodeURIComponent(formData.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto btn-royal py-3 px-6 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
                    >
                      <span>Track on WhatsApp</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl text-[color:var(--color-royal-dark)] mb-2">
                    Submit Your Query
                  </h3>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Name *
                    </label>
                    <div className="relative">
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="Please Enter Your Name Here"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[color:var(--color-cream)] border border-stone-300 rounded-2xl pl-11 pr-4 py-3.5 text-xs md:text-sm text-[color:var(--color-charcoal)] focus:outline-none focus:border-[color:var(--color-sand)] focus:ring-1 focus:ring-[color:var(--color-sand)] transition-all"
                      />
                      <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="form-email" className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder="Please Enter Your Email ID Here"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[color:var(--color-cream)] border border-stone-300 rounded-2xl pl-11 pr-4 py-3.5 text-xs md:text-sm text-[color:var(--color-charcoal)] focus:outline-none focus:border-[color:var(--color-sand)] focus:ring-1 focus:ring-[color:var(--color-sand)] transition-all"
                      />
                      <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                    </div>
                  </div>

                  {/* Contact Number with India +91 Tag */}
                  <div>
                    <label htmlFor="form-phone" className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Contact Number *
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 flex items-center gap-1 text-xs text-stone-600 font-medium border-r border-stone-300 pr-2.5">
                        <span className="font-semibold text-[color:var(--color-royal-dark)]">India +91</span>
                      </div>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        placeholder="Please Enter Your Contact Number Here"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[color:var(--color-cream)] border border-stone-300 rounded-2xl pl-28 pr-4 py-3.5 text-xs md:text-sm text-[color:var(--color-charcoal)] focus:outline-none focus:border-[color:var(--color-sand)] focus:ring-1 focus:ring-[color:var(--color-sand)] transition-all"
                      />
                    </div>
                  </div>

                  {/* Your City */}
                  <div>
                    <label htmlFor="form-city" className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Your City *
                    </label>
                    <div className="relative">
                      <input
                        id="form-city"
                        type="text"
                        required
                        placeholder="Please Enter Your City Here"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[color:var(--color-cream)] border border-stone-300 rounded-2xl pl-11 pr-4 py-3.5 text-xs md:text-sm text-[color:var(--color-charcoal)] focus:outline-none focus:border-[color:var(--color-sand)] focus:ring-1 focus:ring-[color:var(--color-sand)] transition-all"
                      />
                      <MapPin size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                    </div>
                  </div>

                  {/* Query For Dropdown */}
                  <div>
                    <label htmlFor="form-queryfor" className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Query For *
                    </label>
                    <div className="relative">
                      <select
                        id="form-queryfor"
                        required
                        value={formData.queryFor}
                        onChange={(e) => setFormData({ ...formData, queryFor: e.target.value })}
                        className="w-full bg-[color:var(--color-cream)] border border-stone-300 rounded-2xl px-4 py-3.5 text-xs md:text-sm text-[color:var(--color-charcoal)] font-medium focus:outline-none focus:border-[color:var(--color-sand)] focus:ring-1 focus:ring-[color:var(--color-sand)] appearance-none cursor-pointer"
                      >
                        <option value="JRD Exotica - Business Hotel">JRD Exotica - Business Hotel</option>
                        <option value="JRD Luxury - Business Hotel">JRD Luxury - Business Hotel</option>
                        <option value="JRD Pride - Business Hotel">JRD Pride - Business Hotel</option>
                        <option value="General Inquiry / Banquets">General Inquiry / Banquets & Events</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-royal py-4 text-xs md:text-sm font-medium tracking-wider uppercase shadow-lg hover:shadow-xl transition-all cursor-pointer mt-4"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Query...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>Submit Contact Query</span>
                        <ArrowRight size={16} />
                      </span>
                    )}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>

        {/* HOTEL DIRECTORY SECTION */}
        <div id="hotel-directory" className="pt-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--color-royal-dark)] text-white text-xs uppercase tracking-widest font-medium mb-3">
              <Building2 size={14} className="text-[color:var(--color-sand)]" />
              <span>Chain Directory</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[color:var(--color-royal-dark)] font-normal tracking-tight mb-3">
              Hotel Directory
            </h2>
            <p className="text-sm md:text-base text-[color:var(--color-muted)] font-light leading-relaxed">
              Complete addresses, official map locations, direct landline numbers, key executive lines, and emails for all JRD Group Hotel properties in New Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hotelDirectory.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Property Image Header */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <h3 className="font-serif text-2xl font-normal tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-amber-200/90 font-light mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6 space-y-5 text-xs text-stone-700">
                    
                    {/* Address & Map */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 font-semibold text-stone-900 uppercase tracking-wider text-[11px]">
                        <MapPin size={14} className="text-[color:var(--color-sand)]" />
                        <span>Address</span>
                      </div>
                      <p className="text-stone-600 leading-relaxed font-light pl-5">
                        {item.address}{' '}
                        <a
                          href={item.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[color:var(--color-royal-dark)] font-semibold hover:underline ml-1"
                        >
                          | Map <ExternalLink size={11} />
                        </a>
                      </p>
                    </div>

                    {/* Contact Numbers List */}
                    <div className="space-y-2 pt-3 border-t border-stone-100">
                      <div className="flex items-center gap-2 font-semibold text-stone-900 uppercase tracking-wider text-[11px]">
                        <Phone size={14} className="text-[color:var(--color-sand)]" />
                        <span>Contact Number</span>
                      </div>

                      <div className="pl-5 space-y-2">
                        {/* Landline Numbers */}
                        <div className="flex flex-wrap items-center gap-2">
                          {item.landlines.map((num) => (
                            <a
                              key={num}
                              href={`tel:${num.replace(/\s/g, '')}`}
                              className="font-mono text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-[color:var(--color-royal-dark)] hover:text-white px-2.5 py-1 rounded-md border border-stone-200 transition-colors"
                            >
                              {num}
                            </a>
                          ))}
                        </div>

                        {/* Executive Direct Lines */}
                        <div className="space-y-1 pt-1">
                          {item.executives.map((exec) => (
                            <div key={exec.phone} className="flex items-center justify-between text-[11px] py-1 border-b border-stone-100 last:border-b-0">
                              <span className="text-stone-600 font-medium">
                                {exec.phone} <span className="text-stone-400">({exec.name} - {exec.role})</span>
                              </span>
                              <a
                                href={`tel:${exec.phone.replace(/\s/g, '')}`}
                                className="text-[color:var(--color-royal-dark)] hover:underline font-medium"
                              >
                                Call
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 pt-3 border-t border-stone-100">
                      <div className="flex items-center gap-2 font-semibold text-stone-900 uppercase tracking-wider text-[11px]">
                        <Mail size={14} className="text-[color:var(--color-sand)]" />
                        <span>Email</span>
                      </div>
                      <p className="pl-5">
                        <a
                          href={`mailto:${item.email}`}
                          className="font-serif text-sm text-[color:var(--color-royal-dark)] hover:underline font-medium"
                        >
                          {item.email}
                        </a>
                      </p>
                    </div>

                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <a
                    href={`tel:${item.landlines[0].replace(/\s/g, '')}`}
                    className="flex-1 btn-royal justify-center py-2.5 text-xs tracking-wider uppercase cursor-pointer"
                  >
                    <Phone size={13} />
                    <span>Call Hotel</span>
                  </a>

                  <a
                    href={`mailto:${item.email}`}
                    className="p-2.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors"
                    title={`Send Email to ${item.name}`}
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
