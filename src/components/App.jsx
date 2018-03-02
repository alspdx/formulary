import Body from './Body';
import Header from './Header';
import React from 'react';
import glamorous from 'glamorous';
import { reset } from 'glamor/reset';

const ResetDiv = glamorous.div({reset});

const App =() => (
  <ResetDiv>
    <style jsx global>{`
      :root {
        --primary: #ff6375;
        --secondary: #78e2d8;
        --tertiary: #daffef;
        --white: #f9f9f9;
        --black: #3d3d3d;
      }
    `}</style>
    <Header />
    <Body />
  </ResetDiv>
)


export default App;
