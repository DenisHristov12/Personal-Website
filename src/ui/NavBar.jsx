import styled from 'styled-components';

import { StyledNavLink } from './NavLink';

import {
  MdInfoOutline,
  MdHome,
  MdContactMail,
  MdAutoFixHigh,
  MdMenu,
  MdClose,
} from 'react-icons/md';
import { useEffect, useState } from 'react';
import {
  respondToLandscapeTablets,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

const StyledNav = styled.nav`
  max-width: 100%;
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

  ${respondToSmallLaptop(`
  font-size: 2rem;
  `)}
`;

const StyledSpanFirstLast = styled(StyledSpan)`
  color: var(--color-main-700);
`;

const StyledUl = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 4.8rem;

  ${respondToSmallLaptop(`
  gap: 3.2rem;
  `)}

  ${respondToLandscapeTablets(`
  // display: none;

  // display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 60vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);

  transition: all 0.5s;

  & li {
    display: flex;
    justify-content: center;
    width: 100%
    
  }
    `)}
`;

const StyledMobileNavButton = styled.button`
  padding: 0.8rem 1.2rem;

  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: none;

  & svg {
    color: var(--color-main-700);
    width: 3rem;
    height: 3rem;
  }

  ${respondToLandscapeTablets(`
  display: block;
  z-index: 9999;
  `)}
`;

function NavBar() {
  const [showMenu, setShowMenu] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  function handleOpenCloseMenu() {
    setShowMenu((menu) => !menu);
    setIsOpened((opened) => !opened);
  }

  useEffect(
    function () {
      function Size() {
        setWindowSize(window.innerWidth);
      }

      Size();

      if (windowSize > 768) {
        setShowMenu(false);
        setIsOpened(true);
      } else {
        setShowMenu(true);
        setIsOpened(false);
      }
    },
    [windowSize]
  );

  // console.log(showMenu);

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

      {isOpened && (
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
      )}
      <StyledMobileNavButton>
        {showMenu ? (
          <MdMenu
            className={showMenu ? 'open' : ''}
            onClick={handleOpenCloseMenu}
          />
        ) : (
          <MdClose
            className={showMenu ? 'close' : ''}
            onClick={handleOpenCloseMenu}
          />
        )}
      </StyledMobileNavButton>
    </StyledNav>
  );
}

export default NavBar;
