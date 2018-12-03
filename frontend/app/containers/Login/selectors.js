/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectCurrentUser = () => createSelector(
    selectLogin,
    (loginState) => loginState.toJS('currentUser').currentUser
);

export {
    selectLogin,
    makeSelectCurrentUser
};
