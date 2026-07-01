import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

const PROCESS_STEPS = [
  { step: '01', title: 'De-Clutter & Vacuum', desc: 'Remove all loose items and vacuum every surface including seats, carpets, and boot.' },
  { step: '02', title: 'Steam Cleaning', desc: 'High-temperature steam cleaning kills bacteria and loosens embedded dirt from all surfaces.' },
  { step: '03', title: 'Carpet Extraction', desc: 'Hot water extraction removes deep-set stains and odours from carpet and floor mats.' },
  { step: '04', title: 'Surface Detailing', desc: 'Dashboard, console, vents, door panels, and all hard surfaces cleaned and dressed.' },
  { step: '05', title: 'Finishing', desc: 'Leather conditioning, fabric protection coating, and odour neutralisation applied.' },
];

const WHAT_WE_CLEAN = [
  'Front and rear seats (fabric or leather)',
  'Full carpet and floor mats (extraction)',
  'Dashboard and instrument cluster',
  'Centre console and cup holders',
  'Door panels and pockets',
  'Air vents (deep cleaning)',
  'Headlining and sun visors',
  'Boot and spare tyre area',
  'Seat belt webbing',
  'Leather conditioning (if leather seats)',
  'Fabric protection coating',
  'Odour elimination treatment',
];

const PACKAGES = [
  { name: 'Interior Basic', price: '₹2,500', duration: '3 hrs', features: ['Full Vacuum', 'Dashboard Wipe', 'Door Panel Clean', 'Window Wipe', 'Air Freshener'] },
  { name: 'Interior Deep', price: '₹5,500', duration: '5–6 hrs', features: ['Everything in Basic', 'Carpet Extraction', 'Seat Steam Clean', 'Leather Conditioning', 'Odour Elimination'], highlighted: true },
  { name: 'Interior Restore', price: '₹8,000', duration: '7–8 hrs', features: ['Everything in Deep', 'Headlining Clean', 'Vent Deep Clean', 'Fabric Protection Coat', 'Boot Detailing', 'Odour Bomb Treatment'] },
];

export default function InteriorDetailingPage() {
  return (
    <>
      <SEO
        title="Interior Detailing"
        description="MotorView's professional interior detailing — steam cleaning, carpet extraction, leather conditioning, and odour elimination for a fresh cabin."
        keywords="interior car detailing India, car interior cleaning, leather conditioning, carpet extraction"
      />

      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.07)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10">
          <nav className="flex items-center gap-2 text-xs text-brand-silver mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Interior Detailing</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="section-label">Interior Services</span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2 leading-tight">
                Interior <span className="text-red-gradient">Detailing</span>
              </h1>
              <div className="accent-line mt-5 block mb-6" />
              <p className="text-brand-silver text-lg leading-relaxed mb-8">
                Deep-clean and restore every surface inside your vehicle — from steam-cleaned seats to
                extracted carpets and conditioned leather — leaving your cabin fresh and luxurious.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment" className="btn-primary">Book Now <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn-outline">Get a Quote</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full border border-brand-red/20" />
                <div className="w-full aspect-video bg-gradient-to-br from-[#0d1a0d] via-brand-card to-brand-dark relative z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Our Process" title={<>Interior Detailing <span className="text-red-gradient">Process</span></>} center />
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

      {/* What We Clean */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Coverage" title={<>What We <span className="text-red-gradient">Detail</span></>} center />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {WHAT_WE_CLEAN.map((item, i) => (
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
            <SectionTitle label="Packages" title={<>Interior Detailing <span className="text-red-gradient">Packages</span></>} center />
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
            <h2 className="font-display text-3xl font-bold text-brand-white mb-4">Transform Your Cabin Today</h2>
            <p className="text-brand-silver max-w-lg mx-auto mb-8">A clean interior is not just about looks — it's about the experience of being in your car every day.</p>
            <Link to="/book-appointment" className="btn-primary">Book Appointment <ArrowRight size={16} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
