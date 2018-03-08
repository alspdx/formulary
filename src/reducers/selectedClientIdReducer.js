import constants from './../constants';
const { initialState, types } = constants;

const selectedClientIdReducer = (state = initialState.selectedClientId, action) => {

  switch (action.type) {
    case types.SET_CLIENT:
      return action.clientId;
    default:
      return state;
  }
}

export default selectedClientIdReducer;
