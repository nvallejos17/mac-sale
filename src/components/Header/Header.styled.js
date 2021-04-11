import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { macGold } from '../../theme/colors';

export const HeaderJumbotron = styled(Jumbotron)`
  margin: 0;
  padding: 2rem;

  text-align: center;

  @media (max-width: 576px) {
    padding: 2rem 1rem;
  }
`;

export const HeaderTitle = styled.h2`
  color: ${macGold};

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const HeaderSubtitle = styled.h3`
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;
