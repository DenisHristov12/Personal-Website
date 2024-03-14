import styled from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const Main = styled.main`
  height: 80vh;
  max-width: 50%;
  margin-left: auto;
  /* margin-top: 4%; */
  margin-top: 6.4rem;
  margin-right: 7%;
  /* background-color: red; */
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  ${respondToSmallLaptop(`
  margin-top: 4.8rem;
  `)}
`;
