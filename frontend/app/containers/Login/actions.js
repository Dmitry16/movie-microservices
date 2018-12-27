/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { 
    LOGIN_USER,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_ERROR,
    USER_SESSION,
    REGISTER_USER,
} from './constants';  
/**
 * Changes the input field of the form
 *
 * @param  {movieTitle} The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export const loginUser = userInfo => {
    console.log('loginUser::', userInfo);
    return {
        type: LOGIN_USER,
        userInfo
    };
}

export const registerUser = userInfo => {
    console.log('registerUser::', userInfo);
    return {
        type: REGISTER_USER,
        userInfo
    };
}

export function userAuthSuccess({user}) {
    return {
        type: AUTH_SUCCESS,
        user
    };
}

export function userAuthFailure({user}) {
    return {
        type: AUTH_FAILURE,
        user
    };
}

export function userAuthError({user}) {
    return {
        type: AUTH_ERROR,
        user
    };
}

export function userSession({user}) {
    return {
        type: USER_SESSION,
        user
    };
}

// export function setSessionStorage(name, val) {
//     sessionStorage.setItem(name, JSON.stringify(val));
//     return {
//         type: SET_SESSION_STORAGE,
//         name,
//         val
//     };
// }
  