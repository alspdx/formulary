import ClientDetails from './ClientDetails';
import DetailsList from './DetailsList';
import Error404 from './Error404';
import AccountForm from './AccountForm';
import React from 'react';
import UserProfile from './UserProfile';
import { Switch, Route } from 'react-router-dom';
import glamorous from 'glamorous';

const Container = glamorous.div({
  boxSizing: 'border-box',
  height: 'calc(100% - 70px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const formDetails = {
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
    question: 'Don\'t have an account? ',
    linkTo: '/register',
    linkText: 'Join Formulary!'
  }
};

const Body = () => (
  <Container>
    <Switch>
      <Route exact path='/signin' render={() => <AccountForm formDetails={formDetails.signIn} />} />
      <Route path='/register' render={() => <AccountForm formDetails={formDetails.register} />} />
      <Route path='/clients' component={DetailsList} />
      <Route path='/clientdetails' component={ClientDetails} />
      <Route path='/user' component={UserProfile} />
      <Route component={Error404} />
    </Switch>
  </Container>
);

export default Body;
