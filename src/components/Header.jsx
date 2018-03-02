import React from 'react';
import UserHeading from './UserHeading';
import Nav from './Nav';
import glamorous from 'glamorous';
import colors from './../constants';

const StyledHeader = glamorous.header({
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    height: '50px',
  }
);

const Header = () => (
  <StyledHeader>
    <UserHeading userName='alspdx'/>
    <Nav />
  </StyledHeader>
)

export default Header;
