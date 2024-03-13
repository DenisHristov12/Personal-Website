import { motion } from 'framer-motion';

import { SlArrowRightCircle } from 'react-icons/sl';

import { MainButton } from '../ui/NavLink';
import { StyledHomePage } from '../ui/StyledHome';
import { StyledH1 } from '../ui/Heading1';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.5 }}>
      <StyledHomePage>
        <StyledH1>Welcome to Denis Hristov's website!</StyledH1>
        <MainButton to='/about'>
          See more <SlArrowRightCircle />
        </MainButton>
      </StyledHomePage>
    </motion.div>
  );
}

export default Home;
