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
        getUserDataFromFirebase(user.uid, dispatch);
      } else {
        dispatch(simple.userLoggedOut());
        dispatch(simple.clearUserDetails());
      }
    });
  };
}

export const createUserAccount = (userName, email, password) => {
  return (dispatch) => {
    console.log(userName, email, password);
    auth.createUserWithEmailAndPassword(email, password)
    .then(user => addUserToFirebase(userName, user))
    .catch((error) => {
      console.log(error);
    });
  };
}

export const addUserToFirebase = (userName, user) => {
  const userToPush = {
    uid: user.uid,
    email: user.email,
    userName: userName
  }
  usersRef.child(user.uid).set(userToPush);
}

export const signInToUserAccount = (email, password) => {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
    .then(user => getUserDataFromFirebase(user.uid, dispatch))
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.code, error.message);
    });
  };
}

export const getUserDataFromFirebase = (userId, dispatch) => {
  app.database().ref(`/users/${userId}`).once('value').then((userDetails) => {
    const { userName, email, clientIds, serviceIds } = userDetails.val();
    dispatch(simple.addUserDetailsToState(userName, email, clientIds, serviceIds));
  });
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
