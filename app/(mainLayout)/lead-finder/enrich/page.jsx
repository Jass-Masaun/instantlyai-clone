'use client';

import React from 'react';

import GetStarted from '@/components/shared/GetStarted';
import MainSidebar from '@/components/shared/MainSidebar';

import { FaPlus } from 'react-icons/fa6';

const page = () => {
  return (
    <div className='flex flex-1'>
      <MainSidebar className='flex flex-col'>
        <h1 className='font-medium'>Lists</h1>
        <div className='flex justify-center items-center gap-2 my-10'>
          <FaPlus className='text-md text-primary' />
          <p className='text-sm font-normal'>Create new list</p>
        </div>
      </MainSidebar>
      <div className='flex flex-1 justify-center items-center'>
        <GetStarted
          img={{
            src: '/lead-finder/enrich-main.svg',
            alt: 'img',
            width: 250,
            height: 250,
          }}
          title={{
            name: 'Enrich People',
          }}
          btn={{ child: 'Create new List' }}
          icon={{ className: 'font-bold' }}
          description={true}
        >
          <p className='font-medium'>
            Upload a list of people and enrich their information
          </p>
        </GetStarted>
      </div>
    </div>
  );
};

export default page;
