import { FaRegCirclePlay, FaInfinity } from 'react-icons/fa6';
import { RiDraftLine } from 'react-icons/ri';
import { AiOutlinePauseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';

const CLASS = 'py-3';

export const filters = [
  {
    label: 'Active',
    value: 'active',
    className: CLASS,
    icon: <FaRegCirclePlay className='text-xl' />,
  },
  {
    label: 'Draft',
    value: 'draft',
    className: CLASS,
    icon: <RiDraftLine className='text-xl' />,
  },
  {
    label: 'Paused',
    value: 'paused',
    className: CLASS,
    icon: <AiOutlinePauseCircle className='text-xl' />,
  },
  {
    label: 'Error',
    value: 'error',
    className: CLASS,
    icon: <BiErrorCircle className='text-xl' />,
  },
  {
    label: 'Completed',
    value: 'completed',
    className: CLASS,
    icon: <AiOutlineCheckCircle className='text-xl' />,
  },
  {
    label: 'Evergreen',
    value: 'evergreen',
    className: CLASS,
    icon: <FaInfinity className='text-xl' />,
  },
];
