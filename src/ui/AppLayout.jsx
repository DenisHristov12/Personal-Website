import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppLayoyt = styled.div``;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledRight = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledNavLink = styled(NavLink)`
  /* padding: 0px 10px;
  border-right: solid black 1px; */
`;

function AppLayout() {
  return (
    <div>
      {/* style header and the links */}
      <StyledHeader>
        <div>
          <StyledNavLink to="/home">Denis Hristov</StyledNavLink>
        </div>
        <StyledRight>
          <StyledNavLink to="/about">About me</StyledNavLink>
          <StyledNavLink to="/skills">Skills</StyledNavLink>
          <StyledNavLink to="/contacts">Contact me</StyledNavLink>
        </StyledRight>
      </StyledHeader>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
