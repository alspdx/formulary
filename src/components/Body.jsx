import ClientDetails from './ClientDetails';
import DetailsList from './DetailsList';
import Error404 from './Error404';
import AccountForm from './AccountForm';
import React from 'react';
import UserProfile from './UserProfile';
import { Switch, Route, Redirect } from 'react-router-dom';
import glamorous from 'glamorous';
import Header from './Header';

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
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userDetails: {
        userName: 'Adam Smith',
        email: 'alspdx@gmail.com'
      },
      formDetails: {
        register: {
          inputs: [
            {
              inputType: 'text',
              labelText: 'Username'
            },
            {
              inputType: 'email',
              labelText: 'Email'
            },
            {
              inputType: 'password',
              labelText: 'Password'
            }
          ],
          buttonText: 'Join Formulary!',
          buttonPath: '/signin',
          question: 'Already have an account? ',
          linkTo: '/signin',
          linkText: 'Sign In here!'
        },
        signIn: {
          inputs: [
            {
              inputType: 'email',
              labelText: 'Email'
            },
            {
              inputType: 'password',
              labelText: 'Password'
            }
          ],
          buttonText: 'Sign In!',
          buttonPath: '/user',
          question: 'Don\'t have an account? ',
          linkTo: '/register',
          linkText: 'Join Formulary!'
        }
      }
    };
  }

  render() {
    return (
      <Container>
        <Header loggedIn={this.state.loggedIn} userName={this.state.userDetails.userName} />
        <SwitchWrap>
          <Switch>
            <Route exact path='/' render={() => (
              this.state.loggedIn ? (
                <UserProfile />
              ) : (
                <Redirect to='/signin' />
              )
            )} />
            <Route path='/signin' render={() => <AccountForm formDetails={this.state.formDetails.signIn} />} />
            <Route path='/register' render={() => <AccountForm formDetails={this.state.formDetails.register} />} />
            <Route path='/clients' component={DetailsList} />
            <Route path='/clientdetails' component={ClientDetails} />
            <Route path='/user' render={() => <UserProfile userDetails={this.state.userDetails} />} />
            <Route component={Error404} />
          </Switch>
        </SwitchWrap>
      </Container>
    );
  }
}
export default Body;
