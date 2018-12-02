/*
 * LoginReducer
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { AUTH_USER } from './constants';

// The initial state of the App
const initialState = fromJS({
    authUser: false,
    loggedIn: false
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return state.set('authUser', action.user)
    default:
      return state;
  }
}

export default loginReducer;
