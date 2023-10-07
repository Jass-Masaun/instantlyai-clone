import React from 'react';

import CustomBtn from './CustomBtn';

const Popup = ({
  heading = '',
  description = '',
  handleClick = {
    continueBtn: () => {},
    cancelBtn: () => {},
  },
}) => {
  return (
    <div className='fixed top-0 left-0 z-50 h-screen w-screen'>
      <div className='flex justify-center items-center w-full h-full bg-black/30'>
        <div className='flex flex-col items-center w-[450px] h-[300px] bg-white px-10 py-6 rounded'>
          <h1 className='text-3xl font-semibold text-gray-500'>{heading}</h1>
          <div className='text-sm text-gray-700 my-5'>{description}</div>
          <div className='flex items-center gap-5'>
            <CustomBtn onClick={handleClick.continueBtn}>Continue</CustomBtn>
            <CustomBtn variant='outline' onClick={handleClick.cancelBtn}>
              Cancel
            </CustomBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
