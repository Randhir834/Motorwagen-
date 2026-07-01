import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, Droplets } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

const WHAT_INCLUDED = [
  'Two-bucket hand wash method',
  'pH-neutral shampoo',
  'Microfiber wash mitts (swirl-safe)',
  'Tyre and rim cleaning',
  'Door jamb wipe-down',
  'Exterior window cleaning',
  'Interior windshield clean',
  'Interior quick vacuum',
  'Dashboard dust wipe',
  'Tyre sidewall dressing',
  'Spray wax finish coat',
  'Air freshener',
];

const PACKAGES = [
  { name: 'Express Wash', price: '₹799', duration: '45 min', features: ['Hand Wash', 'Tyre Clean', 'Window Wipe', 'Air Freshener'] },
  { name: 'Premium Wash', price: '₹1,499', duration: '90 min', features: ['Everything in Express', 'Microfiber Interior Wipe', 'Spray Wax Finish', 'Rim Cleaning', 'Tyre Dressing'], highlighted: true },
  { name: 'Wash + Protection', price: '₹2,499', duration: '2 hrs', features: ['Everything in Premium', 'Clay Bar (front)', 'Sealant Application', 'Glass Repellent'] },
];

export default function CarWashPage() {
  return (
    <>
      <SEO
        title="Premium Car Wash"
        description="MotorView's premium hand car wash service using pH-neutral shampoo and microfiber tools. Zero swirl risk. Tyre dressing and spray wax included."
        keywords="premium car wash India, hand car wash, pH neutral car wash, swirl free car wash"
      />

      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.07)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10">
          <nav className="flex items-center gap-2 text-xs text-brand-silver mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Car Wash</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="section-label">Wash Services</span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2 leading-tight">
                Premium <span className="text-red-gradient">Car Wash</span>
              </h1>
              <div className="accent-line mt-5 block mb-6" />
              <p className="text-brand-silver text-lg leading-relaxed mb-8">
                Unlike automated car washes that damage paint, our hand wash service uses the two-bucket
                method and pH-neutral products — zero swirl risk, maximum shine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment" className="btn-primary">Book Now <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn-outline">Get a Quote</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full border border-brand-red/20" />
                <div className="w-full aspect-video bg-gradient-to-br from-[#0d1a2a] via-brand-card to-brand-dark relative z-10" />
                <div className="absolute -bottom-4 -left-4 z-20 bg-brand-red px-5 py-3 text-white">
                  <div className="font-display text-2xl font-bold">0</div>
                  <div className="text-xs font-semibold uppercase tracking-wider">Swirl Risk</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Hand Wash */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-label">Why Hand Wash</span>
              <h2 className="font-display text-3xl font-bold text-brand-white mt-2 mb-4">
                Why Automated Washes <span className="text-red-gradient">Destroy Paint</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-red mb-6" />
              <div className="space-y-4 text-brand-silver text-sm leading-relaxed">
                <p>Automated car washes use abrasive brushes that spin at high speed, accumulating dirt from hundreds of previous cars and dragging it across your paint. This creates thousands of micro-scratches known as swirl marks.</p>
                <p>Our hand wash uses only freshly laundered microfiber mitts, two separate buckets (one for clean soap, one for rinsing the mitt), and gentle pH-neutral shampoo. The result? A perfectly clean car with zero paint damage.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Droplets, title: 'pH-Neutral Shampoo', desc: 'Cleans without stripping wax or damaging paint chemistry.' },
                  { icon: Droplets, title: 'Two-Bucket Method', desc: 'One clean soap bucket, one rinse bucket — contamination stays out of the wash.' },
                  { icon: Droplets, title: 'Microfiber Only', desc: 'Ultra-soft microfiber mitts — no sponges, no brushes, no scratches.' },
                  { icon: Droplets, title: 'Spray Wax Finish', desc: 'Every wash ends with a quick spray wax for added gloss and protection.' },
                ].map((item) => (
                  <div key={item.title} className="card-dark p-5">
                    <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center mb-3">
                      <item.icon size={20} className="text-brand-red" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-brand-white mb-1">{item.title}</h3>
                    <p className="text-brand-silver text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="What's Included" title={<>Every Wash <span className="text-red-gradient">Includes</span></>} center />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {WHAT_INCLUDED.map((item, i) => (
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
            <SectionTitle label="Packages" title={<>Car Wash <span className="text-red-gradient">Packages</span></>} center />
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
            <h2 className="font-display text-3xl font-bold text-brand-white mb-4">Book a Premium Wash Today</h2>
            <p className="text-brand-silver max-w-lg mx-auto mb-8">Your car deserves better than a machine wash. Experience the MotorView hand wash difference.</p>
            <Link to="/book-appointment" className="btn-primary">Book Now <ArrowRight size={16} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
