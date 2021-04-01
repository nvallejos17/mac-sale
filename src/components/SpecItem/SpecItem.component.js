import React from 'react';
import { SpecItemCol, SpecItemRow, SpecItemTitle } from './SpecItem.styled';

const SpecItem = ({ title, children }) => {
  return (
    <SpecItemRow noGutters>
      <SpecItemCol md={4}>
        <SpecItemTitle>{title}</SpecItemTitle>
      </SpecItemCol>
      <SpecItemCol>{children}</SpecItemCol>
    </SpecItemRow>
  );
};

export default SpecItem;
