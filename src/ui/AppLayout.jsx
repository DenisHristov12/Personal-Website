import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './NavBar';

const BackgroundImg = styled.div`
  background-image: url('denis.jpeg');
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: hidden;

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
