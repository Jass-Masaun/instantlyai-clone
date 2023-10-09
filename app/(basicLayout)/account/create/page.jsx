'use client';

import Image from 'next/image';
import React from 'react';

import CustomBtn from '@/components/shared/CustomBtn';
import { Separator } from '@/components/ui/separator';

const Page = () => {
  return (
    <div className='flex justify-center mt-5'>
      <div className='flex flex-col w-[320px] justify-center shadow-all-sides rounded-lg px-10'>
        <div className='mt-5'>
          <h1 className='font-bold py-5'>Connect a new email account</h1>
        </div>

        <Separator />

        <div className='flex flex-col gap-10 my-7'>
          <div className='flex gap-3 items-center'>
            <div>
              <Image
                src='/assets/icons/accounts/google.svg'
                alt='google'
                width={35}
                height={35}
              />
            </div>

            <div className='font-bold'>
              <p className='text-xs text-gray-500'>Google</p>
              <h1 className='text-sm'>Gmail / G-Suite</h1>
            </div>
          </div>

          <div className='flex gap-3 items-center'>
            <div>
              <Image
                src='/assets/icons/accounts/microsoft.svg'
                alt='google'
                width={35}
                height={35}
              />
            </div>

            <div className='font-bold'>
              <p className='text-xs text-gray-500'>Microsoft</p>
              <h1 className='text-sm'>Office 365 / Outlook</h1>
            </div>
          </div>

          <div className='flex gap-3 items-center'>
            <div>
              <Image
                src='/assets/icons/accounts/email.svg'
                alt='google'
                width={35}
                height={35}
              />
            </div>

            <div className='font-bold'>
              <p className='text-xs text-gray-500'>Any Provider</p>
              <h1 className='text-sm'>IMAP / SMTP</h1>
            </div>
          </div>
        </div>

        <div className='flex justify-center my-7'>
          <CustomBtn variant='outline'>Cancel</CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Page;
