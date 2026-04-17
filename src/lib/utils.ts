/**
 * General utility functions for the CoHomed marketing site
 */

/**
 * Format date string for display
 * @param dateString - ISO date string (YYYY-MM-DD)
 * @returns Formatted date (e.g., "April 16, 2026")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00Z');
  return new Intl.DateTimeFormat('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Slugify a string for URLs
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Capitalize first letter of a string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Format number as currency (AUD)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(amount);
}
