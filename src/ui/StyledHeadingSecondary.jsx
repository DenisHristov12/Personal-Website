import styled from 'styled-components';
import {
  respondToLandscapeTablets,
  respondToMobile,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledH2 = styled.h2`
  color: var(--color-main-700);
  font-weight: 600;
  font-size: 2.8rem;
  margin-bottom: 1.2rem;

  ${respondToSmallLaptop(`
  font-size: 2rem;
  `)}
  ${respondToLandscapeTablets(`
  font-size: 3rem;
  `)}
  ${respondToMobile(`
  font-size: 2.4rem;
  `)}
`;
