import styled from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const StyledSection = styled.section`
  border-left: 5px solid var(--color-main-800);

  height: 74vh;

  margin-top: 5%;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  justify-content: center;

  ${respondToSmallLaptop(`
  gap: 3.2rem;
  height: 70vh;
  `)}
`;
