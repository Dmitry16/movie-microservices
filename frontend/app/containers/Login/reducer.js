/*
 * LoginReducer
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { LOGIN_USER, REGISTER_USER, AUTH_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
    currentUser: {
      email: 'john@john.com',
      password: 'Doe',
    },
});

function loginReducer(state = initialState, action) {
  console.log('loginReducer', action)
  switch (action.type) {
    case LOGIN_USER:
      return state.set('currentUser', action.userInfo)
    case REGISTER_USER:
      return state.set('currentUser', action.userInfo)
    default:
      return state;
  }
}

export default loginReducer;
