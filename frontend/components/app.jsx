import React from 'react';
import NavBar from './nav/navbar';
import AuthButtonsContainer from './nav/auth_buttons_container';

const App = ( props ) => {
    return (
      <div id="app-wrapper">
        <div>
          <NavBar />
          <AuthButtonsContainer />
          { props.children }
        </div>
      </div>
    );
};

export default App;