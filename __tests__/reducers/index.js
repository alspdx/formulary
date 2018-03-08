import constants from './../../src/constants';
import userDetailsReducer from './../../src/reducers/userDetailsReducer';
import loggedInReducer from './../../src/reducers/loggedInReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';
import * as simple from './../../src/actions/simple';

describe('Formulary', () => {
  const { types, initialState } = constants;
  const store = createStore(rootReducer);

  describe('userDetailsReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(userDetailsReducer(initialState.userDetails, { type: null })).toEqual(initialState.userDetails);
    });

    it('Should update state with user details when user logs in.', () => {
      const newUserStateObject = {
        firstName: 'Farrah',
        lastName: 'Fawcett',
        email: 'fFaucett@gmail.com',
        clientIds: [
          '3jowof90',
          'sda90fioqej4',
          '349ioerl',
          'lkeoi439',
          '023eior'
        ],
        serviceIds: [
          '203oewik',
          'pwqoeiru93',
          '7584eiruj',
          'kd29jaf2w',
          'fkjeir4393'
        ],
      };
      const { firstName, lastName, email, clientIds, serviceIds } = newUserStateObject;
      const action = simple.addUserDetailsToState(firstName, lastName, email, clientIds, serviceIds);
      expect(userDetailsReducer(initialState.userDetails, action)).toEqual(newUserStateObject);
    });
  });

  describe('loggedInReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(loggedInReducer(initialState.loggedIn, { type: null })).toEqual(initialState.loggedIn);
    });

    it('Should update state when user logs in.', () => {
      expect(loggedInReducer(initialState.loggedIn, simple.userLoggedIn())).toEqual(true);
    });

    it('Should update state when user logs out.', () => {
      expect(loggedInReducer(initialState.loggedIn, simple.userLoggedOut())).toEqual(false);
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
