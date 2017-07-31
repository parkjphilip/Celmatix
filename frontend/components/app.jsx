import React from 'react';
import NavBar from './nav/NavBar';


const App = ( props ) => {
    return (
      <div id="app-wrapper">
        <div>
          <NavBar />
          { props.children }
        </div>
      </div>
    );
};
// <NavBar />
// <AuthButtons />

export default App;