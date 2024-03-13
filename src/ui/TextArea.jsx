import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  border: 0;
  border-bottom: 1px solid var(--color-main-700);
  background: transparent;
  width: 100%;
  padding: 0.8rem 0 0.5rem 0;
  font-size: 1.6rem;
  color: var(--color-main-100);

  resize: none;

  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color-accent-100);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
