import styled, { keyframes } from 'styled-components';
import { StyledNavLink } from './NavLink';

const StyledNav = styled.nav`
  height: 10%;
  padding: 0 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* border-bottom: 2px solid var(--color-main-700); */
`;

// const bounce = keyframes`
//   0%, 40%, 100% {
//     transform: translateY(0);
//   }

//   20% {
//     transform: translateY(-30px);
//   }
// `;

const StyledSpan = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-main-100);

  /* animation: coolAnimation 3s infinite; */
  /* animation:  1.5s linear infinite; */
`;

const StyledUl = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4.8rem;

  /* grid-template-rows: 1fr; */

  /* align-content: center; */

  /* gap: 0.8rem; */
`;

function NavBar() {
  return (
    <StyledNav>
      <div>
        <StyledSpan>D</StyledSpan>
        <StyledSpan>e</StyledSpan>
        <StyledSpan>n</StyledSpan>
        <StyledSpan>i</StyledSpan>
        <StyledSpan>s</StyledSpan>
        <StyledSpan>&nbsp;</StyledSpan>
        <StyledSpan>H</StyledSpan>
        <StyledSpan>r</StyledSpan>
        <StyledSpan>i</StyledSpan>
        <StyledSpan>s</StyledSpan>
        <StyledSpan>t</StyledSpan>
        <StyledSpan>o</StyledSpan>
        <StyledSpan>v</StyledSpan>
      </div>
      <StyledUl>
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
