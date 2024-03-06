import styled from 'styled-components';
import { StyledNavLink } from './NavLink';

const StyledNav = styled.nav`
  height: 10%;
  padding: 0 2.4rem;

  border-bottom: 2px solid black;
`;

const StyledSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-100);
`;

const StyledUl = styled.ul`
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 0.5fr 0.5fr 0.5fr 0.5fr;
  /* grid-template-rows: 1fr; */

  /* align-content: center; */
  align-items: center;
  justify-items: end;

  > * {
    &:first-child {
      justify-self: start;
    }
  }

  /* gap: 0.8rem; */
`;

function NavBar() {
  return (
    <StyledNav>
      <StyledUl>
        <li>
          <StyledSpan>Denis Hristov</StyledSpan>
        </li>
        <li>
          <StyledNavLink to='/home'>Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/about'>About me</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/skills'>Skills</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/contacts'>Contact me</StyledNavLink>
        </li>
      </StyledUl>
    </StyledNav>
  );
}

export default NavBar;