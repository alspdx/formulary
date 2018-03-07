import constants from './../constants';
const { firebaseConfig, types } = constants;
import Firebase from 'firebase';

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const database = app.database();

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('this is the user', user);
  } else {
    console.log('there is no user');
  }
});

export function createUserAccount(userName, email, password) {
  return function(dispatch) {
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };
}

export function signInToUserAccount(email, password) {
  return function(dispatch) {
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };
}

export function getUserDetails() {
  return function(dispatch) {
    auth.currentUser
  }
}

export function signOut() {
  return function(dispatch) {
    auth.signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  };
}
