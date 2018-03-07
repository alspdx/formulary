import constants from './../../src/constants';
import userDetailsReducer from './../../src/reducers/userDetailsReducer';
import loggedInReducer from './../../src/reducers/loggedInReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';

describe('Formulary', () => {
  const { types, initialState } = constants;
  const store = createStore(rootReducer);

  describe('userDetailsReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(userDetailsReducer(initialState.userDetails, { type: null })).toEqual(initialState.userDetails);
    });
  });

  describe('loggedInReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(loggedInReducer(initialState.loggedIn, { type: null })).toEqual(initialState.loggedIn);
    });

    it('Should update state when user logs in.', () => {
      expect(loggedInReducer(initialState.loggedIn, actions.userIsLoggedIn())).toEqual(true);
    })
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should contain logic from both reducers.', () => {
      expect(store.getState().userDetails).toEqual(userDetailsReducer(undefined, { type: null }));
      expect(store.getState().loggedIn).toEqual(loggedInReducer(undefined, { type: null }));
    });
  });
});
