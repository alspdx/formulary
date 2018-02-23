import Login from './Login';
import React from 'react';
import UserProfile from './UserProfile';
import { Switch, Route } from 'react-router-dom';

function Body() {
  return (
    <div>
      <Switch>
        <Route path='/user' component={UserProfile} />
        <Route exact path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default Body;
