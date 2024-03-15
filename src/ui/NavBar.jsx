import { useState } from 'react';

import { StyledNavLink } from './NavLink';

import {
  MdInfoOutline,
  MdHome,
  MdContactMail,
  MdAutoFixHigh,
  MdMenu,
  MdClose,
} from 'react-icons/md';

import { StyledNav } from './StyledNav';
import { StyledBigNav } from './StyledBigScreenNav';
import { StyledMobileNav } from './StyledMobileScreenNav';
import {
  StyledDiv,
  StyledDivSecond,
  StyledSpan,
  StyledSpanFirstLast,
} from './Logo';
import { StyledUlMobile } from './StyledMobileUl';
import { StyledUl } from './StyledUl';
import { StyledMobileNavButton } from './MobileNavBtn';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenCloseMenu() {
    setShowMenu((menu) => !menu);
  }

  return (
    <StyledNav show={showMenu}>
      <StyledBigNav>
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
        <StyledMobileNavButton>
          {!showMenu ? (
            <MdMenu onClick={handleOpenCloseMenu} />
          ) : (
            <MdClose onClick={handleOpenCloseMenu} />
          )}
        </StyledMobileNavButton>
      </StyledBigNav>

      {showMenu && (
        <StyledMobileNav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0 }}>
          <StyledUlMobile>
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
          </StyledUlMobile>
        </StyledMobileNav>
      )}
    </StyledNav>
  );
}

export default NavBar;
