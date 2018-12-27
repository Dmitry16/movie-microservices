/*
 * LoginReducer
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { 
  LOGIN_USER,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_ERROR,
  USER_SESSION,
  REGISTER_USER,
} from './constants';  
// The initial state of the App
const initialState = fromJS({
    currentUser: {
      email: 'guest@guest.com',
      password: 'guest',
    },
    loggedIn: false
});

function loginReducer(state = initialState, action) {
  console.log('loginReducer', action)
  switch (action.type) {
    case LOGIN_USER:
      return state.set('currentUser', action.userInfo)
    case REGISTER_USER:
      return state.set('currentUser', action.userInfo)
    case AUTH_SUCCESS:
      return state.set('loggedIn', true)
    default:
      return state;
  }
}

export default loginReducer;
