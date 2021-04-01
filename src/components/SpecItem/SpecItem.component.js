import React from 'react';

const SpecItem = ({ title, children }) => {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
};

export default SpecItem;
