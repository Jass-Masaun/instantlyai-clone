'use client';

import { RxDividerVertical } from 'react-icons/rx';
import { IoArrowRedo } from 'react-icons/io5';
import { MdKeyboardArrowDown, MdOutlineCelebration } from 'react-icons/md';
import { BsCalendar4Week } from 'react-icons/bs';
import { FaHandshake, FaPaperPlane } from 'react-icons/fa';
import { LuMail, LuMailOpen } from 'react-icons/lu';
import { BiMessageSquareCheck } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiFilter2Fill } from 'react-icons/ri';
import HandWave from '@/components/icons/HandWave';

import Hook from '@/components/icons/Hook';
import Tab from '@/components/shared/Tab';
import CustomInput from '@/components/shared/CustomInput';

const StepAnalyticsContent = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-xl text-primary '>Step Analytics</h1>
      <div className='flex justify-between items-center p-4 shadow my-5 font-bold text-sm'>
        <div className='flex'>
          <p>Step</p>
        </div>
        <div className='flex gap-10'>
          <div className='flex gap-2 items-center'>
            <FaPaperPlane className='text-gray-500' />
            <p>Sent</p>
          </div>
          <div className='flex gap-2 items-center'>
            <LuMailOpen className='text-gray-500' />
            <p>Opened</p>
          </div>
          <div className='flex gap-2 items-center'>
            <Hook className='text-gray-500' height={20} width={20} />
            <p>Link Clicked</p>
          </div>
          <div className='flex gap-2 items-center'>
            <BiMessageSquareCheck className='text-gray-500' />
            <p>Replied</p>
          </div>
          <div className='flex gap-2 items-center'>
            <MdOutlineCelebration className='text-gray-500' />
            <p>Opportunities</p>
          </div>
        </div>
      </div>
      <p className='text-sm font-semibold text-gray-500'>
        No data to show for specified time
      </p>
    </div>
  );
};

const ActivityContent = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-end gap-2'>
        <h1 className='font-bold text-xl text-primary '>Activity History</h1>
        <div className='flex items-center'>
          <RxDividerVertical className='text-xl' />
          <p className='text-xs font-bold'>last 90 days</p>
        </div>
      </div>
      <div className='flex items-center gap-4 p-3'>
        <div className='flex items-center gap-1 rounded shadow px-4 py-1'>
          <CustomInput placeholder='Search' />
          <AiOutlineSearch className='text-2xl text-gray-500' />
        </div>
        <div className='flex items-center'>
          <p className='text-sm'>Filter</p>
          <RiFilter2Fill className='text-md' />
        </div>
      </div>
      <p className='text-sm font-semibold text-gray-500'>
        No activities in the last 90 days
      </p>
      <div className='flex items-center gap-2'>
        <HandWave height={30} width={30} />
        <p className='font-bold'>Your activity stream will appear here</p>
      </div>
    </div>
  );
};

const tabs = [
  {
    title: 'Step Analytics',
    content: <StepAnalyticsContent />,
  },
  {
    title: 'Activity',
    content: <ActivityContent />,
  },
];

const page = () => {
  return (
    <div className='flex flex-col flex-1 py-4 gap-3 mt-4 '>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <p className='font-semibold'>My First Campaign</p>
          <RxDividerVertical className='text-2xl' />
          <button className='text-xs text-white font-bold py-2 px-2 rounded-md bg-gray-700'>
            Paused
          </button>
        </div>

        <div className='flex gap-4 text-sm'>
          <div className='flex items-center gap-1 text-primary'>
            <IoArrowRedo />
            <p className='font-semibold'>Share</p>
          </div>

          <div className='flex items-center gap-2 bg-gray-100 p-2 rounded'>
            <p>Last 4 weeks</p>
            <MdKeyboardArrowDown className='text-2xl' />
          </div>

          <div className='flex items-center gap-2'>
            <BsCalendar4Week className='text-lg' />
            <p>Custom range</p>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center font-bold px-24 py-10 shadow-all-sides rounded-lg'>
        <div className='flex flex-col items-center gap-4'>
          <FaHandshake className='text-2xl text-gray-500' />
          <p className='text-primary'>-</p>
          <p className='text-sm'>Contacted</p>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <LuMail className='text-2xl text-gray-500' />
          <p className='text-primary'>-</p>
          <p className='text-sm'>Openend</p>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <Hook className='text-2xl text-gray-500' />
          <p className='text-primary'>-</p>
          <p className='text-sm'>Links Clicked</p>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <BiMessageSquareCheck className='text-2xl text-gray-500' />
          <p className='text-primary'>-</p>
          <p className='text-sm'>Replied</p>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <MdOutlineCelebration className='text-2xl text-gray-500' />
          <p className='text-primary'>-</p>
          <p className='text-sm'>Opportunities</p>
        </div>
      </div>

      <div className='flex justify-center items-center font-bold px-12 py-5 shadow-all-sides rounded-lg text-gray-500 mt-5'>
        <p>No data available for specified time</p>
      </div>

      <div className='flex flex-col mt-8'>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
};

export default page;