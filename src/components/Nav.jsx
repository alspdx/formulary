import React from 'react';
import NavItem from './NavItem';
import glamorous from 'glamorous';

const StyledNav = glamorous.ul({
    display: 'flex',
    listStyle: 'none',
  },
);

const Nav = () => (
  <StyledNav>
    <NavItem />
    <NavItem />
    <NavItem />
  </StyledNav>
)

export default Nav;
