import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

const PROCESS_STEPS = [
  { step: '01', title: 'Pre-Rinse', desc: 'Gentle high-pressure rinse to remove loose mud, dust and debris from all components.' },
  { step: '02', title: 'Foam Wash', desc: 'pH-neutral foam applied and hand-washed with dedicated bike brushes and microfiber mitts.' },
  { step: '03', title: 'Engine Degrease', desc: 'Safe degreaser applied to engine and chain area, then carefully rinsed and dried.' },
  { step: '04', title: 'Polish & Protect', desc: 'Tank, fairings, and bodywork polished and waxed or ceramic-coated for protection.' },
  { step: '05', title: 'Finishing', desc: 'Chrome polished, chain cleaned and lubed, tyres dressed, leather conditioned.' },
];

const WHAT_WE_DO = [
  'Full hand wash (frame, bodywork, tank)',
  'Engine bay degreasing',
  'Chrome and alloy polishing',
  'Chain cleaning and lubrication',
  'Tyre and rim detailing',
  'Seat leather/vinyl conditioning',
  'Headlight and taillight polishing',
  'Swing arm and fork cleaning',
  'Exhaust pipe polishing',
  'Wax or ceramic protection',
  'Fairing and panel restoration',
  'Final quality inspection',
];

const PACKAGES = [
  { name: 'Bike Wash', price: '₹1,499', duration: '1.5 hrs', features: ['Hand Wash', 'Tyre Dressing', 'Seat Wipe', 'Chrome Wipe', 'Air Freshener'] },
  { name: 'Bike Detail', price: '₹3,500', duration: '4 hrs', features: ['Everything in Wash', 'Engine Degreasing', 'Chrome Polish', 'Chain Clean & Lube', 'Wax Protection'], highlighted: true },
  { name: 'Bike Premium', price: '₹6,000', duration: '6–7 hrs', features: ['Everything in Detail', 'Machine Polish', 'Ceramic Coating', 'Leather Conditioning', 'Alloy Polish', 'Full Inspection'] },
];

export default function BikeDetailingPage() {
  return (
    <>
      <SEO
        title="Bike Detailing"
        description="Professional motorcycle and bike detailing by MotorView — engine degreasing, chrome polishing, ceramic protection, and full restoration."
        keywords="bike detailing India, motorcycle detailing, bike wash, chrome polishing, engine degreasing"
      />

      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.07)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10">
          <nav className="flex items-center gap-2 text-xs text-brand-silver mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Bike Detailing</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="section-label">Bike Services</span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2 leading-tight">
                Bike <span className="text-red-gradient">Detailing</span>
              </h1>
              <div className="accent-line mt-5 block mb-6" />
              <p className="text-brand-silver text-lg leading-relaxed mb-8">
                Specialised detailing for motorcycles, cruisers, and superbikes. From engine degreasing
                to chrome polishing and ceramic protection — your ride gets the treatment it deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment" className="btn-primary">Book Now <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn-outline">Get a Quote</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full border border-brand-red/20" />
                <div className="w-full aspect-video bg-gradient-to-br from-brand-card via-[#180505] to-brand-dark relative z-10" />
                <div className="absolute -bottom-4 -left-4 z-20 bg-brand-red px-5 py-3 text-white">
                  <div className="font-display text-2xl font-bold">Bikes</div>
                  <div className="text-xs font-semibold uppercase tracking-wider">Specialist Care</div>
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
            <SectionTitle label="Our Process" title={<>Bike Detailing <span className="text-red-gradient">Process</span></>} center />
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
            <SectionTitle label="Coverage" title={<>What We <span className="text-red-gradient">Detail</span></>} center />
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
            <SectionTitle label="Packages" title={<>Bike Detailing <span className="text-red-gradient">Packages</span></>} center />
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

      <section className="py-16 bg-gradient-to-r from-[#180505] via-[#2d0a0a] to-[#180505] border-y border-brand-red/20">
        <div className="container-mv text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-brand-white mb-4">Your Ride Deserves the Best</h2>
            <p className="text-brand-silver max-w-lg mx-auto mb-8">Book your bike detailing session and let our specialists bring your motorcycle back to showroom condition.</p>
            <Link to="/book-appointment" className="btn-primary">Book Appointment <ArrowRight size={16} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
