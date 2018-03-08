import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import constants from './../constants';
const { colors, shadows, variables } = constants;
import { getClientServicesById } from './../actions/async';
import DetailsList from './DetailsList';

const ClientDetailsWrapper = glamorous.div({
  display: 'flex',
  height: '70%',
  width: '70%',
  boxShadow: shadows.box1,
  boxSizing: 'borderBox'
});

const ClientDiv = glamorous.div({
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

const StyledLink = glamorous.a({
  textDecoration: 'none',
  color: colors.black,
  fontSize: variables.fontMedium,
  ':nth-child(1n+2)': {
    paddingTop: '20px',
  }
});

const ListDiv = glamorous.div({
  width: '70%',
  height: '100%',
  boxSizing: 'borderBox'
});

class ClientDetails extends React.Component {

  componentWillMount() {
    const { dispatch, selectedClient } = this.props;
    dispatch(getClientServicesById(selectedClient.serviceIds));
  }

  render() {
    const { firstName, lastName, email, phone } = this.props.selectedClient;
    return (
      <ClientDetailsWrapper>
        <ClientDiv>
          <StyledH2>{`${firstName} ${lastName}`}</StyledH2>
          <StyledLink href={`mailto:${email}`}>{email}</StyledLink>
          <StyledLink href={`tel:${phone}`}>{phone}</StyledLink>
        </ClientDiv>
        <ListDiv>
          {this.props.clientServices &&
            <DetailsList listType='Services' listItems={this.props.clientServices} />
          }
        </ListDiv>
      </ClientDetailsWrapper>
    );
  }
}


ClientDetails.propTypes = {
  dispatch: PropTypes.func,
  selectedClientId: PropTypes.string,
  selectedClient: PropTypes.object,
  clientServices: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    selectedClient: state.userClients[state.selectedClientId],
    clientServices: state.clientServices,
  };
};

export default connect(mapStateToProps)(ClientDetails);
