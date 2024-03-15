import styled from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const Main = styled.main`
  height: 90vh;
  max-width: 100%;
  margin-top: 4.8rem;
  margin-bottom: 4.8rem;

  /* background-color: red; */
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  ${respondToSmallLaptop(`
  margin-top: 4.8rem;
  `)}
`;
