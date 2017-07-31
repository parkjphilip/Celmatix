import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';

import App from './app';

const Root = ({store}) => {

  return (
    <Provider store={ store }>
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/" component={ ProductsContainer } />
            <Route exact path="/login" component={ AuthFormContainer } />
            <Route exact path="/signup" component={ AuthFormContainer } />
            <Route exact path="/cart" component={ CartContainer }/>
            <Route exact path="/orders" component={ CartContainer }/>
            <Route exact path="/upload" component={ CartContainer }/>
            <Route exact path="/addproducts" component={ CartContainer }/>
            <Route exact path="/users" component={ CartContainer }/>
          </Switch>
        </App>
      </HashRouter>
    </Provider>
  );
};

export default Root;