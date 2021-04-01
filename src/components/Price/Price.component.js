import React from 'react';
import PriceItem from '../PriceItem/PriceItem.component';
import { PriceItemsContainer, PriceWrapper } from './Price.styled';

const Price = () => {
  const priceItems = [
    { cur: 'usd', val: 900 },
    { cur: 'ars', val: 900 * 145 },
    { cur: 'dai', val: 900 / 1.04 },
  ];

  return (
    <PriceWrapper>
      <PriceItemsContainer>
        {priceItems.map(({ cur, val }) => (
          <PriceItem key={cur} cur={cur} val={val} />
        ))}
      </PriceItemsContainer>
    </PriceWrapper>
  );
};

export default Price;
