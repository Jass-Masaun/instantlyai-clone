'use client';
import React from 'react';

import GetStarted from '@/components/shared/GetStarted';
import CustomBtn from '@/components/shared/CustomBtn';

import { RiLightbulbFlashLine } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';

const Page = () => {
  return (
    <GetStarted
      img={{
        src: '/campaigns/subsequence-main.svg',
        alt: 'img',
        width: 450,
        height: 450,
      }}
      title={{
        name: 'Add a subsequence',
        icon: <RiLightbulbFlashLine className='text-5xl text-amber-400' />,
      }}
      btn={{ child: 'ADD NEW', href: '/subsequence/create' }}
      icon={{ icon: FaPlus, className: 'text-sm' }}
    >
      <div className='flex w-full justify-end'>
        <CustomBtn href='/subsequence/create'>ADD NEW</CustomBtn>
      </div>
    </GetStarted>
  );
};

export default Page;
