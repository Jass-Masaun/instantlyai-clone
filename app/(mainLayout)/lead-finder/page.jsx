'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import MainSidebar from '@/components/shared/MainSidebar';
import { leadFinderSideTabs } from '@/utils/constants/leadFinderSideTab';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineSave, MdSave, MdOpenInNew } from 'react-icons/md';
import { RiTimerLine } from 'react-icons/ri';
import CustomInput from '@/components/shared/CustomInput';

const page = () => {
  const [showHiddenTab, setShowHiddenTab] = useState(false);
  const [toggleArrow, setToggleArrow] = useState(false);

  return (
    <div className='flex flex-1'>
      <MainSidebar className='overflow-auto no-scrollbar'>
        <div className='flex justify-between mb-6'>
          <h1 className='text-md font-semibold'>Filters</h1>
          <div className='flex gap-5'>
            <MdSave className='text-xl text-gray-300' />
            <MdOpenInNew className='text-xl text-gray-500' />
          </div>
        </div>
        {leadFinderSideTabs.map((tab, index) => {
          if (tab.show !== showHiddenTab) {
            return (
              <div key={index} className='flex gap-2 overflow-auto mb-11'>
                <Image src={tab.path} alt='ico' width={20} height={20} />
                <CustomInput
                  placeholder={tab.name}
                  parentClassName='border-b text-gray-500'
                  className='text-md '
                />
              </div>
            );
          }
        })}
        <div
          className='flex gap-3 items-center cursor-pointer pb-10'
          onClick={() => {
            setShowHiddenTab(!showHiddenTab);
            setToggleArrow(!toggleArrow);
          }}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-sm text-gray-500 ${
              toggleArrow && 'fa-rotate-180'
            }`}
          />
          <p className='text-gray-500 font-bold'>
            {showHiddenTab ? 'Hide Filters' : 'More Filters'}
          </p>
        </div>
      </MainSidebar>

      <div className='flex flex-1 justify-center items-start'>
        <div className='w-[60%]'>
          <div className='flex flex-col justify-start items-start mt-20'>
            <Image
              src={'/assets/img/lead-finder/main.svg'}
              alt='img'
              width={250}
              height={250}
            />
            <p className='my-10'>
              Start your search by applying filters on the left side, or use
              presets below
            </p>
            <div className='w-full'>
              <div className='flex w-full justify-start my-2 gap-12'>
                <div className='flex flex-1 gap-2'>
                  <MdOutlineSave className='text-2xl' />
                  <p>Saved Searches</p>
                </div>
                <div className='flex flex-1 gap-2'>
                  <RiTimerLine className='text-2xl' />
                  <p>Recent Searches</p>
                </div>
              </div>
            </div>
            <div className='flex justify-start w-full gap-12'>
              <p className='text-center text-gray-500 font-semibold flex-1 bg-gray-50 rounded-3xl px-20 py-6'>
                No saved searches
              </p>
              <p className='text-center text-gray-500 font-semibold flex-1 bg-gray-50 rounded-3xl px-20 py-6'>
                No saved searches
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
