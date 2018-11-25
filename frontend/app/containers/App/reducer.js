/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES,
  LOAD_MOVIES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentMovieTitle: false,
  movieData: {
    movies: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['movieData', 'movies'], false)
    case LOAD_MOVIES_SUCCESS:
      return state
        .setIn(['movieData', 'movies'], action.movies)
        .set('loading', false)
        .set('currentMovieTitle', action.currentMovieTitle);
    case LOAD_MOVIES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
