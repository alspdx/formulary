import Body from './Body';
import React from 'react';
import glamorous from 'glamorous';
import { reset } from 'glamor/reset';
import constants from './../constants';
const { colors } = constants;

const ResetDiv = glamorous.div({
  reset,
  boxSizing: 'border-box',
  height: '100vh',
  backgroundColor: colors.primary,
});

const App = () => (
  <ResetDiv>
    <Body />
  </ResetDiv>
);


export default App;
