'use client';

import React from 'react';

import Dropdown from '@/components/shared/Dropdown';
import GetStarted from '@/components/shared/GetStarted';
import MainSidebar from '@/components/shared/MainSidebar';

import { HiOutlineQueueList } from 'react-icons/hi2';
import { RiSendPlaneLine } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa6';
import CustomInput from '@/components/shared/CustomInput';

const Page = () => {
  return (
    <div className='flex flex-1'>
      <MainSidebar className='w-80'>
        <Dropdown icon={HiOutlineQueueList} name='Lists'>
          <div className='flex flex-col'>
            <CustomInput
              placeholder='Search'
              parentClassName='my-4 py-1 border-b w-full'
            />
            <div className='flex justify-start items-center gap-2 my-3 px-4'>
              <FaPlus className='text-md text-primary' />
              <p className='text-sm font-semibold'>Create new list</p>
            </div>
          </div>
        </Dropdown>
        <Dropdown icon={RiSendPlaneLine} name='All Campaigns'>
          <div className='flex flex-col'>
            <CustomInput
              placeholder='Search'
              parentClassName='my-4 py-1 border-b w-full'
            />
            <p className='text-sm px-4'>My First Campaign</p>
          </div>
        </Dropdown>
      </MainSidebar>

      <GetStarted
        img={{
          src: '/lead-management/main.svg',
          alt: 'img',
          width: 450,
          height: 450,
        }}
        title={{
          name: 'Create a list to get started',
        }}
        btn={{ child: 'Create List' }}
        icon={{ className: 'font-bold' }}
      ></GetStarted>
    </div>
  );
};

export default Page;
