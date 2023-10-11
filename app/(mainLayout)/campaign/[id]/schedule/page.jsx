'use client';

import React, { useState } from 'react';
import { useTimezoneSelect, allTimezones } from 'react-timezone-select';

import TwoBarsOneHalf from '@/components/icons/TwoBarsOneHalf';
import CustomBtn from '@/components/shared/CustomBtn';
import CustomInput from '@/components/shared/CustomInput';
import CustomCheckbox from '@/components/shared/CustomCheckbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import DateSelector from '@/components/shared/DateSelector';
import Combobox from '@/components/shared/Combobox';

import { BsCalendar4Week } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { times } from '@/utils/date/time';

const Page = () => {
  const [scheduleName, setScheduleName] = useState('New schedule');
  const [selectStartDate, setSelectStartDate] = useState('');
  const [selectEndDate, setSelectEndDate] = useState('');
  const [timezone, setTimezone] = useState({});
  const [startTime, setStartTime] = useState({});
  const [endTime, setEndTime] = useState({});

  const timezones = {
    ...allTimezones,
    'Europe/Berlin': 'Frankfurt',
  };

  const { options, parseTimezone } = useTimezoneSelect({
    labelStyle: 'original',
    displayValue: 'UTC',
    timezones,
  });

  const timezonesList = options.map((timezone) => {
    const splittedLabel = timezone.label.split(') ');
    const modifiedLabel = `${splittedLabel[1]} ${splittedLabel[0]})`;
    return {
      ...timezone,
      label: modifiedLabel,
    };
  });

  const handleTimezoneChange = (newTimezone) => {
    const selectedTimezone = parseTimezone(newTimezone?.value);
    const splittedLabel = selectedTimezone.label.split(') ');
    const modifiedLabel = `${splittedLabel[1]} ${splittedLabel[0]})`;

    const modifiedSelectedTimezone = {
      ...selectedTimezone,
      label: modifiedLabel,
    };

    setTimezone(modifiedSelectedTimezone);
  };

  const handleStartTimeChange = (newTime) => {
    setStartTime(newTime);
  };

  const handleEndTimeChange = (newTime) => {
    setEndTime(newTime);
  };

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

            <div className='h-4'>
              <Separator
                orientation='vertical'
                className='w-[2px] bg-gray-400'
              />
            </div>

            <DateSelector
              btnTitle='No start date'
              btnClassName='text-primary font-bold px-0'
              selectedDate={selectStartDate}
              setSelectedDate={setSelectStartDate}
            />
          </div>

          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-3 w-16'>
              <div>
                <BsCalendar4Week />
              </div>
              <p>End</p>
            </div>

            <div className='h-4'>
              <Separator
                orientation='vertical'
                className='w-[2px] bg-gray-400'
              />
            </div>

            <DateSelector
              btnTitle='No end date'
              btnClassName='text-primary font-bold px-0'
              selectedDate={selectEndDate}
              setSelectedDate={setSelectEndDate}
            />
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

          <div className='flex flex-col w-1/2 gap-5 my-5'>
            <div className='flex gap-5'>
              <div className='flex w-full flex-col'>
                <p className='text-sm'>FROM</p>
                <Combobox
                  btn={{
                    btnChild: (
                      <div className='flex w-full justify-between'>
                        <p>
                          {startTime?.label
                            ? startTime.label
                            : 'Select start time...'}
                        </p>
                        <div className='border-l'>
                          <MdKeyboardArrowDown className='ml-2 text-2xl opacity-50' />
                        </div>
                      </div>
                    ),
                    btnVariant: 'outline',
                    btnClassName: '',
                  }}
                  popoverContent={times}
                  value={startTime}
                  setValue={handleStartTimeChange}
                />
              </div>
              <div className='flex w-full flex-col'>
                <p className='text-sm'>TO</p>
                <Combobox
                  popoverContent={times}
                  value={endTime}
                  setValue={handleEndTimeChange}
                  btn={{
                    btnChild: (
                      <div className='flex w-full justify-between'>
                        <p>
                          {endTime?.label
                            ? endTime.label
                            : 'Select end time...'}
                        </p>
                        <div className='border-l'>
                          <MdKeyboardArrowDown className='ml-2 text-2xl opacity-50' />
                        </div>
                      </div>
                    ),
                    btnVariant: 'outline',
                    btnClassName: '',
                  }}
                />
              </div>
            </div>
            <div className='flex'>
              <Combobox
                popoverContent={timezonesList}
                value={timezone}
                setValue={handleTimezoneChange}
                btn={{
                  btnChild: (
                    <div className='flex w-full justify-between'>
                      <p>
                        {timezone?.label
                          ? timezone.label
                          : 'Select timezone...'}
                      </p>
                      <div className='border-l'>
                        <MdKeyboardArrowDown className='ml-2 text-2xl opacity-50' />
                      </div>
                    </div>
                  ),
                  btnVariant: 'outline',
                  btnClassName: '',
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <CustomBtn>Save</CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Page;
