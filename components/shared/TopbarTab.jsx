'use client';

import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { getTopbarTabNameByPath } from '@/utils/constants/topbar';
import Back from './Back';

const TopbarTab = () => {
  const path = usePathname();

  const heading = getTopbarTabNameByPath(path);
  return (
    <div className='flex items-center text-lg md:text-xl max-sm:gap-7'>
      <h1 className='font-bold capitalize'>{heading}</h1>
      {path.includes('/campaign/') && (
        <Back className='border-none md:ml-12' btnTitle='Back to Campaigns' />
      )}
      {path.includes('/lead-finder') && (
        <div className='flex gap-7 text-gray-500 md:ml-[9.7rem]'>
          <Link
            href={'/lead-finder'}
            className={`px-5 py-[1.7rem] font-bold ${
              path === '/lead-finder' &&
              'border-b-2 border-primary text-primary'
            }`}
          >
            People
          </Link>
          <Link
            href={'/lead-finder/enrich'}
            className={`px-5 py-[1.7rem] font-bold ${
              path === '/lead-finder/enrich' &&
              'border-b-2 border-primary text-primary'
            }`}
          >
            Enrichment
          </Link>
        </div>
      )}
      {path.includes('/unibox') && (
        <div className='flex text-gray-500 ml-[12.7rem]'>
          <Link
            href={'/unibox'}
            className={`px-5 py-[1.7rem] font-bold ${
              path === '/unibox' && 'border-b-2 border-primary text-primary'
            }`}
          >
            Inbox
          </Link>
          <Link
            href={'/unibox/crm'}
            className={`px-5 py-[1.7rem] font-bold ${
              path === '/unibox/crm' && 'border-b-2 border-primary text-primary'
            }`}
          >
            CRM
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopbarTab;
