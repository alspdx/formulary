import constants from './../../src/constants';
import userDetailsReducer from './../../src/reducers/userDetailsReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';

describe('Formulary', () => {
  const { types, initialState } = constants;
  const store = createStore(rootReducer);

  describe('userDetailsReducer', () => {
    it('should accept and return initial state', () => {
      expect(userDetailsReducer(initialState.userDetails, { type: null })).toEqual(initialState.userDetails);
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });
  });
});
