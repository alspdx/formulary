import constants from './../constants';
const { initialState, types } = constants;

const userDetailsReducer = (state = initialState.userDetails, action) => {
  let newUserDetailsStateSlice;

  switch (action.type) {
    case types.USER_DETAILS:
      newUserDetailsStateSlice = Object.assign({}, state, {
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        clientIds: action.clientIds,
        serviceIds: action.serviceIds
      });
      return newUserDetailsStateSlice;
    default:
      return state;
  }
};

export default userDetailsReducer;
