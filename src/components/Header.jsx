import React from 'react';
import Nav from './Nav';
import HeaderLogo from './HeaderLogo';
import glamorous from 'glamorous';
import constants from './../constants';
const { colors } = constants;

const StyledHeader = glamorous.header({
  backgroundColor: colors.primary,
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 60px',
  height: '100px',
  // boxShadow: shadows.box2,
}
);

const Header = () => (
  <StyledHeader>
    <HeaderLogo />
    <Nav />
  </StyledHeader>
);

export default Header;
