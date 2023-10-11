'use client';

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import { campaignTabs } from '@/utils/constants/campaign/campaignTabs';
import CustomBtn from '../shared/CustomBtn';
import { Separator } from '../ui/separator';
import Combobox from '../shared/Combobox';

import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs';
import { HiOutlineDownload } from 'react-icons/hi';
import { FaShareSquare } from 'react-icons/fa';

const CampaignTabWrapper = ({ children }) => {
  const params = useParams();
  const path = usePathname();
  const tabs = campaignTabs(params.id, path);

  return (
    <div className='flex flex-1 justify-center'>
      <div className='flex flex-col flex-1 lg:w-[80%] max-w-7xl'>
        <div className='flex justify-between text-sm text-gray-500'>
          <ul className='my-6  flex gap-10'>
            {tabs.map((tab, index) => (
              <div key={index} className='flex items-center gap-5'>
                {index === tabs.length - 1 && (
                  <Separator
                    orientation='vertical'
                    className='bg-gray-500 w-[2px]'
                  />
                )}
                <li className={'font-semibold'}>
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
              </div>
            ))}
          </ul>
          <div className='flex items-center gap-3'>
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
              <Combobox
                showSearch={false}
                scrollClassName='h-auto'
                popoverContent={[
                  {
                    icon: (
                      <HiOutlineDownload className='text-xl opacity-50 mr-2' />
                    ),
                    label: <p>Download analytics CSV</p>,
                    value: 'download-csv',
                    className: 'py-5',
                  },
                  {
                    icon: <FaShareSquare className='text-xl opacity-50 mr-2' />,
                    label: <p>Share campaign</p>,
                    value: 'share-campaign',
                    className: 'py-5',
                  },
                ]}
                // setValue={setDateRange}
                // value={dateRange}
                btn={{
                  btnChild: (
                    <div className='flex'>
                      <BsThreeDots className='text-2xl opacity-50' />
                    </div>
                  ),
                  btnVariant: 'outline',
                  btnClassName: '',
                }}
              />
            </div>
          </div>
        </div>
        <Separator className='-z-10' />
        {children}
      </div>
    </div>
  );
};

export default CampaignTabWrapper;
