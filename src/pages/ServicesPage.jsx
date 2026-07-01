import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Layers, Sparkles, Droplets, Sofa, Bike } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { SERVICES } from '@/data/siteData';

const ICON_MAP = { Shield, Layers, Sparkles, Droplets, Sofa, Bike };

function ImgPlaceholder({ className, gradient }) {
  return (
    <div className={`bg-gradient-to-br ${gradient || 'from-brand-card to-brand-dark'} ${className}`} aria-hidden="true" />
  );
}

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore MotorView's full range of premium auto care services — ceramic coating, PPF, car detailing, car wash, interior detailing, and bike detailing."
        keywords="car detailing services, ceramic coating, PPF, interior detailing, bike detailing India"
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.06)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10 text-center">
          <AnimatedSection>
            <span className="section-label justify-center">What We Offer</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2">
              Our <span className="text-red-gradient">Services</span>
            </h1>
            <div className="accent-line mt-5 mx-auto block" />
            <p className="mt-5 text-brand-silver text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
              From protective coatings to deep interior restoration, every service is delivered with precision and passion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <div className="space-y-16">
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon] || Shield;
              const isEven = i % 2 === 0;

              return (
                <AnimatedSection key={service.id} delay={100}>
                  <div className={`grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-full h-full border border-brand-red/20" />
                      <ImgPlaceholder
                        className="w-full aspect-video relative z-10"
                        gradient={i % 3 === 0 ? 'from-brand-card to-[#180505]' : i % 3 === 1 ? 'from-[#0d1a0d] to-brand-dark' : 'from-[#0d0d1a] to-brand-card'}
                      />
                    </div>

                    {/* Content */}
                    <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-4 sm:mb-6">
                        <Icon size={22} className="sm:w-[26px] sm:h-[26px] text-brand-red" />
                      </div>
                      <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-brand-white mb-3 sm:mb-4">
                        {service.title}
                      </h2>
                      <p className="text-brand-silver text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">{service.fullDesc}</p>

                      {/* Features grid */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-brand-silver text-xs sm:text-sm">
                            <Check size={13} className="sm:w-[14px] sm:h-[14px] text-brand-red flex-shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4 pt-4 border-t border-brand-border">
                        <span className="text-brand-red font-semibold text-sm sm:text-base">{service.priceRange}</span>
                        <Link to={`/services/${service.slug}`} className="btn-primary !text-xs sm:!text-sm !px-4 sm:!px-6 !py-2 sm:!py-2.5">
                          Learn More <ArrowRight size={13} className="sm:w-[14px] sm:h-[14px]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-dark border-t border-brand-border">
        <div className="container-mv text-center px-4">
          <AnimatedSection>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white mb-3 sm:mb-4">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-brand-silver text-sm sm:text-base max-w-lg mx-auto mb-6 sm:mb-8">
              Our experts will assess your vehicle and recommend the perfect treatment plan.
            </p>
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4">
              <Link to="/contact" className="btn-primary w-full xs:w-auto justify-center">
                Get a Free Consultation <ArrowRight size={14} className="sm:w-4 sm:h-4" />
              </Link>
              <Link to="/pricing" className="btn-outline w-full xs:w-auto justify-center">View Pricing</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
