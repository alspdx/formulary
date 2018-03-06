import React from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import constants from './../constants';
const { colors } = constants;

const StyledLi = glamorous.li({
  ':nth-child(1n+2)': {
    marginLeft: '16px',
  }
});

const StyledLink = glamorous(Link)({
  textDecoration: 'none',
  color: colors.white
});

const NavItem = ({ title, pathName }) => (
  <StyledLi><StyledLink to={pathName}>{title}</StyledLink></StyledLi>
);

NavItem.propTypes = {
  title: PropTypes.string,
  pathName: PropTypes.string
};

export default NavItem;
