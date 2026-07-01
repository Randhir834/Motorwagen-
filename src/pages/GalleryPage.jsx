import { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Sparkles, Shield, Wrench, Paintbrush, Droplets } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { GALLERY_ITEMS } from '@/data/siteData';

const FILTERS = ['All', 'Ceramic', 'PPF', 'Detailing', 'Interior'];

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.08)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10 text-center">
          <AnimatedSection>
            <span className="section-label justify-center">Our Portfolio</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2">
              The <span className="text-red-gradient">Gallery</span>
            </h1>
            <div className="accent-line mt-5 mx-auto block" />
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
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-300
                    ${activeFilter === filter
                      ? 'bg-brand-red text-white border-brand-red'
                      : 'border border-brand-border text-brand-silver hover:border-brand-red hover:text-brand-red'
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
              // Create diverse gradients and icons for each gallery type
              const visualConfig = {
                Ceramic: { 
                  beforeGradient: 'from-gray-600 via-gray-700 to-gray-800',
                  afterGradient: 'from-blue-500 via-cyan-500 to-blue-600',
                  icon: Shield 
                },
                PPF: { 
                  beforeGradient: 'from-gray-700 via-gray-800 to-gray-900',
                  afterGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
                  icon: Shield 
                },
                Detailing: { 
                  beforeGradient: 'from-stone-600 via-stone-700 to-stone-800',
                  afterGradient: 'from-amber-500 via-orange-500 to-red-500',
                  icon: Sparkles 
                },
                Interior: { 
                  beforeGradient: 'from-slate-600 via-slate-700 to-slate-800',
                  afterGradient: 'from-rose-500 via-pink-500 to-purple-500',
                  icon: Paintbrush 
                }
              };
              
              const config = visualConfig[item.category] || visualConfig.Detailing;
              const Icon = config.icon;
              
              return (
                <AnimatedSection key={item.id} delay={(i % 2) * 100}>
                  <div className="card-dark overflow-hidden group hover:border-brand-red/40 transition-all duration-300">
                    <ReactCompareSlider
                      handle={
                        <ReactCompareSliderHandle
                          buttonStyle={{
                            background: '#C80000',
                            border: '3px solid rgba(255,255,255,0.2)',
                            color: '#fff',
                            width: 44,
                            height: 44,
                          }}
                          linesStyle={{ color: 'rgba(200,0,0,0.5)', width: 2 }}
                        />
                      }
                      itemOne={
                        <div className={`relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-gradient-to-br ${config.beforeGradient}`}>
                          <div className="absolute inset-0 bg-grid opacity-5" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Car size={80} className="sm:w-28 sm:h-28 md:w-32 md:h-32 text-white/10" strokeWidth={1} />
                          </div>
                          <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-brand-black/80 backdrop-blur-sm text-brand-silver text-2xs sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 uppercase tracking-widest border border-brand-border">
                            Before
                          </span>
                        </div>
                      }
                      itemTwo={
                        <div className={`relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-gradient-to-br ${config.afterGradient}`}>
                          <div className="absolute inset-0 bg-dots opacity-5" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                              <Icon size={70} className="sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px] text-white/30" strokeWidth={1.5} />
                              <div className="absolute inset-0 bg-white/10 blur-3xl animate-pulse" />
                            </div>
                          </div>
                          <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-brand-red text-white text-2xs sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 uppercase tracking-widest font-semibold">
                            After
                          </span>
                        </div>
                      }
                      style={{ width: '100%' }}
                    />
                    <div className="p-4 sm:p-5 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 xs:gap-2 bg-brand-black/50">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-brand-white font-semibold text-sm sm:text-base mb-1 truncate">{item.title}</h3>
                        <span className="text-brand-red text-2xs sm:text-xs uppercase tracking-widest">{item.category}</span>
                      </div>
                      <Link
                        to="/contact"
                        className="text-2xs sm:text-xs text-brand-silver hover:text-brand-red transition-colors flex items-center gap-1 sm:gap-1.5 font-medium whitespace-nowrap"
                      >
                        Book Similar <ArrowRight size={12} className="sm:w-[13px] sm:h-[13px]" />
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#180505] via-[#2d0a0a] to-[#180505] border-y border-brand-red/20">
        <div className="container-mv text-center px-4">
          <AnimatedSection>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-white mb-3 sm:mb-4">
              Want Results Like These?
            </h2>
            <p className="text-brand-silver text-sm sm:text-base max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
              Book your appointment today and let our experts transform your vehicle.
            </p>
            <Link to="/contact" className="btn-primary w-full xs:w-auto justify-center">
              Contact Us <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
