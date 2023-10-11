import React from 'react';
import Image from 'next/image';

import CustomBtn from './CustomBtn';

const GetStarted = ({
  children,
  img = { src: '', alt: 'img', width: 450, height: 450 },
  title = { name: '', icon: undefined, iconClass: '' },
  btn = { child: 'Button', href: '#', className: '', variant: 'primary' },
  description = false,
}) => {
  return (
    <div className='flex flex-1 flex-col items-center mt-20'>
      {!description && children}
      <Image
        src={`/assets/img/${img.src}`}
        alt={img.alt}
        width={img.width}
        height={img.height}
      />
      <div className='flex flex-col items-center gap-2 my-5'>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-2'>
            {React.createElement(title?.icon || 'div', {
              className: `w-7 md:w-12 ${title.iconClass}`,
            })}
            <h1 className='text-md md:text-xl font-bold'>{title.name}</h1>
          </div>
          {description && children}
        </div>
      </div>
      <CustomBtn
        href={btn.href}
        className={btn.className}
        variant={btn.variant}
      >
        {btn.child}
      </CustomBtn>
    </div>
  );
};

export default GetStarted;
