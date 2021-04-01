import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const PriceItemWrapper = styled(Card.Body)`
  text-align: center;
`;

export const PriceItemCurrency = styled.label`
  font-size: 1.5rem;
`;

export const PriceItemValue = styled.p`
  margin: 0;

  font-size: 2rem;
`;
