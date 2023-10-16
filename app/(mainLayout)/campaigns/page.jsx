'use client';

import React, { useState } from 'react';

import Campaign from '@/components/campagin/Campaign';
import GetStarted from '@/components/shared/GetStarted';
import CustomBtn from '@/components/shared/CustomBtn';
import CustomInput from '@/components/shared/CustomInput';
import Combobox from '@/components/shared/Combobox';

import { filters } from '@/utils/constants/campaign/filters';

import { HiPlusSm } from 'react-icons/hi';
import { RiLightbulbFlashLine, RiFilter2Fill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';

const campaigns = [{ id: 1 }, { id: 2 }];

// const campaigns = [];

const AddCampaignBtn = () => {
  return (
    <CustomBtn variant='outline' href='/campaign/create'>
      <div className='flex items-center'>
        <HiPlusSm className='text-2xl' />
        <p>ADD NEW</p>
      </div>
    </CustomBtn>
  );
};

const Page = () => {
  const [filter, setFilter] = useState({});
  return (
    <>
      {campaigns.length ? (
        <div className='flex flex-1 justify-center mt-16'>
          <div className='flex flex-1 flex-col px-12 py-8 lg:max-w-[75%]'>
            <div className='flex justify-between mb-6'>
              <div className='flex max-sm:flex-col items-center gap-4'>
                <div className='flex flex-1 w-full items-center gap-1 rounded shadow px-4 py-2'>
                  <CustomInput
                    placeholder='Search'
                    className='w-full text-sm font-normal py-0 px-0'
                  />
                  <AiOutlineSearch className='text-2xl text-gray-500' />
                </div>
                <div className='flex gap-4'>
                  <div className='flex items-center gap-1'>
                    <Combobox
                      popoverContent={filters}
                      contentClassName='w-52'
                      scrollClassName='h-[270px]'
                      showSearch={false}
                      value={filter}
                      setValue={setFilter}
                      btn={{
                        btnChild: (
                          <div className='flex w-full justify-between'>
                            <div className='flex items-center gap-2'>
                              <p>{filter?.label ? filter.label : 'All'}</p>
                              <RiFilter2Fill />
                            </div>
                          </div>
                        ),
                        btnVariant: 'outline',
                        btnClassName: 'border-none',
                      }}
                    />
                  </div>
                  {/* <div className='flex items-center gap-1'>
                    <p>Date created</p>
                    <MdKeyboardArrowDown />
                  </div> */}
                </div>
              </div>
              <AddCampaignBtn />
            </div>
            {campaigns.map((campaign) => (
              <Campaign key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      ) : (
        <GetStarted
          img={{
            src: '/campaigns/main.svg',
            alt: 'img',
            width: 450,
            height: 450,
          }}
          title={{
            name: 'Add a campaign to start sending emails',
            icon: <RiLightbulbFlashLine className='text-3xl text-amber-400' />,
          }}
          btn={{
            child: (
              <>
                <HiPlusSm className='text-2xl' />
                <p>ADD NEW</p>
              </>
            ),
            href: '/campaign/create',
          }}
        >
          <div className='flex mb-20'>
            <AddCampaignBtn />
            <p className='text-gray-500 font-semibold ml-80'>
              Create and edit outreach campaigns
            </p>
          </div>
        </GetStarted>
      )}
    </>
  );
};

export default Page;
