import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Redirect } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import AuthFormContainer from './auth/auth_form_container';
import ProductsContainer from './products/products_container';
import UploadContainer from './upload/upload_container';
import CartContainer from './cart/cart_container';
import UsersContainer from './users/users_container';
import AddProductContainer from './add_product/add_product_container.js'
import App from './app';

const Root = ({store}) => {

  function isAdmin (nextState, replace) {
    const currentUser = store.getState().session.currentUser;
    if (currentUser === null || currentUser.is_admin === false) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <Provider store={ store }>
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/" component={ ProductsContainer } />
            <Route exact path="/login" component={ AuthFormContainer } />
            <Route exact path="/signup" component={ AuthFormContainer } />
            <Route exact path="/carts/:cart_id" component={ CartContainer }/>
            <Route exact path="/upload"
              render={() => (
                isAdmin() ? (
                  <UploadContainer />
                ) : (
                  <Redirect to="/"/>
                )
              )}/>
            <Route exact path="/users"
              render={() => (
                isAdmin() ? (
                  <UsersContainer />
                ) : (
                  <Redirect to="/"/>
                )
              )}/>
            <Route exact path="/addproduct"
              render={() => (
                isAdmin() ? (
                  <AddProductContainer />
                ) : (
                  <Redirect to="/"/>
                )
              )}/>
          </Switch>
        </App>
      </HashRouter>
    </Provider>
  );
};

export default Root;


