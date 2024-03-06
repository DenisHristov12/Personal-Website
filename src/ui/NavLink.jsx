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

    color: var(--color-yellow-400);
    font-size: 1.6rem;
    font-weight: 600;
    border-bottom: 1px solid var(--color-yellow-400);

    border-right: 1px solid var(--color-yellow-400);

    border-radius: 10px;
    /* padding: 1.2rem 2.4rem; */
    transition: all 0.5s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-900);
    background-color: var(--color-yellow-400);
    border-radius: 15px;
  }
`;
