import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X, ChevronDown, ChevronUp } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { PACKAGES, FAQ_ITEMS } from '@/data/siteData';

const ADD_ONS = [
  { name: 'Engine Bay Cleaning', price: '₹1,500', desc: 'Deep degreasing and dressing of the engine compartment.' },
  { name: 'Headlight Restoration', price: '₹2,000', desc: 'Polishing and sealing of oxidised, yellowed headlights.' },
  { name: 'Odour Elimination', price: '₹2,200', desc: 'Ozone treatment and odour bomb for total cabin deodorisation.' },
  { name: 'Rim Ceramic Coating', price: '₹5,000', desc: 'Ceramic coating applied to all four rims for easy brake dust removal.' },
  { name: 'Glass Rain Repellent', price: '₹3,000', desc: 'Hydrophobic glass coating for all windows and windshield.' },
  { name: 'Fabric Protection', price: '₹2,500', desc: 'Fabric-specific coating to resist spills and stains on seats and carpets.' },
];

const COMPARISON = [
  { feature: 'Exterior Hand Wash', basic: true, silver: true, gold: true },
  { feature: 'Interior Vacuum', basic: true, silver: true, gold: true },
  { feature: 'Window Cleaning', basic: true, silver: true, gold: true },
  { feature: 'Tyre Dressing', basic: true, silver: true, gold: true },
  { feature: 'Clay Bar Treatment', basic: false, silver: true, gold: true },
  { feature: 'Machine Polishing', basic: false, silver: true, gold: true },
  { feature: 'Spray Wax / Sealant', basic: false, silver: true, gold: true },
  { feature: 'Engine Bay Cleaning', basic: false, silver: true, gold: true },
  { feature: 'Leather Conditioning', basic: false, silver: true, gold: true },
  { feature: 'Doorstep Service', basic: false, silver: true, gold: true },
  { feature: 'Ceramic Coating (1L)', basic: false, silver: false, gold: true },
  { feature: 'Paint Decontamination', basic: false, silver: false, gold: true },
  { feature: 'Swirl Mark Correction', basic: false, silver: false, gold: true },
  { feature: 'Glass Coating', basic: false, silver: false, gold: true },
  { feature: 'Interior Steam Clean', basic: false, silver: false, gold: true },
  { feature: '6-Month Guarantee', basic: false, silver: false, gold: true },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-brand-border hover:border-brand-red/40 transition-colors">
      <button onClick={onToggle} className="w-full flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 text-left gap-3" aria-expanded={isOpen}>
        <span className="text-brand-white font-medium text-sm sm:text-base pr-2">{faq.question}</span>
        {isOpen ? <ChevronUp size={14} className="sm:w-4 sm:h-4 text-brand-red flex-shrink-0" /> : <ChevronDown size={14} className="sm:w-4 sm:h-4 text-brand-silver flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-brand-silver text-xs sm:text-sm leading-relaxed border-t border-brand-border pt-3 sm:pt-4">{faq.answer}</div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO
        title="Pricing"
        description="MotorView transparent pricing packages — Basic, Silver, and Gold detailing packages plus ceramic coating, PPF, and add-on services."
        keywords="car detailing price India, ceramic coating cost, PPF price, detailing packages"
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.06)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10 text-center px-4">
          <AnimatedSection>
            <span className="section-label justify-center">Investment</span>
            <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2">
              Simple <span className="text-red-gradient">Pricing</span>
            </h1>
            <div className="accent-line mt-4 sm:mt-5 mx-auto block" />
            <p className="mt-4 sm:mt-5 text-brand-silver text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light">
              Transparent pricing with no hidden charges. Pick the package that suits your vehicle and requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 max-w-5xl mx-auto">
            {PACKAGES.map((pkg, i) => (
              <AnimatedSection key={pkg.id} delay={i * 120}>
                <div
                  className={`relative card-dark p-5 sm:p-6 lg:p-8 flex flex-col h-full
                    ${pkg.highlighted ? 'border-brand-red shadow-red-md md:scale-[1.02]' : ''}`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-2xs sm:text-xs font-bold px-3 sm:px-4 py-1 uppercase tracking-widest whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-white">{pkg.name}</h3>
                    <p className="text-brand-silver text-xs sm:text-sm mt-1">{pkg.tagline}</p>
                  </div>
                  <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-brand-border">
                    <span className="font-display text-3xl sm:text-4xl font-bold text-brand-red">{pkg.price}</span>
                    <span className="text-brand-silver text-xs sm:text-sm ml-2">{pkg.period}</span>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 flex-1 mb-6 sm:mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 sm:gap-3 text-brand-silver text-xs sm:text-sm">
                        <Check size={13} className="sm:w-[14px] sm:h-[14px] text-brand-red flex-shrink-0 mt-0.5" /><span className="flex-1">{f}</span>
                      </li>
                    ))}
                    {pkg.notIncluded && pkg.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2 sm:gap-3 text-brand-border text-xs sm:text-sm line-through">
                        <X size={13} className="sm:w-[14px] sm:h-[14px] text-brand-border flex-shrink-0 mt-0.5" /><span className="flex-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`${pkg.highlighted ? 'btn-primary' : 'btn-outline'} justify-center w-full !text-xs sm:!text-sm`}>
                    Get {pkg.name}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv px-4">
          <AnimatedSection>
            <SectionTitle label="Comparison" title={<>Feature <span className="text-red-gradient">Comparison</span></>} center />
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="overflow-x-auto max-w-4xl mx-auto -mx-4 px-4">
              <table className="w-full border-collapse min-w-[600px]" role="table">
                <thead>
                  <tr className="border-b-2 border-brand-red">
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-brand-white font-display text-xs sm:text-sm uppercase tracking-wider">Feature</th>
                    {PACKAGES.map((pkg) => (
                      <th key={pkg.id} className="text-center py-3 sm:py-4 px-2 sm:px-6">
                        <span className={`font-display text-xs sm:text-sm uppercase tracking-wider ${pkg.highlighted ? 'text-brand-red' : 'text-brand-white'}`}>
                          {pkg.name}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-brand-border ${i % 2 === 0 ? 'bg-brand-black/30' : ''}`}>
                      <td className="py-2.5 sm:py-3.5 px-3 sm:px-6 text-brand-silver text-xs sm:text-sm">{row.feature}</td>
                      {[row.basic, row.silver, row.gold].map((has, j) => (
                        <td key={j} className="text-center py-2.5 sm:py-3.5 px-2 sm:px-6">
                          {has
                            ? <Check size={14} className="sm:w-4 sm:h-4 text-brand-red mx-auto" />
                            : <X size={14} className="sm:w-4 sm:h-4 text-brand-border mx-auto" />
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv px-4">
          <AnimatedSection>
            <SectionTitle label="Enhance Your Package" title={<>Service <span className="text-red-gradient">Add-Ons</span></>} center />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
            {ADD_ONS.map((addon, i) => (
              <AnimatedSection key={addon.name} delay={i * 80}>
                <div className="card-dark p-4 sm:p-5 lg:p-6 flex items-start gap-3 sm:gap-4 h-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="sm:w-4 sm:h-4 text-brand-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 xs:gap-2 mb-1.5 sm:mb-2">
                      <h3 className="text-brand-white font-semibold text-xs sm:text-sm">{addon.name}</h3>
                      <span className="text-brand-red font-bold text-xs sm:text-sm whitespace-nowrap">{addon.price}</span>
                    </div>
                    <p className="text-brand-silver text-2xs sm:text-xs leading-relaxed">{addon.desc}</p>
                  </div>
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
            <SectionTitle label="FAQs" title={<>Pricing <span className="text-red-gradient">Questions</span></>} center />
          </AnimatedSection>
          <div className="space-y-2">
            {FAQ_ITEMS.slice(0, 5).map((faq) => (
              <FaqItem key={faq.id} faq={faq} isOpen={openFaq === faq.id} onToggle={() => setOpenFaq((p) => (p === faq.id ? null : faq.id))} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#180505] via-[#2d0a0a] to-[#180505] border-y border-brand-red/20">
        <div className="container-mv text-center px-4">
          <AnimatedSection>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-brand-white mb-3 sm:mb-4">Ready to Get Started?</h2>
            <p className="text-brand-silver text-sm sm:text-base max-w-lg mx-auto mb-6 sm:mb-8">All packages include a satisfaction guarantee. Not happy? We redo it free of charge.</p>
            <Link to="/contact" className="btn-primary w-full xs:w-auto justify-center">Contact Us <ArrowRight size={14} className="sm:w-4 sm:h-4" /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
