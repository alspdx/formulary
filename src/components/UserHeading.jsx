import React from 'react';
import glamorous from 'glamorous';
import colors from './../constants';
import PropTypes from 'prop-types';

const StyledH1 = glamorous.h1({
  color: colors.white
});

const UserHeading = ({userName}) => (
  <StyledH1>{userName}</StyledH1>
);

UserHeading.propTypes = {
  userName: PropTypes.string
};

export default UserHeading;
