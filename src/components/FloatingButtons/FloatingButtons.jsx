import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-5 z-50 flex flex-col items-center gap-2.5"
      role="complementary" aria-label="Quick contact actions">

      {/* Back to top */}
      <button onClick={scrollToTop} aria-label="Scroll to top"
        className={`w-10 h-10 flex items-center justify-center
          bg-brand-card border border-brand-border text-brand-silver
          hover:bg-brand-red hover:border-brand-red hover:text-white
          transition-all duration-300 shadow-card
          ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
      >
        <ArrowUp size={16} />
      </button>

      {/* Phone */}
      <a href="tel:+919999999999" aria-label="Call MotorView"
        className="w-11 h-11 flex items-center justify-center
          bg-brand-red text-white shadow-red-sm
          hover:bg-brand-red-light hover:shadow-red-md hover:-translate-y-0.5
          transition-all duration-300">
        <Phone size={18} />
      </a>

      {/* WhatsApp */}
      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
        aria-label="WhatsApp chat"
        className="w-12 h-12 flex items-center justify-center
          bg-[#25D366] text-white shadow-lg
          hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-xl
          transition-all duration-300"
        style={{ animation: 'pulseRed 2.4s ease-in-out infinite' }}
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
