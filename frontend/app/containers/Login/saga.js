/**
 * Gets the AUTH from the backend REST Api
 */
import { all, fork, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN_USER, REGISTER_USER } from './constants';
import { userAuthSuccess, userAuthError, userSession } from './actions';
import { makeSelectCurrentUser } from './selectors';

import api from '../../api';
/**
 * Backend data request/response handler
 */
export function* getLogin() {
  // Select user from store
  const user = yield select(makeSelectCurrentUser());
  console.log('getLogin saga:', user.email,',',user.password)
  const userData = {
    "email": user.email,
    "password": user.password
  };

  try {
    // Call the request helper (see 'utils/request')
    const { data } = yield call(api.login, userData);

    console.log('userLogin::', data);

    yield put(userAuthSuccess(userInfo, true));
    yield put(userSession(userInfo))
  } catch (err) {
    yield put(userAuthError(err));
  }
}

export function* getRegister() {
  // Select user from store
  const user = yield select(makeSelectCurrentUser());
  console.log('getRegister', user.name, user.email,',',user.password)
  const data = {
    "email": user.email,
    "password": user.password
  };
//   try {
//     let { data } = await api.register(userInfo);
//     saveToken(data.token);
//     dispatch(authUser(data.userInfo));
//     redirect();
//   } catch (e) {
//     if (!e.response) {
//       console.log(e);
//       return;
//     }
//     let { data } = e.response;
//     const formattedErrors = formatErrors(data);
//     dispatch(registerFail(formattedErrors));
//   }
// };

  try {
    // Call the request helper (see 'utils/request')
    const userRegister = yield call(api.register, data);

    console.log('user register::', userRegister);

    yield put(userAuthSuccess(userRegister, true));
    yield put(userSession(userRegister))
  } catch (err) {
    yield put(userAuthError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
function* userLogin() {
  yield takeLatest(LOGIN_USER, getLogin);
}
function* userRegister() {
  yield takeLatest(REGISTER_USER, getRegister);
}

export default function* userAuthentication() {
  yield all([
    fork(userLogin),
    fork(userRegister)
  ])
}
