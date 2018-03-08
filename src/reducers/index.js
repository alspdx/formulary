import userClientsReducer from './userClientsReducer';
import userDetailsReducer from './userDetailsReducer';
import loggedInReducer from './loggedInReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  userClients: userClientsReducer,
  userDetails: userDetailsReducer,
});

export default rootReducer;
