import { NavigationItem } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    path: '/',
    label: 'Home',
    description: 'Landing page with hero section and overview',
    icon: 'home',
    order: 1
  },
  {
    path: '/about',
    label: 'About',
    description: 'Personal story and core values',
    icon: 'user',
    order: 2
  },
  {
    path: '/experience',
    label: 'Experience',
    description: 'Career timeline and achievements',
    icon: 'briefcase',
    order: 3
  },
  {
    path: '/projects',
    label: 'Projects',
    description: 'Portfolio showcase and technical work',
    icon: 'code',
    order: 4
  },
  {
    path: '/leadership',
    label: 'Leadership',
    description: 'Military-to-tech transition stories',
    icon: 'shield',
    order: 5
  },
  {
    path: '/assessments',
    label: 'Assessments',
    description: 'TTI behavioral insights and analysis',
    icon: 'chart',
    order: 6
  },
  {
    path: '/contact',
    label: 'Contact',
    description: 'Professional contact information',
    icon: 'mail',
    order: 7
  }
];

export const getNavigationItem = (path: string): NavigationItem | undefined => {
  return NAVIGATION_ITEMS.find(item => item.path === path);
};

export const getNextPage = (currentPath: string): NavigationItem | null => {
  const currentIndex = NAVIGATION_ITEMS.findIndex(item => item.path === currentPath);
  if (currentIndex === -1 || currentIndex === NAVIGATION_ITEMS.length - 1) {
    return null;
  }
  return NAVIGATION_ITEMS[currentIndex + 1];
};

export const getPreviousPage = (currentPath: string): NavigationItem | null => {
  const currentIndex = NAVIGATION_ITEMS.findIndex(item => item.path === currentPath);
  if (currentIndex <= 0) {
    return null;
  }
  return NAVIGATION_ITEMS[currentIndex - 1];
};
