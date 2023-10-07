import React from 'react';

const MainSidebar = ({ children, className = '' }) => {
  return (
    <div className={`w-72 border-r px-4 py-6 ${className}`}>{children}</div>
  );
};

export default MainSidebar;
