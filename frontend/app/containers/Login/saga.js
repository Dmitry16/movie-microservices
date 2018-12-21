/**
 * Gets the AUTH from the backend REST Api
 */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { AUTH_USER } from './constants';
import { userAuthSuccess, userAuthError, userSession } from './actions';
import { makeSelectCurrentUser } from './selectors';

import request from 'utils/request';

/**
 * Backend data request/response handler
 */
export function* getAuth() {
  // Select user from store
  const user = yield select(makeSelectCurrentUser());
  console.log('getAuth', user.name,',',user.surname)
  const requestURL = `http://localhost:3001/login`;
  const data = {
    "name": user.name,
    "pw": user.surname
  };
  const options = {
    method: "POST",
    headers: {
      // "Content-Type": "application/json; charset=utf-8",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data)
  }

  try {
    // Call the request helper (see 'utils/request')
    const userAuth = yield call(request, requestURL, options);
    yield put(userAuthSuccess(userAuth, true));
    yield put(userSession(userAuth))
  } catch (err) {
    yield put(userAuthError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userAuthentication() {
  // Watches for LOAD_MOVIES actions and calls getMovies when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  yield takeLatest(AUTH_USER, getAuth);
}
