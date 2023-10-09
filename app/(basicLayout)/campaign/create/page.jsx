'use client';

import React, { useState } from 'react';

import CustomBtn from '@/components/shared/CustomBtn';
import CustomInput from '@/components/shared/CustomInput';

const Page = () => {
  const [value, setValue] = useState('My Campaign');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className='flex flex-col w-1/3 h-auto mx-auto items-center mt-40'
    >
      <div className='flex flex-1 w-full flex-col gap-12'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-semibold text-gray-600'>
            {`Let's create a new campaign`}
          </h1>
          <p className='text-sm text-gray-500'>
            What would you like to name it?
          </p>
        </div>
        <div className='flex w-full'>
          <CustomInput
            parentClassName='border border-gray-400 rounded-lg'
            className='text-3xl font-semibold py-12 px-6 rounded-lg'
            label='Campaign Name'
            placeholder='Give your campaign a name'
            value={value}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex gap-5'>
          <CustomBtn variant='outline'>Cancel</CustomBtn>
          <CustomBtn>{`Continue >`}</CustomBtn>
        </div>
      </div>
    </form>
  );
};

export default Page;
