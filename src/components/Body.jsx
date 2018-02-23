import Login from './Login';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Body() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default Body;
