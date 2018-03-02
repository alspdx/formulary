import React from 'react';
import glamorous from 'glamorous';
import colors from './../constants';

console.log(colors);
const StyledLi = glamorous.li({
    ':nth-child(1n+2)': {
      marginLeft: '16px',
      backgroundColor: colors.blush
    }
  }
)

const NavItem = () => (
  <StyledLi>NavItem</StyledLi>
)

export default NavItem;
