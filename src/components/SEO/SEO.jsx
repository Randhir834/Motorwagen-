import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SITE_NAME = 'MotorView';
const DEFAULT_DESC =
  'MotorView — Premium car detailing, ceramic coating, PPF, and interior detailing services across India. Trusted by 4,800+ happy clients.';
const DEFAULT_KEYWORDS =
  'car detailing, ceramic coating, PPF, paint protection film, car wash, interior detailing, bike detailing, auto detailing India';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

/**
 * SEO — reusable head metadata component using react-helmet-async.
 *
 * @param {string} title       - Page-specific title (prepended to site name)
 * @param {string} description - Meta description
 * @param {string} keywords    - Comma-separated keywords
 * @param {string} ogImage     - Open Graph image URL
 */
export default function SEO({ title, description, keywords, ogImage }) {
  const fullTitle = title ? `${SITE_NAME} | ${title}` : SITE_NAME;
  const metaDesc = description || DEFAULT_DESC;
  const metaKeywords = keywords || DEFAULT_KEYWORDS;
  const metaOgImage = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="MotorView Auto Detailing" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaOgImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaOgImage} />

      {/* Canonical */}
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
};

SEO.defaultProps = {
  title: '',
  description: DEFAULT_DESC,
  keywords: DEFAULT_KEYWORDS,
  ogImage: DEFAULT_OG_IMAGE,
};
