import React from 'react';
import Section from '../Section/Section.component';
import { HeaderJumbotron, HeaderTitle, HeaderSubtitle } from './Header.styled';

const Header = () => {
  return (
    <Section>
      <HeaderJumbotron>
        <HeaderTitle>MacBook Air</HeaderTitle>
        <HeaderSubtitle>(Retina, 13 pulgadas, 2019)</HeaderSubtitle>
      </HeaderJumbotron>
    </Section>
  );
};

export default Header;
