import styled from 'styled-components';
import {
  respondToLandscapeTablets,
  respondToMobile,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledP = styled.p`
  color: var(--color-main-100);

  font-size: 1.8rem;
  font-weight: 500;

  letter-spacing: 0.1rem;

  display: inline-block;

  ${respondToSmallLaptop(`
  font-size: 1.4rem;
  `)}
  ${respondToLandscapeTablets(`
  font-size: 2rem;
  `)}
  ${respondToMobile(`
  font-size: 1.6rem;
  `)}
`;
