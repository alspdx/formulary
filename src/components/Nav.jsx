import React from 'react';
import NavItem from './NavItem';
import glamorous from 'glamorous';

const StyledNav = glamorous.ul({
  display: 'flex',
  listStyle: 'none',
});

const navItems = [
  {
    title: 'Home',
    pathName: '/'
  },
  {
    title: 'Clients',
    pathName: '/clients'
  },
  {
    title: 'Client Details',
    pathName: '/clientdetails'
  }
];

const Nav = () => (
  <StyledNav>
    {navItems.map(item =>
      <NavItem key={item.title} title={item.title} pathName={item.pathName} />
    )}
  </StyledNav>
);

export default Nav;
