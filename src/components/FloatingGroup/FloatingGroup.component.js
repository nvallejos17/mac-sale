import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FloatingGroupWrapper } from './FloatingGroup.styled';
import Button from 'react-bootstrap/Button';

const TopButton = () => {
  const [scrollY, setscrollY] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => setscrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <FloatingGroupWrapper>
      {scrollY > 78 && (
        <Button className='mb-3' onClick={() => scroll.scrollToTop()}>
          <i className='fas fa-chevron-up text-white'></i>
        </Button>
      )}

      <Button
        href='https://api.whatsapp.com/send?phone=5492944801363'
        target='_blank'
        variant='success'
      >
        <i className='fab fa-whatsapp'></i>
      </Button>
    </FloatingGroupWrapper>
  );
};

export default TopButton;
