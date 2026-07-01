import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * AnimatedSection — Intersection Observer based fade-up animation.
 * Uses native observer instead of a library for smaller bundle.
 */
export default function AnimatedSection({ children, className, delay, direction }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) { return; }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const dirMap = {
    up:    'translateY(28px)',
    down:  'translateY(-28px)',
    left:  'translateX(28px)',
    right: 'translateX(-28px)',
    none:  'none',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'none' : dirMap[direction || 'up'],
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

AnimatedSection.propTypes = {
  children:  PropTypes.node.isRequired,
  className: PropTypes.string,
  delay:     PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right', 'none']),
};
AnimatedSection.defaultProps = { className: '', delay: 0, direction: 'up' };
