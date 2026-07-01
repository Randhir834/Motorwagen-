import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import {
  ArrowRight, ChevronDown, Star, Award, Users, ShieldCheck, MapPin,
  Check, ChevronUp, Shield, Layers, Sparkles, Droplets, Sofa, Bike,
  Phone, Calendar, Zap, TrendingUp,
} from 'lucide-react';
import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import logo from '@/assets/logo.jpeg';
import { SERVICES, TESTIMONIALS, PACKAGES, FAQ_ITEMS, BLOG_POSTS, GALLERY_ITEMS, STATS } from '@/data/siteData';

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
        description="MotorView — India's premium car detailing studio. Ceramic coating, PPF, interior detailing & more."
        keywords="car detailing India, ceramic coating, PPF, auto detailing" />

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-brand-black">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* Red radial glow */}
        <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(200,0,0,0.10) 0%, transparent 70%)'}} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-black to-transparent" />

        <div className="relative z-10 container-mv w-full text-center pt-24 pb-12">
          <AnimatedSection delay={0}>
            <span className="section-label justify-center text-xs">
              Luxury Auto Detailing
            </span>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <div className="flex justify-center my-5 sm:my-6">
              <img src={logo} alt="MotorView"
                className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain
                  drop-shadow-[0_4px_40px_rgba(200,0,0,0.45)]" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={240}>
            <p className="text-brand-silver text-base sm:text-lg md:text-xl
              max-w-xs sm:max-w-sm md:max-w-xl mx-auto leading-relaxed font-light">
              Where precision meets passion — protecting and perfecting vehicles
              with India's finest detailing expertise.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={360}>
            <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/book-appointment" className="btn-primary w-full xs:w-auto">
                Book Now <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn-outline w-full xs:w-auto">
                View Services
              </Link>
            </div>
          </AnimatedSection>

          {/* Quick trust signals */}
          <AnimatedSection delay={480}>
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {[
                { icon: Zap, text: '24hr Confirmation' },
                { icon: MapPin, text: 'Doorstep Available' },
                { icon: ShieldCheck, text: 'Satisfaction Guaranteed' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-brand-silver/70 text-xs sm:text-sm">
                  <Icon size={13} className="text-brand-red flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span className="text-brand-silver/40 text-2xs uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} className="text-brand-red animate-bounce" />
        </div>
      </section>

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
                India's Most Trusted{' '}
                <span className="text-red-gradient">Auto Detailing</span> Studio
              </h2>
              <span className="accent-line mt-4 block" />
              <p className="mt-5 text-brand-silver text-sm sm:text-base leading-relaxed mb-6">
                Founded in 2016, MotorView has redefined auto care in India. We combine
                European detailing standards with certified products to deliver results
                that don't just clean your car — they transform it.
              </p>
              <ul className="space-y-3 mb-8">
                {['Certified technicians trained by industry leaders',
                  'Only professional-grade, imported detailing products',
                  'Satisfaction guarantee on every service',
                  'Available in 12+ cities with doorstep service',
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
                <a href="tel:+919999999999" className="btn-outline"><Phone size={14} /> Call Us</a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} direction="left">
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute -top-3 -left-3 right-3 bottom-3 border border-brand-red/20 z-0" />
                <Img className="w-full aspect-[4/3] relative z-10" g="from-[#1a0505] via-brand-card to-brand-dark" />
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
            <SectionTitle label="Why MotorView"
              title={<>Built on <span className="text-red-gradient">Excellence</span></>}
              subtitle="Four pillars that set us apart from every other detailing studio in the country."
              center />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {[
              { icon: Award,       title: 'Premium Products',   desc: 'Certified professional-grade products from CarPro, Gyeon, Gtechniq — brands the world trusts.' },
              { icon: Users,       title: 'Expert Team',        desc: 'Factory-trained, certified technicians who treat every vehicle with the care it deserves.' },
              { icon: ShieldCheck, title: 'Guaranteed Results', desc: 'Every service is backed by our satisfaction guarantee. Not happy? We redo it free.' },
              { icon: MapPin,      title: 'Doorstep Service',   desc: 'Our mobile units bring studio-quality detailing to your home or office — fully equipped.' },
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
          6. BEFORE / AFTER
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Transformation" center
              title={<>See the <span className="text-red-gradient">Difference</span></>}
              subtitle="Drag the handle left and right to compare our before and after results." />
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="max-w-3xl mx-auto">
              <div className="relative border border-brand-border overflow-hidden shadow-card-lg">
                <ReactCompareSlider
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{ background:'#C80000', border:'3px solid rgba(255,255,255,0.2)', color:'#fff', width:44, height:44 }}
                      linesStyle={{ color:'rgba(200,0,0,0.5)', width:2 }}
                    />
                  }
                  itemOne={
                    <div className="w-full h-64 sm:h-80 md:h-[440px] bg-gradient-to-br from-[#2a2a2a] via-[#333] to-[#1a1a1a] flex flex-col justify-end p-4 sm:p-6">
                      <span className="self-start bg-brand-black/80 backdrop-blur-sm text-brand-silver text-xs px-3 py-1 uppercase tracking-widest border border-brand-border">Before</span>
                    </div>
                  }
                  itemTwo={
                    <div className="w-full h-64 sm:h-80 md:h-[440px] bg-gradient-to-br from-[#1a0505] via-[#2d0808] to-[#180505] flex flex-col justify-end p-4 sm:p-6">
                      <span className="self-start bg-brand-red text-white text-xs px-3 py-1 uppercase tracking-widest font-semibold">After</span>
                    </div>
                  }
                  style={{ width:'100%' }}
                />
              </div>
              <p className="text-center text-brand-silver/50 text-xs mt-3 tracking-widest uppercase">← Drag to Compare →</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. PACKAGES
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
                  <Link to="/book-appointment"
                    className={`${pkg.highlighted ? 'btn-primary' : 'btn-outline'} w-full justify-center`}>
                    Get Started <ArrowRight size={14} />
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
          8. TESTIMONIALS
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
            {TESTIMONIALS.map(t => (
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. GALLERY PREVIEW
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Our Work" center
              title={<>Transformations That <span className="text-red-gradient">Speak</span></>} />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {GALLERY_ITEMS.slice(0, 6).map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 55}>
                <div className={`relative group overflow-hidden ${i === 0 ? 'row-span-2' : ''}`}
                  style={{ aspectRatio: i === 0 ? '3/4' : '16/9' }}>
                  <Img className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                    g={i % 2 === 0 ? 'from-brand-card to-[#1a0505]' : 'from-[#0d0505] to-brand-dark'} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="text-white font-semibold text-xs sm:text-sm leading-tight">{item.title}</p>
                    <span className="text-brand-red text-2xs uppercase tracking-widest">{item.category}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link to="/gallery" className="btn-outline">View Full Gallery <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. BLOG PREVIEW
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#2d0808] to-[#0d0505]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-red" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-red" />

        <div className="relative container-mv text-center">
          <AnimatedSection>
            <span className="section-label justify-center">Get Started Today</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              Ready to Transform<br className="hidden sm:block" /> Your{' '}
              <span className="text-red-gradient">Vehicle?</span>
            </h2>
            <p className="text-brand-silver text-sm sm:text-base md:text-lg max-w-lg mx-auto mb-8 sm:mb-10 font-light">
              Join 4,800+ satisfied clients who trust MotorView to keep their vehicles in flawless condition.
            </p>
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/book-appointment" className="btn-primary w-full xs:w-auto">
                <Calendar size={15} /> Book Appointment
              </Link>
              <Link to="/contact" className="btn-outline w-full xs:w-auto">Contact Us</Link>
            </div>
            {/* Mini trust badges */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {[
                { val: '4.9★', label: 'Average Rating' },
                { val: '5,000+', label: 'Cars Detailed' },
                { val: '10yr', label: 'PPF Warranty' },
              ].map(b => (
                <div key={b.label} className="text-center">
                  <div className="text-brand-red font-display font-bold text-lg sm:text-xl">{b.val}</div>
                  <div className="text-brand-silver/60 text-2xs uppercase tracking-widest">{b.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          12. FAQs
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <AnimatedSection>
              <SectionTitle label="FAQs"
                title={<>Frequently Asked <span className="text-red-gradient">Questions</span></>}
                subtitle="Quick answers to what our clients ask most. Full FAQ page has all 10 questions." />
              <div className="hidden lg:block mt-8">
                <div className="card-dark p-6 border-l-2 border-brand-red">
                  <p className="text-brand-silver text-sm leading-relaxed mb-4">
                    Can't find your answer? Our team is available 7 days a week.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-primary !text-xs">
                      WhatsApp Us
                    </a>
                    <Link to="/contact" className="btn-outline !text-xs">Contact Form</Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="border border-brand-border overflow-hidden">
                {FAQ_ITEMS.slice(0, 5).map(faq => (
                  <FaqRow key={faq.id} faq={faq} open={openFaq === faq.id}
                    toggle={() => setOpenFaq(p => p === faq.id ? null : faq.id)} />
                ))}
              </div>
              <div className="mt-5 text-right">
                <Link to="/faqs" className="btn-ghost text-xs">View All 10 FAQs <ArrowRight size={13} /></Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
