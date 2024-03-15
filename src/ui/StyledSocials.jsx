import styled from 'styled-components';
import { respondToMobile } from '../styles/mediaQueries';

export const StyledSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  max-width: 4.4rem;

  ${respondToMobile(`
  order: 2;
  flex-direction: row;

  max-width: 100%;
  `)}
`;
