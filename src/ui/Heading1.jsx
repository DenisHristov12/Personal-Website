import styled from 'styled-components';
import {
  respondToLandscapeTablets,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledH1 = styled.h1`
  /* background-color: red; */
  width: 55%;
  font-size: 4.8rem;
  display: inline-block;
  font-weight: 700;
  text-align: center;
  word-wrap: break-word;

  color: var(--color-main-100);

  ${respondToSmallLaptop(`
  font-size: 3.6rem;
  `)}

  ${respondToLandscapeTablets(`
  font-size: 6.4rem;
  width: 80%;
  `)}
`;
