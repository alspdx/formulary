import constants from './../constants';
const { firebaseConfig, types } = constants;
import Firebase from 'firebase';
import * as simple from './simple';

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const usersRef = app.database().ref('users');

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

export const createUserAccount = (userName, email, password) => {
  return (dispatch) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(user => addUserToFirebase(userName, user))
    .catch((error) => {
      console.log(error);
    });
  };
}

export const addUserToFirebase = (userName, user) => {
  const userToPush = {
    email: userDetails.email,
    uid: userDetails.uid,
    userName: userName
  }
  usersRef.child(userDetails.uid).set(userToPush);
}

export const signInToUserAccount = (email, password) => {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
    .then(user => console.log(user))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.code, error.message);
    });
  };
}

export const signOut = () => {
  return () => {
    auth.signOut().then(
      console.log('signedOut')
    ).catch((error) => {
      console.log(error)
    });
  };
}
