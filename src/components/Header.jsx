import React from 'react';
import UserHeading from './UserHeading';
import Nav from './Nav';
import glamorous from 'glamorous';
import constants from './../constants';
const { colors } = constants;

const StyledHeader = glamorous.header({
  backgroundColor: colors.white,
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  height: '70px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
}
);

const Header = () => (
  <StyledHeader>
    <UserHeading userName='alspdx' />
    <Nav />
  </StyledHeader>
);

export default Header;
