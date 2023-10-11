import React from 'react';

import CustomBtn from './CustomBtn';

const Popup = ({ children, height = 'h-full', width = 'w-full' }) => {
  return (
    <div className='fixed top-0 left-0 z-100 h-full w-full'>
      <div className='flex justify-center items-center w-full h-full bg-black/30'>
        <div
          className={`flex flex-col items-center ${height} ${width} bg-white px-10 py-6 rounded`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
