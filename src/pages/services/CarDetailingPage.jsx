import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

const PROCESS_STEPS = [
  { step: '01', title: 'Pre-Rinse', desc: 'High-pressure pre-rinse to remove loose dirt and debris before any contact wash.' },
  { step: '02', title: 'Two-Bucket Wash', desc: 'pH-neutral shampoo applied with microfiber wash mitts using the two-bucket method to prevent swirls.' },
  { step: '03', title: 'Clay Bar', desc: 'Clay bar treatment removes bonded contamination that washing alone cannot remove.' },
  { step: '04', title: 'Machine Polish', desc: 'Dual-action or rotary polisher removes swirl marks, scratches, and oxidation.' },
  { step: '05', title: 'Protection', desc: 'Application of premium carnauba wax or synthetic sealant for lasting protection and gloss.' },
];

const WHAT_WE_DO = [
  'Machine paint correction & polishing',
  'Clay bar decontamination',
  'Two-bucket hand wash method',
  'Engine bay cleaning & dressing',
  'Wheel face and barrel cleaning',
  'Tyre sidewall dressing',
  'Glass polishing & water repellent',
  'Door jamb & shutter cleaning',
  'Trim restoration & dressing',
  'Premium wax or sealant finish',
  'Air freshener & finishing touches',
  'Final quality inspection',
];

const PACKAGES = [
  { name: 'Basic Detail', price: '₹3,500', duration: '4–5 hrs', features: ['Exterior Hand Wash', 'Clay Bar', 'Tyre Dressing', 'Window Cleaning', 'Interior Vacuum', 'Dashboard Wipe'] },
  { name: 'Full Detail', price: '₹8,000', duration: '7–9 hrs', features: ['Everything in Basic', 'Machine Polish', 'Engine Bay Cleaning', 'Leather Conditioning', 'Spray Wax Finish', 'Trim Restoration'], highlighted: true },
  { name: 'Show Detail', price: '₹12,000', duration: '10–12 hrs', features: ['Everything in Full', 'Multi-Stage Polish', 'Premium Wax (2 layers)', 'Glass Coating', 'Interior Steam Clean', 'Odour Elimination'] },
];

const FAQS = [
  { q: 'What is the difference between a car wash and car detailing?', a: 'A car wash is a basic surface clean. Detailing goes much deeper — it involves paint correction, decontamination, polishing, and protection to restore and preserve your vehicle\'s appearance.' },
  { q: 'How often should I get my car detailed?', a: 'We recommend a full detail every 3–6 months depending on how much you drive and whether the car is garaged. At minimum, once a year is essential for maintaining paint health.' },
  { q: 'Can detailing remove deep scratches?', a: 'Light to moderate scratches and swirl marks can be removed or significantly reduced with machine polishing. Very deep scratches that penetrate into the primer or metal require touch-up paint and are beyond detailing\'s scope.' },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-brand-border hover:border-brand-red/40 transition-colors">
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-5 text-left" aria-expanded={isOpen}>
        <span className="text-brand-white font-medium pr-4">{faq.q}</span>
        {isOpen ? <ChevronUp size={16} className="text-brand-red flex-shrink-0" /> : <ChevronDown size={16} className="text-brand-silver flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-brand-silver text-sm leading-relaxed border-t border-brand-border pt-4">{faq.a}</div>
      )}
    </div>
  );
}

export default function CarDetailingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO
        title="Car Detailing"
        description="Professional car detailing by MotorView — machine polishing, paint correction, clay bar, and premium protection for a showroom-perfect finish."
        keywords="car detailing India, machine polishing, paint correction, full car detail"
      />

      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.07)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10">
          <nav className="flex items-center gap-2 text-xs text-brand-silver mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Car Detailing</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="section-label">Detailing Services</span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2 leading-tight">
                Car <span className="text-red-gradient">Detailing</span>
              </h1>
              <div className="accent-line mt-5 block mb-6" />
              <p className="text-brand-silver text-lg leading-relaxed mb-8">
                Full-body premium detailing that restores your vehicle's paint to its finest condition using machine polishing, clay bar, and professional-grade protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment" className="btn-primary">Book Now <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn-outline">Get a Quote</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full border border-brand-red/20" />
                <div className="w-full aspect-video bg-gradient-to-br from-brand-card to-[#180505] relative z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Our Process" title={<>The Detailing <span className="text-red-gradient">Process</span></>} center />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 100}>
                <div className="card-dark p-6 relative h-full">
                  <span className="font-display text-5xl font-bold text-brand-red/20 absolute top-4 right-4">{step.step}</span>
                  <div className="w-10 h-10 bg-brand-red flex items-center justify-center text-white font-bold text-sm mb-4">{i + 1}</div>
                  <h3 className="font-display text-base font-bold text-brand-white mb-2">{step.title}</h3>
                  <p className="text-brand-silver text-xs leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="What's Included" title={<>Everything in Our <span className="text-red-gradient">Detailing Service</span></>} center />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {WHAT_WE_DO.map((item, i) => (
              <AnimatedSection key={item} delay={i * 50}>
                <div className="flex items-center gap-3 p-4 border border-brand-border hover:border-brand-red/40 transition-colors">
                  <Check size={14} className="text-brand-red flex-shrink-0" />
                  <span className="text-brand-silver text-sm">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Packages" title={<>Detailing <span className="text-red-gradient">Packages</span></>} center />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {PACKAGES.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 120}>
                <div className={`card-dark p-8 h-full flex flex-col ${pkg.highlighted ? 'border-brand-red shadow-red-md' : ''}`}>
                  {pkg.highlighted && <div className="text-center mb-4"><span className="bg-brand-red text-white text-xs font-bold px-4 py-1 uppercase tracking-widest">Best Value</span></div>}
                  <h3 className="font-display text-xl font-bold text-brand-white text-center mb-1">{pkg.name}</h3>
                  <p className="text-brand-silver text-xs text-center mb-4">{pkg.duration}</p>
                  <div className="text-center mb-6 pb-6 border-b border-brand-border">
                    <span className="font-display text-3xl font-bold text-brand-red">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-brand-silver text-sm">
                        <Check size={13} className="text-brand-red flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/book-appointment" className={pkg.highlighted ? 'btn-primary justify-center' : 'btn-outline justify-center'}>Book This Package</Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionTitle label="FAQs" title={<>Common <span className="text-red-gradient">Questions</span></>} center />
          </AnimatedSection>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} faq={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq((p) => (p === i ? null : i))} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#180505] via-[#2d0a0a] to-[#180505] border-y border-brand-red/20">
        <div className="container-mv text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-brand-white mb-4">Give Your Car the Detail It Deserves</h2>
            <p className="text-brand-silver max-w-lg mx-auto mb-8">Book a professional detail session and experience the MotorView transformation.</p>
            <Link to="/book-appointment" className="btn-primary">Book Appointment <ArrowRight size={16} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
