import { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { GALLERY_ITEMS } from '@/data/siteData';

const FILTERS = ['All', 'Ceramic', 'PPF', 'Detailing', 'Interior'];

// Gradient pairs for before/after placeholders
const GRADIENT_PAIRS = [
  { before: 'from-[#2a2a2a] to-[#1a1a1a]', after: 'from-[#1a1004] to-brand-card' },
  { before: 'from-[#1a1a2a] to-[#0d0d1a]', after: 'from-[#0d1a0d] to-brand-dark' },
  { before: 'from-[#2a1a0d] to-[#1a1a1a]', after: 'from-[#1a1004] to-[#2d1f00]' },
  { before: 'from-[#1a2a2a] to-[#0d1a1a]', after: 'from-brand-card to-[#0d1a0d]' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <>
      <SEO
        title="Gallery"
        description="See MotorView's work — before and after transformations from ceramic coating, PPF, car detailing, and interior detailing projects."
        keywords="car detailing gallery, ceramic coating before after, PPF installation, car transformation"
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,0.06)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10 text-center">
          <AnimatedSection>
            <span className="section-label justify-center">Our Portfolio</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2">
              The <span className="text-gold-gradient">Gallery</span>
            </h1>
            <div className="w-16 h-0.5 bg-gradient-gold mt-5 mx-auto" />
            <p className="mt-5 text-brand-silver text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
              Real results from real vehicles. Drag the sliders to compare before and after each transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          {/* Filter Buttons */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 text-sm font-medium uppercase tracking-widest transition-all duration-300
                    ${activeFilter === filter
                      ? 'bg-brand-gold text-brand-black'
                      : 'border border-brand-border text-brand-silver hover:border-brand-gold hover:text-brand-gold'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {filtered.map((item, i) => {
              const pair = GRADIENT_PAIRS[i % GRADIENT_PAIRS.length];
              return (
                <AnimatedSection key={item.id} delay={(i % 2) * 100}>
                  <div className="card-dark overflow-hidden">
                    <ReactCompareSlider
                      handle={
                        <ReactCompareSliderHandle
                          buttonStyle={{
                            background: '#C9A84C',
                            border: '2px solid #C9A84C',
                            color: '#0A0A0A',
                          }}
                        />
                      }
                      itemOne={
                        <div className={`w-full h-64 md:h-72 bg-gradient-to-br ${pair.before} flex items-end p-4`}>
                          <span className="bg-brand-black/80 text-brand-silver text-xs px-3 py-1 uppercase tracking-widest">
                            Before
                          </span>
                        </div>
                      }
                      itemTwo={
                        <div className={`w-full h-64 md:h-72 bg-gradient-to-br ${pair.after} flex items-end p-4`}>
                          <span className="bg-brand-gold text-brand-black text-xs px-3 py-1 uppercase tracking-widest font-semibold">
                            After
                          </span>
                        </div>
                      }
                      style={{ width: '100%' }}
                    />
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <h3 className="text-brand-white font-semibold text-sm">{item.title}</h3>
                        <span className="text-brand-gold text-xs uppercase tracking-widest">{item.category}</span>
                      </div>
                      <Link
                        to="/book-appointment"
                        className="text-xs text-brand-silver hover:text-brand-gold transition-colors flex items-center gap-1"
                      >
                        Book Similar <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-brand-silver">
              No items found for this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a1004] via-[#2d1f00] to-[#1a1004] border-y border-brand-gold/20">
        <div className="container-mv text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-brand-white mb-4">
              Want Results Like These?
            </h2>
            <p className="text-brand-silver max-w-lg mx-auto mb-8">
              Book your appointment today and let our experts transform your vehicle.
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
