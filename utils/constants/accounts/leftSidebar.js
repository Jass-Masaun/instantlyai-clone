import { BsRocketTakeoff } from 'react-icons/bs';
import { LuMails, LuMailPlus, LuMailOpen } from 'react-icons/lu';

const CLASS = 'text-lg opacity-50';

export const summary = [
  {
    label: 'warmup emails sent',
    icon: <BsRocketTakeoff className={`${CLASS}`} />,
  },
  {
    label: 'landed in inbox',
    icon: <LuMails className={`${CLASS}`} />,
  },
  {
    label: 'saved from spam',
    icon: <LuMailPlus className={`${CLASS}`} />,
  },
  {
    label: 'warmup emails recieved',
    icon: <LuMailOpen className={`${CLASS}`} />,
  },
];
