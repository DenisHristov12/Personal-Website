import styled from 'styled-components';
import {
  respondToBiggerTablets,
  respondToLandscapeTablets,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledSpan = styled.span`
  font-size: 2rem;
  letter-spacing: 1.2px;

  color: var(--color-main-100);

  ${respondToSmallLaptop(`
font-size: 1.6rem;
`)}

  ${respondToBiggerTablets(`
font-size: 2.4rem;
`)}

${respondToLandscapeTablets(`
font-size: 2.4rem;
`)}
`;
