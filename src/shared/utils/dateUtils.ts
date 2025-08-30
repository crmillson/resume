/**
 * Utility functions for date formatting and manipulation
 * Following Single Responsibility Principle - each function has one clear purpose
 */

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  });
};

export const formatDateRange = (startDate: string, endDate?: string, current: boolean = false): string => {
  const start = formatDate(startDate);
  
  if (current) {
    return `${start} - Present`;
  }
  
  if (endDate) {
    const end = formatDate(endDate);
    return `${start} - ${end}`;
  }
  
  return start;
};

export const getDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  
  let totalMonths = years * 12 + months;
  
  if (totalMonths < 12) {
    return `${totalMonths} month${totalMonths !== 1 ? 's' : ''}`;
  }
  
  const fullYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  
  if (remainingMonths === 0) {
    return `${fullYears} year${fullYears !== 1 ? 's' : ''}`;
  }
  
  return `${fullYears} year${fullYears !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
};
