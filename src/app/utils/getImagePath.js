/**
 * Get the correct image path for production deployment
 * Prepends the basePath when in production
 */
export const getImagePath = (path) => {
  // Check if we're in production by looking at the hostname
  const isProduction = typeof window !== 'undefined' && window.location.hostname.includes('github.io');
  const basePath = isProduction ? '/portfolio' : '';
  return `${basePath}${path}`;
};
