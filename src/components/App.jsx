import Body from './Body';
import Header from './Header';
import React from 'react';
import glamorous from 'glamorous';
import { reset } from 'glamor/reset';

const ResetDiv = glamorous.div({
  reset,
  boxSizing: 'border-box',
  height: '100vh'
});

const App = () => (
  <ResetDiv>
    <Header />
    <Body />
  </ResetDiv>
);


export default App;
