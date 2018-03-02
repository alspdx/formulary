import React from 'react';
import glamorous from 'glamorous';
import colors from './../constants';

const StyledLi = glamorous.li({
    color: colors.white,
    ':nth-child(1n+2)': {
      marginLeft: '16px',
    }
  }
)

const NavItem = () => (
  <StyledLi>NavItem</StyledLi>
)

export default NavItem;
