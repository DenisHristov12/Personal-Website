import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './NavBar';

const BackgroundImg = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
    url('full.JPG');
  /* background-image: url('full.JPG'); */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;

  height: 100vh;
`;

const StyledAppLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  /* place-self: center; */
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
