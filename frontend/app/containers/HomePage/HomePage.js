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
  }
  /**
   * when initial state currentMovieTitle is not null, submit the form to load movies
   */
  componentDidMount() {
    this.props.onSubmitForm();
    // if (this.props.currentMovieTitle && this.props.currentMovieTitle.trim().length > 0) {
    // }
  }
  handleInputChange(e) {
    this.keyPressCounter++;
    this.props.onChangeMovieTitle(e);
    if (!this.debounce && this.keyPressCounter >= 3) {
      this.debounce = true;
      this.timeoutId = setTimeout(() => {
        this.props.onSubmitForm(e);
        this.debounce = false;
      }, 300);
    } 
    else if (this.timeoutId && this.keyPressCounter >= 3) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.props.onSubmitForm(e);
        this.debounce = false;
      }, 300);
      this.debounce = true;
    }
  }

  render() {
    const { loading, error, movies } = this.props;
    const moviesListProps = {
      loading,
      error,
      movies,
    };

    console.log('HomePage movies::', movies)

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
              Type in a movie title here:
                <br />
                <input
                  id="currentMovieTitle"
                  type="text"
                  placeholder="kuku"
                  value={this.props.currentMovieTitle}
                  onChange={this.handleInputChange.bind(this)}
                />
              </label>
            </form>
            <MovieList {...moviesListProps} />
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
