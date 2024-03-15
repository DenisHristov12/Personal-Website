import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  respondToBiggerTablets,
  respondToLandscapeTablets,
  respondToMobile,
  respondToSmallLaptop,
} from '../styles/mediaQueries';

export const StyledSkill = styled(motion.div)`
  max-width: 80%;
  margin-left: 6.4rem;

  padding: 1.2rem 1.6rem;

  border: 2px solid transparent;
  border-image: linear-gradient(
    to right,
    ${(props) => props.colorFrom},
    ${(props) => props.colorTo}
  );

  border-image-slice: 1;

  ${respondToSmallLaptop(`
  padding: 0.8rem 1.2rem;
  `)}

  ${respondToBiggerTablets(`
  padding: 2.4rem;
  `)}

  ${respondToLandscapeTablets(`
  padding: 2.4rem;
  `)}

  ${respondToMobile(`
  max-width: 100%;

  padding: 1.2rem;
  `)}
`;
