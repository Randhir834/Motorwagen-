/**
 * formatDate – formats a date value into a human-readable string.
 *
 * @param {string|Date} date   – ISO string or Date object
 * @param {string}      locale – BCP 47 locale tag (default: browser locale)
 * @returns {string}
 *
 * @example
 * formatDate('2024-06-15T10:00:00Z') // "June 15, 2024"
 */
export function formatDate(date, locale = undefined) {
  if (!date) { return '—'; }
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

/**
 * formatRelative – returns a relative time string ("3 days ago").
 *
 * @param {string|Date} date
 * @param {string}      locale
 * @returns {string}
 */
export function formatRelative(date, locale = undefined) {
  if (!date) { return '—'; }
  const diff = new Date(date) - Date.now();
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  const THRESHOLDS = [
    { unit: 'year',   ms: 365 * 24 * 60 * 60 * 1000 },
    { unit: 'month',  ms: 30  * 24 * 60 * 60 * 1000 },
    { unit: 'week',   ms: 7   * 24 * 60 * 60 * 1000 },
    { unit: 'day',    ms: 24  * 60 * 60 * 1000 },
    { unit: 'hour',   ms: 60  * 60 * 1000 },
    { unit: 'minute', ms: 60  * 1000 },
  ];

  for (const { unit, ms } of THRESHOLDS) {
    if (Math.abs(diff) >= ms) {
      return rtf.format(Math.round(diff / ms), unit);
    }
  }

  return rtf.format(Math.round(diff / 1000), 'second');
}
