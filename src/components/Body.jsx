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

const Body = () => {
  return (
    <Container>
      <Header />
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
};

export default Body;
