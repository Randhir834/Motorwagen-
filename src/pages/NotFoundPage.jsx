import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import SEO from '@/components/SEO/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — Page Not Found" />
      <div className="min-h-[100dvh] bg-brand-black flex flex-col items-center justify-center text-center px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,0,0,0.07), transparent)' }} />

        <div className="relative z-10">
          {/* Giant 404 */}
          <div className="font-display font-black text-[8rem] sm:text-[12rem] md:text-[16rem] leading-none
            text-red-gradient select-none" aria-hidden="true">
            404
          </div>

          <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-brand-white -mt-4 sm:-mt-8 mb-4">
            Page Not Found
          </h1>
          <p className="text-brand-silver text-sm sm:text-base max-w-sm mx-auto mb-8 font-light">
            Looks like this page took a wrong turn. Let's get you back on the road.
          </p>

          <div className="flex flex-col xs:flex-row items-center justify-center gap-3">
            <Link to="/" className="btn-primary w-full xs:w-auto">
              <Home size={15} /> Back to Home
            </Link>
            <Link to="/services" className="btn-outline w-full xs:w-auto">
              View Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
