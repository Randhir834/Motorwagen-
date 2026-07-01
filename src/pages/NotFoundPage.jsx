import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import SEO from '@/components/SEO/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — Page Not Found" />
      <div className="min-h-[100dvh] bg-brand-black flex flex-col items-center justify-center text-center px-4 sm:px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,0,0,0.07), transparent)' }} />

        <div className="relative z-10">
          {/* Giant 404 */}
          <div className="font-display font-black text-[6rem] xs:text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] leading-none
            text-red-gradient select-none" aria-hidden="true">
            404
          </div>

          <h1 className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-brand-white -mt-3 xs:-mt-4 sm:-mt-6 md:-mt-8 mb-3 sm:mb-4">
            Page Not Found
          </h1>
          <p className="text-brand-silver text-xs xs:text-sm sm:text-base max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-8 font-light">
            Looks like this page took a wrong turn. Let's get you back on the road.
          </p>

          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3">
            <Link to="/" className="btn-primary w-full xs:w-auto justify-center !text-xs sm:!text-sm">
              <Home size={13} className="sm:w-[15px] sm:h-[15px]" /> Back to Home
            </Link>
            <Link to="/services" className="btn-outline w-full xs:w-auto justify-center !text-xs sm:!text-sm">
              View Services <ArrowRight size={13} className="sm:w-[15px] sm:h-[15px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
