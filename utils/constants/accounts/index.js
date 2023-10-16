import { BiMailSend } from 'react-icons/bi';
import { BsRocketTakeoff } from 'react-icons/bs';
import { LuMails, LuMailPlus } from 'react-icons/lu';
import { BiPlusMedical } from 'react-icons/bi';

const CLASS = 'text-lg opacity-50';
export const accountDetails = [
  {
    icon: <BiMailSend className={`${CLASS}`} />,
    key: 'mails_sent_today',
    hoverContent: 'Campaign emails sent today',
  },
  {
    icon: <BsRocketTakeoff className={`${CLASS}`} />,
    key: 'warmup_email_sent_pastweek',
    hoverContent: 'Warmup emails sent past week',
  },
  {
    icon: <LuMails className={`${CLASS}`} />,
    key: 'warmup_email_landedIn_pastweek',
    hoverContent: 'Warmup emails landed in inbox past week',
  },
  {
    icon: <LuMailPlus className={`${CLASS}`} />,
    key: 'warmup_email_savedFromSpam',
    hoverContent: 'Warmup emails saved from spam folder past week',
  },
  {
    icon: <BiPlusMedical className={`${CLASS}`} />,
    key: 'warmup_health_score',
    hoverContent: 'Warmup healthscore',
  },
];
