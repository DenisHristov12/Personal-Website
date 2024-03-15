import styled from 'styled-components';
import { respondToSmallLaptop } from '../styles/mediaQueries';

export const StyledSpan = styled.span`
  align-self: center;

  & svg {
    color: var(--color-main-700);
    width: 4.8rem;
    height: 4.8rem;
  }

  ${respondToSmallLaptop(`
  
  & svg {
  
  width: 3.6rem;
  height: 3.6rem;
}
`)}
`;
