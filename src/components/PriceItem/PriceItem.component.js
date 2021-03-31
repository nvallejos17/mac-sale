import React from 'react';

const PriceItem = ({ cur, val }) => {
  return (
    <div>
      <p>
        <strong>{cur.toUpperCase()}</strong> {val.toFixed(2)}
      </p>
    </div>
  );
};

export default PriceItem;
