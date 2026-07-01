import { Car, Sparkles, Shield } from 'lucide-react';

/**
 * Modern visual component for services - uses SVG patterns and gradients
 * instead of static images
 */
export default function ServiceVisual({ type = 'ceramic', className = '' }) {
  const visuals = {
    ceramic: {
      gradient: 'from-blue-500/20 via-cyan-500/20 to-blue-600/20',
      icon: Shield,
      pattern: 'dots',
    },
    detailing: {
      gradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
      icon: Sparkles,
      pattern: 'grid',
    },
    ppf: {
      gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
      icon: Shield,
      pattern: 'waves',
    },
    wash: {
      gradient: 'from-sky-500/20 via-blue-500/20 to-indigo-500/20',
      icon: Sparkles,
      pattern: 'dots',
    },
    default: {
      gradient: 'from-brand-red/20 via-red-600/20 to-brand-red/20',
      icon: Car,
      pattern: 'grid',
    },
  };

  const visual = visuals[type] || visuals.default;
  const Icon = visual.icon;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${visual.gradient}`} />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        {visual.pattern === 'dots' && <div className="absolute inset-0 bg-dots" />}
        {visual.pattern === 'grid' && <div className="absolute inset-0 bg-grid" />}
        {visual.pattern === 'waves' && (
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="currentColor" fill="none" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        )}
      </div>

      {/* Central Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-brand-red/20 blur-3xl animate-pulse" />
          <Icon size={80} className="relative text-brand-red/30" strokeWidth={1} />
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-red/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/40 to-transparent" />
    </div>
  );
}
