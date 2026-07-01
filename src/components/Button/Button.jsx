import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

/**
 * Button – reusable button component.
 *
 * @param {object}  props
 * @param {'primary'|'secondary'|'danger'} props.variant
 * @param {'sm'|'md'|'lg'} props.size
 * @param {boolean} props.isLoading  – shows a spinner and disables the button
 * @param {boolean} props.fullWidth  – stretches to fill its container
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className,
  disabled,
  ...rest
}) {
  return (
    <button
      className={clsx(
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        className
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...rest}
    >
      {isLoading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  isLoading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
