import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectMovies,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadMovies } from '../App/actions';
import { moviesLoaded } from 'containers/App/actions';

import { changeMovieTitle } from './actions';
import { makeSelectMovieTitle } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Login from './Login';

const mapDispatchToProps = (dispatch) => ({
  onChangeMovieTitle: (inputEvt, defaultValue) => {
    dispatch(changeMovieTitle(inputEvt ? inputEvt.target.value : defaultValue))
  },
  onSubmitForm: (e) => {
    if (e !== undefined && e.preventDefault) e.preventDefault();
    dispatch(loadMovies());
  },
  // checks if we have the data in the session storege. if we have it is loaded from the
  // session storage if we don't it is loaded from the external api 
  loadData: (movieTitle) => {
    const moviesInStorage = JSON.parse(sessionStorage.getItem(movieTitle));
    !moviesInStorage 
      ? dispatch(loadMovies(movieTitle))
      : dispatch(moviesLoaded(moviesInStorage.Search, movieTitle));
  }
});

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
  currentMovieTitle: makeSelectMovieTitle(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(withReducer, withSaga, withConnect)(Login);
export { mapDispatchToProps };