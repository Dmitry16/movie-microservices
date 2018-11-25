/**
 * MovieListItem
 *
 * Lists the title and the year of a movie
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import { IssueIcon } from 'components/Icons';
import './style.scss';

export default class MovieListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { movie } = this.props;
    let titleprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    if (movie && movie.Title !== this.props.currentMovieTitle) {
      titleprefix = `${movie.Title}/`;
    }

    // Put together the data of the movie
    const content = (
      <div className="movie-list-item">
      { movie && movie.Poster !== 'N/A' 
        ? (
          <a className="movie-list-item__img-link" href={movie.Poster} target="_blank" rel="noopener noreferrer">
            <img src={movie.Poster} />
          </a> 
          )
        : ( <p className="movie-list-item__poster-n-a">Poster not available<br /><span>:(</span></p>)
      }
        <div className="movie-list-item__title">
          {movie && movie.Title} <br />
          {movie && movie.Year}
        </div>
        {/* <a className="movie-list-item__issue-link" href={`${movie.Poster}/issues`} target="_blank" rel="noopener noreferrer">
          <IssueIcon className="movie-list-item__issue-icon" />
          {movie.Year}
        </a> */}
      </div>
    );

    // Render the content into a list movie
    return (
      <ListItem key={`movie-list-item-${movie && movie.imdbID}`} item={content} />
    );
  }
}

MovieListItem.propTypes = {
  movie: PropTypes.object,
  currentMovieTitle: PropTypes.string,
};
