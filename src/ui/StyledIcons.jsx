import styled from 'styled-components';
import { StyledSocials } from './StyledSocials';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const StyledIcons = styled(StyledSocials)`
  gap: 0.8rem;

  & svg {
    color: var(--color-main-700);
    width: 2.4rem;
    height: 2.4rem;
  }

  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(0%, -50%);

  ${respondToSmallLaptop(`
  left: 39%;
  gap: 0.4rem;
  `)}
`;
