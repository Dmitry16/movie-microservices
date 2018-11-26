/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import MovieList from 'components/MovieList';
import HomePage from '../HomePage';
import { mapDispatchToProps } from '../index';
import { changeMovieTitle } from '../actions';
import { loadMovies } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the movies list', () => {
    const onChangeMovieTitleSpy = jest.fn();
    const loadDataSpy = jest.fn();
    const renderedComponent = shallow(
      <HomePage 
        loading error={false} movies={[]} 
        onChangeMovieTitle={onChangeMovieTitleSpy}
        loadData={loadDataSpy}
      />
    );
    expect(
      renderedComponent.contains(<MovieList loading error={false} movies={[]} />)
    ).toEqual(true);
  });

  it('should render fetch the movies on mount', () => {
    const loadDataSpy = jest.fn();
    mount(
      <HomePage
        movieTitle="Not Empty"
        onChangeMovieTitle={() => {}}
        loadData={loadDataSpy}
      />
    );
    expect(loadDataSpy).toHaveBeenCalled();
  });

  it('should call loadData with default movieTitle', () => {
    const loadDataSpy = jest.fn();
    mount(<HomePage onChangeMovieTitle={() => {}} loadData={loadDataSpy} />);
    expect(loadDataSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeMovieTitle', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeMovieTitle).toBeDefined();
      });

      it('should dispatch changeMovieTitle when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const movieTitle = 'Mad Max';
        result.onChangeMovieTitle({ target: { value: movieTitle } });
        expect(dispatch).toHaveBeenCalledWith(changeMovieTitle(movieTitle));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadMovies when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadMovies());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
