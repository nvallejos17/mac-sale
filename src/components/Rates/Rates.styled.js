import { Badge } from 'react-bootstrap';
import styled from 'styled-components';
import { macGold } from '../../theme/colors';

export const RatesWrapper = styled.div`
  font-size: small;

  a {
    color: ${macGold};
  }
`;

export const RatesBadge = styled(Badge)`
  font-size: inherit;
`;
