import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Price from '../Price/Price.component';

const MainNav = () => {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' expand={false}>
      <Navbar.Brand>MacBook Air</Navbar.Brand>
      <Price />
    </Navbar>
  );
};

export default MainNav;
