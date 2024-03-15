import styled from 'styled-components';

export const StyledNav = styled.nav`
  max-width: 100%;

  height: ${(props) => (props.show ? '100vh' : '7rem')};
  padding: 0;

  @media (min-width: 48.1em) {
    height: 7rem;
    padding: 0 2.4rem;
  }
`;
