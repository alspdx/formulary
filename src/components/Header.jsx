import React from 'react';
import Nav from './Nav';
import HeaderLogo from './HeaderLogo';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
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
});

const Header = ({ loggedIn, userName }) => (
  <StyledHeader>
    <HeaderLogo />
    <Nav loggedIn={loggedIn} userName={userName} />
  </StyledHeader>
);

Header.propTypes = {
  loggedIn: PropTypes.bool,
  userName: PropTypes.string
};

export default Header;
