import React from 'react';
import { isDev } from '../../constants/constants';
import Section from '../Section/Section.component';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const Gallery = () => {
  const images = [
    'img/carousel/01-min.jpg',
    'img/carousel/02-min.jpg',
    'img/carousel/03-min.jpg',
    'img/carousel/04-min.jpg',
    'img/carousel/05-min.jpg',
    'img/carousel/06-min.jpg',
    'img/carousel/07-min.jpg',
    'img/carousel/08-min.jpg',
    'img/carousel/09-min.jpg',
    'img/carousel/10-min.jpg',
    'img/carousel/11-min.jpg',
    'img/carousel/12-min.jpg',
    'img/carousel/13-min.jpg',
    'img/carousel/14-min.jpg',
    'img/carousel/15-min.jpg',
  ];

  return (
    <Section title='Galería'>
      <Carousel fade>
        {images.map((img) => (
          <Carousel.Item key={img}>
            <Image src={isDev ? `mac-sale/${img}` : img} fluid />
          </Carousel.Item>
        ))}
      </Carousel>
    </Section>
  );
};

export default Gallery;
