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
  },
  {
    name: 'mail',
    path: HiOutlineMail,
    route: '/accounts',
  },
  {
    name: 'campaign',
    path: RiSendPlaneLine,
    route: '/campaigns',
  },
  {
    name: 'unibox',
    path: TwoSquares,
    route: '/unibox',
  },
  {
    name: 'analytics',
    path: IoAnalyticsSharp,
    route: '/analytics/overview',
  },
  {
    name: 'account',
    path: CgProfile,
    route: '/lead-management',
  },
  {
    name: 'accelerator',
    path: RiRocketFill,
    route: '/accelerator',
  },
];
