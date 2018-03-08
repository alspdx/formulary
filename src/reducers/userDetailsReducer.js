import constants from './../constants';
const { initialState, types } = constants;

const userDetailsReducer = (state = initialState.userDetails, action) => {
  let newUserDetailsStateSlice;

  switch (action.type) {
    case types.USER_DETAILS:
      newUserDetailsStateSlice = Object.assign({}, state, {
        userName: action.userName,
        email: action.email,
        clientIds: action.clientIds,
        serviceIds: action.serviceIds
      });
      return newUserDetailsStateSlice;
    case types.CLEAR_DETAILS:
      newUserDetailsStateSlice = Object.assign({}, state, {
        userName: '',
        email: '',
        clientIds: [],
        serviceIds: []
      });
      return newUserDetailsStateSlice;
    default:
      return state;
  }
};

export default userDetailsReducer;
