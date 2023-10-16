'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import CustomBtn from './CustomBtn';

import { FaAngleLeft } from 'react-icons/fa6';

const Back = ({ className = '', btnTitle = 'Back' }) => {
  const router = useRouter();

  return (
    <div
      className={`py-5 text-gray-600 font-medium cursor-pointer ${className}`}
      onClick={() => {
        router.back();
      }}
    >
      <div className='flex justify-center items-center gap-2'>
        <div className='bg-sky-50 rounded-full p-2 '>
          <FaAngleLeft className='text-2xl' />
        </div>
        <CustomBtn variant='ghost'>{btnTitle}</CustomBtn>
      </div>
    </div>
  );
};

export default Back;
