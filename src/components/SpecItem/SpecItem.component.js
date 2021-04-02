import React, { useState, useEffect } from 'react';
import { SpecItemContent, SpecItemRow, SpecItemTitle } from './SpecItem.styled';

const SpecItem = ({ title, children }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [hasWrapped, setHasWrapped] = useState(innerWidth < 576);

  useEffect(() => {
    const onResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => setHasWrapped(innerWidth < 576), [innerWidth]);

  return (
    <SpecItemRow noGutters hasWrapped={hasWrapped}>
      <SpecItemTitle md={4} hasWrapped={hasWrapped}>
        <p>
          <strong>{title}</strong>
        </p>
      </SpecItemTitle>
      <SpecItemContent hasWrapped={hasWrapped}>{children}</SpecItemContent>
    </SpecItemRow>
  );
};

export default SpecItem;
