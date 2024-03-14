import styled from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const StyledHomePage = styled.div`
  margin-top: 4.2rem;
  padding: 2.4rem 2.4rem;
  max-width: 80%;
  height: 70vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  border-left: 5px solid var(--color-main-800);

  ${respondToSmallLaptop(`
  margin-top: 3.2rem;
  `)}
`;
