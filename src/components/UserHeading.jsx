import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import constants from './../constants';
const { colors } = constants;

const StyledH1 = glamorous.h1({
  color: colors.primary
});

const UserHeading = ({userName}) => (
  <StyledH1>{userName}</StyledH1>
);

UserHeading.propTypes = {
  userName: PropTypes.string
};

export default UserHeading;
