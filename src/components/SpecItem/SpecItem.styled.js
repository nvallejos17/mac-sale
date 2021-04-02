import styled, { css } from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { macGold } from '../../theme/colors';

export const SpecItemRow = styled(Row)(
  ({ hasWrapped }) => css`
    margin-bottom: ${hasWrapped ? '1rem' : 0};
    padding: ${hasWrapped ? 0 : '2rem 0'};

    border-bottom: ${hasWrapped ? 'none' : `1px solid ${macGold}`};

    &:last-child {
      border-bottom: 0;
    }
  `
);

export const SpecItemContent = styled(Col)(
  ({ hasWrapped }) => css`
    * {
      margin: 0;
      padding: 0;
    }

    padding: ${hasWrapped ? '1rem 0' : 0};

    line-height: 2;
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
  `
);

export const SpecItemTitle = styled(Col)(
  ({ hasWrapped }) => css`
    padding: ${hasWrapped ? '1rem' : 0};

    color: white;

    border-bottom: ${hasWrapped ? `1px solid ${macGold}` : 'none'};

    > h4 {
      margin: 0;
      padding-right: ${hasWrapped ? 0 : '2rem'};

      font-size: 1.25rem;
    }
  `
);
