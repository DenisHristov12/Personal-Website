import styled from 'styled-components';

function Home() {
  // style home page
  const StyledHome = styled.div`
    height: 100vh;
    display: flex;
    /* justify-content: space-between; */
    gap: 300px;
    align-items: center;
    flex-direction: row;
    /* overflow-y: scroll; */
  `;

  const P = styled.p`
    text-align: center;
    background-color: var(--color-grey-700);
    color: var(--color-grey-50);
    /* background-color: red; */
    /* flex: 1; */
    width: 500px;
    /* margin-top: 15%; */
    margin-left: 10%;
  `;

  const ImgDiv = styled.div`
    /* margin-top: 8%; */
    width: auto;
    height: 450px;
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

  return (
    <StyledHome>
      <P>
        Description about myself. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Odio sequi illo vero! Ipsa odit reiciendis, itaque
        dolorem voluptas, asperiores error quod modi earum debitis obcaecati
        distinctio illo. Aspernatur, temporibus exercitationem? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Tempora dolores molestiae
        commodi magnam, esse quod sequi temporibus accusantium aliquam minus
        facilis cupiditate voluptatem deleniti, hic, amet itaque beatae labore
        tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        voluptate ipsum eveniet accusantium recusandae ipsam magnam delectus
        alias necessitatibus possimus dolore, commodi deleniti reiciendis sunt
        rem minus omnis architecto sed. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Fuga laboriosam, aut perspiciatis dolores quo, culpa
        obcaecati error velit quas, voluptatum ipsum aliquam beatae veniam!
        Ratione obcaecati maiores a quo doloremque.
      </P>

      <ImgDiv>
        <Img
          src="DSC_1625.jpg"
          alt="Photo of Denis Hristov"
        />
      </ImgDiv>
    </StyledHome>
  );
}

export default Home;
