import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { GalleryContainer } from './Gallery.styled';

const Gallery = () => {
  const images = ['img/01-min.jpeg', 'img/02-min.jpeg'];

  return (
    <GalleryContainer>
      <Carousel fade>
        {images.map((img) => (
          <Carousel.Item key={img}>
            <Image src={img} fluid />
          </Carousel.Item>
        ))}
      </Carousel>
    </GalleryContainer>
  );
};

export default Gallery;
