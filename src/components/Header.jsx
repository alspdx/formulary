import React from 'react';
import Nav from './Nav';
import HeaderLogo from './HeaderLogo';
import glamorous from 'glamorous';
import constants from './../constants';
const { variables } = constants;

const StyledHeader = glamorous.header({
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: variables.headerPadding,
  height: variables.headerHeight,
}
);

const Header = () => (
  <StyledHeader>
    <HeaderLogo />
    <Nav />
  </StyledHeader>
);

export default Header;
