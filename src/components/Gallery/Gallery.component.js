import React from 'react';
import Section from '../Section/Section.component';
import { GalleryCarousel } from './Gallery.styled';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

// Images
import img01 from '../../img/01-min.jpeg';
import img02 from '../../img/02-min.jpeg';

const Gallery = () => {
  const images = [img01, img02];

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
