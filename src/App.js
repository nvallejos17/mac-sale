import React from 'react';
import MainNav from './components/MainNav/MainNav.component';
import Header from './components/Header/Header.component';
import Gallery from './components/Gallery/Gallery.component';
import Specs from './components/Specs/Specs.component';
import TopButton from './components/TopButton/TopButton.component';

const App = () => {
  return (
    <>
      <MainNav />
      <Header />
      <Gallery />
      <Specs />
      <TopButton />
    </>
  );
};

export default App;
