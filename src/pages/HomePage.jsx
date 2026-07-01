import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight, ChevronDown, Star, Award, Users, ShieldCheck, MapPin,
  Check, Shield, Layers, Sparkles, Droplets, Sofa, Bike,
  Phone, Calendar, Zap, TrendingUp, Car,
} from 'lucide-react';
import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import VideoHero from '@/components/VideoHero/VideoHero';
import logo from '@/assets/logo.jpeg';
import carVideo from '@/assets/CAR.mp4';
import { SERVICES, TESTIMONIALS, PACKAGES, FAQ_ITEMS, BLOG_POSTS, STATS } from '@/data/siteData';

const ICON_MAP = { Shield, Layers, Sparkles, Droplets, Sofa, Bike };

/* ── Helpers ──────────────────────────────────────────────── */
function Img({ className, g }) {
  return <div className={`bg-gradient-to-br ${g || 'from-brand-card to-brand-dark'} ${className}`} aria-hidden />;
}

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className={i < n ? 'text-brand-red fill-brand-red' : 'text-brand-border'} />
      ))}
    </div>
  );
}

function StatBox({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  return (
    <div ref={ref} className="text-center px-4 py-6 sm:py-8">
      <div className="stat-number">
        {inView ? <CountUp end={stat.value} duration={2.2} separator="," /> : '0'}
        {stat.suffix}
      </div>
      <p className="text-brand-silver text-xs sm:text-sm mt-2 uppercase tracking-[0.2em] font-medium">{stat.label}</p>
    </div>
  );
}

function FaqRow({ faq, open, toggle }) {
  return (
    <div className={`border-b border-brand-border transition-colors duration-200 ${open ? 'bg-brand-red/[0.03]' : 'hover:bg-brand-card'}`}>
      <button onClick={toggle} className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4"
        aria-expanded={open}>
        <span className="text-brand-white text-sm sm:text-base font-medium leading-snug">{faq.question}</span>
        <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center border transition-all duration-300
          ${open ? 'border-brand-red bg-brand-red text-white rotate-180' : 'border-brand-border text-brand-silver'}`}>
          <ChevronDown size={14} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-brand-silver text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO title="Premium Auto Detailing"
        description="Motorwagen Evolution — The Car Revolution Company. Premium car detailing, Graphene coating, Borophene coating, PPF & more."
        keywords="car detailing India, graphene coating, borophene coating, PPF, auto detailing" />

      {/* ══════════════════════════════════════════
          1. VIDEO HERO
      ══════════════════════════════════════════ */}
      <VideoHero videoSrc={carVideo}>
        <AnimatedSection delay={0}>
          <span className="section-label justify-center text-xs">
            Luxury Auto Detailing
          </span>
        </AnimatedSection>

        <AnimatedSection delay={120}>
          <div className="flex justify-center my-6">
            <img src={logo} alt="MotorView"
              className="w-56 sm:w-72 md:w-96 lg:w-[28rem] h-auto object-contain
                drop-shadow-[0_8px_50px_rgba(200,0,0,0.6)]" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={240}>
          <h1 className="text-brand-white font-display font-bold mb-4 leading-tight" 
            style={{ fontSize: 'clamp(1.875rem, 6vw, 3.75rem)' }}>
            The Car <span className="text-red-gradient">Revolution</span> Company
          </h1>
          <p className="text-brand-silver mx-auto leading-relaxed font-light"
            style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              maxWidth: 'clamp(20rem, 60vw, 42rem)'
            }}>
            Advanced coating technology protecting vehicles with India's most innovative detailing solutions
          </p>
        </AnimatedSection>

        <AnimatedSection delay={360}>
          <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link to="/services" className="btn-primary w-full xs:w-auto text-base">
              View Services <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline w-full xs:w-auto text-base">
              Contact Us
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={480}>
          <div className="flex flex-wrap items-center justify-center" 
            style={{ 
              marginTop: 'clamp(2.5rem, 6vw, 3.5rem)',
              gap: 'clamp(1.25rem, 4vw, 2rem)' 
            }}>
            {[
              { icon: Zap, text: '24hr Confirmation' },
              { icon: MapPin, text: 'Doorstep Available' },
              { icon: ShieldCheck, text: 'Satisfaction Guaranteed' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center text-brand-white/80 font-medium"
                style={{ 
                  gap: 'clamp(0.375rem, 1.5vw, 0.5rem)',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                }}>
                <Icon className="text-brand-red flex-shrink-0" style={{ width: 'clamp(1rem, 3vw, 1.125rem)', height: 'clamp(1rem, 3vw, 1.125rem)' }} />
                <span className="whitespace-nowrap">{text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </VideoHero>

      {/* ══════════════════════════════════════════
          2. STATS BAR
      ══════════════════════════════════════════ */}
      <section className="bg-brand-dark border-y border-brand-border relative overflow-hidden">
        <div className="absolute inset-0" style={{background:'linear-gradient(90deg,transparent,rgba(200,0,0,0.04),transparent)'}} />
        <div className="container-mv">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.id} className={`${i < 3 ? 'border-r border-brand-border/60' : ''} ${i < 2 ? 'border-b md:border-b-0 border-brand-border/60' : ''}`}>
                <StatBox stat={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. ABOUT SNIPPET
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="section-label">Who We Are</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white mt-2 leading-tight">
                India's Leading{' '}
                <span className="text-red-gradient">Car Revolution</span> Company
              </h2>
              <span className="accent-line mt-4 block" />
              <p className="mt-5 text-brand-silver text-sm sm:text-base leading-relaxed mb-6">
                Motorwagen Evolution brings revolutionary coating technology to India. From advanced
                Graphene and Borophene coatings to premium ceramic protection, we deliver results
                that don't just protect your car — they transform it.
              </p>
              <ul className="space-y-3 mb-8">
                {['Advanced Graphene & Borophene coating technology',
                  'Professional-grade protection with extended warranties',
                  'FREE Carware Sunfilm with coating packages',
                  'Satisfaction guarantee on every service',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-3 text-brand-silver text-sm">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center bg-brand-red/10 border border-brand-red/30">
                      <Check size={11} className="text-brand-red" />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link to="/about" className="btn-primary">Our Story <ArrowRight size={15} /></Link>
                <a href="tel:+917899741100" className="btn-outline"><Phone size={14} /> Call Us</a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} direction="left">
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute -top-3 -left-3 right-3 bottom-3 border border-brand-red/20 z-0" />
                <div className="relative z-10 w-full aspect-[4/3] overflow-hidden border border-brand-border bg-brand-dark">
                  {/* Modern SVG Illustration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-brand-red/5" />
                  <div className="absolute inset-0 bg-grid opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <Car size={120} className="text-brand-red/20" strokeWidth={1} />
                      <Sparkles size={40} className="absolute -top-4 -right-4 text-brand-red/40 animate-pulse" />
                      <Shield size={40} className="absolute -bottom-2 -left-2 text-brand-red/40 animate-pulse" style={{animationDelay: '0.5s'}} />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 z-20 bg-brand-red px-5 sm:px-6 py-3 sm:py-4 shadow-red-md">
                  <div className="font-display text-2xl sm:text-3xl font-black text-white">8+</div>
                  <div className="text-2xs sm:text-xs font-semibold uppercase tracking-wider text-white/80">Years of Excellence</div>
                </div>
                {/* Floating badge */}
                <div className="absolute top-4 left-4 z-20 bg-brand-black/90 backdrop-blur-sm border border-brand-border px-3 py-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-brand-red" />
                    <span className="text-brand-white text-xs font-semibold">5,000+ Cars Detailed</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. SERVICES GRID
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-dark relative">
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="container-mv relative">
          <AnimatedSection>
            <SectionTitle label="What We Do"
              title={<>Our <span className="text-red-gradient">Premium</span> Services</>}
              subtitle="From protective coatings to deep interior cleaning, every service is performed with precision and care."
              center />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {SERVICES.map((svc, i) => {
              const Icon = ICON_MAP[svc.icon] || Shield;
              return (
                <AnimatedSection key={svc.id} delay={i * 70}>
                  <div className="card-dark p-6 sm:p-7 lg:p-8 group h-full flex flex-col relative overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 to-brand-red/0 group-hover:from-brand-red/[0.04] group-hover:to-transparent transition-all duration-500" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-black border border-brand-border
                        flex items-center justify-center mb-5 sm:mb-6
                        group-hover:border-brand-red/50 group-hover:bg-brand-red/[0.07]
                        transition-all duration-300">
                        <Icon size={20} className="text-brand-red" />
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-brand-white mb-2 sm:mb-3">{svc.title}</h3>
                      <p className="text-brand-silver text-sm leading-relaxed flex-1">{svc.shortDesc}</p>
                      <div className="mt-4 pt-4 border-t border-brand-border flex items-center justify-between">
                        <span className="text-brand-red text-xs sm:text-sm font-bold">{svc.priceRange}</span>
                        <Link to={`/services/${svc.slug}`}
                          className="flex items-center gap-1 text-brand-silver hover:text-brand-red text-xs sm:text-sm font-medium transition-all duration-200 hover:gap-2">
                          Details <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={400}>
            <div className="text-center mt-8 sm:mt-10">
              <Link to="/services" className="btn-ghost">View All Services <ArrowRight size={15} /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Why Motorwagen Evolution"
              title={<>Built on <span className="text-red-gradient">Innovation</span></>}
              subtitle="Advanced coating technology that sets new standards in vehicle protection."
              center />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {[
              { icon: Award,       title: 'Advanced Technology',   desc: 'Cutting-edge Graphene and Borophene coating technology - the most advanced protection available in India.' },
              { icon: Users,       title: 'Extended Warranties',        desc: 'Industry-leading 5-7 year warranties backed by proven performance and customer satisfaction.' },
              { icon: ShieldCheck, title: 'Premium Benefits', desc: 'FREE Carware Sunfilm included with every coating package - maximum value for your investment.' },
              { icon: MapPin,      title: 'Expert Application',   desc: 'Professional installation by certified technicians ensuring perfect results every time.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 90}>
                <div className="card-glass p-6 sm:p-8 text-center group h-full flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-5
                    bg-brand-red/10 border border-brand-red/25
                    group-hover:bg-brand-red/20 group-hover:border-brand-red/50
                    transition-all duration-300">
                    <item.icon size={24} className="text-brand-red" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-brand-white mb-3">{item.title}</h3>
                  <p className="text-brand-silver text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. PACKAGES
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Pricing" center
              title={<>Transparent <span className="text-red-gradient">Pricing</span></>}
              subtitle="No hidden charges. Choose what fits your vehicle and budget." />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {PACKAGES.map((pkg, i) => (
              <AnimatedSection key={pkg.id} delay={i * 100}>
                <div className={`relative card-dark flex flex-col h-full p-6 sm:p-8 transition-all duration-400
                  ${pkg.highlighted ? 'border-brand-red shadow-red-md md:scale-[1.03] md:-translate-y-1' : ''}`}>
                  {pkg.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap
                      bg-brand-red text-white text-2xs font-bold px-4 py-1 uppercase tracking-[0.2em]">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4 sm:mb-5">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-white">{pkg.name}</h3>
                    <p className="text-brand-silver text-xs sm:text-sm mt-1">{pkg.tagline}</p>
                  </div>
                  <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-brand-border">
                    <span className="font-display text-3xl sm:text-4xl font-black text-brand-red">{pkg.price}</span>
                    <span className="text-brand-silver text-xs sm:text-sm ml-2">{pkg.period}</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 flex-1 mb-7 sm:mb-8">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-brand-silver text-xs sm:text-sm">
                        <Check size={13} className="text-brand-red flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className={`${pkg.highlighted ? 'btn-primary' : 'btn-outline'} w-full justify-center`}>
                    Contact Us <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing" className="btn-ghost">See Full Pricing & Add-ons <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="container-mv relative">
          <AnimatedSection>
            <SectionTitle label="Client Stories" center
              title={<>What Our <span className="text-red-gradient">Clients</span> Say</>}
              subtitle="Real experiences from automobile enthusiasts who trust MotorView." />
          </AnimatedSection>

          <Swiper modules={[Pagination, Autoplay]}
            spaceBetween={20} slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            className="pb-12 sm:pb-14">
            {TESTIMONIALS.slice(0, 3).map(t => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="card-glass h-full flex flex-col p-5 sm:p-7">
                  <Stars n={t.rating} />
                  <p className="text-brand-silver text-sm leading-relaxed mt-4 flex-1 italic">"{t.text}"</p>
                  <div className="mt-5 pt-4 border-t border-white/[0.07] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red/30 to-brand-card border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-red font-bold text-sm">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-brand-white font-semibold text-sm">{t.name}</p>
                      <p className="text-brand-silver text-xs">{t.car} · {t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <AnimatedSection delay={200}>
            <div className="text-center mt-6">
              <Link to="/testimonials" className="btn-outline inline-flex items-center gap-2">
                View All Reviews <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. BLOG PREVIEW
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Knowledge Base" center
              title={<>Latest from Our <span className="text-red-gradient">Blog</span></>} />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 90}>
                <div className="card-dark group h-full flex flex-col overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Img className="w-full aspect-video transition-transform duration-700 group-hover:scale-105"
                      g={i % 2 === 0 ? 'from-brand-card to-[#1a0505]' : 'from-brand-dark to-brand-card'} />
                    <div className="absolute top-3 left-3">
                      <span className="badge">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-brand-silver/60 text-xs">{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-brand-border" />
                      <span className="text-brand-silver/60 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-brand-white mb-2 leading-snug
                      group-hover:text-brand-red transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-brand-silver text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                    <Link to="/blog"
                      className="mt-4 flex items-center gap-1.5 text-brand-red text-xs font-semibold uppercase tracking-widest hover:gap-3 transition-all duration-200">
                      Read Article <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          11. CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-brand-dark to-brand-black" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-mv relative">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-label justify-center">Ready to Transform Your Vehicle?</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mt-2 leading-tight">
                Book Your <span className="text-red-gradient">Premium Detail</span> Today
              </h2>
              <p className="text-brand-silver text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
                Experience the MotorView difference. Professional service, guaranteed results, and a shine that lasts for years.
              </p>
              <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
                <Link to="/contact" className="btn-primary w-full xs:w-auto">
                  <Calendar size={16} /> Contact Us
                </Link>
                <a href="tel:+917899741100" className="btn-outline w-full xs:w-auto">
                  <Phone size={16} /> Call Now
                </a>
              </div>
              <p className="text-brand-silver/60 text-xs mt-6">
                ⚡ Most appointments confirmed within 2 hours
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          12. FAQ SECTION
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="FAQs" center
              title={<>Got <span className="text-red-gradient">Questions?</span></>}
              subtitle="Everything you need to know about our services, pricing, and process." />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="border border-brand-border overflow-hidden">
              {FAQ_ITEMS.slice(0, 6).map((faq, i) => (
                <FaqRow key={faq.id} faq={faq} open={openFaq === i} toggle={() => setOpenFaq(p => p === i ? null : i)} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/faqs" className="btn-ghost">View All FAQs <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
