import styled from 'styled-components';
import { StyledNavLink } from '../ui/NavLink';

const StyledDiv = styled.div`
  margin-left: auto;
  margin-right: 15%;
  margin-top: 5%;
  padding: 2.4rem 1.2rem;
  width: 30%;
  height: 50rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  border: 5px solid var(--color-main-700);

  /* opacity: 0.5; */
`;

const StyledP = styled.p`
  font-size: 4.8rem;
  display: inline-block;
  /* background-color: red; */
  text-align: center;

  color: var(--color-main-100);

  word-wrap: break-word;
`;

const StyledSpan = styled.span`
  /* display: inline-block; */

  text-decoration: double;
`;

function Home() {
  return (
    <StyledDiv>
      <StyledP>
        Hello, My name is <StyledSpan>Denis</StyledSpan>! Welcome to my Website!
      </StyledP>
      <StyledNavLink className='homeButton'>Learn more</StyledNavLink>
    </StyledDiv>
  );
}

export default Home;
