import React from 'react';
import Section from '../Section/Section.component';
import {
  HeaderJumbotron,
  HeaderTitle,
  HeaderSubtitle,
  HeaderPrice,
} from './Header.styled';

const Header = () => {
  return (
    <Section>
      <HeaderJumbotron>
        <HeaderTitle>MacBook Air</HeaderTitle>
        <HeaderSubtitle>(Retina, 13 pulgadas, 2019)</HeaderSubtitle>
        <HeaderPrice variant='success'>USD 790</HeaderPrice>
      </HeaderJumbotron>
    </Section>
  );
};

export default Header;
