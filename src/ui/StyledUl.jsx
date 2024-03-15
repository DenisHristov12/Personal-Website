import styled from 'styled-components';
import {
  respondToLandscapeTablets,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 4.8rem;

  ${respondToSmallLaptop(`
gap: 3.2rem;

${respondToLandscapeTablets(`
  
display: none;
`)}
`)}
`;
