import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const MainNav = () => {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' expand={false}>
      <Navbar.Brand>MacBook Air</Navbar.Brand>
    </Navbar>
  );
};

export default MainNav;
