import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Section from '../Section/Section.component';
import { GalleryCarousel } from './Gallery.styled';
import Image from 'react-bootstrap/Image';

const Gallery = () => {
  const images = ['img/01-min.jpeg', 'img/02-min.jpeg'];

  return (
    <Section title='Galería'>
      <GalleryCarousel fade>
        {images.map((img) => (
          <Carousel.Item key={img}>
            <Image src={img} fluid />
          </Carousel.Item>
        ))}
      </GalleryCarousel>
    </Section>
  );
};

export default Gallery;
