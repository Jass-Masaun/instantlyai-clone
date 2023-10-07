'use client';

import React, { useState } from 'react';

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className='flex flex-col'>
      <div className='flex gap-4 border-b'>
        {tabs.map((tab) => (
          <button
            key={tab.title}
            className={`font-semibold ${
              activeTab === tab
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500'
            } px-4 py-2`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className='ml-5 mt-8'>{activeTab.content}</div>
    </div>
  );
};

export default Tab;
