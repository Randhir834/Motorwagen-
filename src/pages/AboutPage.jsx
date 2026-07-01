import { Link } from 'react-router-dom';
import { ArrowRight, Check, Award, Users, ShieldCheck, MapPin } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { STATS, TEAM_MEMBERS, WHY_CHOOSE_US } from '@/data/siteData';

const ICON_MAP = { Award, Users, ShieldCheck, MapPin };
function Img({ className, g }) {
  return <div className={`bg-gradient-to-br ${g || 'from-brand-card to-brand-dark'} ${className}`} aria-hidden />;
}
function Stat({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  return (
    <div ref={ref} className="text-center px-4 py-6">
      <div className="stat-number">
        {inView ? <CountUp end={stat.value} duration={2.2} separator="," /> : '0'}{stat.suffix}
      </div>
      <p className="text-brand-silver text-xs uppercase tracking-[0.2em] mt-2">{stat.label}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <SEO title="About Us"
        description="Learn the story behind MotorView — India's premium auto detailing studio."
        keywords="about MotorView, car detailing team, auto detailing India" />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-mv relative z-10">
          <AnimatedSection>
            <span className="section-label">Our Story</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2">
              About <span className="text-red-gradient">MotorView</span>
            </h1>
            <span className="accent-line mt-5 block" />
            <p className="mt-5 text-brand-silver text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light">
              Eight years of passion, precision, and a relentless pursuit of perfection for every vehicle we touch.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="section-label">The Beginning</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white mt-2">
                Started by a Petrolhead,{' '}
                <span className="text-red-gradient">Built for Petrolheads</span>
              </h2>
              <span className="accent-line mt-4 block" />
              <div className="mt-5 space-y-4 text-brand-silver text-sm sm:text-base leading-relaxed">
                <p>MotorView was born in 2016 in a small garage in Gurugram when our founder Rajan Khanna, frustrated by the lack of professional detailing options in India, decided to bring European-standard auto care to Indian car lovers.</p>
                <p>Armed with certifications from CarPro and Gtechniq, and fuelled by an obsessive love for automobiles, Rajan built what started as a one-man operation into India's most trusted detailing brand, serving clients across 12 cities.</p>
                <p>Today, our team of 25+ certified technicians has detailed over 5,000 vehicles — from daily commuters to exotic supercars — always with the same obsessive attention to detail.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150} direction="left">
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute -top-3 -right-3 left-3 bottom-3 border border-brand-red/20" />
                <Img className="w-full aspect-[4/3] relative z-10" g="from-[#1a0505] via-brand-card to-brand-dark" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-pad bg-brand-dark relative">
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="container-mv relative">
          <AnimatedSection>
            <SectionTitle label="Purpose" title={<>Mission & <span className="text-red-gradient">Vision</span></>} center />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {[
              { icon: Award, title: 'Our Mission', text: 'To provide world-class automotive protection and detailing services that preserve the beauty, value, and integrity of every vehicle entrusted to us — using only the finest products and techniques available.' },
              { icon: ShieldCheck, title: 'Our Vision', text: 'To become the most recognised and trusted auto detailing brand in South Asia, setting the benchmark for quality, customer experience, and innovation in vehicle care across every city we serve.' },
            ].map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 120}>
                <div className="card-dark p-7 sm:p-10 h-full border-t-2 border-t-brand-red">
                  <div className="w-12 h-12 bg-brand-red/10 border border-brand-red/25 flex items-center justify-center mb-5">
                    <card.icon size={22} className="text-brand-red" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-white mb-3">{card.title}</h3>
                  <p className="text-brand-silver text-sm sm:text-base leading-relaxed">{card.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-black border-y border-brand-border">
        <div className="container-mv">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.id} className={`${i < 3 ? 'border-r border-brand-border/60' : ''} ${i < 2 ? 'border-b md:border-b-0 border-brand-border/60' : ''}`}>
                <Stat stat={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-brand-dark">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="The People"
              title={<>Meet Our <span className="text-red-gradient">Expert Team</span></>}
              subtitle="The dedicated professionals behind every flawless finish." center />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TEAM_MEMBERS.map((m, i) => (
              <AnimatedSection key={m.id} delay={i * 80}>
                <div className="card-dark group overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <Img className="w-full aspect-square transition-transform duration-700 group-hover:scale-105"
                      g="from-brand-card to-[#1a0505]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="font-display text-base sm:text-lg font-bold text-brand-white">{m.name}</h3>
                    <p className="text-brand-red text-2xs uppercase tracking-widest mt-1 mb-3 font-semibold">{m.role}</p>
                    <p className="text-brand-silver text-xs sm:text-sm leading-relaxed flex-1">{m.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle label="Why Us"
              title={<>The <span className="text-red-gradient">MotorView</span> Difference</>} center />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = ICON_MAP[item.icon] || Award;
              return (
                <AnimatedSection key={item.id} delay={i * 80}>
                  <div className="card-glass p-6 sm:p-8 text-center h-full flex flex-col items-center">
                    <div className="w-14 h-14 bg-brand-red/10 border border-brand-red/25 flex items-center justify-center mb-5
                      hover:bg-brand-red/20 transition-colors">
                      <Icon size={24} className="text-brand-red" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-brand-white mb-3">{item.title}</h3>
                    <p className="text-brand-silver text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#2d0808] to-[#0d0505]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-mv relative text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for the <span className="text-red-gradient">MotorView</span> Experience?
            </h2>
            <p className="text-brand-silver max-w-xl mx-auto mb-8 text-sm sm:text-base font-light">
              Book your appointment today and let our experts transform your vehicle.
            </p>
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3">
              <Link to="/book-appointment" className="btn-primary w-full xs:w-auto">
                Book Now <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn-outline w-full xs:w-auto">View Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
