'use client';

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import { campaignTabs } from '@/utils/constants/campaignTabs';

import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs';
import CustomBtn from '../shared/CustomBtn';

const CampaignTabWrapper = ({ children }) => {
  const params = useParams();
  const path = usePathname();
  const tabs = campaignTabs(params.id, path);

  return (
    <div className='flex flex-1 justify-center'>
      <div className='flex flex-col flex-1 lg:w-[80%] max-w-7xl'>
        <div className='flex justify-between text-sm text-gray-500 border-b'>
          <ul className='flex'>
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`my-6 mr-2 font-semibold px-6 ${
                  index === tabs.length - 1 && 'border-l-2'
                }`}
              >
                <Link
                  href={tab.route}
                  className={`px-1 py-6 font-bold ${
                    tab.isActive
                      ? 'text-primary border-b-4 border-primary '
                      : ''
                  }`}
                >
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-3 items-center'>
            <div className='flex items-center gap-1 whitespace-nowrap'>
              <CustomBtn
                variant='outline'
                className='text-black border-border py-2'
              >
                <BsFillPlayFill className='text-2xl text-green-500' />
                <p>Resume campaign</p>
              </CustomBtn>
            </div>
            <div className='flex items-center gap-1 whitespace-nowrap'>
              <CustomBtn
                variant='outline'
                className='text-black border-border p-2'
              >
                <BsThreeDots className='text-2xl' />
              </CustomBtn>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default CampaignTabWrapper;
