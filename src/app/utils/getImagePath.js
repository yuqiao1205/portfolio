/**
 * Get the correct image path for production deployment
 * Prepends the basePath when in production
 */
export const getImagePath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  return `${basePath}${path}`;
};
