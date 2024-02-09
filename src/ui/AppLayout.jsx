import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { StyledNavLink } from './NavLink';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  align-content: center;
`;

const StyledHeader = styled.header`
  height: 50px;
  border-bottom: 1px groove var(--color-grey-700);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledRight = styled.div`
  display: flex;
  gap: 5px;
`;

const Main = styled.main`
  place-self: center;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
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

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
