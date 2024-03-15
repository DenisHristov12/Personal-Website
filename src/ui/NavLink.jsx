import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  respondToLandscapeTablets,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  text-decoration: none;

  width: 13rem;

  padding: 0.8rem 1.2rem;

  font-size: 1.6rem;
  font-weight: 500;

  &:link,
  &:visited {
    color: var(--color-main-100);

    border-bottom: 1px solid var(--color-main-700);

    border-right: 1px solid var(--color-main-700);

    transition: all 0.5s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-900);

    background-color: var(--color-main-100);
    border: 1px solid var(--color-main-800);
    box-shadow: var(--color-main-700) 4px 4px 0 0,
      var(--color-main-800) 4px 4px 0 1px;

    overflow: visible;
  }

  ${respondToSmallLaptop(`
  width: 11rem;
  font-size: 1.4rem;
  `)}

  ${respondToLandscapeTablets(`
  width: 100%;

padding: 1.2rem 0;

font-size: 2rem;
font-weight: 500;

z-index: 999;

& svg {
  display: none;
}

&:link,
&:visited {
  color: var(--color-main-100);

  border-bottom: 0px solid var(--color-main-700);

  border-right: 0px solid var(--color-main-700);
}

&:hover,
&:active,
&.active:link,
&.active:visited {

  opacity: 0.7;
  background-color: var(--color-main-700);
  border: 0px solid var(--color-main-800);
  box-shadow: var(--color-grey-700) 0px 0px 0 0,
    var(--color-grey-800) 0px 0px 0 0px;

  overflow: visible;
}
  `)}
`;

export const MainButton = styled(StyledNavLink)`
  display: flex;
  align-items: center;
  width: 24rem;
  font-size: 1.8rem;

  padding: 1.2rem 2.4rem;

  font-weight: 600;

  &:link,
  &:visited {
    color: var(--color-grey-900);

    background-color: var(--color-main-700);
    border: 3px solid var(--color-main-700);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-main-100);

    border: 3px solid var(--color-main-700);
    background-color: transparent;
    box-shadow: none;
    overflow: visible;
  }

  ${respondToSmallLaptop(`
  width: 18rem;
  font-size: 1.4rem;
  `)}

  ${respondToLandscapeTablets(`
  width: 35rem;
  font-size: 3rem;
  `)}
`;
