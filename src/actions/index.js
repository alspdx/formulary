import constants from './../constants';
const { firebaseConfig } = constants;
import Firebase from 'firebase';

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const database = app.database();

export function createUserAccount(userName, email, password) {
  return auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export function signInToUserAccount(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

// export function fetchUserDetails(userId) {
//
// }
