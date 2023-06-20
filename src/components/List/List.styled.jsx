import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const FilmList = styled.ul`
  list-style-type: none;
`;

export const FilmItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FilmLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: red;
  }
`;



