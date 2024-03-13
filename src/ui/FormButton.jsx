import styled from 'styled-components';

export const StyledBtn = styled.button`
  margin-top: 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;

  outline: none;
  border: 0;
  padding: 1.2rem 2.4rem;
  text-transform: uppercase;

  color: var(--color-grey-900);

  background-color: var(--color-main-700);
  border: 3px solid var(--color-main-700);

  transition: all 0.5s;

  &:hover,
  &:active {
    color: var(--color-main-100);

    border: 3px solid var(--color-main-700);
    background-color: transparent;
  }

  &:disabled {
    border: 3px solid var(--color-grey-400);
    color: var(--color-grey-300);
    background-color: var(--color-grey-400);
  }
`;
