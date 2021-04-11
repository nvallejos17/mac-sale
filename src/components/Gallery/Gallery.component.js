import React from 'react';
import Section from '../Section/Section.component';
import { GalleryCarousel } from './Gallery.styled';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

// Images
import top from '../../img/top-min.jpg';
import opened from '../../img/opened-min.jpg';
import keyboard from '../../img/keyboard-min.jpg';
import right from '../../img/right-min.jpg';
import dent from '../../img/dent-min.jpg';
import aboutThisMac from '../../img/about-this-mac-min.jpeg';
import storage from '../../img/storage-min.jpeg';
import batteryCondition from '../../img/battery-condition-min.jpeg';

const Gallery = () => {
  const images = [
    top,
    opened,
    keyboard,
    right,
    dent,
    aboutThisMac,
    storage,
    batteryCondition,
  ];

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
