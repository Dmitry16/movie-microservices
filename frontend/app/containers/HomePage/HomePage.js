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
  /**
   * when initial state currentMovieTitle is not null, submit the form to load movies
   */
  componentDidMount() {
    if (this.props.currentMovieTitle && this.props.currentMovieTitle.trim().length > 0) {
      this.props.onSubmitForm();
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
          <section>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="currentMovieTitle">
              Type in a movie title here
                <span className="at-prefix">=></span>
                <input
                  id="currentMovieTitle"
                  type="text"
                  placeholder="flexdinesh"
                  value={this.props.currentMovieTitle}
                  onChange={this.props.onChangeUsername}
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
  onChangeUsername: PropTypes.func,
};
