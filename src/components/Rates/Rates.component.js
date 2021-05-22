import React from 'react';
import useRates from '../../hooks/useRates.hook';
import { RatesWrapper, RatesBadge } from './Rates.styled';

const Rates = () => {
  const { usdArs } = useRates();

  return (
    <RatesWrapper>
      {usdArs ? (
        <>
          Dólar de referencia:{' '}
          <RatesBadge pill variant='secondary'>
            ARS {usdArs?.toFixed(2)}
          </RatesBadge>
        </>
      ) : (
        <>
          Ver cotización de referencia en{' '}
          <a href='https://buenbit.com/' target='_blank' rel='noreferrer'>
            Buenbit.com
          </a>
        </>
      )}
    </RatesWrapper>
  );
};

export default Rates;
