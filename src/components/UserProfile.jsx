import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import constants from './../constants';
const { colors, variables, shadows } = constants;

const ProfileWrapper = glamorous.div({
  color: colors.black,
  backgroundColor: colors.white,
  padding: variables.cardPadding,
  boxShadow: shadows.box1
});

const StyledH2 = glamorous.h2({
  color: colors.primary
});

const StyledSpan = glamorous.span({

});

const UserProfile = ({ userDetails }) => {
  const { userName, email } = userDetails;
  return (
    <ProfileWrapper>
      <StyledH2>{userName}</StyledH2>
      <StyledSpan>{email}</StyledSpan>
    </ProfileWrapper>
  );
};


UserProfile.propTypes = {
  userDetails: PropTypes.object
};

export default UserProfile;
