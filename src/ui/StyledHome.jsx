import styled from 'styled-components';
import {
  respondToLandscapeTablets,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledHomePage = styled.div`
  /* background-color: blue; */
  margin-left: auto;
  margin-right: 7%;
  margin-top: 4.8rem;
  padding: 2.4rem;
  max-width: 50%;
  height: 70vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  border-left: 5px solid var(--color-main-800);

  ${respondToSmallLaptop(`
  
   margin-top: 2.4rem;
  `)}

  ${respondToLandscapeTablets(`
  height: 80vh;
  margin: 4.8rem, auto, 0, auto;
  max-width: 80%;
  `)}
`;
