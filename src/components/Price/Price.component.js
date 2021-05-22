import React from 'react';
import useRates from '../../hooks/useRates.hook';
import {
  PriceWrapper,
  PriceItem,
  PriceItemLabel,
  PriceItemValue,
} from './Price.styled';

const Price = ({ usd = 790 }) => {
  const { usdArs } = useRates();

  return (
    <PriceWrapper>
      <PriceItem>
        <PriceItemLabel>USD</PriceItemLabel>{' '}
        <PriceItemValue>{usd.toFixed(0)}</PriceItemValue>
      </PriceItem>

      <PriceItem>
        <PriceItemLabel>ARS</PriceItemLabel>{' '}
        <PriceItemValue>
          {usdArs ? (usd * usdArs).toFixed(0) : '-'}
        </PriceItemValue>
      </PriceItem>
    </PriceWrapper>
  );
};

export default Price;
