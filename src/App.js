import React from 'react';
import Gallery from './components/Gallery/Gallery.component';
import MainNav from './components/MainNav/MainNav.component';
import Price from './components/Price/Price.component';

const App = () => {
  return (
    <>
      <MainNav />
      <Price />
      <Gallery />
    </>
  );
};

export default App;
