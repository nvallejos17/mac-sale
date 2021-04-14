import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { macGold } from '../../theme/colors';

export const SectionWrapper = styled.section`
  margin: 4rem 0;

  &:first-of-type {
    margin-top: 2rem;
  }

  @media (max-width: 576px) {
    margin: 2rem 0;

    &:first-of-type {
      margin-top: 1rem;
    }
  }
`;

export const SectionContainer = styled(Container)`
  max-width: 768px;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 2rem;
  color: ${macGold};

  /* Mobile only */
  @media (max-width: 576px) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;
