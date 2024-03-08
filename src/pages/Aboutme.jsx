import styled from 'styled-components';

const StyledAbout = styled.section`
  padding: 2.4rem;

  height: 70vh;
  width: 50%;

  margin-left: auto;
  margin-right: 8%;
  margin-top: 5%;

  display: grid;
  grid-template-columns: 1.5fr 1fr;

  justify-content: center;
  align-content: center;

  align-items: center;
  justify-items: center;

  row-gap: 3.6rem;
  column-gap: 2.4rem;

  border-left: 5px solid var(--color-main-700);
`;

const StyledTextBox = styled.div`
  width: 100%;
`;

const StyledP = styled.p`
  color: var(--color-main-100);

  font-size: 1.4rem;
  font-weight: 500;

  letter-spacing: 0.1rem;
`;

const StyledImgBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImgBoxSecond = styled(StyledImgBox)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const StyledImg = styled.img`
  width: auto;
  height: 15rem;

  border-radius: 0 3rem 0 3rem;

  box-shadow: 1px 1px 2px var(--color-main-700);

  transition: all 0.5s;

  &:hover {
    transform: scale(1.2);

    overflow: hidden;
  }
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
        <StyledP>
          Hello, My name is Denis and I am currently a student at Technical
          University of Sofia, first year bachelor degree of{' '}
          <StyledSpan>cybersecurity</StyledSpan>. Before university I have
          graduated Vocational High School of Computer Technologies and Systems
          at Pravets, where i got all of my programming basics at many different
          languages.
        </StyledP>
      </StyledTextBox>
      <StyledImgBox>
        <StyledImg src='cybersecurity.jpg' alt='Cyber Security related image' />
      </StyledImgBox>

      <StyledTextBox>
        <StyledP>
          My passion is Front-End development. I really love making the
          functionality of the website work and also I like to design the
          websites that are created by me.
        </StyledP>
      </StyledTextBox>
      <StyledImgBoxSecond>
        <StyledImg
          src='frontend.jpg'
          alt='Laptop on a desk used for programming'
        />
      </StyledImgBoxSecond>

      <StyledTextBox>
        <StyledP>
          About 2 years ago I started learning JavaScript. That is when I
          realised that JavaScript together with HTML and CSS are the languages
          I want improve my skills at. I am ambitious, opened to learning new
          technologies and also I am a fast learner! I like to work in a team
          because of the skills, advices and support that the other people can
          exchange with you!
        </StyledP>
      </StyledTextBox>
      <StyledImgBox>
        <StyledImg src='js.jpg' alt='JavaScript source code' />
      </StyledImgBox>
    </StyledAbout>
  );
}

export default Aboutme;
