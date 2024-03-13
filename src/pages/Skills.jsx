import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledSection = styled.section`
  border-left: 5px solid var(--color-main-800);

  height: 74vh;

  margin-top: 5%;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  justify-content: center;
`;

const StyledSkill = styled(motion.div)`
  width: 80%;
  margin-left: 6.4rem;

  /* background-color: blue; */

  padding: 1.2rem 1.6rem;

  border: 2px solid transparent;
  border-image: linear-gradient(
    to right,
    ${(props) => props.colorFrom},
    ${(props) => props.colorTo}
  );
  border-image-slice: 1;
`;

const StyledSpan = styled.span`
  font-size: 2rem;
  letter-spacing: 1.2px;

  color: var(--color-main-100);
`;

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.5 }}>
      <StyledSection>
        <StyledSkill
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          colorFrom='#e34c26'
          colorTo='#fff'>
          <StyledSpan>HTML</StyledSpan>
        </StyledSkill>
        <StyledSkill
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          colorFrom='#264de4'
          colorTo='#fff'>
          <StyledSpan>CSS</StyledSpan>
        </StyledSkill>
        <StyledSkill
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          colorFrom='#f0db4f'
          colorTo='#323330'>
          <StyledSpan>JavaScript</StyledSpan>
        </StyledSkill>
        <StyledSkill
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
          colorFrom='#61DBFB'
          colorTo='#1c2c4c'>
          <StyledSpan>React</StyledSpan>
        </StyledSkill>
        <StyledSkill
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 4.5 }}
          colorFrom='#ffde57'
          colorTo='#4584b6'>
          <StyledSpan>Python</StyledSpan>
        </StyledSkill>
        <StyledSkill
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 5.5 }}
          colorFrom='#00758F'
          colorTo='#F29111'>
          <StyledSpan>SQL</StyledSpan>
        </StyledSkill>
      </StyledSection>
    </motion.div>
  );
}

export default Skills;
