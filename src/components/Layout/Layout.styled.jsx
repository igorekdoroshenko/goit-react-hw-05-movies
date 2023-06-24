import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1260px;
  padding: 0px 30px;
  margin: 0 auto;
  `;

export const Header = styled.header`
  border-bottom: solid 1px black;
  margin-bottom: 20px;
  background-color: white
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 28px;
  color: #001a00;

  &.active {
    color: #750000;
  }
`;