import styled, { keyframes } from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

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
  /* background-color: blue; */

  max-width: 53.3%;
  margin-left: auto;
  margin-right: 7%;
  height: 80vh;

  margin-bottom: 4.8rem;

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
  margin: 4.8rem, auto, 0, auto;
  max-width: 80%;

  `)}
`;
