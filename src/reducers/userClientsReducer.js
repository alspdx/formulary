import constants from './../constants';
const { initialState, types } = constants;

const userClientsReducer = (state = initialState.userClients, action) => {
  let newUserClientsStateSlice;

  switch (action.type) {
    case types.USER_CLIENTS:
      newUserClientsStateSlice = Object.assign({}, state, {
        [action.clientKey]: action.clientDetails
      });
      return newUserClientsStateSlice;
    case types.CLEAR_CLIENTS:
      return {};
    default:
      return state;
  }
};

export default userClientsReducer;
