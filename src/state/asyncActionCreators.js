import { auth, googleAuthProvider } from "../firebaseProvider";
import {
  setUserFailureActionCreator,
  setUserSuccessActionCreator
} from "./actionCreators";

let unobserveAuthStateChanged = null;

export function observeAuthState() {
  return dispatch => {
    // if there is already an unObserve function, then we're already subscribed
    if (!unobserveAuthStateChanged) {
      // auth.onAuthStateChanged returns the unsubscribe function
      unobserveAuthStateChanged = auth.onAuthStateChanged(
        async firebaseUser => {
          if (firebaseUser) {
            try {
              dispatch(
                setUserSuccessActionCreator({
                  id: firebaseUser.uid
                })
              );
            } catch (error) {
              console.error(error);
              dispatch(setUserFailureActionCreator(error));
            }
          } else {
            dispatch(setUserSuccessActionCreator(null));
          }

          // dispatch(toggleAuthenticating(false));
        }
      );
    }
  };
}

export function unobserveAuthState() {
  return () => {
    if (unobserveAuthStateChanged !== null) {
      unobserveAuthStateChanged();
      unobserveAuthStateChanged = null;
    }
  };
}

export function logInUserViaGoogle() {
  return async dispatch => {
    // dispatch(toggleAuthenticating(true));

    try {
      await auth.signInWithPopup(googleAuthProvider);
      // should trigger onAuthStateChanged in observeAuthState which will toggleAuthenticating(false)
    } catch (error) {
      console.error("from logInUserViaGoogle", error);
      dispatch(setUserFailureActionCreator(error));
    }
  };
}

export function logOutUser() {
  return async dispatch => {
    // dispatch(toggleAuthenticating(true));

    await auth.signOut();
    // should trigger onAuthStateChanged in observeAuthState which will toggleAuthenticating(false)
  };
}
