import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { TopButtonWrapper } from './TopButton.styled';

const TopButton = () => {
  const [scrollY, setscrollY] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => setscrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    scrollY > 78 && (
      <TopButtonWrapper onClick={() => scroll.scrollToTop()} variant='dark'>
        <i className='fas fa-chevron-up'></i>
      </TopButtonWrapper>
    )
  );
};

export default TopButton;
