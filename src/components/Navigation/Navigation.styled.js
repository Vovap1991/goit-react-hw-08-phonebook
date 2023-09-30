import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomePageLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  font-weight: 600;
  color: black;
  transition: color 250ms linear, font-size 250ms linear;

  &:hover {
    color: red;
    font-size: 35px;
  }
`;

export const ContactsLink = styled(NavLink)`
  text-decoration: none;
  font-size: 29px;
  font-weight: 600;
  color: black;
  transition: color 250ms linear, font-size 250ms linear;
  margin-left: 20px;

  &:hover {
    color: red;
    font-size: 35px;
  }
`;
