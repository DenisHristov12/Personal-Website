import styled from 'styled-components';

const StyledAbout = styled.section`
  width: 50%;
  height: 70vh;

  margin-left: auto;
  margin-right: 8%;
  margin-top: 5%;

  padding: 2.4rem;

  /* display: grid;
  grid-template-columns: 1.5fr 1fr; */
  display: flex;
  flex-direction: column;
  flex-wrap: unset;

  /* grid-template-columns: 1fr; */

  justify-content: center;
  /* align-content: center;

  align-items: center; */
  justify-items: center;

  /* row-gap: 3.6rem;
  column-gap: 2.4rem; */

  gap: 4.8rem;

  border-left: 5px solid var(--color-main-700);

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTextBox = styled.div`
  width: 100%;
`;

const StyledP = styled.p`
  color: var(--color-main-100);

  font-size: 1.6rem;
  font-weight: 500;

  letter-spacing: 0.1rem;
`;

const StyledSpan = styled.span`
  text-transform: uppercase;

  display: inline-block;

  border-bottom: 1px solid var(--color-main-700);
`;

function Aboutme() {
  return (
    <StyledAbout>
      <StyledTextBox>
        <h1>My education</h1>
        <StyledP>
          Hello, My name is Denis and I am currently a student at Technical
          University of Sofia, first year bachelor degree of{' '}
          <StyledSpan>cybersecurity</StyledSpan>. Before university I have
          graduated Vocational High School of Computer Technologies and Systems
          at Pravets, where i got all of my programming basics at many different
          languages.
        </StyledP>
      </StyledTextBox>

      <StyledTextBox>
        <h1>What I love to do</h1>
        <StyledP>
          My passion is Front-End development. I really love making the
          functionality of the website work and also I like to design the
          websites that are created by me.
        </StyledP>
      </StyledTextBox>

      <StyledTextBox>
        <h1>About my experience in the world of programming</h1>
        <StyledP>
          About 2 years ago I started learning JavaScript. That is when I
          realised that JavaScript together with HTML and CSS are the languages
          I want improve my skills at. Later on, after developing my JavaScript
          skills, I wanted to expand my skills, so that is when I started
          learning <StyledSpan>React</StyledSpan>. Really enjoyed learning about
          how React works and I am currently developing my skills at it.
        </StyledP>
      </StyledTextBox>

      <StyledTextBox>
        <h1>My scoial skills</h1>
        <StyledP>
          I am ambitious, opened to learning new technologies and also I am a
          fast learner! I like to work in a team because of the skills, advices
          and support that the other people can exchange with you!
        </StyledP>
      </StyledTextBox>
    </StyledAbout>
  );
}

export default Aboutme;
