import React from 'react';
import NavBar from './nav/NavBar';
import AuthButtons from './nav/AuthButtons';

const App = ( props ) => {
    return (
      <div id="app-wrapper">
        <div>
          <NavBar />
          <AuthButtons />
          { props.children }
        </div>
      </div>
    );
};
// <NavBar />

export default App;