import React from 'react';
import NavBarContainer from './nav/navbar_container';

const App = ( props ) => {
    return (
      <div id="app-wrapper">
        <div>
          <NavBarContainer />
          { props.children }
        </div>
      </div>
    );
};

export default App;