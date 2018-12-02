/**
 * Gets the AUTH from the backend REST Api
 */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { AUTH_USER } from './constants';
import { userAuthSuccess, userAuthError, userSession } from './actions';

import request from 'utils/request';
// import { makeSelectMovieTitle } from 'containers/HomePage/selectors';

/**
 * Backend data request/response handler
 */
export function* getAuth() {
  // Select user from store
  const user = yield select(makeSelectUser());
  const requestURL = `http://localhost:3003/api/search?keyword=${user}`;

  try {
    // Call the request helper (see 'utils/request')
    const userAuth = yield call(request, requestURL);
    yield put(userAuthSuccess(userAuth, true));
    yield put(userSession(movieTitle, movies))
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
