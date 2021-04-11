import styled from 'styled-components';
import { bsLight, bsDark } from '../../theme/colors';

export const TopButtonWrapper = styled.button`
  width: 3rem;
  height: 3rem;

  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 0;
  bottom: 0;

  font-size: 1.5rem;
  color: ${bsLight};

  border: none;
  background: ${bsDark};
`;
