import React from 'react';

const App = ( props ) => {
    return (
      <div id="app-wrapper">
        <div>
          { props.children }
        </div>
      </div>
    );
};
// <NavBar />

export default App;