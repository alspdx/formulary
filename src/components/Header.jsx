import React from 'react';
import UserHeading from './UserHeading';
import Nav from './Nav';
import glamorous from 'glamorous';

const StyledHeader = glamorous.header({
    backgroundColor: 'yellow',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    height: '70px',
  }
);

const Header = () => (
  <StyledHeader>
    <UserHeading />
    <Nav />
  </StyledHeader>
)

export default Header;
