'use client';

import GetStarted from '@/components/shared/GetStarted';
import Hook from '@/components/icons/Hook';
import HandWave from '@/components/icons/HandWave';

import CustomBtn from '@/components/shared/CustomBtn';

const Page = () => {
  return (
    <div className='flex flex-1 flex-col'>
      <GetStarted
        img={{
          src: '/accounts/main.svg',
          alt: 'img',
          width: 450,
          height: 450,
        }}
        title={{
          name: 'Add an email account to get started',
          icon: <HandWave className='w-16' />,
        }}
        btn={{
          child: (
            <>
              <Hook />
              <p>ADD NEW</p>
            </>
          ),
          href: '/account/create',
        }}
        icon={{ icon: Hook, className: 'font-bold' }}
      >
        <div className='max-sm:hidden flex flex-col gap-5 md:flex-row w-full items-center mb-20'>
          <div className='flex flex-1 justify-end md:mr-32'>
            <p className='text-center md:text-left text-gray-500 font-medium'>
              Connect accounts to keep warm & send emails from
            </p>
          </div>

          <div className='flex w-1/3 justify-center'>
            <CustomBtn href='/account/create' variant='outline'>
              <Hook />
              ADD NEW
            </CustomBtn>
          </div>
        </div>
      </GetStarted>
    </div>
  );
};

export default Page;
