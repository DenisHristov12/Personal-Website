import styled from 'styled-components';
import { MainButton } from '../ui/NavLink';
import { SlArrowRightCircle } from 'react-icons/sl';

const StyledHomePage = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4.8rem;
  /* background-color: blue; */
  padding: 2.4rem 1.2rem;
  width: 60%;
  height: 50rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  border: 5px solid var(--color-main-700);
`;

const StyledH1 = styled.h1`
  font-size: 5.2rem;
  display: inline-block;
  font-weight: 700;
  text-align: center;

  color: var(--color-main-100);
`;

function Home() {
  return (
    <StyledHomePage>
      <StyledH1>Welcome to Denis Hristov's website!</StyledH1>
      <MainButton to='/about'>
        See more <SlArrowRightCircle />
      </MainButton>
    </StyledHomePage>
  );
}

export default Home;
