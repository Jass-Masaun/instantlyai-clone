import React from 'react';
import Tab from '../shared/Tab';
import { Button } from '../ui/button';

const tabs = [
  {
    title: 'Warmup',
    content: (
      <div className='flex flex-col'>
        <div className='flex flex-1 gap-3 justify-end'>
          <Button variant='secondary'>Disable</Button>
          <Button variant='outline'>Enable</Button>
        </div>
        <div className='flex flx-col'>
          <h1>Warmup Deliverability -last week</h1>
        </div>
      </div>
    ),
  },
  {
    title: 'Settings',
    content: <div>2</div>,
  },
];

const LeftSidebar = ({ toggleLeftSidebar, setToggleLeftSidebar }) => {
  return (
    <div className='fixed top-0 right-0 z-100 bg-white h-full p-10 border shadow'>
      <div
        className='flex justify-end cursor-pointer'
        onClick={() => setToggleLeftSidebar(!toggleLeftSidebar)}
      >
        <p>Close</p>
      </div>
      <div className='flex flex-col mt-10'>
        <p>Email</p>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
};

export default LeftSidebar;
