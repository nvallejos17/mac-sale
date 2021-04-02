import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { macGold } from '../../theme/colors';

export const SectionWrapper = styled.section`
  margin: 4rem 0;
`;

export const SectionContainer = styled(Container)`
  max-width: 768px;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 2rem;

  color: ${macGold};
`;
