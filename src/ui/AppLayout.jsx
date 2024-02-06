import { NavLink, Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      {/* style header and the links */}
      <header>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contacts">Contact me</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
