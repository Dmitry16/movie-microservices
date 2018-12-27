/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectCurrentUser = () => createSelector(
    selectLogin,
    (loginState) => loginState.toJS().currentUser
);

const makeSelectLoggedIn = () => createSelector(
    selectLogin,
    (loginState) => loginState.get('loggedIn')
);

export {
    selectLogin,
    makeSelectCurrentUser,
    makeSelectLoggedIn
};
