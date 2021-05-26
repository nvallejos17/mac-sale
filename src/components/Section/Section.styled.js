import styled from 'styled-components';
import { mobileBreakpoint } from '../../constants/constants';
import { macGold } from '../../theme/colors';
import Container from 'react-bootstrap/Container';

export const SectionWrapper = styled.section`
  margin: 4rem 0;

  &:first-of-type {
    margin-top: 2rem;
  }

  @media (max-width: ${mobileBreakpoint}px) {
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
  @media (max-width: ${mobileBreakpoint}px) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;
