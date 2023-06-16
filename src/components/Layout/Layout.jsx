import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginBottom: 20,
      }}
    >
      <nav
        style={{
          fontSize: 40,
          marginBottom: 20,
        }}
      >
        <NavLink
          to="/"
          style={{
            marginRight: 20,
            textDecorationLine: 'none',
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          style={{
            textDecorationLine: 'none',
          }}
        >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
