import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DeteilLinksList = styled.ul`
  list-style-type: none;
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
export const DeteilLinksItem = styled.li`
  &:first-of-type {
    margin-right: 10px;
  }
`;
export const DeteilLinks = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;

  text-decoration: none;

  padding: 5px 16px;

  border: 1px solid transparent;
  border-radius: 5px;

  color: black;

  width: 500px;

  &.active {
    color: white;
    background-color: #2f788b;
  }
`;
