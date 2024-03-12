import styled from 'styled-components';
import { StyledNavLink } from './NavLink';

import {
  MdInfoOutline,
  MdHome,
  MdContactMail,
  MdAutoFixHigh,
} from 'react-icons/md';

const StyledNav = styled.nav`
  width: 100%;
  height: 10%;
  padding: 0 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  line-height: 1;
`;

const StyledDivSecond = styled.div`
  transform: translateX(6.3rem);
`;

const StyledSpan = styled.span`
  font-size: 2.4rem;
  font-weight: 800;
  margin-right: 0.2rem;

  color: var(--color-main-100);
`;

const StyledSpanFirstLast = styled(StyledSpan)`
  color: var(--color-main-700);
`;

const StyledUl = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4.8rem;
`;

function NavBar() {
  return (
    <StyledNav>
      <StyledDiv>
        <div>
          <StyledSpanFirstLast>D</StyledSpanFirstLast>
          <StyledSpan>e</StyledSpan>
          <StyledSpan>n</StyledSpan>
          <StyledSpan>i</StyledSpan>
          <StyledSpanFirstLast>S</StyledSpanFirstLast>
        </div>
        <StyledDivSecond>
          <StyledSpanFirstLast>H</StyledSpanFirstLast>
          <StyledSpan>r</StyledSpan>
          <StyledSpan>i</StyledSpan>
          <StyledSpan>s</StyledSpan>
          <StyledSpan>t</StyledSpan>
          <StyledSpan>o</StyledSpan>
          <StyledSpanFirstLast>V</StyledSpanFirstLast>
        </StyledDivSecond>
      </StyledDiv>
      <StyledUl>
        <li>
          <StyledNavLink to='/home'>
            <MdHome /> Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/about'>
            <MdInfoOutline /> About
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/skills'>
            <MdAutoFixHigh /> Skills
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/contacts'>
            <MdContactMail /> Contacts
          </StyledNavLink>
        </li>
      </StyledUl>
    </StyledNav>
  );
}

export default NavBar;
