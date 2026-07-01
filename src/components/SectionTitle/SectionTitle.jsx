import PropTypes from 'prop-types';

/**
 * SectionTitle — upgraded heading block with animated accent line.
 */
export default function SectionTitle({ label, title, subtitle, center, className }) {
  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 ${center ? 'text-center' : ''} ${className}`}>
      {label && (
        <span className={`section-label ${center ? 'justify-center' : ''}`}>
          {label}
        </span>
      )}

      {title && (
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-bold text-brand-white leading-[1.15] tracking-tight">
          {title}
        </h2>
      )}

      {/* Animated accent line */}
      <span className={`accent-line mt-4 sm:mt-5 block ${center ? 'mx-auto' : ''}`} />

      {subtitle && (
        <p className={`mt-4 sm:mt-5 text-brand-silver text-sm sm:text-base md:text-lg
          leading-relaxed max-w-2xl font-light
          ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

SectionTitle.propTypes = {
  label:     PropTypes.string,
  title:     PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subtitle:  PropTypes.string,
  center:    PropTypes.bool,
  className: PropTypes.string,
};
SectionTitle.defaultProps = { label: '', title: '', subtitle: '', center: false, className: '' };
