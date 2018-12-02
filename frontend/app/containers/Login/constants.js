/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const AUTH_USER = 'Login/AUTH_USER';
export const AUTH_SUCCESS = 'Login/AUTH_SUCCESS';
export const AUTH_FAILURE = 'Login/AUTH_FAILURE';
export const AUTH_ERROR = 'Login/AUTH_ERROR';
export const USER_SESSION = 'Login/USER_SESSION';
export const REGISTER_USER = 'Login/REGISTER_USER';
