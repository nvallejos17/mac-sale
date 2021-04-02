import React from 'react';
import Faq from './components/Faq/Faq.component';
import Gallery from './components/Gallery/Gallery.component';
import MainNav from './components/MainNav/MainNav.component';
import Price from './components/Price/Price.component';
import Specs from './components/Specs/Specs.component';

const App = () => {
  return (
    <>
      <MainNav />
      <Price />
      <Faq />
      <Gallery />
      <Specs />
    </>
  );
};

export default App;
