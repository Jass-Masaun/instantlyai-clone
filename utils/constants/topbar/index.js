import { AiOutlineLogout } from 'react-icons/ai';

export const topbarProfile = [
  {
    label: 'Logout',
    value: 'logout',
    icon: <AiOutlineLogout />,
  },
];

export const getTopbarTabNameByPath = (path) => {
  const staticPaths = {
    '/lead-finder': 'Lead Finder',
    '/lead-finder/enrich': 'Lead Finder',
    '/accounts': 'Email Accounts',
    '/campaigns': 'Campaigns',
    '/unibox': 'Unibox',
    '/analytics/overview': 'Analytics',
    '/lead-management': 'Lead Management',
  };

  if (staticPaths[path]) return staticPaths[path];
  if (path.includes('/campaigns')) return 'Campaigns';
};
