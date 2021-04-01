import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const SpecItemRow = styled(Row)`
  padding: 2rem 0;
  border-bottom: 1px solid lightgrey;
`;

export const SpecItemCol = styled(Col)`
  * {
    margin: 0;
    padding: 0;
  }

  line-height: 2;
  color: lightgrey;

  strong,
  b {
    color: white;
  }

  a {
    color: #cca998;
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
`;

export const SpecItemTitle = styled.h5`
  margin: 0;
  color: white;
`;
