import constants from './../constants';
const { initialState, types } = constants;

const clientServicesReducer = (state = initialState.clientServices, action) => {
  let newClientServicesStateSlice;

  switch (action.type) {
    case types.CLIENT_SERVICES:
      newClientServicesStateSlice = Object.assign({}, state, {
        [action.serviceKey]: action.serviceDetails
      });
      return newClientServicesStateSlice;
    case types.CLEAR_SERVICES:
      return {};
    default:
      return state;
  };
};

export default clientServicesReducer;
