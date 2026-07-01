import { useState, useEffect } from 'react';

/**
 * useDebounce – delays updating a value until after a pause in changes.
 * Useful for search inputs to avoid firing a request on every keystroke.
 *
 * @param {*}      value – value to debounce
 * @param {number} delay – milliseconds to wait (default 300 ms)
 *
 * @example
 * const debouncedSearch = useDebounce(searchTerm, 400);
 */
function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value or delay changes before it fires
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
