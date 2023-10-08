'use client';

import React, { useState } from 'react';

import TwoBarsOneHalf from '@/components/icons/TwoBarsOneHalf';
import CustomBtn from '@/components/shared/CustomBtn';
import CustomInput from '@/components/shared/CustomInput';
import CustomCheckbox from '@/components/shared/CustomCheckbox';
import { Label } from '@/components/ui/label';

import { BsCalendar4Week } from 'react-icons/bs';
import { RxDividerVertical } from 'react-icons/rx';
import { FiSun } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { Separator } from '@/components/ui/separator';

const page = () => {
  const [scheduleName, setScheduleName] = useState('New schedule');

  const handleScheduleNameChange = (e) => {
    setScheduleName(e.target.value);
  };

  return (
    <div className='flex gap-10 mt-5'>
      <div className='flex flex-col gap-5 w-1/4'>
        <div className='text-sm flex flex-col gap-3 font-bold'>
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
        <Separator />
        <div className='border-2 border-primary rounded-lg p-4 font-bold'>
          <div className='flex items-center gap-4'>
            <BsCalendar4Week />
            <h1>New schedule</h1>
          </div>
        </div>
        <div className='flex w-full'>
          <CustomBtn variant='outline' className='w-full py-2'>
            Add Schedule
          </CustomBtn>
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

          <div className='flex gap-7 my-10'>
            <div className='flex items-center space-x-2'>
              <CustomCheckbox id='monday' />
              <Label htmlFor='monday'>Monday</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <CustomCheckbox id='tuesday' />
              <Label htmlFor='tuesday'>Tuesday</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <CustomCheckbox id='wednesday' />
              <Label htmlFor='wednesday'>Wednesday</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <CustomCheckbox id='thursday' />
              <Label htmlFor='thursday'>Thursday</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <CustomCheckbox id='friday' />
              <Label htmlFor='friday'>Friday</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <CustomCheckbox id='saturday' />
              <Label htmlFor='saturday'>Saturday</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <CustomCheckbox id='sunday' />
              <Label htmlFor='sunday'>Sunday</Label>
            </div>
          </div>
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
