import React from 'react';
import Tab from '../shared/Tab';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

import { BiHappyBeaming } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { summary } from '@/utils/constants/accounts/leftSidebar';

const WarmupTab = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-1 gap-3 justify-end'>
        <Button variant='secondary'>Disable</Button>
        <Button variant='outline'>Enable</Button>
      </div>
      <div className='flex gap-3'>
        <Card className='w-1/2 shadow-md'>
          <CardHeader>
            <CardTitle>Warmup Deliverability - last week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col'>
              <div className='flex flex-col items-center'>
                <BiHappyBeaming className='text-8xl text-primary' />
                <h1 className='font-bold text-xl'>Superb!</h1>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className='font-bold'>
              {/* {analyticsData?.aggregates?.health_score
          ? analyticsData?.aggregates?.health_score
          : 0} */}
              % of your warmup emails landed in inbox
            </p>
          </CardFooter>
        </Card>
        <Card className='w-1/2 shadow-md'>
          <CardHeader>
            <CardTitle>Summary - last week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col'>
              {summary.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 py-3 ${
                    index === summary.length - 1 && 'border-t'
                  }`}
                >
                  {item.icon} <p className='font-bold'>0</p> <p>{item.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const tabs = [
  {
    title: 'Warmup',
    content: <WarmupTab />,
  },
  {
    title: 'Settings',
    content: <div>2</div>,
  },
];

const LeftSidebar = ({ toggleLeftSidebar, setToggleLeftSidebar }) => {
  return (
    <div className='fixed top-0 right-0 z-100 bg-white h-full p-10 border shadow w-[45rem]'>
      <div
        className='flex justify-end cursor-pointer'
        onClick={() => setToggleLeftSidebar(!toggleLeftSidebar)}
      >
        <AiOutlineClose className='text-3xl' />
      </div>
      <div className='flex flex-col mt-10 gap-10'>
        <h1 className='text-xl font-bold'>jaspreetsinghmasaun@gmail.com</h1>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
};

export default LeftSidebar;
