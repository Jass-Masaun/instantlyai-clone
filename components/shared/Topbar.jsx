'use client';

import { AiFillMediumCircle } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import TopbarTab from './TopbarTab';

const Topbar = () => {
  return (
    <div className='flex flex-1 fixed bg-white top-0 w-full h-20 border-b shadow-sm z-50'>
      <div className='flex flex-1 justify-between items-center'>
        <div className='flex items-center'>
          <TopbarTab />
        </div>
        <div className='flex items-center gap-7 text-gray-700'>
          <BiHelpCircle className='text-2xl' />
          <AiFillMediumCircle className='text-2xl' />
          <div className='flex items-center gap-2 mr-6'>
            <CgProfile className='text-2xl' />
            <p className='text-sm font-semibold'>Jaspreet Singh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
