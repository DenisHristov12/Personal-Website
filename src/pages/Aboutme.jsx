import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import { StyledTextBox } from '../ui/StyledTextBox';
import { StyledH2 } from '../ui/StyledHeadingSecondary';
import { StyledP } from '../ui/StyledParagraph';
import { StyledSpan } from '../ui/StyledIcon';

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
    heading: 'My experience in programming',

    content:
      'About 2 years ago I started learning JavaScript. That is when i realised that JavaScript together with HTML and CSS are the languages I want to improve my skills at. Later on, after developing my JavaScript skills, I wanted to expand my skills, so what is when I started learning React. Really enjoyed learning about how React works and I am currently developing my skills at it.',
  },
  {
    heading: 'My social skills',
    content:
      'I am ambitious, opened to learning new technologies and also I am a fast learner! I like to work in a team because of the skills, advices and support that the other people can exchange with you!',
  },
];

function Aboutme() {
  const [iconsLoaded, setIconsLoaded] = useState(false);

  useEffect(() => {
    const loadIcons = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      setIconsLoaded(true);
    };

    loadIcons();
  }, []);

  return (
    iconsLoaded && (
      <>
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.5 }}>
          <section>
            {info.map((el, i) => (
              <StyledTextBox key={el.heading}>
                {i > 0 && (
                  <StyledSpan>
                    <SlArrowUp />
                  </StyledSpan>
                )}
                <StyledH2>{el.heading}</StyledH2>
                <StyledP>{el.content}</StyledP>
                {i < 3 && (
                  <StyledSpan>
                    <SlArrowDown />
                  </StyledSpan>
                )}
              </StyledTextBox>
            ))}
          </section>
        </motion.div>
      </>
    )
  );
}

export default Aboutme;
