import { CHANGE_MOVIE_TITLE } from '../constants';

import { changeMovieTitle } from '../actions';

describe('Home Actions', () => {
  describe('changeMovieTitle', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_MOVIE_TITLE,
        name: fixture
      };

      expect(changeMovieTitle(fixture)).toEqual(expectedResult);
    });
  });
});
