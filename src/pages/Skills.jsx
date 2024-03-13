import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StyledSection } from '../ui/StyledSkillsSection';
import { StyledSkill } from '../ui/StyledSkillBox';

const StyledSpan = styled.span`
  font-size: 2rem;
  letter-spacing: 1.2px;

  color: var(--color-main-100);
`;

const skills = [
  {
    id: 0,
    skillName: 'HTML',
    colorFrom: '#e34c26',
    colorTo: '#fff',
    delay: 0.5,
  },
  {
    id: 1,
    skillName: 'CSS',
    colorFrom: '#264de4',
    colorTo: '#fff',
    delay: 1.5,
  },
  {
    id: 2,
    skillName: 'JavaScript',
    colorFrom: '#f0db4f',
    colorTo: '#323330',
    delay: 2.5,
  },
  {
    id: 3,
    skillName: 'React',
    colorFrom: '#61DBFB',
    colorTo: '#1c2c4c',
    delay: 3.5,
  },
  {
    id: 4,
    skillName: 'Python',
    colorFrom: '#ffde57',
    colorTo: '#4584b6',
    delay: 4.5,
  },
  {
    id: 5,
    skillName: 'MySQL',
    colorFrom: '#00758F',
    colorTo: '#F29111',
    delay: 5.5,
  },
];

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.5 }}>
      <StyledSection>
        {skills.map((skill) => (
          <StyledSkill
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: skill.delay }}
            key={skill.id}
            colorFrom={skill.colorFrom}
            colorTo={skill.colorTo}>
            <StyledSpan>{skill.skillName}</StyledSpan>
          </StyledSkill>
        ))}
      </StyledSection>
    </motion.div>
  );
}

export default Skills;
