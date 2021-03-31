import React from 'react';
import Container from 'react-bootstrap/Container';

const Price = () => {
  const priceItems = [
    { cur: 'usd', val: 900 },
    { cur: 'ars', val: 900 * 145 },
    { cur: 'dai', val: 900 / 1.04 },
  ];

  return (
    <Container>
      {priceItems.map(({ cur, val }) => (
        <div key={cur}>
          <p>
            <strong>{cur.toUpperCase()}</strong> {val.toFixed(2)}
          </p>
        </div>
      ))}
    </Container>
  );
};

export default Price;
