import { IoFlashOutline, IoFlashSharp } from 'react-icons/io5';

import { AiFillMail } from 'react-icons/ai';
import { MdMarkunreadMailbox, MdScheduleSend } from 'react-icons/md';
import { BiSolidAlarm } from 'react-icons/bi';

export const status = [
  {
    name: 'Lead',
    icon: IoFlashOutline,
    hidden: false,
    color: 'text-gray-500',
  },
  {
    name: 'Interested',
    icon: IoFlashSharp,
    hidden: false,
    color: 'text-unibox-green-ico',
  },
  {
    name: 'Meeting booked',
    icon: IoFlashSharp,
    hidden: false,
    color: 'text-unibox-violet-ico',
  },
  {
    name: 'Meeting completed',
    icon: IoFlashSharp,
    hidden: false,
    color: 'text-unibox-orange-ico',
  },
  {
    name: 'Closed',
    icon: IoFlashSharp,
    hidden: false,
    color: 'text-unibox-yellow-ico',
  },
];

export const more = [
  {
    name: 'All',
    icon: AiFillMail,
  },
  {
    name: 'Unread only',
    icon: MdMarkunreadMailbox,
  },
  {
    name: 'Reminders only',
    icon: BiSolidAlarm,
  },
  {
    name: 'Schedduled emails',
    icon: MdScheduleSend,
  },
];
