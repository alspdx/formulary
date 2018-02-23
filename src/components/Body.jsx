import ClientList from './ClientList';
import Login from './Login';
import React from 'react';
import UserProfile from './UserProfile';
import { Switch, Route } from 'react-router-dom';

function Body() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/clients' component={ClientList} />
        <Route path='/user' component={UserProfile} />
      </Switch>
    </div>
  );
}

export default Body;
