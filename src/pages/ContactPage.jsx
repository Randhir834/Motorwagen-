import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { openWhatsApp, formatContactMessage, getWhatsAppLink } from '@/utils/whatsapp';
import { CONTACT_INFO } from '@/utils/constants';

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: 'Phone',
    lines: [CONTACT_INFO.PHONE_DISPLAY],
    href: `tel:${CONTACT_INFO.PHONE}`,
    action: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [CONTACT_INFO.EMAIL, CONTACT_INFO.EMAIL_SUPPORT],
    href: `mailto:${CONTACT_INFO.EMAIL}`,
    action: 'Send Email',
  },
  {
    icon: MapPin,
    title: 'Address',
    lines: ['K Narayanapura Main Rd, near K Narayanpura,', 'Opp. De Grand Restaurant, Signal, Narayanapura,', 'Bengaluru, Karnataka 560077'],
    href: 'https://www.google.com/maps/place/Motorwagen+Evolution,+K+Narayanapura+Main+Rd,+near+K+Narayanpura,+opp.+De+Grand+Restaurant,+K.Narayanapura,+Signal,+Narayanapura,+Bengaluru,+Karnataka+560077/data=!4m2!3m1!1s0x3bae1945d7df6c3d:0x4bf248b2504a3275',
    action: 'Get Directions',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Sat: 8:00 AM – 7:00 PM', 'Sunday: 9:00 AM – 3:00 PM'],
    href: null,
    action: null,
  },
];

const SERVICE_OPTIONS = [
  'Select a Service',
  'Ceramic Coating',
  'Paint Protection Film (PPF)',
  'Car Detailing',
  'Car Wash',
  'Interior Detailing',
  'Bike Detailing',
  'Other / Not sure',
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email';
  }
  if (!values.phone.trim()) {
    errors.phone = 'Phone is required';
  } else if (!/^[+\d\s-]{8,15}$/.test(values.phone)) {
    errors.phone = 'Enter a valid phone number';
  }
  if (!values.service || values.service === 'Select a Service') errors.service = 'Please select a service';
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
}

export default function ContactPage() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Send message via WhatsApp
    const message = formatContactMessage(values);
    openWhatsApp(message);
    
    // Show success message
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with MotorView for car detailing, ceramic coating, PPF, and all auto care inquiries. Call, email, or visit us in Gurugram."
        keywords="contact MotorView, car detailing contact India, auto detailing Gurugram"
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-mv relative z-10 text-center">
          <AnimatedSection>
            <span className="section-label justify-center">Reach Out</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2">
              Contact <span className="text-red-gradient">Us</span>
            </h1>
            <span className="accent-line mt-5 mx-auto block" />
            <p className="mt-5 text-brand-silver text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light">
              Have a question or want to book a service? We are happy to help. Reach out via any channel below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-pad-sm bg-brand-black border-b border-brand-border">
        <div className="container-mv">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {CONTACT_CARDS.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 80}>
                <div className="card-dark p-5 sm:p-7 h-full flex flex-col group hover:border-brand-red/40">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-brand-red/10 border border-brand-red/25 flex items-center justify-center mb-4 sm:mb-5
                    group-hover:bg-brand-red/20 transition-colors">
                    <card.icon size={20} className="text-brand-red" />
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-brand-white mb-2 sm:mb-3">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-brand-silver text-xs sm:text-sm leading-relaxed">{line}</p>
                  ))}
                  {card.href && card.action && (
                    <a href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="mt-auto pt-4 flex items-center gap-1.5 text-brand-red text-xs sm:text-sm font-semibold uppercase tracking-wide hover:gap-2.5 transition-all">
                      {card.action} <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <SectionTitle
                label="Send a Message"
                title={<>We'd Love to <span className="text-red-gradient">Hear</span> from You</>}
              />

              {submitted ? (
                <div className="card-dark p-10 text-center">
                  <CheckCircle size={48} className="text-brand-red mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-brand-white mb-2">WhatsApp Opened!</h3>
                  <p className="text-brand-silver mb-4">
                    We've opened WhatsApp with your message pre-filled. Click send to reach us directly!
                  </p>
                  <p className="text-brand-silver text-sm">
                    Our team will respond within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand-red text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
                  <div>
                    <label htmlFor="name" className="block text-brand-silver text-xs uppercase tracking-widest mb-2">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-brand-silver text-xs uppercase tracking-widest mb-2">
                        Email <span className="text-brand-red">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                        autoComplete="email"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-brand-silver text-xs uppercase tracking-widest mb-2">
                        Phone <span className="text-brand-red">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                        autoComplete="tel"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-brand-silver text-xs uppercase tracking-widest mb-2">
                      Service Interested In <span className="text-brand-red">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={handleChange}
                      className={`input-field ${errors.service ? 'border-red-500' : ''}`}
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} disabled={opt === 'Select a Service'}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-brand-silver text-xs uppercase tracking-widest mb-2">
                      Message <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      placeholder="Tell us about your vehicle and what you need..."
                      className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                    {loading ? 'Sending...' : <>Send Message <ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Map + Social */}
            <AnimatedSection delay={200}>
              <div className="space-y-8">
                {/* Map */}
                <div className="w-full h-64 sm:h-80 lg:h-96 border border-brand-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3947766885286!2d77.68641837507624!3d12.949147787375842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1945d7df6c3d%3A0x4bf248b2504a3275!2sMotorwagen%20Evolution!5e0!3m2!1sen!2sin!4v1719849600000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(80%) invert(20%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Motorwagen Evolution - K Narayanapura, Bengaluru"
                  />
                </div>

                {/* Social */}
                <div className="card-dark p-5 sm:p-6 lg:p-8">
                  <h3 className="font-display text-base sm:text-lg font-bold text-brand-white mb-4 sm:mb-5">Follow Us</h3>
                  <div className="flex items-center gap-5 sm:gap-6 justify-center">
                    <a href="https://instagram.com/motorview" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                      className="text-[#E4405F] hover:opacity-80 transition-opacity">
                      <FaInstagram size={32} className="sm:w-10 sm:h-10" />
                    </a>
                    <a href="https://facebook.com/motorview" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                      className="text-[#1877F2] hover:opacity-80 transition-opacity">
                      <FaFacebookF size={32} className="sm:w-10 sm:h-10" />
                    </a>
                    <a href="https://youtube.com/motorview" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                      className="text-[#FF0000] hover:opacity-80 transition-opacity">
                      <FaYoutube size={32} className="sm:w-10 sm:h-10" />
                    </a>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                      className="text-[#25D366] hover:opacity-80 transition-opacity">
                      <FaWhatsapp size={32} className="sm:w-10 sm:h-10" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
