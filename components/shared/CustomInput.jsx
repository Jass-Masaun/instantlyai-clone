import React from 'react';
import { Input } from '../ui/input';

const CustomInput = ({
  label = '',
  placeholder = '',
  value = '',
  className = '',
  onChange = () => {},
  parentClassName = '',
}) => {
  return (
    <div className={`relative flex-1 w-full ${parentClassName}`}>
      <label className='absolute -top-3 left-0 bg-white px-2'>{label}</label>
      <Input
        placeholder={placeholder}
        className={`w-full p-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none ${className}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
