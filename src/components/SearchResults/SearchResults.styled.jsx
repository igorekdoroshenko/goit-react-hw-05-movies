import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const SearchList = styled.ul`
  list-style-type: none;
`;

export const SearchItem = styled.li`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const SearchLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #750000;
  }
`;