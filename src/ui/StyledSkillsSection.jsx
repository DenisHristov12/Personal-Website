import styled from 'styled-components';
import {
  respondToLandscapeTablets,
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

  ${respondToLandscapeTablets(`
  gap: 4.8rem;
  height: 80vh;

  max-width: 80%;
  `)}
`;
