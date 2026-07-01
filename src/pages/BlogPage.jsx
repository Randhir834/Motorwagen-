import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { BLOG_POSTS } from '@/data/siteData';

const CATEGORIES = ['All', 'Education', 'Maintenance', 'Tips', 'Guide'];

const GRADIENTS = [
  'from-brand-card to-[#180505]',
  'from-[#0d1a0d] to-brand-dark',
  'from-[#0d0d1a] to-brand-card',
  'from-[#180505] to-brand-dark',
];

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
        <div className="container-mv relative z-10 text-center">
          <AnimatedSection>
            <span className="section-label justify-center">Knowledge Base</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2">
              The <span className="text-red-gradient">Blog</span>
            </h1>
            <div className="accent-line mt-5 mx-auto block" />
            <p className="mt-5 text-brand-silver text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light">
              Expert insights, tips, and in-depth guides from our team of auto care specialists.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search + Filter + Grid */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          {/* Search Bar */}
          <AnimatedSection>
            <div className="relative max-w-lg mx-auto mb-8">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-silver" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-11"
                aria-label="Search blog posts"
              />
            </div>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection delay={50}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-sm font-medium uppercase tracking-widest transition-all duration-300
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
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filtered.map((post, i) => (
                <AnimatedSection key={post.id} delay={(i % 2) * 100}>
                  <div className="card-dark group h-full flex flex-col overflow-hidden">
                    {/* Image placeholder */}
                    <div className={`w-full aspect-video bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} transition-transform duration-500 group-hover:scale-[1.02]`} />
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-brand-red text-xs font-semibold uppercase tracking-widest border border-brand-red/40 px-2 py-0.5">
                          {post.category}
                        </span>
                        <span className="text-brand-silver text-xs">{post.date}</span>
                        <span className="text-brand-silver text-xs">{post.readTime}</span>
                      </div>
                      <h2 className="font-display text-xl font-bold text-brand-white mb-3 leading-tight group-hover:text-brand-red transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-brand-silver text-sm leading-relaxed flex-1">{post.excerpt}</p>
                      <div className="mt-6 pt-4 border-t border-brand-border">
                        <Link
                          to="/blog"
                          className="flex items-center gap-2 text-brand-red text-sm font-medium hover:gap-3 transition-all"
                          aria-label={`Read ${post.title}`}
                        >
                          Read Article <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-silver text-lg">No articles found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-4 text-brand-red text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark border-t border-brand-border">
        <div className="container-mv text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-white mb-4">
              Have Questions? Talk to Our Experts
            </h2>
            <p className="text-brand-silver max-w-lg mx-auto mb-8">
              Our team is happy to advise you on the best service for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">Contact Us <ArrowRight size={16} /></Link>
              <Link to="/faqs" className="btn-outline">View FAQs</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
