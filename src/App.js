import React from 'react';
import MainNav from './components/MainNav/MainNav.component';
import Gallery from './components/Gallery/Gallery.component';
import Faq from './components/Faq/Faq.component';
import Specs from './components/Specs/Specs.component';

const App = () => {
  return (
    <>
      <MainNav />
      <Gallery />
      <Faq />
      <Specs />
    </>
  );
};

export default App;
