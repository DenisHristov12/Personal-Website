import styled from 'styled-components';
import { MainButton, StyledNavLink } from '../ui/NavLink';

const StyledHomePage = styled.div`
  margin-left: auto;
  margin-right: 17%;
  margin-top: 5%;
  padding: 2.4rem 1.2rem;
  width: 30%;
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
      <MainButton to='/about' variant='mainButton'>
        See more
      </MainButton>
    </StyledHomePage>
  );
}

export default Home;
