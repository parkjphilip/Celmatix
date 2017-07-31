import React from 'react';
import NavBarContainer from './nav/navbar_container';
import AuthButtonsContainer from './nav/auth_buttons_container';

const App = ( props ) => {
    return (
      <div id="app-wrapper">
        <div>
          <NavBarContainer />
          <AuthButtonsContainer />
          { props.children }
        </div>
      </div>
    );
};

export default App;