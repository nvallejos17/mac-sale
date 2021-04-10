import React from 'react';
import {
  PriceWrapper,
  PriceItem,
  PriceItemLabel,
  PriceItemValue,
} from './Price.styled';

const Price = () => {
  const usd = 900;
  const ars = usd * 145;
  const dai = usd / 1.04;

  const priceItems = [
    { cur: 'usd', val: usd },
    { cur: 'ars', val: ars },
    { cur: 'dai', val: dai },
  ];

  return (
    <PriceWrapper>
      {priceItems.map(({ cur, val }, index) => (
        <PriceItem key={index}>
          <PriceItemLabel>{cur.toUpperCase()}</PriceItemLabel>{' '}
          <PriceItemValue>{val.toFixed(2)}</PriceItemValue>
        </PriceItem>
      ))}
    </PriceWrapper>
  );
};

export default Price;
