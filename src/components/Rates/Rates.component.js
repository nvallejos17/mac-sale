import React from 'react';
import { RatesWrapper, RatesBadge } from './Rates.styled';

const Rates = ({ value }) => {
  return (
    <RatesWrapper>
      Dólar de referencia:{' '}
      <RatesBadge pill variant='secondary'>
        ARS {value.toFixed(2)}
      </RatesBadge>
    </RatesWrapper>
  );
};

export default Rates;
