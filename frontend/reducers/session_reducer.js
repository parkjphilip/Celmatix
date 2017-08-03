import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RESET_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge( {}, state, { currentUser: action.currentUser} );
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors: action.errors });
    case RESET_ERRORS:
      let newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;