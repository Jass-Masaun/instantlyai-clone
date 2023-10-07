'use client';

import React, { useState } from 'react';

import TwoBarsOneHalf from '@/components/icons/TwoBarsOneHalf';
import CustomBtn from '@/components/shared/CustomBtn';
import CustomInput from '@/components/shared/CustomInput';

import { BsCalendar4Week } from 'react-icons/bs';
import { RxDividerVertical } from 'react-icons/rx';
import { FiSun } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';

const page = () => {
  const [scheduleName, setScheduleName] = useState('New schedule');

  const handleScheduleNameChange = (e) => {
    setScheduleName(e.target.value);
  };

  return (
    <div className='flex gap-10 mt-5'>
      <div className='flex flex-col gap-5 w-1/4'>
        <div className='text-sm flex flex-col gap-3 font-bold border-b pb-5'>
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-3 w-16'>
              <div>
                <BsCalendar4Week />
              </div>
              <p>Start</p>
            </div>

            <RxDividerVertical />

            <p className='text-primary'>Now</p>
          </div>

          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-3 w-16'>
              <div>
                <BsCalendar4Week />
              </div>
              <p>End</p>
            </div>

            <RxDividerVertical />

            <p className='text-primary'>No end date</p>
          </div>
        </div>
        <div className='border-2 border-primary rounded-lg p-4 font-bold'>
          <div className='flex items-center gap-4'>
            <BsCalendar4Week />
            <h1>New schedule</h1>
          </div>
        </div>
        <div className='flex justify-center items-center border border-primary rounded-lg p-4 font-bold text-primary'>
          <h1>Add schedule</h1>
        </div>
      </div>

      <div className='flex flex-col flex-1 gap-7'>
        <div className='flex flex-col w-full px-5 py-10 shadow-all-sides rounded-lg'>
          <div className='flex justify-between'>
            <div className='flex'>
              <TwoBarsOneHalf className='text-primary' />
              <h1 className='font-bold text-lg'>Schedule Name</h1>
            </div>

            <div>
              <CustomBtn>Save</CustomBtn>
            </div>
          </div>

          <div className='py-1 border-b-2 border-gray-400'>
            <CustomInput
              placeholder='Give your schedule a name'
              value={scheduleName}
              onChange={handleScheduleNameChange}
            />
          </div>
        </div>

        <div className='flex flex-col w-full px-5 py-10 shadow-all-sides rounded-lg'>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <FiSun className='text-amber-400 text-3xl' />
              <h1 className='font-bold text-lg'>Days</h1>
            </div>
          </div>

          <div>pending</div>
        </div>

        <div className='flex flex-col w-full px-5 py-10 shadow-all-sides rounded-lg'>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <BiTime className='text-green-400 text-3xl' />
              <h1 className='font-bold text-lg'>Timing</h1>
            </div>
          </div>

          <div>pending</div>
        </div>

        <div>
          <CustomBtn>Save</CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default page;
