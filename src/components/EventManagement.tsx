import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Phone,
  Mail,
  Globe,
  Users,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Star,
  Award,
  Crown,
  Calendar,
  Send,
  X,
  MessageCircle,
} from 'lucide-react';
import { eventCategories, harsheiPartnerInfo, EventCategory } from '../data/events';
import { JRDLogo } from './JRDLogo';

export function EventManagement() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding Event Management',
    guestCount: '200-500 Guests',
    eventDate: '',
    location: 'JRD Hotels & Banquets',
    message: '',
  });

  const filteredCategories =
    activeTab === 'all'
      ? eventCategories
      : eventCategories.filter((cat) => cat.id === activeTab);

  const handleOpenInquiry = (category?: EventCategory) => {
    if (category) {
      setFormData((prev) => ({ ...prev, eventType: category.title }));
    }
    setIsModalOpen(true);
    setInquirySubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setInquirySubmitted(false);
    }, 3000);
  };

  return (
    <section id="events" className="relative py-24 bg-[color:var(--color-cream)] text-[color:var(--color-charcoal)] overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--color-royal-dark)] text-white text-xs tracking-widest uppercase mb-4 shadow-sm"
          >
            <Crown className="w-3.5 h-3.5 text-[color:var(--color-sand)]" />
            <span>Associated Partner of JRD Group of Hotels & Banquets</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-[color:var(--color-royal-dark)] mb-6"
          >
            Harshi Event Management
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[color:var(--color-muted)] leading-relaxed"
          >
            {harsheiPartnerInfo.description}
          </motion.p>
        </div>

        {/* Highlight Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8 rounded-2xl bg-[color:var(--color-royal-dark)] text-white shadow-xl mb-16 border border-[color:var(--color-sand)]/20"
        >
          <div className="flex items-center gap-4 p-3">
            <div className="w-12 h-12 rounded-xl bg-[color:var(--color-sand)]/20 flex items-center justify-center text-[color:var(--color-sand)] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-serif text-[color:var(--color-sand)] font-bold">50 – 5,000+</div>
              <div className="text-xs text-amber-100/80">Guest Capacity</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3">
            <div className="w-12 h-12 rounded-xl bg-[color:var(--color-sand)]/20 flex items-center justify-center text-[color:var(--color-sand)] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-serif text-[color:var(--color-sand)] font-bold">Delhi NCR & Global</div>
              <div className="text-xs text-amber-100/80">Destination Weddings</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3">
            <div className="w-12 h-12 rounded-xl bg-[color:var(--color-sand)]/20 flex items-center justify-center text-[color:var(--color-sand)] shrink-0">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-serif text-[color:var(--color-sand)] font-bold">5-Star Standards</div>
              <div className="text-xs text-amber-100/80">Banquets & Lawns</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3">
            <div className="w-12 h-12 rounded-xl bg-[color:var(--color-sand)]/20 flex items-center justify-center text-[color:var(--color-sand)] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-serif text-[color:var(--color-sand)] font-bold">End-to-End</div>
              <div className="text-xs text-amber-100/80">Conception to Execution</div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Category Navigation Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[color:var(--color-royal-dark)] text-white shadow-md'
                : 'bg-white/80 hover:bg-white text-[color:var(--color-charcoal)] border border-stone-200'
            }`}
          >
            All Services
          </button>
          {eventCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[color:var(--color-royal-dark)] text-white shadow-md'
                  : 'bg-white/80 hover:bg-white text-[color:var(--color-charcoal)] border border-stone-200'
              }`}
            >
              {cat.title.replace(' Event Management', '').replace(' Management', '')}
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-amber-900/10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[color:var(--color-royal-dark)]/90 backdrop-blur-md text-[color:var(--color-sand)] text-[10px] font-sans tracking-widest uppercase border border-[color:var(--color-sand)]/30">
                      {category.badge}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-serif text-2xl tracking-tight leading-snug">
                        {category.title}
                      </h3>
                      <p className="text-xs text-amber-200/90 font-light mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-sm text-[color:var(--color-muted)] leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2 mb-6">
                      {category.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[color:var(--color-charcoal)]">
                          <CheckCircle2 className="w-4 h-4 text-[color:var(--color-sand)] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Sub Services Breakdown (Tabs / Accordion List) */}
                    {category.subServices && (
                      <div className="space-y-4 pt-4 border-t border-stone-100">
                        {category.subServices.map((sub, sIdx) => (
                          <div key={sIdx} className="space-y-2">
                            <span className="text-xs font-semibold tracking-wider text-[color:var(--color-royal-dark)] uppercase">
                              {sub.heading}:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {sub.items.map((item, iIdx) => (
                                <span
                                  key={iIdx}
                                  className="px-2.5 py-1 rounded-md bg-stone-100 text-[11px] text-stone-700 font-medium border border-stone-200/60"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 md:p-8 pt-0">
                  <button
                    onClick={() => handleOpenInquiry(category)}
                    className="w-full btn-royal justify-center py-3 text-xs tracking-wider uppercase cursor-pointer"
                  >
                    <span>Request Event Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dedicated Partner Contact & Booking Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[color:var(--color-royal-dark)] text-white p-8 md:p-14 shadow-2xl relative overflow-hidden border border-[color:var(--color-sand)]/30"
        >
          {/* Subtle Graphic Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[color:var(--color-sand)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--color-sand)]/20 text-[color:var(--color-sand)] text-xs font-mono uppercase tracking-widest border border-[color:var(--color-sand)]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Booking Desk</span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
                Plan Your Royal Event with Harshi Event Management
              </h3>

              <p className="text-sm md:text-base text-amber-100/80 leading-relaxed max-w-xl">
                Partner with JRD Group of Hotels for seamless event execution across Delhi NCR, Rajasthan, Goa, Mumbai, or international destinations. Contact our lead event executive directly.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-3 bg-black/30 p-3.5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[color:var(--color-sand)]/20 text-[color:var(--color-sand)] flex items-center justify-center shrink-0">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-200/70 uppercase tracking-widest">Lead Coordinator</div>
                    <div className="text-sm font-serif font-medium text-white">{harsheiPartnerInfo.contactPerson}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-black/30 p-3.5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[color:var(--color-sand)]/20 text-[color:var(--color-sand)] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-200/70 uppercase tracking-widest">Direct Phone</div>
                    <a
                      href={`tel:${harsheiPartnerInfo.phoneRaw}`}
                      className="text-sm font-mono font-medium text-white hover:text-[color:var(--color-sand)] transition-colors"
                    >
                      {harsheiPartnerInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Call-To-Actions Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <a
                href={`tel:${harsheiPartnerInfo.phoneRaw}`}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[color:var(--color-sand)] text-[color:var(--color-royal-dark)] font-semibold text-sm hover:bg-amber-300 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>Call {harsheiPartnerInfo.contactPerson}: {harsheiPartnerInfo.phone}</span>
              </a>

              <a
                href={`https://wa.me/${harsheiPartnerInfo.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
                  'Hello Mr. Hardik Kapoor, I am interested in planning an event with Harshi Event Management at JRD Hotels.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp ({harsheiPartnerInfo.contactPerson})</span>
              </a>

              <div className="flex gap-3">
                <a
                  href={`mailto:${harsheiPartnerInfo.email}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-white text-xs hover:bg-white/20 transition-all border border-white/10"
                >
                  <Mail className="w-4 h-4 text-[color:var(--color-sand)]" />
                  <span className="truncate">{harsheiPartnerInfo.email}</span>
                </a>

                <a
                  href={harsheiPartnerInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-white text-xs hover:bg-white/20 transition-all border border-white/10"
                  title="Visit Official Harshi Event Management Portal"
                >
                  <Globe className="w-4 h-4 text-[color:var(--color-sand)]" />
                  <span>Portal</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Inquiry Proposal Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden border border-stone-200"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[color:var(--color-royal-dark)] text-[color:var(--color-sand)] flex items-center justify-center">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[color:var(--color-royal-dark)] font-bold">
                    Event Proposal Request
                  </h3>
                  <p className="text-xs text-[color:var(--color-muted)]">
                    Harshi Event Management & JRD Hotels Desk
                  </p>
                </div>
              </div>

              {inquirySubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-2xl text-stone-900">Proposal Request Received!</h4>
                  <p className="text-sm text-stone-600 max-w-md mx-auto">
                    Thank you! Mr. Hardik Kapoor and our Harshi Event Management team will reach out to you shortly at <span className="font-semibold">{formData.phone}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-royal-dark)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-royal-dark)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Event Category
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-royal-dark)] bg-white"
                      >
                        {eventCategories.map((cat) => (
                          <option key={cat.id} value={cat.title}>
                            {cat.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Expected Guests
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-royal-dark)] bg-white"
                      >
                        <option value="50-150 Guests">50 - 150 Guests</option>
                        <option value="200-500 Guests">200 - 500 Guests</option>
                        <option value="500-1000 Guests">500 - 1,000 Guests</option>
                        <option value="1000-5000+ Guests">1,000 - 5,000+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Event Details / Customization Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention preferred dates, functions (e.g. Mehandi, Sangeet, Reception, Mandap Decor), or venue preferences..."
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-royal-dark)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-royal justify-center py-3.5 text-xs tracking-wider uppercase cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request to Harshi Event Desk</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
