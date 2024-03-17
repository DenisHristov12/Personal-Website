import styled from 'styled-components';
import {
  respondToBiggerTablets,
  respondToLandscapeTablets,
  respondToMobile,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledHomePage = styled.div`
  margin-left: auto;
  margin-right: 7%;
  margin-top: 4.8rem;
  padding: 2.4rem;
  max-width: 50%;
  height: 70vh;
  display: flex;
  flex-direction: column;

  overflow: hidden;

  align-items: center;
  justify-content: space-around;

  border-left: 5px solid var(--color-main-800);

  ${respondToSmallLaptop(`
   margin-top: 2.4rem;
  `)}

  ${respondToBiggerTablets(`
height: 80vh;
  margin: 4.8rem, auto, 0, auto;
  max-width: 80%;
 `)}

  ${respondToLandscapeTablets(`
  height: 80vh;
  margin: 4.8rem, auto, 0, auto;
  max-width: 80%;
  `)}

${respondToMobile(`
margin-top: 20%;
margin-right: 9%;
  height: 65vh;
  border-left: 0px solid var(--color-main-800);
 `)}
`;
