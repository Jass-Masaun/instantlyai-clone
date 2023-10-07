import React from 'react';

const TwoBarsOneHalf = ({ className, width = 30, height = 30 }) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className={`mr-1 ${className}`}
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M4 9h16v2H4V9zm0 4h10v2H4v-2z'></path>
    </svg>
  );
};

export default TwoBarsOneHalf;
