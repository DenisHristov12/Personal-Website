import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-main-700);

  font-size: 2.4rem;
  text-decoration: none;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    transform: scale(1.3);
    overflow: visible;

    transition: all 0.5s;
  }
`;
