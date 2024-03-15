import styled from 'styled-components';
import {
  respondToLandscapeTablets,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledForm = styled.form`
  margin: 1.2rem 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${respondToSmallLaptop(`
  margin: 0.8rem 3.6rem;
  gap: 2.4rem
  `)}

  ${respondToLandscapeTablets(`
  margin: 3.6rem;
  gap: 6.4rem; 
  `)}
`;
