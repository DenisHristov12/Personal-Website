import styled from 'styled-components';

export const StyledH1 = styled.h1`
  font-size: 5.2rem;
  display: inline-block;
  font-weight: 700;
  text-align: center;

  color: var(--color-main-100);

  /* 1376px */
  @media (max-width: 78em) {
    font-size: 4.8rem;
  }

  @media (max-width: 64em) {
    font-size: 4.2rem;
  }
`;
