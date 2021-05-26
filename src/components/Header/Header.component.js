import React from 'react';
import useRates from '../../hooks/useRates.hook';
import Rates from '../Rates/Rates.component';
import Section from '../Section/Section.component';
import {
  HeaderJumbotron,
  HeaderTitle,
  HeaderSubtitle,
  HeaderPrice,
  HeaderPriceContainer,
} from './Header.styled';

const Header = () => {
  const { usdArs } = useRates();

  return (
    <Section>
      <HeaderJumbotron>
        <HeaderTitle>MacBook Air</HeaderTitle>
        <HeaderSubtitle>(Retina, 13 pulgadas, 2019)</HeaderSubtitle>
        <HeaderPriceContainer>
          <HeaderPrice variant='success'>USD 790</HeaderPrice>
        </HeaderPriceContainer>
        {usdArs && !isNaN(usdArs) && <Rates value={usdArs} />}
      </HeaderJumbotron>
    </Section>
  );
};

export default Header;
