import React from 'react';
import NavItem from './NavItem';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

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

const Nav = ({ loggedIn, userName }) => (
  <StyledNav>
    {navItems.map(item =>
      <NavItem key={item.title} title={item.title} pathName={item.pathName} />
    )}
    {loggedIn ? (
      <NavItem title={userName} pathName={'/user'} />
    ) : (
      <NavItem title='Sign In' pathName={'/signin'} />
    )}
  </StyledNav>
);

Nav.propTypes = {
  loggedIn: PropTypes.string,
  userName: PropTypes.strings
};

export default Nav;
