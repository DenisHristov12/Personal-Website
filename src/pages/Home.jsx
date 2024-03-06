import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-left: auto;
  margin-right: 8rem;
  margin-top: 10%;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: blue;
`;

const StyledP = styled.p`
  font-size: 2.4rem;
  display: inline-block;
  background-color: red;
  text-align: center;

  color: var(--color-main-100);

  word-wrap: break-word;
`;

const StyledButton = styled.button`
  font-size: 1.2rem;
  width: 6.6rem;
  background-color: red;
  padding: 0.8rem 1.2rem;
`;

function Home() {
  return (
    <StyledDiv>
      <StyledP>Hello, My name is Denis! Welcome to my Website</StyledP>
      <StyledButton>Learn more</StyledButton>
    </StyledDiv>
  );
}

export default Home;
