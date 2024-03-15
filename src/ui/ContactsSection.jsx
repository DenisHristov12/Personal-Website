import styled from 'styled-components';
import {
  respondToBiggerTablets,
  respondToLandscapeTablets,
  respondToMobile,
} from '../styles/mediaQueries';

export const StyledSection = styled.section`
  display: flex;
  align-items: center;

  max-width: 50%;
  height: 80vh;

  margin-left: auto;
  margin-right: 9%;

  gap: 2.4rem;

  ${respondToBiggerTablets(`
        max-width: 80%;
        margin-right: 7%;

        margin-top: 5%;
    `)}

  ${respondToLandscapeTablets(`
        max-width: 80%;
        margin-right: 7%;
    `)}

    ${respondToMobile(`
        max-width: 100%;
        flex-direction: column;
        margin-left: 3rem;
    `)}
`;
