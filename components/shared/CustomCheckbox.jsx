import React from 'react';
import { Checkbox } from '../ui/checkbox';

const CustomCheckbox = ({ id }) => {
  return (
    <Checkbox
      id={id}
      className='border-2 border-gray-600 shadow w-5 h-5 data-[state=checked]:border-primary'
    />
  );
};

export default CustomCheckbox;
