import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper, Navigation, NavigationLink } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navigation>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Navigation>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
};

export default Layout;
