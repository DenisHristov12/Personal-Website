import { motion } from 'framer-motion';
import styled from 'styled-components';

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
`;
