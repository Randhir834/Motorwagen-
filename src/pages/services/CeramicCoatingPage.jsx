import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, ChevronDown, ChevronUp, Car, Shield, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

const PROCESS_STEPS = [
  { step: '01', title: 'Wash & Decontaminate', desc: 'Full chemical decontamination using iron removers and clay bar to remove all bonded contaminants from the paint surface.' },
  { step: '02', title: 'Paint Correction', desc: 'Machine polishing to remove swirl marks, scratches, and oxidation so the coating bonds to pristine, clear paint.' },
  { step: '03', title: 'IPA Wipe-Down', desc: 'Isopropyl alcohol panel wipe to strip all residual polishing oils and ensure a perfectly clean, oil-free surface.' },
  { step: '04', title: 'Coating Application', desc: 'Careful hand-application of 9H ceramic coating panel by panel in a controlled environment using applicator blocks.' },
  { step: '05', title: 'Flash & Cure', desc: 'The coating is allowed to flash and cure under infra-red lamps and finally inspected under high-intensity lighting.' },
];

const BENEFITS = [
  { title: '9H Surface Hardness', desc: 'Harder than most factory clear coats, resisting minor scratches and swirl marks from washing.' },
  { title: 'Hydrophobic Effect', desc: 'Water beads and rolls off instantly, taking dirt with it. Your car stays cleaner longer.' },
  { title: 'UV Protection', desc: 'Blocks harmful UV rays that cause paint oxidation and colour fading over time.' },
  { title: 'Chemical Resistance', desc: 'Repels bird droppings, acid rain, tree sap, and road chemicals that etch unprotected paint.' },
  { title: 'Gloss Enhancement', desc: 'Amplifies paint depth and reflection, giving your car a wet, mirror-like shine.' },
  { title: '3–5 Year Durability', desc: 'Professionally applied ceramic coatings outlast waxes and sealants by years, not months.' },
];

const PRICING_TIERS = [
  { name: 'Standard', price: '₹15,000', features: ['1-Layer Coating', '1-Year Warranty', 'Sedan/Hatchback', 'Wash & Prep Included'] },
  { name: 'Premium', price: '₹28,000', features: ['2-Layer Coating', '3-Year Warranty', 'Sedan/SUV', 'Paint Correction Included', 'Glass Coating'], highlighted: true },
  { name: 'Ultimate', price: '₹45,000', features: ['3-Layer Coating', '5-Year Warranty', 'All Vehicle Sizes', 'Full Correction', 'Glass & Wheel Coating', 'Annual Inspection'] },
];

const FAQS = [
  { q: 'How long does the application process take?', a: 'A full ceramic coating application typically takes 2–3 days: one day for decontamination and paint correction, and one to two days for coating application and curing time.' },
  { q: 'Can I take my car in rain after coating?', a: 'We recommend avoiding water contact for 7 days post-application. The coating needs this time to fully cross-link and cure to its maximum hardness.' },
  { q: 'Does ceramic coating prevent all scratches?', a: 'Ceramic coating increases surface hardness and resistance to light scratches, but it is not scratch-proof. Deep key scratches or stone chips will still penetrate the coating.' },
  { q: 'Is ceramic coating maintenance-free?', a: 'Not entirely. You should hand-wash with pH-neutral shampoo every 2–3 weeks and bring the car for an annual inspection and top-up spray to maintain optimal performance.' },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-brand-border hover:border-brand-red/40 transition-colors">
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-5 text-left" aria-expanded={isOpen}>
        <span className="text-brand-white font-medium pr-4">{faq.q}</span>
        {isOpen ? <ChevronUp size={16} className="text-brand-red flex-shrink-0" /> : <ChevronDown size={16} className="text-brand-silver flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-brand-silver text-sm leading-relaxed border-t border-brand-border pt-4">
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function CeramicCoatingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO
        title="Ceramic Coating"
        description="Professional 9H ceramic coating services by MotorView. Protect your vehicle's paint with industry-leading nano-ceramic technology. 3–5 year durability."
        keywords="ceramic coating India, 9H ceramic coating, car paint protection, nano ceramic coating"
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(200,0,0,0.07)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-brand-silver mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Ceramic Coating</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="section-label">Protection Services</span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2 leading-tight">
                Ceramic <span className="text-red-gradient">Coating</span>
              </h1>
              <div className="accent-line mt-5 block mb-6" />
              <p className="text-brand-silver text-lg leading-relaxed mb-8">
                Industry-grade nano-ceramic protection that permanently bonds to your paint for years of
                unmatched shine, hydrophobic performance, and scratch resistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">Contact Us <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn-outline">Get a Quote</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full border border-brand-red/20" />
                <div className="w-full aspect-video bg-gradient-to-br from-[#180505] via-brand-card to-brand-dark relative z-10" />
                <div className="absolute -bottom-4 -left-4 z-20 bg-brand-red px-5 py-3 text-white">
                  <div className="font-display text-2xl font-bold">9H</div>
                  <div className="text-xs font-semibold uppercase tracking-wider">Surface Hardness</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle
              label="Our Process"
              title={<>How We Apply Your <span className="text-red-gradient">Coating</span></>}
              subtitle="A meticulous 5-step process ensures the coating bonds perfectly and lasts for years."
              center
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 100}>
                <div className="card-dark p-6 relative h-full">
                  <span className="font-display text-5xl font-bold text-brand-red/20 absolute top-4 right-4">{step.step}</span>
                  <div className="w-10 h-10 bg-brand-red flex items-center justify-center text-white font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-white mb-2">{step.title}</h3>
                  <p className="text-brand-silver text-xs leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle
              label="Benefits"
              title={<>Why Choose <span className="text-red-gradient">Ceramic Coating</span>?</>}
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {BENEFITS.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 80}>
                <div className="card-dark p-6 flex gap-4 h-full">
                  <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
                    <Check size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-white mb-2">{b.title}</h3>
                    <p className="text-brand-silver text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle
              label="Investment"
              title={<>Ceramic Coating <span className="text-red-gradient">Packages</span></>}
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {PRICING_TIERS.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 120}>
                <div className={`card-dark p-8 h-full flex flex-col ${tier.highlighted ? 'border-brand-red shadow-red-md' : ''}`}>
                  {tier.highlighted && (
                    <div className="text-center mb-4">
                      <span className="bg-brand-red text-white text-xs font-bold px-4 py-1 uppercase tracking-widest">Most Popular</span>
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold text-brand-white text-center mb-2">{tier.name}</h3>
                  <div className="text-center mb-6 pb-6 border-b border-brand-border">
                    <span className="font-display text-3xl font-bold text-brand-red">{tier.price}</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-brand-silver text-sm">
                        <Check size={13} className="text-brand-red flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={tier.highlighted ? 'btn-primary justify-center' : 'btn-outline justify-center'}>
                    Get This Package
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle
              label="Results"
              title={<>Ceramic Coating <span className="text-red-gradient">Transformation</span></>}
              center
            />
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="max-w-4xl mx-auto">
              <ReactCompareSlider
                handle={
                  <ReactCompareSliderHandle 
                    buttonStyle={{ background: '#C80000', border: '3px solid rgba(255,255,255,0.2)', color: '#fff', width: 44, height: 44 }} 
                    linesStyle={{ color: 'rgba(200,0,0,0.5)', width: 2 }}
                  />
                }
                itemOne={
                  <div className="relative w-full h-72 md:h-96 overflow-hidden bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800">
                    <div className="absolute inset-0 bg-grid opacity-5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Car size={140} className="text-white/10" strokeWidth={1} />
                    </div>
                    <span className="absolute bottom-6 left-6 bg-brand-black/80 backdrop-blur-sm text-brand-silver text-xs px-3 py-1.5 uppercase tracking-widest border border-brand-border">Before Ceramic Coating</span>
                  </div>
                }
                itemTwo={
                  <div className="relative w-full h-72 md:h-96 overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600">
                    <div className="absolute inset-0 bg-dots opacity-5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <Shield size={120} className="text-white/30" strokeWidth={1.5} />
                        <Sparkles size={50} className="absolute -top-3 -right-3 text-white/40 animate-pulse" />
                        <div className="absolute inset-0 bg-white/10 blur-3xl animate-pulse" />
                      </div>
                    </div>
                    <span className="absolute bottom-6 right-6 bg-brand-red text-white text-xs px-3 py-1.5 uppercase tracking-widest font-semibold">After Ceramic Coating</span>
                  </div>
                }
                style={{ width: '100%' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-brand-black">
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#180505] via-[#2d0a0a] to-[#180505] border-y border-brand-red/20">
        <div className="container-mv text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-brand-white mb-4">
              Protect Your Investment Today
            </h2>
            <p className="text-brand-silver max-w-lg mx-auto mb-8">
              Book a free consultation and our experts will recommend the right ceramic coating package for your vehicle.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
