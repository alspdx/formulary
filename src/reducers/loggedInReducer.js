import constants from './../constants';
const { initialState, types } = constants;

const loggedInReducer = (state = initialState.loggedIn, action) => {
  return state;
}

export default loggedInReducer;
