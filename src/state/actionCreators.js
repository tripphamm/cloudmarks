import * as actionTypes from "./actionTypes";

export function setUserSuccessActionCreator(user) {
  return {
    type: actionTypes.SET_USER_SUCCESS,
    user
  };
}

export function setUserFailureActionCreator(error) {
  return {
    type: actionTypes.SET_USER_FAILURE,
    error
  };
}

export function clearSetUserErrorActionCreator() {
  return {
    type: actionTypes.CLEAR_SET_USER_ERROR
  };
}
