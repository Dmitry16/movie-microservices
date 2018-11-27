/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import MovieList from 'components/MovieList';

import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.timeoutId;
    this.debounce = false;
    this.keyPressCounter = 0;
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  // when component is mounted load movies with the default title
  componentDidMount() {
    const defaultMovieTitle = 'rock';
    this.props.onChangeMovieTitle(null, defaultMovieTitle);
    this.props.loadData(defaultMovieTitle);
  }
  // wait for user presses any key 3 times then debouncing it for 300 msec 
  // fetch data for the printed keyword or load it from the session storage if there is such
  handleInputChange(e) {
    this.keyPressCounter++;
    this.props.onChangeMovieTitle(e);
    if (!this.debounce && this.keyPressCounter >= 3) {
      this.debounce = true;
      this.timeoutId = setTimeout(() => {
        this.props.loadData(this.props.currentMovieTitle);
        this.debounce = false;
      }, 300);
    } 
    else if (this.timeoutId && this.keyPressCounter >= 3) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.props.loadData(this.props.currentMovieTitle);
        this.debounce = false;
      }, 300);
      this.debounce = true;
    }
  }

  render() {
    const { loading, error, movies } = this.props;
    const movieListProps = {
      loading,
      error,
      movies,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Movie Search Box</h2>
          </section>
          <section className="centered">
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="currentMovieTitle">
              Type in a movie title to look for:
                <br />
                <input
                  id="currentMovieTitle"
                  type="text"
                  placeholder="kuku"
                  value={this.props.currentMovieTitle}
                  onChange={this.handleInputChange}
                />
              </label>
            </form>
            <MovieList {...movieListProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  movies: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  currentMovieTitle: PropTypes.string,
  onChangeMovieTitle: PropTypes.func,
};
