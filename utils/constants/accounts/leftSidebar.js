import { BsRocketTakeoff } from 'react-icons/bs';
import { LuMails, LuMailPlus, LuMailOpen } from 'react-icons/lu';

const CLASS = 'text-lg opacity-50';

export const summary = [
  {
    label: 'warmup emails sent',
    icon: <BsRocketTakeoff className={`${CLASS}`} />,
    key: 'warmup_email_sent_pastweek',
  },
  {
    label: 'landed in inbox',
    icon: <LuMails className={`${CLASS}`} />,
    key: 'warmup_email_landedIn_pastweek',
  },
  {
    label: 'saved from spam',
    icon: <LuMailPlus className={`${CLASS}`} />,
    key: 'warmup_email_savedFromSpam',
  },
  {
    label: 'warmup emails recieved',
    icon: <LuMailOpen className={`${CLASS}`} />,
    key: 'warmup_email_received',
  },
];
