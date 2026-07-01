import { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '@/utils/whatsapp';
import { CONTACT_INFO } from '@/utils/constants';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-4 right-3 xs:bottom-5 xs:right-4 sm:bottom-6 sm:right-5 z-50 flex flex-col items-center gap-2 sm:gap-2.5"
      role="complementary" aria-label="Quick contact actions">

      {/* Back to top */}
      <button onClick={scrollToTop} aria-label="Scroll to top"
        className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
          bg-brand-card border border-brand-border text-brand-silver
          hover:bg-brand-red hover:border-brand-red hover:text-white
          transition-all duration-300 shadow-card
          ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
      >
        <ArrowUp size={14} className="sm:w-4 sm:h-4" />
      </button>

      {/* Phone */}
      <a href={`tel:${CONTACT_INFO.PHONE}`} aria-label="Call Motorwagen Evolution"
        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center
          bg-brand-red text-white shadow-red-sm
          hover:bg-brand-red-light hover:shadow-red-md hover:-translate-y-0.5
          transition-all duration-300">
        <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
      </a>

      {/* WhatsApp */}
      <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
        aria-label="WhatsApp chat"
        className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
          bg-[#25D366] text-white shadow-lg
          hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-xl
          transition-all duration-300"
        style={{ animation: 'pulseRed 2.4s ease-in-out infinite' }}
      >
        <FaWhatsapp size={18} className="sm:w-5 sm:h-5" />
      </a>
    </div>
  );
}
