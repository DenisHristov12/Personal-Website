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
import { useState } from 'react';
import {
  respondToLandscapeTablets,
  respondToSmallLaptop,
} from '../styles/mediaQueries';
import { motion } from 'framer-motion';

const StyledNav = styled.nav`
  max-width: 100%;

  height: ${(props) => (props.show ? '100vh' : '7rem')};
  padding: 0;

  @media (min-width: 48.1em) {
    height: 7rem;
    padding: 0 2.4rem;
  }
`;

const StyledBigNav = styled(motion.div)`
  padding-top: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMobileNav = styled(motion.div)`
  display: none;
  opacity: 0;
  pointer-events: none;
  height: 100vh;
  background-color: transparent;

  justify-content: space-between;

  ${respondToLandscapeTablets(`
     opacity: 1;
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `)};
`;

const StyledDiv = styled.div`
  line-height: 1;
  ${respondToLandscapeTablets(`padding: 0 2.4rem;`)}
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

const StyledUlMobile = styled.ul`
  margin-top: 8rem;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  gap: 4.8rem;

  & li {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 4.8rem;

  ${respondToSmallLaptop(`
  gap: 3.2rem;

  ${respondToLandscapeTablets(`
    
  display: none;
  `)}
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
  `)}
`;

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenCloseMenu() {
    setShowMenu((menu) => !menu);
  }

  return (
    <StyledNav show={showMenu}>
      <StyledBigNav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0 }}>
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
