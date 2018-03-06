import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import constants from './../constants';
import FormButton from './FormButton';
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
  const { userName, email, clientIds } = userDetails;
  return (
    <ProfileWrapper>
      <StyledH2>{userName}</StyledH2>
      <StyledSpan>{email}</StyledSpan>
      <FormButton buttonText={`Clients (${clientIds.length})`} buttonPath='/clients' />
    </ProfileWrapper>
  );
};


UserProfile.propTypes = {
  userDetails: PropTypes.object
};

export default UserProfile;
