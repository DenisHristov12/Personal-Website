import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './NavBar';

const BackgroundImg = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('full.JPG');
  /* background-image: url('full.JPG'); */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  height: 100vh;
`;

const StyledAppLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  /* place-self: center; */
  margin-left: auto;
  margin-top: 2%;
  margin-right: 7%;
  /* background-color: red; */
  height: 80vh;
  width: 50%;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <BackgroundImg>
        <NavBar />

        <Main>
          <Outlet />
        </Main>
      </BackgroundImg>
    </StyledAppLayout>
  );
}

export default AppLayout;
