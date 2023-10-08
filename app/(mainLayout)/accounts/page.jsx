'use client';

import GetStarted from '@/components/shared/GetStarted';
import Hook from '@/components/icons/Hook';
import HandWave from '@/components/icons/HandWave';

import CustomBtn from '@/components/shared/CustomBtn';

const page = () => {
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
          icon: HandWave,
          iconClass: 'text-5xl text-amber-400',
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
        <div className='flex w-full items-center mb-20'>
          <div className='flex flex-1 justify-end mr-32'>
            <p className='text-gray-500 font-medium'>
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

export default page;