import { AiOutlinePauseCircle, AiFillFire } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import { MdTrackChanges } from 'react-icons/md';

const CLASS = 'py-3';

export const filters = [
  {
    label: 'Paused',
    value: 'paused',
    className: CLASS,
    icon: <AiOutlinePauseCircle className='text-xl' />,
  },
  {
    label: 'Has errors',
    value: 'error',
    className: CLASS,
    icon: <BiErrorCircle className='text-xl' />,
  },
  {
    label: 'No custom tracking domain',
    value: 'no-custom-tracking-domain',
    className: CLASS,
    icon: <MdTrackChanges className='text-xl' />,
  },
  {
    label: 'Warmup active',
    value: 'warmup-active',
    className: CLASS,
    icon: <AiFillFire className='text-xl' />,
  },
  {
    label: 'Warmup paused',
    value: 'warmup-paused',
    className: CLASS,
    icon: <AiFillFire className='text-xl' />,
  },
  {
    label: 'Warmup has errors',
    value: 'warmup-has-errors',
    className: CLASS,
    icon: <AiFillFire className='text-xl' />,
  },
];
