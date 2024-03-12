import styled from 'styled-components';

const StyledSection = styled.section`
  border-left: 5px solid var(--color-main-700);

  height: 74vh;

  margin-top: 5%;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  justify-content: center;
`;

const StyledSkill = styled.div`
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
    <StyledSection>
      <StyledSkill colorFrom='#e34c26' colorTo='#fff'>
        <StyledSpan>HTML</StyledSpan>
      </StyledSkill>
      <StyledSkill colorFrom='#264de4' colorTo='#fff'>
        <StyledSpan>CSS</StyledSpan>
      </StyledSkill>
      <StyledSkill colorFrom='#f0db4f' colorTo='#323330'>
        <StyledSpan>JavaScript</StyledSpan>
      </StyledSkill>
      <StyledSkill colorFrom='#61DBFB' colorTo='#1c2c4c'>
        <StyledSpan>React</StyledSpan>
      </StyledSkill>
      <StyledSkill colorFrom='#ffde57' colorTo='#4584b6'>
        <StyledSpan>Python</StyledSpan>
      </StyledSkill>
      <StyledSkill colorFrom='#00758F' colorTo='#F29111'>
        <StyledSpan>SQL</StyledSpan>
      </StyledSkill>
    </StyledSection>
  );
}

export default Skills;
