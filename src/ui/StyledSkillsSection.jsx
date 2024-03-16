import styled from 'styled-components';
import {
  respondToBiggerTablets,
  respondToLandscapeTablets,
  respondToMobile,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledSection = styled.section`
  border-left: 5px solid var(--color-main-800);

  height: 74vh;
  max-width: 50%;

  margin-left: auto;
  margin-right: 7%;
  margin-top: 3%;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  justify-content: center;

  ${respondToSmallLaptop(`
  margin-top: 1%;
  `)}

  ${respondToBiggerTablets(`
  margin-top: 5%;
  gap: 4.8rem;
  height: 80vh;
  max-width: 80%;
  `)}

  ${respondToLandscapeTablets(`
  gap: 4.8rem;
  height: 80vh;
  max-width: 80%;
  `)}

${respondToMobile(`
  gap: 3.2rem;
  margin-top: 3%;

  border-left: 0px solid var(--color-main-800);
  margin: 0 auto 0 1.6rem;
  `)}
`;
