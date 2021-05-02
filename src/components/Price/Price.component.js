import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PriceWrapper,
  PriceItem,
  PriceItemLabel,
  PriceItemValue,
} from './Price.styled';

const Price = ({ usd = 800 }) => {
  const [daiArs, setDaiArs] = useState(null);
  const [daiUsd, setDaiUsd] = useState(null);

  useEffect(() => {
    axios.get('https://criptoya.com/api/buenbit/dai/ars').then((res) => {
      const { ask } = res.data;
      setDaiArs(ask);
    });

    axios.get('https://criptoya.com/api/buenbit/dai/usd').then((res) => {
      const { bid } = res.data;
      setDaiUsd(bid);
    });
  }, []);

  const [usdArs, setUsdArs] = useState(null);

  useEffect(() => setUsdArs(daiArs / daiUsd), [daiArs, daiUsd]);

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
