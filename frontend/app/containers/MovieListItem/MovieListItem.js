/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import { IssueIcon } from 'components/Icons';
import './style.scss';

export default class MovieListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { movie } = this.props;
    let nameprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    if (movie.owner.login !== this.props.currentMovieTitle) {
      nameprefix = `${movie.owner.login}/`;
    }

    // Put together the content of the repository
    const content = (
      <div className="movie-list-item">
        <a className="movie-list-item__movie-link" href={movie.html_url} target="_blank" rel="noopener noreferrer">
          {nameprefix + movie.name}
        </a>
        <a className="movie-list-item__issue-link" href={`${movie.html_url}/issues`} target="_blank" rel="noopener noreferrer">
          <IssueIcon className="movie-list-item__issue-icon" />
          {movie.open_issues_count}
        </a>
      </div>
    );

    // Render the content into a list movie
    return (
      <ListItem key={`movie-list-item-${movie.full_name}`} item={content} />
    );
  }
}

MovieListItem.propTypes = {
  movie: PropTypes.object,
  currentMovieTitle: PropTypes.string,
};
