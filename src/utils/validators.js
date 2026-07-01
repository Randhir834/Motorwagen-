/**
 * validators – pure functions for form/input validation.
 * Each returns an error message string, or null when valid.
 */

export const required = (value) =>
  value == null || String(value).trim() === '' ? 'This field is required.' : null;

export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be at least ${min} characters.` : null;

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be no more than ${max} characters.` : null;

export const isEmail = (value) =>
  value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Enter a valid email address.' : null;

export const isStrongPassword = (value) =>
  value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)
    ? 'Password must be at least 8 characters and include uppercase, lowercase, and a number.'
    : null;

/**
 * composeValidators – run multiple validators left-to-right, return first error.
 *
 * @param  {...Function} validators
 * @returns {Function}
 *
 * @example
 * const validateEmail = composeValidators(required, isEmail);
 * validateEmail(''); // "This field is required."
 */
export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce((error, validator) => error ?? validator(value), null);
