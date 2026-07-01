import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, AtSign, Share2, Video, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 99999 99999', '+91 88888 88888'],
    href: 'tel:+919999999999',
    action: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['hello@motorview.in', 'support@motorview.in'],
    href: 'mailto:hello@motorview.in',
    action: 'Send Email',
  },
  {
    icon: MapPin,
    title: 'Address',
    lines: ['123 Auto Plaza, Sector 18,', 'Gurugram, Haryana 122001'],
    href: 'https://maps.google.com',
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
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
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
                  <h3 className="font-display text-2xl font-bold text-brand-white mb-2">Message Sent!</h3>
                  <p className="text-brand-silver">
                    Thank you for reaching out. Our team will get back to you within 2 hours.
                  </p>
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
                <div className="w-full h-80 border border-brand-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1!2d77.0!3d28.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(80%) invert(20%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MotorView Location Map"
                  />
                </div>

                {/* Social */}
                <div className="card-dark p-8">
                  <h3 className="font-display text-lg font-bold text-brand-white mb-5">Follow Us</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: AtSign, label: 'Instagram', href: 'https://instagram.com/motorview', colour: 'from-pink-600 to-purple-600' },
                      { icon: Share2, label: 'Facebook', href: 'https://facebook.com/motorview', colour: 'from-blue-700 to-blue-500' },
                      { icon: Video, label: 'YouTube', href: 'https://youtube.com/motorview', colour: 'from-red-700 to-red-500' },
                      { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919999999999', colour: 'from-green-700 to-green-500' },
                    ].map(({ icon: Icon, label, href, colour }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 bg-gradient-to-r ${colour} text-white text-sm font-medium
                          hover:opacity-90 transition-opacity`}
                        aria-label={label}
                      >
                        <Icon size={18} />
                        {label}
                      </a>
                    ))}
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
