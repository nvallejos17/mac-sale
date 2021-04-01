import React from 'react';
import {
  PriceItemCard,
  PriceItemCardBody,
  PriceItemCurrency,
  PriceItemValue,
} from './PriceItem.styled';

const PriceItem = ({ cur, val }) => {
  return (
    <PriceItemCard border='primary'>
      <PriceItemCardBody>
        <PriceItemCurrency>{cur.toUpperCase()}</PriceItemCurrency>
        <PriceItemValue>{val.toFixed(2)}</PriceItemValue>
      </PriceItemCardBody>
    </PriceItemCard>
  );
};

export default PriceItem;
