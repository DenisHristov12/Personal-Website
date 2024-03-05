import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './NavBar';

const StyledAppLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  /* place-self: center; */
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <NavBar />

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
