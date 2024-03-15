import styled from 'styled-components';
import {
  respondToBiggerTablets,
  respondToMobile,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledContacts = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  padding: 5.2rem;

  border-left: 5px solid var(--color-main-700);

  ${respondToSmallLaptop(`
  padding: 1.2rem 3.6rem;
  `)}

  ${respondToBiggerTablets(`
  padding: 5.2rem;
  `)}

  ${respondToMobile(`
  border-left: 0px solid var(--color-main-700);
  margin: 0 3rem
  padding: 1.2rem 3.6rem;
  `)}
`;
