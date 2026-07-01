import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

const PROCESS_STEPS = [
  { step: '01', title: 'Vehicle Inspection', desc: 'Thorough paint inspection under LED lighting to identify any existing damage and determine installation areas.' },
  { step: '02', title: 'Surface Preparation', desc: 'Full decontamination wash and clay bar treatment to ensure perfectly clean paint for optimal film adhesion.' },
  { step: '03', title: 'Film Cutting', desc: 'Computer-aided precision cutting of PPF patterns using our digital template library for a perfect, factory-fit result.' },
  { step: '04', title: 'Installation', desc: 'Expert wet installation of the film by our certified PPF installers, with careful edge wrapping for seamless coverage.' },
  { step: '05', title: 'Inspection & Finish', desc: 'Final quality inspection under high-intensity lighting to ensure zero contamination, bubbles, or lifting edges.' },
];

const COVERAGE_ZONES = [
  { zone: 'Partial Front', desc: 'Hood leading edge, front bumper, headlights', price: 'from ₹18,000' },
  { zone: 'Full Front', desc: 'Full hood, bumper, fenders, mirrors, headlights', price: 'from ₹32,000' },
  { zone: 'Full Body', desc: 'Complete vehicle coverage, all panels wrapped', price: 'from ₹70,000' },
  { zone: 'Custom Zones', desc: 'Door edges, door cups, rockers, A-pillars', price: 'from ₹5,000' },
];

const BENEFITS = [
  { title: 'Self-Healing Technology', desc: 'Minor scratches and swirl marks disappear on their own with heat from the sun or warm water.' },
  { title: 'Optically Clear', desc: 'High-clarity film is virtually invisible, maintaining the original look of your paintwork underneath.' },
  { title: 'Stone Chip Protection', desc: 'Absorbs the impact of road debris, stone chips, and gravel that would otherwise chip or scratch bare paint.' },
  { title: '10-Year Warranty', desc: 'Our films come with a 10-year manufacturer warranty against yellowing, cracking, and delamination.' },
  { title: 'Stain Resistance', desc: 'Resists environmental contaminants like bird droppings, bug splatter, and tree sap that can permanently etch paint.' },
  { title: 'Maintains Resale Value', desc: 'Protecting your original paint in perfect condition significantly preserves your vehicle\'s market value.' },
];

const FAQS = [
  { q: 'How long does PPF installation take?', a: 'Partial front coverage takes 1–2 days. A full front installation requires 2–3 days. A complete full-body wrap may take 4–5 days to ensure a perfect result.' },
  { q: 'Will PPF affect my paint colour?', a: 'No. Our PPF is optically clear and perfectly transparent. It will not alter the colour, gloss, or finish of your paint in any way.' },
  { q: 'Can PPF be removed?', a: 'Yes, PPF can be professionally removed without damaging the underlying paint. In fact, the paint underneath PPF will be in perfect condition compared to exposed areas.' },
  { q: 'Does PPF work on matte finishes?', a: 'Yes. We stock matte PPF specifically formulated for matte and satin factory finishes. It preserves the matte look perfectly without adding any gloss.' },
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

export default function PPFPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO
        title="Paint Protection Film (PPF)"
        description="Invisible self-healing PPF by MotorView. Protect your vehicle's paint from stone chips, scratches, and road debris. 10-year warranty."
        keywords="PPF India, paint protection film, self healing film, car paint protection, XPEL PPF"
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(200,0,0,0.07)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10">
          <nav className="flex items-center gap-2 text-xs text-brand-silver mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Paint Protection Film</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="section-label">Protection Services</span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2 leading-tight">
                Paint Protection <span className="text-red-gradient">Film</span>
              </h1>
              <div className="accent-line mt-5 block mb-6" />
              <p className="text-brand-silver text-lg leading-relaxed mb-8">
                Invisible, self-healing urethane film that shields your vehicle's paint from rock chips,
                scratches, and environmental damage — with a 10-year manufacturer warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment" className="btn-primary">Book Now <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn-outline">Get a Quote</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full border border-brand-red/20" />
                <div className="w-full aspect-video bg-gradient-to-br from-brand-card via-[#0d0d1a] to-brand-dark relative z-10" />
                <div className="absolute -bottom-4 -left-4 z-20 bg-brand-red px-5 py-3 text-white">
                  <div className="font-display text-2xl font-bold">10yr</div>
                  <div className="text-xs font-semibold uppercase tracking-wider">Warranty</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Our Process" title={<>Precision <span className="text-red-gradient">Installation</span></>} center />
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

      {/* Coverage Zones */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Coverage Options" title={<>Choose Your <span className="text-red-gradient">Protection Level</span></>} center />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {COVERAGE_ZONES.map((zone, i) => (
              <AnimatedSection key={zone.zone} delay={i * 100}>
                <div className="card-dark p-5 sm:p-7 lg:p-8 h-full flex flex-col">
                  <h3 className="font-display text-xl font-bold text-brand-white mb-3">{zone.zone}</h3>
                  <p className="text-brand-silver text-sm leading-relaxed flex-1 mb-4">{zone.desc}</p>
                  <div className="pt-4 border-t border-brand-border">
                    <span className="text-brand-red font-semibold">{zone.price}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Benefits" title={<>Why <span className="text-red-gradient">PPF</span> is Essential</>} center />
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

      {/* Before / After */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Results" title={<>PPF <span className="text-red-gradient">Transformation</span></>} center />
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="max-w-3xl mx-auto">
              <ReactCompareSlider
                handle={<ReactCompareSliderHandle buttonStyle={{ background: '#C80000', border: '2px solid #C80000', color: '#0A0A0A' }} />}
                itemOne={<div className="w-full h-72 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-end p-6"><span className="bg-brand-black/80 text-brand-silver text-xs px-3 py-1 uppercase tracking-widest">Before</span></div>}
                itemTwo={<div className="w-full h-72 bg-gradient-to-br from-[#0d0d1a] to-brand-card flex items-end p-6"><span className="bg-brand-red text-white text-xs px-3 py-1 uppercase tracking-widest font-semibold">After</span></div>}
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
            <h2 className="font-display text-3xl font-bold text-brand-white mb-4">Protect Your Paint Before It's Too Late</h2>
            <p className="text-brand-silver max-w-lg mx-auto mb-8">Every day without PPF is another day your paint is at risk from road debris. Book your installation today.</p>
            <Link to="/book-appointment" className="btn-primary">Book Appointment <ArrowRight size={16} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
