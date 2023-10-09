'use client';

import React from 'react';

import HandWave from '@/components/icons/HandWave';
import GetStarted from '@/components/shared/GetStarted';
import CustomBtn from '@/components/shared/CustomBtn';

const Page = () => {
  return (
    <GetStarted
      img={{
        src: '/campaigns/lead-main.svg',
        alt: 'img',
        width: 450,
        height: 450,
      }}
      title={{
        name: 'Add some leads to get started',
        icon: HandWave,
        iconClass: 'text-5xl text-amber-400',
      }}
      btn={{ child: 'Import' }}
      icon={{ className: 'font-bold' }}
    >
      <div className='flex w-full justify-end'>
        <CustomBtn>Import</CustomBtn>
      </div>
    </GetStarted>
  );
};

export default Page;
