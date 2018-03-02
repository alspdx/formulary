import React from 'react';
import glamorous from 'glamorous';
import colors from './../constants';
import { Link } from 'react-router-dom';

const StyledLi = glamorous.li({
    ':nth-child(1n+2)': {
      marginLeft: '16px',
    }
  }
)

const StyledLink = glamorous(Link)({
  textDecoration: 'none',
  color: colors.white
})

const NavItem = ({ title, pathName }) => (
  <StyledLi><StyledLink to={pathName}>{title}</StyledLink></StyledLi>
)

export default NavItem;
