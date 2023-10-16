'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import GetStarted from '@/components/shared/GetStarted';
import Hook from '@/components/icons/Hook';
import HandWave from '@/components/icons/HandWave';
import CustomBtn from '@/components/shared/CustomBtn';
import CustomInput from '@/components/shared/CustomInput';
import { AiOutlineSearch } from 'react-icons/ai';
import Combobox from '@/components/shared/Combobox';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import { filters } from '@/utils/constants/accounts/filters';

import { RiFilter2Fill } from 'react-icons/ri';
import { HiPlusSm } from 'react-icons/hi';
import { BsThreeDots } from 'react-icons/bs';
import { accountDetails } from '@/utils/constants/accounts';
import LeftSidebar from '@/components/account/LeftSidebar';

const accounts = [
  {
    id: 127,
    firstName: 'hghgh',
    lastName: 'aksjdhafs',
    is_active: true,
    user_id: 1,
    email: 'codanics21@gmail.com',
    campaign_email_sent: 23,
    provider: null,
    password: 'gjsiopqxpmzdtjto',
    imap_host: 'imap.gmail.com',
    imap_port: '993',
    imap_password: 'gjsiopqxpmzdtjto',
    imap_username: 'codanics21@gmail.com',
    smtp_host: 'smtp.gmail.com',
    smtp_port: '587',
    smtp_password: 'gjsiopqxpmzdtjto',
    smtp_username: 'codanics21@gmail.com',
    warmup_email_sent_pastweek: 0,
    warmup_email_sent: 13,
    warmup_email_landedIn_pastweek: 0,
    warmup_email_savedFromSpam: 0,
    warmup_health_score: 0,
    warmup_enabled: false,
    limits: 12,
    mails_sent_today: 0,
    last_email_sent: '2023-10-06T04:42:18.000Z',
    delay: 1,
    type: 'appPassword',
    refresh_token: null,
    error: false,
    warmup_error: false,
    reply_to: 'asdfas@email.com',
    increase_per_day: 1,
    warmup_limit: 100,
    reply_rate: 100,
    current_sending_limit: 6,
    warmup_filter_tag: 'tGxwSZ0Pm',
    warmup_email_received: 8,
    label_id: null,
    warmup_sent_today: 0,
    warmup_replied_in_thread: 0,
    createdAt: '2023-09-20T06:07:49.000Z',
    updatedAt: '2023-10-16T00:00:00.000Z',
  },
  {
    id: 128,
    firstName: 'Lokesh',
    lastName: 'Yadav',
    is_active: true,
    user_id: 1,
    email: 'lokesh@openinapp.com',
    campaign_email_sent: 8,
    provider: 'google',
    password: null,
    imap_host: null,
    imap_port: null,
    imap_password: null,
    imap_username: null,
    smtp_host: null,
    smtp_port: null,
    smtp_password: null,
    smtp_username: null,
    warmup_email_sent_pastweek: 0,
    warmup_email_sent: 2,
    warmup_email_landedIn_pastweek: 0,
    warmup_email_savedFromSpam: 0,
    warmup_health_score: 0,
    warmup_enabled: false,
    limits: 100,
    mails_sent_today: 0,
    last_email_sent: '2023-10-06T04:43:07.000Z',
    delay: 2,
    type: 'oauth',
    refresh_token:
      '1//047sEFVnWTHBWCgYIARAAGAQSNgF-L9IrpmssvbpsefJIaBbIMTHQsF8qEki1WtYLe_zxl3TTPTDN32EFuZcOIZelmzYvR_LP7g',
    error: false,
    warmup_error: false,
    reply_to: null,
    increase_per_day: 1,
    warmup_limit: 100,
    reply_rate: 100,
    current_sending_limit: 2,
    warmup_filter_tag: '0hmqLmkJh',
    warmup_email_received: 9,
    label_id: 'Label_6',
    warmup_sent_today: 0,
    warmup_replied_in_thread: 0,
    createdAt: '2023-09-20T10:30:30.000Z',
    updatedAt: '2023-10-16T00:00:00.000Z',
  },
  {
    id: 129,
    firstName: 'Lokesh ',
    lastName: 'Yadav',
    is_active: true,
    user_id: 1,
    email: 'sonamgupta191099@gmail.com',
    campaign_email_sent: 187,
    provider: 'google',
    password: null,
    imap_host: null,
    imap_port: null,
    imap_password: null,
    imap_username: null,
    smtp_host: null,
    smtp_port: null,
    smtp_password: null,
    smtp_username: null,
    warmup_email_sent_pastweek: 0,
    warmup_email_sent: 11,
    warmup_email_landedIn_pastweek: 0,
    warmup_email_savedFromSpam: 0,
    warmup_health_score: 0,
    warmup_enabled: false,
    limits: 70,
    mails_sent_today: 0,
    last_email_sent: '2023-10-04T13:51:26.000Z',
    delay: 2,
    type: 'oauth',
    refresh_token:
      '1//04iqFsiZZxTnrCgYIARAAGAQSNwF-L9Ir3fMi1LwS0KclqQhS2aqqGzuaj1p6GW5Ix9z4qCMtlRSPXMiaQ92WA2w7aYJt6I18lAQ',
    error: false,
    warmup_error: false,
    reply_to: null,
    increase_per_day: 1,
    warmup_limit: 20,
    reply_rate: 38,
    current_sending_limit: 5,
    warmup_filter_tag: '4InPHba_1',
    warmup_email_received: 9,
    label_id: 'Label_1',
    warmup_sent_today: 0,
    warmup_replied_in_thread: 0,
    createdAt: '2023-09-25T10:37:11.000Z',
    updatedAt: '2023-10-16T00:00:00.000Z',
  },
  {
    id: 130,
    firstName: 'Lokesh',
    lastName: 'Yadav',
    is_active: true,
    user_id: 1,
    email: 'vaishaligupta191099@gmail.com',
    campaign_email_sent: 189,
    provider: 'google',
    password: null,
    imap_host: null,
    imap_port: null,
    imap_password: null,
    imap_username: null,
    smtp_host: null,
    smtp_port: null,
    smtp_password: null,
    smtp_username: null,
    warmup_email_sent_pastweek: 0,
    warmup_email_sent: 8,
    warmup_email_landedIn_pastweek: 0,
    warmup_email_savedFromSpam: 0,
    warmup_health_score: 0,
    warmup_enabled: false,
    limits: 70,
    mails_sent_today: 0,
    last_email_sent: '2023-10-04T13:51:21.000Z',
    delay: 2,
    type: 'oauth',
    refresh_token:
      '1//04PQLqw1J_VIACgYIARAAGAQSNwF-L9IrUY6-2QKo6nsjcPfk0olaRfj3ciT2fiKf0iSDZ77j3FkM4NuFwOvoQ1IdTuDPSmZc9do',
    error: false,
    warmup_error: false,
    reply_to: null,
    increase_per_day: 1,
    warmup_limit: 20,
    reply_rate: 40,
    current_sending_limit: 4,
    warmup_filter_tag: 'AmYBtk3Rt',
    warmup_email_received: 8,
    label_id: 'Label_1',
    warmup_sent_today: 0,
    warmup_replied_in_thread: 0,
    createdAt: '2023-09-25T10:37:46.000Z',
    updatedAt: '2023-10-16T00:00:00.000Z',
  },
  {
    id: 131,
    firstName: 'Ravi ',
    lastName: 'Shankar',
    is_active: true,
    user_id: 1,
    email: 'ravi@openinapp.com',
    campaign_email_sent: 2,
    provider: 'google',
    password: null,
    imap_host: null,
    imap_port: null,
    imap_password: null,
    imap_username: null,
    smtp_host: null,
    smtp_port: null,
    smtp_password: null,
    smtp_username: null,
    warmup_email_sent_pastweek: 0,
    warmup_email_sent: 0,
    warmup_email_landedIn_pastweek: 0,
    warmup_email_savedFromSpam: 0,
    warmup_health_score: 0,
    warmup_enabled: false,
    limits: 100,
    mails_sent_today: 0,
    last_email_sent: '2023-10-15T15:25:03.000Z',
    delay: 5,
    type: 'oauth',
    refresh_token:
      '1//04W9bRMMMYdfbCgYIARAAGAQSNwF-L9IrCE7lSZMBThTpkF3CqbY6tntsC0B5EyZwaZ4EbWXlyWBsvXOc-lYMQD6DWrcnUIquw9A',
    error: false,
    warmup_error: false,
    reply_to: null,
    increase_per_day: 1,
    warmup_limit: 20,
    reply_rate: 0,
    current_sending_limit: 1,
    warmup_filter_tag: 'W3N_n8Tq5',
    warmup_email_received: 0,
    label_id: null,
    warmup_sent_today: 0,
    warmup_replied_in_thread: 0,
    createdAt: '2023-10-15T15:09:55.000Z',
    updatedAt: '2023-10-16T00:00:00.000Z',
  },
];

// const accounts = [];

const Page = () => {
  const [filter, setFilter] = useState({});
  const [toggleLeftSidebar, setToggleLeftSidebar] = useState(false);
  const [userAccountData, setUserAccountData] = useState({});

  return (
    <>
      {accounts.length ? (
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
                      scrollClassName='h-autox]'
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
              <CustomBtn variant='outline' href='/account/create'>
                <div className='flex items-center'>
                  <HiPlusSm className='text-2xl' />
                  <p>ADD NEW</p>
                </div>
              </CustomBtn>
            </div>
            <div className='flex flex-col gap-5'>
              {accounts.map((account) => (
                <div
                  key={account.id}
                  className='flex items-center justify-between p-5 shadow-md rounded font-bold'
                >
                  <p className='w-[17rem]'>{account.email}</p>
                  <div
                    className='flex items-center'
                    onClick={() => {
                      setToggleLeftSidebar(!toggleLeftSidebar);
                      setUserAccountData(account);
                    }}
                  >
                    {accountDetails.map((accountDetail, index) => (
                      <HoverCard key={index} openDelay={0} closeDelay={0}>
                        <HoverCardTrigger asChild>
                          <Button asChild variant='ghost' className=''>
                            <div className='flex gap-3 cursor-pointer'>
                              {accountDetail.icon}
                              <p className=''>{account[accountDetail.key]}</p>
                            </div>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent
                          side='top'
                          className='w-36 text-sm text-center bg-foreground text-white font-normal'
                        >
                          <p>{accountDetail.hoverContent}</p>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                  <Button variant='ghost'>
                    <BsThreeDots className='text-lg opacity-50' />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          {!toggleLeftSidebar && (
            <LeftSidebar
              toggleLeftSidebar={toggleLeftSidebar}
              setToggleLeftSidebar={setToggleLeftSidebar}
              userAccountData={userAccountData}
            />
          )}
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Page;
