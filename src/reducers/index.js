import userDetailsReducer from './userDetailsReducer';
import loggedInReducer from './loggedInReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userDetails: userDetailsReducer,
  loggedIn: loggedInReducer
});

export default rootReducer;
