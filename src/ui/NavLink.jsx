import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;

  width: 12rem;

  padding: 0.8rem 1.2rem;

  font-size: 1.6rem;
  font-weight: 500;

  &:link,
  &:visited {
    display: flex;
    justify-content: center;
    gap: 1.2rem;

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
    border: 1px solid var(--color-main-1000);
    box-shadow: var(--color-main-700) 4px 4px 0 0,
      var(--color-main-4000) 4px 4px 0 1px;

    overflow: visible;
  }
`;

export const MainButton = styled(StyledNavLink)`
  display: flex;
  align-items: center;
  width: 24rem;

  padding: 1.2rem 2.4rem;

  font-size: 2rem;
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
`;
