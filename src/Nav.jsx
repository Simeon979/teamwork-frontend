import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const NavContainer = styled.nav`
  max-width:100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 30%;
`;

const NavGroup = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li`
  margin-right: 1em;  
`;
const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  text-decoration: none;
  &.${activeClassName} {
    border-bottom: 1.5px solid white;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    text-decoration: none;
  }
  `;

const Nav = () => (
  <NavContainer>
    <NavGroup>
      <NavItem><StyledNavLink to="/feed">feed</StyledNavLink></NavItem>
      <NavItem><StyledNavLink to="/articles/new">New Article</StyledNavLink></NavItem>
    </NavGroup>
  </NavContainer>
);

export default Nav;
