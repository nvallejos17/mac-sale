import React from 'react';
import Container from 'react-bootstrap/Container';
import PriceItem from '../PriceItem/PriceItem.component';

const Price = () => {
  const priceItems = [
    { cur: 'usd', val: 900 },
    { cur: 'ars', val: 900 * 145 },
    { cur: 'dai', val: 900 / 1.04 },
  ];

  return (
    <Container>
      {priceItems.map(({ cur, val }) => (
        <PriceItem key={cur} cur={cur} val={val} />
      ))}
    </Container>
  );
};

export default Price;
