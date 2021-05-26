import styled from 'styled-components';
import { mobileBreakpoint } from '../../constants/constants';
import { macGold } from '../../theme/colors';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const SpecItemRow = styled(Row)`
  * {
    margin: 0;
    padding: 0;
  }

  padding: 2rem 0;
  line-height: 2;
  border-bottom: 1px solid ${macGold};

  &:first-of-type {
    padding-top: 0;

    > :first-child {
      padding-top: 0;
    }
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    padding: 0;
    border-bottom: none;
  }
`;

export const SpecItemContent = styled(Col)`
  color: lightgrey;

  strong,
  b {
    color: white;
  }

  a {
    color: ${macGold};
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  > ul {
    list-style-type: none;
  }

  > :last-child {
    margin: 0;
  }

  > img {
    max-width: 100%;
    max-height: 200px;
    display: block;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    padding: 1rem 0;
  }
`;

export const SpecItemTitle = styled(Col)`
  > * {
    padding-right: 2rem;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    padding: 1rem;
    border-bottom: 1px solid ${macGold};

    > * {
      padding-right: 0;
    }
  }
`;
