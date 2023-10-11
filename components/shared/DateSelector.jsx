'use client';

import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import CustomBtn from './CustomBtn';

const DateSelector = ({
  btnClassName = 'text',
  btnVariant = 'ghost',
  btnTitle = 'Pick a date',
  btnChild = '',
  btnSelectedTitle = '',
  calendarClassName = '',
  selectedDate,
  setSelectedDate,
  calendarMode = 'single',
}) => {
  const [date, setDate] = useState('');

  const handleSelect = (date) => {
    setDate(date);
  };

  const handleClearBtn = () => {
    setDate('');
  };

  const handleApplyBtn = (date) => {
    setSelectedDate(date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={btnVariant} className={cn(btnClassName)}>
          <div className='flex gap-2 items-center'>
            {btnChild && btnChild}
            {selectedDate ? (
              btnSelectedTitle ? (
                btnSelectedTitle
              ) : (
                format(selectedDate, 'PPP')
              )
            ) : (
              <span>{btnTitle}</span>
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='w-auto p-0'
        onPointerDownOutside={() => setDate(selectedDate)}
      >
        <div className='flex flex-col p-5 gap-5'>
          <div>
            <Calendar
              mode={calendarMode}
              selected={date}
              onSelect={handleSelect}
              className={cn(calendarClassName)}
              initialFocus
            />
          </div>
          <Separator />
          <div className='flex flex-col justify-center items-center gap-3'>
            <div>
              <p>{date ? format(date?.from || date, 'PPP') : 'Select date'}</p>
            </div>
            <div className='flex justify-center items-center gap-5'>
              <CustomBtn variant='ghost' onClick={handleClearBtn}>
                Clear
              </CustomBtn>
              <CustomBtn className='py-2' onClick={() => handleApplyBtn(date)}>
                Apply
              </CustomBtn>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateSelector;
