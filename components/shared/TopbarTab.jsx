'use client';

import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { getTopbarTabNameByPath } from '@/utils/constants/topbar';

const TopbarTab = () => {
  const path = usePathname();

  const heading = getTopbarTabNameByPath(path);
  return (
    <>
      <h1 className='ml-28 font-bold text-xl capitalize'>{heading}</h1>
      {path.includes('/lead-finder') && (
        <div className='flex text-gray-500 ml-[9.7rem]'>
          <Link
            href={'/lead-finder'}
            className={`px-5 py-7 font-bold ${
              path === '/lead-finder' &&
              'border-b-2 border-primary text-primary'
            }`}
          >
            People
          </Link>
          <Link
            href={'/lead-finder/enrich'}
            className={`px-5 py-7 font-bold ${
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
            className={`px-5 py-7 font-bold ${
              path === '/unibox' && 'border-b-2 border-primary text-primary'
            }`}
          >
            Inbox
          </Link>
          <Link
            href={'/unibox/crm'}
            className={`px-5 py-7 font-bold ${
              path === '/unibox/crm' && 'border-b-2 border-primary text-primary'
            }`}
          >
            CRM
          </Link>
        </div>
      )}
    </>
  );
};

export default TopbarTab;
