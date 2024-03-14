import styled from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const StyledContacts = styled.div`
  max-width: 90%;
  height: 100%;

  /* background-color: blue; */

  padding: 2.4rem 5.2rem;

  border-left: 5px solid var(--color-main-700);

  ${respondToSmallLaptop(`
  padding: 1.2rem 3.6rem;
  `)}
`;