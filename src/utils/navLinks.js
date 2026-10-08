import data from '../data/portfolioData.json';

// Single source of truth for Navbar and Footer: only links whose section is enabled.
export const navLinks = data.nav.links.filter(
  (link) => data[link.id]?.enabled !== false,
);

