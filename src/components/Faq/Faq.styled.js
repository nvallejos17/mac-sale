import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export const FaqWrapper = styled.section`
  margin: 2rem 0;
`;

export const FaqContainer = styled(Container)`
  max-width: 768px;
`;

export const FaqCardBody = styled(Card.Body)`
  background: red;
`;
