import constants from './../../src/constants';
import { createStore } from 'redux';
import loggedInReducer from './../../src/reducers/loggedInReducer';
import rootReducer from './../../src/reducers/';
import * as simple from './../../src/actions/simple';
import userClientsReducer from './../../src/reducers/userClientsReducer';
import userDetailsReducer from './../../src/reducers/userDetailsReducer';
import selectedClientIdReducer from './../../src/reducers/selectedClientIdReducer';
import clientServicesReducer from './../../src/reducers/clientServicesReducer';

describe('Formulary', () => {
  const { types, initialState } = constants;
  const store = createStore(rootReducer);

  describe('userClientsReducer', () => {
    const clientKey = '943058eriogjfndsv';
    const clientDetails = {
      firstName: 'Farrah',
      lastName: 'Fawcett',
      email: 'fFawcett@gmail.com',
      phone: '123-456-7890',
      serviceIds: [
        '203oewik',
        'pwqoeiru93',
        '7584eiruj',
        'kd29jaf2w',
        'fkjeir4393'
      ],
      stylistId: '3490ieworjdfs'
    };
    const userClientStateObject = {
      [clientKey]: clientDetails
    };
    it('Should accept and return initial state.', () => {
      expect(userClientsReducer(initialState.userClients, { type: null })).toEqual(initialState.userClients);
    });

    it('Should update state with client details from Firebase.', () => {
      const action = simple.addClientListToState(clientKey, clientDetails);
      expect(userClientsReducer(initialState.userClients, action)).toEqual(userClientStateObject);
    });

    it('Should clear client details from state when user logs out.', () => {
      const action = simple.clearUserClients();
      expect(userClientsReducer(userClientStateObject, action)).toEqual(initialState.userClients);
    })
  });

  describe('userDetailsReducer', () => {
    const userStateObject = {
      userName: 'Farrah',
      email: 'fFawcett@gmail.com',
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

    it('Should accept and return initial state.', () => {
      expect(userDetailsReducer(initialState.userDetails, { type: null })).toEqual(initialState.userDetails);
    });

    it('Should update state with user details when user logs in.', () => {
      const { userName, email, clientIds, serviceIds } = userStateObject;
      const action = simple.addUserDetailsToState(userName, email, clientIds, serviceIds);
      expect(userDetailsReducer(initialState.userDetails, action)).toEqual(userStateObject);
    });

    it('Should clear user details from state when user logs out.', () => {
      expect(userDetailsReducer(userStateObject, simple.clearUserDetails())).toEqual(initialState.userDetails)
    });
  });

  describe('selectedClientIdReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(selectedClientIdReducer(initialState.selectedClientId, { type: null })).toEqual(initialState.selectedClientId);
    });

    it('Should update state when user selects client.', () => {
      const newClientId = '4bd91001-cdca-4559-9156-b847d6f677b0'
      expect(selectedClientIdReducer(initialState.selectedClientId, simple.setSelectedClientId(newClientId))).toEqual(newClientId);
    });
  });

  describe('clientServicesReducer', () => {
    const serviceKey = '9823ruioweaf';
    const serviceDetails = {
      name: 'Farrah Fawcett'
    };
    const serviceStateObject = {
      [serviceKey]: serviceDetails
    };

    it('Should accept and return initial state.', () => {
      expect(clientServicesReducer(initialState.clientServices, { type: null })).toEqual(initialState.clientServices);
    });

    it('Should update state with service details from Firebase.', () => {
      expect(clientServicesReducer(initialState.clientServices, simple.addServiceListToState(serviceKey, serviceDetails))).toEqual(serviceStateObject);
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
