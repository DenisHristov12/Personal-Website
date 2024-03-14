import styled from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const StyledH1 = styled.h1`
  font-size: 4.8rem;
  display: inline-block;
  font-weight: 700;
  text-align: center;

  color: var(--color-main-100);

  ${respondToSmallLaptop(`
  font-size: 3.6rem;
  `)}
`;
