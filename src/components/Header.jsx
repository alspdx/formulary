import React from 'react';
import Nav from './Nav';
import HeaderLogo from './HeaderLogo';
import glamorous from 'glamorous';
import constants from './../constants';
const { colors, shadows } = constants;

const StyledHeader = glamorous.header({
  backgroundColor: colors.white,
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  height: '70px',
  boxShadow: shadows.box2,
}
);

const Header = () => (
  <StyledHeader>
    <HeaderLogo />
    <Nav />
  </StyledHeader>
);

export default Header;
