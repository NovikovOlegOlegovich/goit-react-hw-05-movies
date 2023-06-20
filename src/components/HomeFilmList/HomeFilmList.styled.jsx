import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FilmList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 8px;
  justify-content: space-evenly;
  padding: 0px;
  list-style-type: none;
`;

export const FilmListItem = styled.li`
  font-size: 20px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration-line: none;
  scale: 1;
  &:hover {
    scale: 1.05;
  }
`;

export const MovieTitle = styled.p`
  margin: 0px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #055371;
`;
