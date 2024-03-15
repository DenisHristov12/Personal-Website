import styled, { keyframes } from 'styled-components';
import {
  respondToBiggerTablets,
  respondToLandscapeTablets,
  respondToMobile,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

const fadeIn = keyframes`
0%{
  translate: 50rem;
  scale: 0.1;
  opacity: 0;
}

50%{
  translate: 0rem;
  scale: 1;
  opacity: 1;
}

100%{
  translate: 50rem;
  scale: 0.1;
  opacity: 0;
}
`;

export const StyledTextBox = styled.div`
  max-width: 53.3%;
  margin-left: auto;
  margin-right: 7%;
  height: 80vh;

  margin-bottom: 7.5rem;

  border-left: 5px solid var(--color-main-700);

  padding: 3.6rem 4.8rem;

  display: flex;
  flex-direction: column;

  align-items: start;
  justify-content: center;

  gap: 4.8rem;

  overflow: scroll;

  animation: ${fadeIn} linear;
  animation-timeline: view(y);

  &::-webkit-scrollbar {
    display: none;
  }

  ${respondToSmallLaptop(`
  padding: 2.4rem 3.6rem;
  `)}

  ${respondToBiggerTablets(`
  margin: 4.8rem, auto, 0, auto;
  max-width: 80%;
  height: 85vh
  `)}

  ${respondToLandscapeTablets(`
  margin: 4.8rem, auto, 0, auto;
  max-width: 80%;
  height: 85vh
  `)}

${respondToMobile(`
  border-left: 0px solid var(--color-main-700);
  margin: 0 auto;
  `)}
`;
