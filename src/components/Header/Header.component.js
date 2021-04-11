import React from 'react';
import Section from '../Section/Section.component';
import { HeaderJumbotron, HeaderTitle, HeaderSubtitle } from './Header.styled';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <Section>
      <HeaderJumbotron>
        <HeaderTitle>MacBook Air</HeaderTitle>
        <HeaderSubtitle>(Retina, 13 pulgadas, 2019)</HeaderSubtitle>
        <Button href='mailto:nacho.vallejos17@outlook.com'>Contacto</Button>
      </HeaderJumbotron>
    </Section>
  );
};

export default Header;
