import React from 'react';

const App = ( props ) => {
    return (
      <div id="app-wrapper">
        <NavBar />
        <div>
          { props.children }
        </div>
      </div>
    );
};

export default App;