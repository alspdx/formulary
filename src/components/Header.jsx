import constants from './../constants';
import glamorous from 'glamorous';
import HeaderLogo from './HeaderLogo';
import Nav from './Nav';
import React from 'react';
const { variables } = constants;


const StyledHeader = glamorous.header({
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: variables.headerPadding,
  height: variables.headerHeight,
});

const Header = () => (
  <StyledHeader>
    <HeaderLogo />
    <Nav />
  </StyledHeader>
);

export default Header;
