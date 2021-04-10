import styled from 'styled-components';

export const PriceWrapper = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;

  list-style-type: none;

  /* Mobile only */
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const PriceItem = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }

  /* Mobile only */
  @media (max-width: 576px) {
    margin-right: 0;
    font-size: 0.75rem;
  }
`;

export const PriceItemLabel = styled.span`
  font-weight: bold;
`;

export const PriceItemValue = styled.span`
  color: lightgrey;
`;
