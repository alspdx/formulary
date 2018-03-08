const { colors, variables, shadows } = constants;
import { connect } from 'react-redux';
import constants from './../constants';
import DetailsList from './DetailsList';
import { getUserClientsById } from './../actions/async';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const ProfileWrapper = glamorous.div({
  display: 'flex',
  height: '70%',
  width: '70%',
  boxShadow: shadows.box1,
  boxSizing: 'borderBox'
});

const ProfileDiv = glamorous.div({
  color: colors.black,
  backgroundColor: colors.white,
  padding: variables.listPadding,
  display: 'flex',
  flexDirection: 'column',
  width: '30%',
  boxSizing: 'borderBox'
});

const StyledH2 = glamorous.h2({
  color: colors.primary
});

const StyledSpan = glamorous.span({

});

const ListDiv = glamorous.div({
  width: '70%',
  height: '100%',
  boxSizing: 'borderBox'
});

class UserProfile extends React.Component {

  componentWillMount() {
    const { dispatch, userDetails } = this.props;
    dispatch(getUserClientsById(userDetails.clientIds));
  }

  render() {
    const { userName, email } = this.props.userDetails;
    return (
      <ProfileWrapper>
        <ProfileDiv>
          <StyledH2>{userName}</StyledH2>
          <StyledSpan>{email}</StyledSpan>
        </ProfileDiv>
        <ListDiv>
          {this.props.userClients &&
            <DetailsList listType='Clients' listItems={this.props.userClients} />
          }
        </ListDiv>
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
