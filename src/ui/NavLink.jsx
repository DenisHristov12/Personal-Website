import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// export const StyledNavLink = styled(NavLink)`
//   text-decoration: none;
// `;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;

  width: 16rem;

  padding: 0.8rem 1.6rem;
  margin: 0 0.8rem;

  &:link,
  &:visited {
    display: flex;
    justify-content: center;
    gap: 1.2rem;

    color: var(--color-main-100);
    font-size: 1.6rem;
    font-weight: 600;
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
    border-radius: 4px;
    box-shadow: var(--color-main-700) 4px 4px 0 0,
      var(--color-main-4000) 4px 4px 0 1px;

    overflow: visible;
  }
`;
