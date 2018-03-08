import AccountForm from './AccountForm';
import ClientDetails from './ClientDetails';
import DetailsList from './DetailsList';
import Error404 from './Error404';
import React from 'react';
import UserProfile from './UserProfile';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import glamorous from 'glamorous';
import Header from './Header';
import { connect } from 'react-redux';
import { watchAuthState } from './../actions/async';
import PropTypes from 'prop-types';

const Container = glamorous.div({
  boxSizing: 'border-box',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const SwitchWrap = glamorous.div({
  boxSizing: 'border-box',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

class Body extends React.Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(watchAuthState());
  }

  render() {
    return (
      <Container>
        <Header userName='Adam Smith' />
        <SwitchWrap>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/signin' />} />
            <Route path='/signin' render={() => <AccountForm formType='signIn' />} />
            <Route path='/register' render={() => <AccountForm formType='register' />} />
            <Route path='/clients' render={() => <DetailsList listType='Clients' />} />
            <Route path='/clientdetails' component={ClientDetails} />
            <Route path='/user' render={() => <UserProfile />} />
            <Route component={Error404} />
          </Switch>
        </SwitchWrap>
      </Container>
    );
  }
}

Body.propTypes = {
  dispatch: PropTypes.func,
  loggedIn: PropTypes.bool,
  userDetails: PropTypes.object
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    userDetails: state.userDetails
  };
};

export default withRouter(connect(mapStateToProps)(Body));
