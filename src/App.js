import React from 'react';
import Gallery from './components/Gallery/Gallery.component';
import MainNav from './components/MainNav/MainNav.component';
import Price from './components/Price/Price.component';
import Specs from './components/Specs/Specs.component';

const App = () => {
  return (
    <>
      <MainNav />
      <Price />
      <Gallery />
      <Specs />
    </>
  );
};

export default App;
