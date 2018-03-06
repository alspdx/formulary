import userDetailsReducer from './userDetailsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userDetails: userDetailsReducer
});

export default rootReducer;
