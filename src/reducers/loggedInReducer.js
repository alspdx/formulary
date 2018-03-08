import constants from './../constants';
const { initialState, types } = constants;

const loggedInReducer = (state = initialState.loggedIn, action) => {
  console.log('reducer', state, action);
  let newStateSlice;

  switch (action.type) {
    case types.LOGGED_IN:
      console.log('logged-in-reducer');
      return true;
    case types.LOGGED_OUT:
      console.log('logged-out-reducer');
      return false;
    default:
      return state;
  };
};

export default loggedInReducer;
