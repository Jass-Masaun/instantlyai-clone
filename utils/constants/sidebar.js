const STATIC_PATH = '/assets/icons/sidebar';

import { RiSearch2Line, RiSendPlaneLine, RiRocketFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import TwoSquares from '@/components/icons/TwoSquares';

export const icons = [
  {
    name: 'search',
    // path: `${STATIC_PATH}/search.svg`,
    path: RiSearch2Line,
    route: '/lead-finder',
    hoverText: 'Lead Finder',
  },
  {
    name: 'mail',
    path: HiOutlineMail,
    route: '/accounts',
    hoverText: 'Email Accounts',
  },
  {
    name: 'campaign',
    path: RiSendPlaneLine,
    route: '/campaigns',
    hoverText: 'Campaigns',
  },
  {
    name: 'unibox',
    path: TwoSquares,
    route: '/unibox',
    hoverText: 'Unibox',
  },
  {
    name: 'analytics',
    path: IoAnalyticsSharp,
    route: '/analytics/overview',
    hoverText: 'Analytics',
  },
  {
    name: 'account',
    path: CgProfile,
    route: '/lead-management',
    hoverText: 'Lead Management',
  },
  {
    name: 'accelerator',
    path: RiRocketFill,
    route: '/accelerator',
    hoverText: 'Accelerator',
  },
];
