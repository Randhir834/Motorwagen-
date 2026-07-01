import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, Shield } from 'lucide-react';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if modal has been shown in this session
    const hasSeenModal = sessionStorage.getItem('welcomeModalShown');
    
    if (!hasSeenModal) {
      // Small delay for better user experience
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('welcomeModalShown', 'true');
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop with blur effect */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto animate-scaleIn">
        <div className="relative bg-gradient-to-br from-brand-black via-brand-card to-brand-black border-2 border-brand-red/30 shadow-[0_0_80px_rgba(200,0,0,0.3)] overflow-hidden">
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-red" />
          <div className="absolute -top-32 -right-32 w-32 h-32 sm:w-64 sm:h-64 bg-brand-red/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-32 h-32 sm:w-64 sm:h-64 bg-brand-red/5 rounded-full blur-3xl" />
          
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2 text-brand-silver hover:text-brand-red hover:bg-brand-card/50 transition-all duration-300 rounded-lg group"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Modal Body */}
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="text-center space-y-4 sm:space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-brand-red/30 bg-brand-red/5 text-brand-red text-2xs sm:text-xs font-semibold tracking-[0.15em] uppercase">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Limited Time Offer</span>
              </div>

              {/* Headline */}
              <h2
                id="modal-title"
                className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight px-2"
              >
                Premium Protection
                <br />
                <span className="text-gradient-red">Starts Here</span>
              </h2>

              {/* Subheadline */}
              <p className="text-brand-silver text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
                Experience world-class ceramic coating and paint protection with our advanced{' '}
                <span className="text-brand-red font-semibold">Graphene & Borophene technology</span>.
                Protect your vehicle and preserve its showroom shine for years.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto pt-4 sm:pt-6">
                <div className="flex items-start gap-2 sm:gap-3 text-left p-3 sm:p-4 bg-brand-card/30 border border-brand-border rounded-lg">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">5-7 Year Warranty</h3>
                    <p className="text-brand-silver text-2xs sm:text-xs">Long-lasting protection guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3 text-left p-3 sm:p-4 bg-brand-card/30 border border-brand-border rounded-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">FREE Sunfilm</h3>
                    <p className="text-brand-silver text-2xs sm:text-xs">Complimentary with every package</p>
                  </div>
                </div>
              </div>

              {/* Special Offer */}
              <div className="pt-3 sm:pt-4 px-2">
                <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-brand-red/10 to-brand-red/5 border border-brand-red/40 rounded-lg">
                  <p className="text-brand-red text-xs sm:text-sm font-semibold">
                    🎉 Contact us today and get <span className="text-white text-base sm:text-lg">20% OFF</span> your first service
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-2">
                <Link
                  to="/contact"
                  onClick={closeModal}
                  className="btn-primary w-full sm:w-auto sm:min-w-[200px] !text-xs sm:!text-sm !py-2.5 sm:!py-3"
                >
                  Contact Us
                </Link>
                
                <Link
                  to="/services"
                  onClick={closeModal}
                  className="btn-outline w-full sm:w-auto sm:min-w-[200px] !text-xs sm:!text-sm !py-2.5 sm:!py-3"
                >
                  View Services
                </Link>
              </div>

              {/* Dismissal text */}
              <button
                onClick={closeModal}
                className="text-brand-silver/70 hover:text-brand-silver text-xs sm:text-sm transition-colors duration-300 underline decoration-dotted underline-offset-4"
              >
                Continue to website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
