import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PriceWrapper,
  PriceItem,
  PriceItemLabel,
  PriceItemValue,
} from './Price.styled';

const Price = ({ usd = 900 }) => {
  const [ars, setArs] = useState(null);
  const [dai, setDai] = useState(null);

  useEffect(() => {
    axios
      .get('https://be.buenbit.com/api/market/tickers/')
      .then((res) => {
        const {
          object: { daiars, daiusd },
        } = res.data;

        setArs(usd * (daiars.selling_price / daiusd.purchase_price));
        setDai(usd / daiusd.purchase_price);
      })
      .catch(() => {
        setArs(null);
        setDai(null);
      });
  }, [usd]);

  return (
    <PriceWrapper>
      <PriceItem>
        <PriceItemLabel>USD</PriceItemLabel>{' '}
        <PriceItemValue>{usd.toFixed(0)}</PriceItemValue>
      </PriceItem>

      <PriceItem>
        <PriceItemLabel>ARS</PriceItemLabel>{' '}
        <PriceItemValue>{ars?.toFixed(0) || '-'}</PriceItemValue>
      </PriceItem>

      <PriceItem>
        <PriceItemLabel>DAI</PriceItemLabel>{' '}
        <PriceItemValue>{dai?.toFixed(2) || '-'}</PriceItemValue>
      </PriceItem>
    </PriceWrapper>
  );
};

export default Price;
