import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PriceWrapper,
  PriceItem,
  PriceItemLabel,
  PriceItemValue,
} from './Price.styled';

const Price = ({ usd = 850 }) => {
  const [daiArs, setDaiArs] = useState(null);
  const [daiUsd, setDaiUsd] = useState(null);

  useEffect(() => {
    axios
      .get('https://criptoya.com/api/buenbit/dai/ars')
      .then((res) => {
        const { bid: purchase_price, ask: selling_price } = res.data;
        setDaiArs({ purchase_price, selling_price });
      })
      .catch(() => setDaiArs(null));

    axios
      .get('https://criptoya.com/api/buenbit/dai/usd')
      .then((res) => {
        const { bid: purchase_price, ask: selling_price } = res.data;
        setDaiUsd({ purchase_price, selling_price });
      })
      .catch(() => setDaiUsd(null));
  }, []);

  const [usdPriceArs, setUsdPriceArs] = useState(null);
  const [usdPriceDai, setUsdPriceDai] = useState(null);

  useEffect(() => {
    setUsdPriceArs(
      daiArs && daiUsd ? daiArs.selling_price / daiUsd.purchase_price : null
    );
    setUsdPriceDai(daiUsd ? 1 / daiUsd.purchase_price : null);
  }, [daiArs, daiUsd]);

  return (
    <PriceWrapper>
      <PriceItem>
        <PriceItemLabel>USD</PriceItemLabel>{' '}
        <PriceItemValue>{usd.toFixed(0)}</PriceItemValue>
      </PriceItem>

      <PriceItem>
        <PriceItemLabel>ARS</PriceItemLabel>{' '}
        <PriceItemValue>
          {usdPriceArs ? (usd * usdPriceArs).toFixed(0) : '-'}
        </PriceItemValue>
      </PriceItem>

      <PriceItem>
        <PriceItemLabel>DAI</PriceItemLabel>{' '}
        <PriceItemValue>
          {usdPriceDai ? (usd * usdPriceDai).toFixed(2) : '-'}
        </PriceItemValue>
      </PriceItem>
    </PriceWrapper>
  );
};

export default Price;
