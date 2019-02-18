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

export function createAddBookmarkSuccessAction(bookmark) {
  return {
    type: actionTypes.ADD_BOOKMARK_SUCCESS,
    bookmark
  };
}

export function createAddBookmarkFailureAction(error) {
  return {
    type: actionTypes.ADD_BOOKMARK_FAILURE,
    error
  };
}

export function createClearAddBookmarkErrorAction() {
  return {
    type: actionTypes.CLEAR_ADD_BOOKMARK_ERROR
  };
}
