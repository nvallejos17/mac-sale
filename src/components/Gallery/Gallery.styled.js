import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

export const GalleryWrapper = styled.section`
  margin: 2rem 0;
`;

export const GalleryContainer = styled(Container)`
  max-width: 768px;
`;

export const GalleryCarousel = styled(Carousel)`
  /* .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(100%);
  } */
`;
