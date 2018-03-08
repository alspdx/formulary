import constants from './../constants';
const { types } = constants;

export const userLoggedIn = () => ({
  type: types.LOGGED_IN
});

export const userLoggedOut = () => ({
  type: types.LOGGED_OUT
});

export const addUserDetailsToState = (userName, email, clientIds, serviceIds) => ({
  type: types.USER_DETAILS,
  userName,
  email,
  clientIds,
  serviceIds
});

export const clearUserDetails = () => ({
  type: types.CLEAR_DETAILS
});
