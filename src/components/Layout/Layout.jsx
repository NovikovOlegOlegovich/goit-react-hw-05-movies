import { NavLink, Outlet } from 'react-router-dom';
import { LayoutWrapper, Navigation, NavigationLink } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navigation>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Navigation>
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
