/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectLogin = () => createSelector(
    selectLogin,
    (loginState) => loginState.get('loggedIn')
);

const makeSelectCurrentUser = () => createSelector(
    selectLogin,
    (loginState) => loginState.get('currentUser')
);

export {
    selectLogin,
    makeSelectLogin,
    makeSelectCurrentUser
};
