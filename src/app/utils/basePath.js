// Base path for GitHub Pages deployment
// This needs to match the repository name in next.config.js
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

// Helper function to get full image path
export const getImagePath = (path) => `${BASE_PATH}${path}`;
