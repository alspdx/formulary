import React from 'react';
import glamorous from 'glamorous';

const StyledLi = glamorous.li({
    ':nth-child(1n+2)': {
      marginLeft: '16px'
    }
  }
)

const NavItem = () => (
  <StyledLi>NavItem</StyledLi>
)

export default NavItem;
