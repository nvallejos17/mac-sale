import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const PriceItemCard = styled(Card)`
  margin: 1rem;
`;

export const PriceItemCardBody = styled(Card.Body)`
  width: 200px;
  text-align: center;
`;

export const PriceItemCurrency = styled.label`
  margin: 0;
  font-size: 1.5rem;
`;

export const PriceItemValue = styled.p`
  margin: 0;
  font-size: 2rem;
`;
