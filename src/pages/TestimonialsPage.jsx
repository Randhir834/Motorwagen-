import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Star, ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { TESTIMONIALS, STATS } from '@/data/siteData';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < rating ? 'text-brand-red fill-brand-red' : 'text-brand-border'} />
      ))}
    </div>
  );
}

function StatCounter({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-brand-red">
        {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : '0'}
        <span>{stat.suffix}</span>
      </div>
      <p className="text-brand-silver text-sm mt-2 uppercase tracking-widest">{stat.label}</p>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="Read what MotorView clients say about our car detailing, ceramic coating, and PPF services. 4,800+ happy clients across India."
        keywords="MotorView reviews, car detailing reviews India, ceramic coating testimonials"
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.06)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10 text-center">
          <AnimatedSection>
            <span className="section-label justify-center">Client Stories</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2">
              What Our <span className="text-red-gradient">Clients</span> Say
            </h1>
            <div className="accent-line mt-5 mx-auto block" />
            <p className="mt-5 text-brand-silver text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light">
              Real testimonials from real automobile enthusiasts who trust MotorView with their most prized possessions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Large Swiper Carousel */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 1 }, 1024: { slidesPerView: 1 } }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-12 max-w-4xl mx-auto"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="card-dark p-10 md:p-14">
                  <StarRating rating={t.rating} />
                  <p className="text-brand-white text-xl md:text-2xl font-display italic leading-relaxed mt-6 mb-8">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-5 pt-6 border-t border-brand-border">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-red/40 to-brand-card flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-red font-bold text-xl">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-brand-white font-semibold">{t.name}</p>
                      <p className="text-brand-silver text-sm">{t.car} · {t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-brand-dark border-y border-brand-border">
        <div className="container-mv">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-brand-border">
            {STATS.map((stat) => (
              <StatCounter key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Grid of all reviews */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          <AnimatedSection>
            <SectionTitle
              label="All Reviews"
              title={<>Voices of <span className="text-red-gradient">Satisfaction</span></>}
              subtitle="Every review is from a verified MotorView client."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 80}>
                <div className="card-dark p-5 sm:p-7 lg:p-8 h-full flex flex-col">
                  <StarRating rating={t.rating} />
                  <p className="text-brand-silver text-sm leading-relaxed mt-4 flex-1 italic">
                    "{t.text}"
                  </p>
                  <div className="mt-6 pt-5 border-t border-brand-border flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red/30 to-brand-card flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-red font-bold text-lg">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-brand-white font-semibold text-sm">{t.name}</p>
                      <p className="text-brand-silver text-xs">{t.car}</p>
                      <p className="text-brand-silver text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#180505] via-[#2d0a0a] to-[#180505] border-y border-brand-red/20">
        <div className="container-mv text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-brand-white mb-4">
              Be Our Next Happy Client
            </h2>
            <p className="text-brand-silver max-w-lg mx-auto mb-8">
              Join 4,800+ satisfied clients and experience the MotorView difference for yourself.
            </p>
            <Link to="/book-appointment" className="btn-primary">
              Book Now <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
