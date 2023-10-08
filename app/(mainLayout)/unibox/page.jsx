'use client';

import React from 'react';

import MainSidebar from '@/components/shared/MainSidebar';
import Dropdown from '@/components/shared/Dropdown';
import CustomInput from '@/components/shared/CustomInput';

import { more, status } from '@/utils/constants/unibox/uniboxSidebar';

const page = () => {
  return (
    <div className='flex'>
      <MainSidebar className='overflow-auto custom-scrollbar'>
        <Dropdown
          name={'Status'}
          expanded={true}
          classes={{
            headingClass: 'bg-sky-50 px-3 py-2 rounded-xl font-bold',
          }}
        >
          <div className='flex flex-col gap-3 ml-4 font-medium'>
            <CustomInput
              placeholder='Search'
              parentClassName='my-4 py-1 border-b w-full'
            />
            {status.map((item, index) => (
              <div
                key={item.name}
                className={`w-full p-3 ${
                  index === 0 && 'bg-sky-50 p-3 rounded-xl'
                }`}
              >
                <div className='flex gap-3 items-center'>
                  <item.icon className={`${item.color} text-xl`} />
                  <p className='text-xs'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Dropdown>

        <Dropdown
          name={'All Campaigns'}
          expanded={false}
          classes={{
            headingClass: 'px-3 py-2 rounded-xl font-bold',
          }}
        >
          <div className='flex flex-col gap-6 ml-4 font-medium'>
            <CustomInput
              placeholder='Search'
              parentClassName='my-4 py-1 border-b w-full'
            />
          </div>
        </Dropdown>

        <Dropdown
          name={'All Inboxes'}
          expanded={false}
          classes={{
            headingClass: 'px-3 py-2 rounded-xl font-bold',
          }}
        >
          <div className='flex flex-col gap-6 ml-4 font-medium'>
            <CustomInput
              placeholder='Search'
              parentClassName='my-4 py-1 border-b w-full'
            />
          </div>
        </Dropdown>

        <Dropdown
          name={'More'}
          expanded={false}
          classes={{
            headingClass: 'px-3 py-2 rounded-xl font-bold',
          }}
        >
          <div className='flex flex-col gap-3 ml-4 font-medium'>
            <CustomInput
              placeholder='Search'
              parentClassName='my-4 py-1 border-b w-full'
            />

            {more.map((item, index) => (
              <div
                key={item.name}
                className={`w-full p-3 ${
                  index === 0 && 'bg-sky-50 p-3 rounded-xl'
                }`}
              >
                <div className='flex gap-3 items-center'>
                  <item.icon />
                  <p className='text-xs'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Dropdown>
      </MainSidebar>
      <div>Main</div>
    </div>
  );
};

export default page;
