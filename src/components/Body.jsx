import ClientDetails from './ClientDetails';
import DetailsList from './DetailsList';
import Error404 from './Error404';
import Login from './Login';
import React from 'react';
import UserProfile from './UserProfile';
import { Switch, Route } from 'react-router-dom';
import glamorous from 'glamorous';

const MyStyledDiv = glamorous.section({
  fontSize: '2em',
  color: 'red'
  },
  {
    color: 'green',
  },
  (props) => ({
    fontSize: props.size === 'big' ? 30 : 10,
  })
);

const { Span } = glamorous;

const Body = () => (
  <div>
    <style jsx>{`
      h1 {
        color: var(--primary);
      }

    `}</style>
  <MyStyledDiv size='big'>Body works!</MyStyledDiv>
  <Span
    color='blue'
    css={{
      ':hover': {
        color: 'red',
      }
    }}
  >This is the Span</Span>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/clients' component={DetailsList} />
      <Route path='/clientdetails' component={ClientDetails} />
      <Route path='/user' component={UserProfile} />
      <Route component={Error404} />
    </Switch>
  </div>
)


export default Body;
