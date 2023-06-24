import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const MovieWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export const MovieText = styled.div`
  padding: 100px 50px;
`;

export const MovieList = styled.ul`
  display: flex;
`;

export const MovieLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #001a00;
  &.active {
    color: #a01d1d;
  }
`;

export const MovieItem = styled.li`
  padding: 10px;
`;