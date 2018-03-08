import userClientsReducer from './userClientsReducer';
import userDetailsReducer from './userDetailsReducer';
import loggedInReducer from './loggedInReducer';
import selectedClientIdReducer from './selectedClientIdReducer';
import clientServicesReducer from './clientServicesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  userClients: userClientsReducer,
  userDetails: userDetailsReducer,
  selectedClientId: selectedClientIdReducer,
  clientServices: clientServicesReducer,
});

export default rootReducer;
