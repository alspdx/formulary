import Body from './Body';
import Header from './Header';
import React from 'react';

function App() {
  return (
    <div>
      <style jsx global>{`
        :root {
          --primary-color: #ff6375;
          --secondary-color: #78e2d8;
          --tertiary-color: #daffef;
          --light-color: #f9f9f9;
          --dark-color: #3d3d3d;
        }
      `}</style>
      <h1>App works!</h1>
      <Header />
      <Body />
    </div>
  );
}

export default App;
