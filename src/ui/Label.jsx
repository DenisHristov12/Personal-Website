import styled from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const StyledLabel = styled.label`
  font-size: 1.6rem;
  color: var(--color-main-700);
  transition: all 0.5s ease-in-out;

  ${respondToSmallLaptop(`
  font-size: 1.4rem;
  `)}
`;
