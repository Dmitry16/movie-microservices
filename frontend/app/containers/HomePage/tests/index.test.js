/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import MoviesList from 'components/MoviesList';
import HomePage from '../HomePage';
import { mapDispatchToProps } from '../index';
import { changeMovieTitle } from '../actions';
import { loadMovies } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the repos list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} repos={[]} />
    );
    expect(
      renderedComponent.contains(<MoviesList loading error={false} repos={[]} />)
    ).toEqual(true);
  });

  it('should render fetch the repos on mount if a username exists', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        username="Not Empty"
        onChangeMovieTitle={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage onChangeMovieTitle={() => {}} onSubmitForm={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        username=""
        onChangeMovieTitle={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).not.toHaveBeenCalled();
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
        const username = 'flexdinesh';
        result.onChangeMovieTitle({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeMovieTitle(username));
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
