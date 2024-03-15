import styled from 'styled-components';
import {
  respondToLandscapeTablets,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledDiv = styled.div`
  line-height: 1;
  ${respondToLandscapeTablets(`padding: 0 2.4rem;`)}
`;

export const StyledDivSecond = styled.div`
  transform: translateX(6.3rem);
`;

export const StyledSpan = styled.span`
  font-size: 2.4rem;
  font-weight: 800;
  margin-right: 0.2rem;

  color: var(--color-main-100);

  ${respondToSmallLaptop(`
  font-size: 2rem;
  `)}

  ${respondToLandscapeTablets(`
  font-size: 2.4rem;
  `)}
`;

export const StyledSpanFirstLast = styled(StyledSpan)`
  color: var(--color-main-700);
`;
