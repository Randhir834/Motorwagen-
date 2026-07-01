import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

/**
 * Card – generic surface container with optional padding variants.
 */
function Card({ children, className, padding = 'md', ...rest }) {
  return (
    <div className={clsx(styles.card, styles[`padding-${padding}`], className)} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
};

export default Card;
