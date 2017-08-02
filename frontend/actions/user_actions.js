import * as UserAPIUtil from '../util/users_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers()
                    .then(users => dispatch(receiveUsers(users)));
};

export const receiveUsers = users => {
  return ({
    type: RECEIVE_USERS,
    users
  });
};