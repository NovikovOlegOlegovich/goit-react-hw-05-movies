import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 8px;
  justify-content: space-evenly;
  padding: 0px;
  list-style-type: none;
`;

export const CastListItem = styled.li``;
export const CastName = styled.p`
  margin: 0px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
export const CastCharacter = styled.p`
  margin: 0px;
  text-align: center;
  margin-bottom: 10px;
`;
