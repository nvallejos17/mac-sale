import React from 'react';
import MainNav from './components/MainNav/MainNav.component';
import Header from './components/Header/Header.component';
import Gallery from './components/Gallery/Gallery.component';
import Faq from './components/Accordion/Faq.component';
import Specs from './components/Specs/Specs.component';
import FloatingGroup from './components/FloatingGroup/FloatingGroup.component';

const App = () => {
  return (
    <>
      <MainNav />
      <Header />
      <Gallery />
      <Faq />
      <Specs />
      <FloatingGroup />
    </>
  );
};

export default App;
