import React from 'react';

const TwoSquares = ({ className, height = 30, width = 30 }) => {
  return (
    <svg
      className={className}
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M19 8.268a2 2 0 0 1 1 1.732v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h3'></path>
      <path d='M5 15.734a2 2 0 0 1 -1 -1.734v-8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-3'></path>
    </svg>
  );
};

export default TwoSquares;
