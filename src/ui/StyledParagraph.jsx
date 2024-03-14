import styled from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const StyledP = styled.p`
  color: var(--color-main-100);

  font-size: 1.8rem;
  font-weight: 500;

  letter-spacing: 0.1rem;

  display: inline-block;

  ${respondToSmallLaptop(`
  font-size: 1.6rem;
  `)}
`;
