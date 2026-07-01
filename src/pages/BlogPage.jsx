import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileText, BookOpen, Lightbulb, Map } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { BLOG_POSTS } from '@/data/siteData';

const CATEGORIES = ['All', 'Education', 'Maintenance', 'Tips', 'Guide'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Blog"
        description="MotorView blog — expert tips, guides, and insights on car detailing, ceramic coating, PPF, and vehicle care."
        keywords="car detailing blog, ceramic coating tips, PPF guide, auto detailing tips India"
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.06)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10 text-center px-4">
          <AnimatedSection>
            <span className="section-label justify-center">Knowledge Base</span>
            <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2">
              The <span className="text-red-gradient">Blog</span>
            </h1>
            <div className="accent-line mt-4 sm:mt-5 mx-auto block" />
            <p className="mt-4 sm:mt-5 text-brand-silver text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light">
              Expert insights, tips, and in-depth guides from our team of auto care specialists.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search + Filter + Grid */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv px-4">
          {/* Search Bar */}
          <AnimatedSection>
            <div className="relative max-w-lg mx-auto mb-6 sm:mb-8">
              <Search size={14} className="sm:w-4 sm:h-4 absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-brand-silver" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-9 sm:pl-11 text-sm"
                aria-label="Search blog posts"
              />
            </div>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection delay={50}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-300
                    ${activeCategory === cat
                      ? 'bg-brand-red text-white'
                      : 'border border-brand-border text-brand-silver hover:border-brand-red hover:text-brand-red'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((post, i) => {
              // Icon mapping for categories
              const categoryIcons = {
                'Education': FileText,
                'Maintenance': BookOpen,
                'Tips': Lightbulb,
                'Guide': Map,
              };
              const CategoryIcon = categoryIcons[post.category] || FileText;
              
              // Gradient colors for categories
              const categoryGradients = {
                'Education': 'from-blue-500/20 via-cyan-500/10 to-blue-600/20',
                'Maintenance': 'from-amber-500/20 via-orange-500/10 to-red-500/20',
                'Tips': 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
                'Guide': 'from-purple-500/20 via-pink-500/10 to-brand-red/20',
              };
              const gradient = categoryGradients[post.category] || categoryGradients.Education;
              
              return (
                <AnimatedSection key={post.id} delay={(i % 3) * 80}>
                  <article className="card-dark group h-full flex flex-col overflow-hidden hover:border-brand-red/40 transition-all duration-300">
                    <div className="relative overflow-hidden h-40 sm:h-48">
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                      <div className="absolute inset-0 bg-grid opacity-10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CategoryIcon size={50} className="sm:w-[60px] sm:h-[60px] text-brand-red/20 group-hover:text-brand-red/30 transition-colors duration-500" strokeWidth={1} />
                      </div>
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                        <span className="badge !text-2xs sm:!text-xs !px-2 sm:!px-2.5">{post.category}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                        <span className="text-brand-silver/60 text-2xs sm:text-xs">{post.date}</span>
                        <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-brand-border" />
                        <span className="text-brand-silver/60 text-2xs sm:text-xs">{post.readTime}</span>
                      </div>
                      <h2 className="font-display text-sm sm:text-base lg:text-lg font-bold text-brand-white mb-1.5 sm:mb-2 leading-snug
                        group-hover:text-brand-red transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-brand-silver text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3 mb-3 sm:mb-4">
                        {post.excerpt}
                      </p>
                      <button
                        className="mt-auto flex items-center gap-1 sm:gap-1.5 text-brand-red text-2xs sm:text-xs font-semibold uppercase tracking-widest hover:gap-2 sm:hover:gap-3 transition-all duration-200 self-start"
                      >
                        Read Article <ArrowRight size={11} className="sm:w-3 sm:h-3" />
                      </button>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <p className="text-brand-silver text-base sm:text-lg mb-3 sm:mb-4">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="btn-outline !text-xs sm:!text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#180505] via-[#2d0a0a] to-[#180505] border-y border-brand-red/20">
        <div className="container-mv text-center px-4">
          <AnimatedSection>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-brand-white mb-3 sm:mb-4">
              Want Expert Care for Your Vehicle?
            </h2>
            <p className="text-brand-silver text-xs sm:text-sm md:text-base max-w-lg mx-auto mb-6 sm:mb-8">
              Book your detailing appointment and experience the MotorView difference.
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
