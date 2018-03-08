import constants from './../constants';
const { firebaseConfig, types } = constants;
import Firebase from 'firebase';
import * as simple from './simple';

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const database = app.database();

export const watchAuthState = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(simple.userLoggedIn());
      } else {
        dispatch(simple.userLoggedOut());
      }
    });
  };
}

export const createUserAccount = (email, password) => {
  return () => {
    auth.createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      console.log(error);
    });
  };
}

export const signInToUserAccount = (email, password) => {
  return () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(
      console.log('signed in?')
    ).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };
}

export const signOut = () => {
  return () => {
    auth.signOut().then(
      console.log('signedOut')
    ).catch(function(error) {
      console.log(error)
    });
  };
}
