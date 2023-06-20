import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0px auto;
  padding: 0px 16px;
  margin-bottom: 30px;
`;

export const Navigation = styled.nav`
  margin-top: 20px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const NavigationLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;

  text-decoration: none;

  margin-right: 20px;
  padding: 5px 16px;

  border: 1px solid transparent;
  border-radius: 5px;

  color: black;
  /* background-color: #2f788b; */

  &.active {
    color: white;
    background-color: #2f788b;
  }
`;
