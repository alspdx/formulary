const { colors, variables, shadows } = constants;
import { connect } from 'react-redux';
import constants from './../constants';
import DetailsList from './DetailsList';
import { getUserClientsById } from './../actions/async';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const ProfileWrapper = glamorous.div({
  color: colors.black,
  backgroundColor: colors.white,
  padding: variables.cardPadding,
  boxShadow: shadows.box1,
  display: 'flex',
  flexDirection: 'column',
});

const StyledH2 = glamorous.h2({
  color: colors.primary
});

const StyledSpan = glamorous.span({

});

class UserProfile extends React.Component {

  componentDidMount() {
    const { dispatch, userDetails } = this.props;
    dispatch(getUserClientsById(userDetails.clientIds));
  }

  render() {
    const { userName, email } = this.props.userDetails;
    return (
      <ProfileWrapper>
        <StyledH2>{userName}</StyledH2>
        <StyledSpan>{email}</StyledSpan>
        <DetailsList listType='Clients' itemList={this.props.userClients} />
      </ProfileWrapper>
    );
  }
}


UserProfile.propTypes = {
  dispatch: PropTypes.func,
  userDetails: PropTypes.object,
  userClients: PropTypes.object
};

const mapStateToProps = state => {
  return {
    userDetails: state.userDetails,
    userClients: state.userClients
  };
};

export default connect(mapStateToProps)(UserProfile);
