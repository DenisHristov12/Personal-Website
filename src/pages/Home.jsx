import styled from 'styled-components';

// style home page
const StyledHome = styled.div`
  height: 50rem;
  margin: 10rem 20rem;
  /* height: 100vh; */
  display: flex;
  /* justify-content: space-between; */
  gap: 300px;
  align-items: center;
  flex-direction: row;
  /* overflow-y: scroll; */
  background-color: var(--color-yellow-300);
  border-radius: 10px;

  opacity: 0.8;
`;

const Div = styled.div`
  text-align: center;
  background-color: var(--color-yellow-200);
  color: var(--color-grey-700);
  /* background-color: red; */
  /* flex: 1; */
  width: 400px;
  /* margin-top: 15%; */
  margin-left: 10%;
  border-radius: 32px;
  padding: 10px 20px 20px;
`;

const P = styled.p`
  margin-top: 10px;
`;

const ImgDiv = styled.div`
  /* padding-top: 20px; */
  /* margin-top: 8%; */
  width: auto;
  height: 400px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 100px;
`;

const Img = styled.img`
  /* margin-top: 10%; */
  width: auto;
  height: 650px;
  margin-bottom: 50px;
`;

function Home() {
  return (
    <StyledHome>
      <Div>
        My name is Denis.
        <P>
          I am a student at Technical University of Sofia who wants to improve
          his skills. I am ambitious and a fast learner!
        </P>
        <P>
          I like to work in a team because of the skills, advices and support
          that the other people can exchange with you! I am actively learning
          JavaScript for about 2 years. Started learning React 2 months ago and
          i am developing my skills in React right now.
        </P>
        <P>
          I wnat to improve my skills and learn new technologies in web
          development sphere.
        </P>
      </Div>

      <ImgDiv>
        <Img src='DSC_1625.jpg' alt='Photo of Denis Hristov' />
      </ImgDiv>
    </StyledHome>
  );
}

export default Home;
