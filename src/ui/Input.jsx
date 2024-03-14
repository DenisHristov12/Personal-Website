import styled from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const StyledInput = styled.input`
  border: 0;
  border-bottom: 1px solid var(--color-main-700);

  background: transparent;
  max-width: 100%;
  padding: 0.8rem 0 0.5rem 0;
  font-size: 1.6rem;
  color: var(--color-main-100);

  &::placeholder {
    color: var(--color-main-100);
  }

  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color-accent-100);
  }

  ${respondToSmallLaptop(`
  font-size: 1.4rem;
  `)}
`;
