import styled, { keyframes } from 'styled-components';

import { SlMouse, SlArrowDown, SlArrowUp } from 'react-icons/sl';
import transition from '../utils/Transition';

const fadeIn = keyframes`
0%{
  translate: 50rem;
  scale: 0.1;
  opacity: 0;
}

50%{
  translate: 0rem;
  scale: 1;
  opacity: 1;
}

100%{
  translate: 50rem;
  scale: 0.1;
  opacity: 0;
}
`;

const StyledSection = styled.section`
  border-left: 5px solid var(--color-main-700);

  & svg {
    margin-left: -4rem;
    width: 2.4rem;
    height: 2.4rem;

    color: var(--color-main-700);
  }
`;

const StyledTextBox = styled.div`
  /* background-color: aliceblue; */
  height: 80vh;

  margin: 0% 10%;

  padding: 3.6rem 4.8rem;

  display: flex;
  flex-direction: column;

  align-items: start;
  justify-content: center;

  gap: 4.8rem;

  overflow: scroll;

  animation: ${fadeIn} linear;
  animation-timeline: view(y);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledH2 = styled.h2`
  color: var(--color-main-700);
  font-weight: 600;
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
`;

const StyledP = styled.p`
  color: var(--color-main-100);

  font-size: 1.8rem;
  font-weight: 500;

  letter-spacing: 0.1rem;

  display: inline-block;
`;

const info = [
  {
    heading: 'My education',
    content:
      'Hello, My name is Denis and I am currently a student at Technical University of Sofia, first year bacchelor degree of cybersecurity. Before university I have graduated Vocational High School of Computer Technologies and Systems at Pravets, where I got all of my programming basics at many different languages.',
  },
  {
    heading: 'What I love to do',
    content:
      'My passion is Front-End development. I really love making the functionality of the website work and also i enjoy designing websites that are created by me.',
  },
  {
    heading: 'About my experience in the world of programming',

    content:
      'About 2 years ago I started learning JavaScript. That is when i realised that JavaScript together with HTML and CSS are the languages I want to improve my skills at. Later on, after developing my JavaScript skills, I wanted to expand my skills, so what is when I started learning React. Really enjoyed learning about how React works and I am currently developing my skills at it.',
  },
  {
    heading: 'My scoial skills',
    content:
      'I am ambitious, opened to learning new technologies and also i am a fast learner! I like to work in a team because of the skills, advices and support that the other people can exchange with you!',
  },
];

function Aboutme() {
  return (
    <StyledSection>
      <SlArrowUp
        style={{
          position: 'absolute',
          top: '47%',
          transform: 'translateY(-47%)',
        }}
      />
      <SlMouse
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
      <SlArrowDown
        style={{
          position: 'absolute',
          top: '53%',
          transform: 'translateY(-53%)',
        }}
      />
      {info.map((el) => (
        <StyledTextBox key={el.heading}>
          <StyledH2>{el.heading}</StyledH2>
          <StyledP>{el.content}</StyledP>
        </StyledTextBox>
      ))}
    </StyledSection>
  );
}

export default transition(Aboutme);
