'use client';

import Campaign from '@/components/campagin/Campaign';
import GetStarted from '@/components/shared/GetStarted';
import CustomBtn from '@/components/shared/CustomBtn';
import CustomInput from '@/components/shared/CustomInput';

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
                    <p>Filter</p>
                    <RiFilter2Fill />
                  </div>
                  <div className='flex items-center gap-1'>
                    <p>Date created</p>
                    <MdKeyboardArrowDown />
                  </div>
                  <AddCampaignBtn />
                </div>
              </div>
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
            icon: RiLightbulbFlashLine,
            iconClass: 'text-3xl text-amber-400',
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
