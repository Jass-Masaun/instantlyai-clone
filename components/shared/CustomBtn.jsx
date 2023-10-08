import React from 'react';
import Link from 'next/link';

import { Button } from '../ui/button';

const getClassName = (variant = '') => {
  if (variant === 'outline') return 'border border-primary text-primary';
  if (variant === '') return 'border border-primary shadow shadow-primary';

  return '';
};

const CustomBtn = ({
  href = '#',
  className = '',
  variant = '',
  children,
  onClick = () => {},
}) => {
  return (
    <Button
      asChild
      variant={variant}
      className={`py-6 font-bold ${getClassName(variant)} ${className}`}
      onClick={onClick}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default CustomBtn;
