import constants from './../constants';
const { initialState, types } = constants;

const loggedInReducer = (state = initialState.loggedIn, action) => {
  switch (action.type) {
  case types.LOGGED_IN:
    return true;
  case types.LOGGED_OUT:
    return false;
  default:
    return state;
  }
}

export default loggedInReducer;
