import styled, { keyframes } from 'styled-components';

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
  height: 80vh;

  margin: 0% 10%;

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
`;
