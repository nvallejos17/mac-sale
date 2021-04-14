import React from 'react';
import { SpecItemContent, SpecItemRow, SpecItemTitle } from './SpecItem.styled';

const SpecItem = ({ title, children }) => {
  return (
    <SpecItemRow noGutters>
      <SpecItemTitle md={4}>
        <p>
          <strong>{title}</strong>
        </p>
      </SpecItemTitle>
      <SpecItemContent>{children}</SpecItemContent>
    </SpecItemRow>
  );
};

export default SpecItem;
