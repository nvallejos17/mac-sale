import React from 'react';
import Card from 'react-bootstrap/Card';
import {
  PriceItemCurrency,
  PriceItemValue,
  PriceItemWrapper,
} from './PriceItem.styled';

const PriceItem = ({ cur, val }) => {
  return (
    <Card border='primary'>
      <PriceItemWrapper>
        <PriceItemCurrency>{cur.toUpperCase()}</PriceItemCurrency>
        <PriceItemValue>{val.toFixed(2)}</PriceItemValue>
      </PriceItemWrapper>
    </Card>
  );
};

export default PriceItem;
