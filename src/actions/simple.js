import constants from './../constants';
const { types } = constants;

export const userLoggedIn = () => ({
  type: types.LOGGED_IN
});

export const userLoggedOut = () => ({
  type: types.LOGGED_OUT
});
