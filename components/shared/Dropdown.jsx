'use client';

import React, { useState } from 'react';

import { MdKeyboardArrowUp } from 'react-icons/md';

const generateRandomAlphabet = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // The alphabet
  let randomAlphabet = '';

  for (let i = 0; i < alphabet.length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    randomAlphabet += alphabet[randomIndex];
  }

  return randomAlphabet;
};

const Dropdown = ({
  icon,
  name,
  children,
  classes = { headingClass: '' },
  expanded = true,
}) => {
  const [toggleTab, setToggleTab] = useState(expanded);

  // Example usage:
  const randomAlphabet = generateRandomAlphabet();

  const handleListArrowClick = () => {
    setToggleTab(!toggleTab);

    const content = document.querySelector(`.${randomAlphabet}`);
    if (content?.style) {
      if (!!toggleTab) {
        content.style.height = '0px';
      } else {
        content.style.height = content.scrollHeight + 'px';
      }
    }
  };

  return (
    <div className='flex flex-col my-4'>
      <div
        className={`current flex justify-between items-center font-semibold ${classes.headingClass}`}
      >
        <div className='flex items-center gap-1'>
          {icon && React.createElement(icon, { className: 'text-2xl' })}
          <h1>{name}</h1>
        </div>
        <MdKeyboardArrowUp
          className={`text-2xl text-gray-500 transition ${
            toggleTab && 'rotate-180'
          }`}
          onClick={handleListArrowClick}
        />
      </div>

      <div
        className={`${randomAlphabet} overflow-hidden ${
          toggleTab ? 'h-auto' : 'h-0'
        } transition-height duration-300 ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
