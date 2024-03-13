import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './NavBar';
import { BackgroundImg } from './BackgroundImg';
import { Main } from './Main';

const StyledAppLayout = styled.div`
  height: 100vh;
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
