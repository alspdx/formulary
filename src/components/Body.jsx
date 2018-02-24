import ClientDetails from './ClientDetails';
import DetailsList from './DetailsList';
import Error404 from './Error404';
import Login from './Login';
import React from 'react';
import UserProfile from './UserProfile';
import { Switch, Route } from 'react-router-dom';

function Body() {
  return (
    <div>
      <h1>Body works!</h1>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/clients' component={DetailsList} />
        <Route path='/clientdetails' component={ClientDetails} />
        <Route path='/user' component={UserProfile} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Body;
