import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';

import SEO from '@/components/SEO/SEO';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { FAQ_ITEMS } from '@/data/siteData';

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-brand-border hover:border-brand-red/40 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-${faq.id}`}
      >
        <span className="text-brand-white font-medium pr-4 leading-snug">{faq.question}</span>
        <span className="flex-shrink-0 ml-2">
          {isOpen
            ? <ChevronUp size={17} className="text-brand-red" />
            : <ChevronDown size={17} className="text-brand-silver" />
          }
        </span>
      </button>
      <div
        id={`faq-${faq.id}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className="px-6 pb-5 text-brand-silver text-sm leading-relaxed border-t border-brand-border pt-4">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = FAQ_ITEMS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const half = Math.ceil(filtered.length / 2);
  const leftColumn = filtered.slice(0, half);
  const rightColumn = filtered.slice(half);

  const toggleFaq = (id) => setOpenFaq((prev) => (prev === id ? null : id));

  return (
    <>
      <SEO
        title="FAQs"
        description="Frequently asked questions about MotorView's car detailing, ceramic coating, PPF, and auto care services. Find quick answers to common questions."
        keywords="car detailing FAQ, ceramic coating questions, PPF FAQ, auto detailing India questions"
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,0,0,0.06)_0%,transparent_70%)]" />
        <div className="container-mv relative z-10 text-center">
          <AnimatedSection>
            <span className="section-label justify-center">Help Centre</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mt-2">
              Frequently Asked <span className="text-red-gradient">Questions</span>
            </h1>
            <div className="accent-line mt-5 mx-auto block" />
            <p className="mt-5 text-brand-silver text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light">
              Find quick answers to the questions we hear most often. Can't find what you need? Contact us directly.
            </p>
          </AnimatedSection>

          {/* Search */}
          <AnimatedSection delay={200}>
            <div className="relative max-w-md mx-auto mt-8">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-silver" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-11"
                aria-label="Search frequently asked questions"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Accordion — 2 column desktop */}
      <section className="section-pad bg-brand-black">
        <div className="container-mv">
          {filtered.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-2">
              {/* Left column */}
              <div className="space-y-2">
                {leftColumn.map((faq) => (
                  <AnimatedSection key={faq.id}>
                    <FaqItem faq={faq} isOpen={openFaq === faq.id} onToggle={() => toggleFaq(faq.id)} />
                  </AnimatedSection>
                ))}
              </div>
              {/* Right column */}
              <div className="space-y-2">
                {rightColumn.map((faq) => (
                  <AnimatedSection key={faq.id} delay={100}>
                    <FaqItem faq={faq} isOpen={openFaq === faq.id} onToggle={() => toggleFaq(faq.id)} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-silver text-lg">No results found for "{searchQuery}"</p>
              <button onClick={() => setSearchQuery('')} className="mt-4 text-brand-red text-sm hover:underline">
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-pad bg-brand-dark border-t border-brand-border">
        <div className="container-mv text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-brand-silver max-w-lg mx-auto mb-8 text-sm">
              Our team is available 7 days a week to answer any questions you might have about our services,
              pricing, or your specific vehicle requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
