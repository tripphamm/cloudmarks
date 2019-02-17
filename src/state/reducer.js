import * as actionTypes from "./actionTypes";

const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case actionTypes.SET_USER_FAILURE:
      return {
        ...state,
        setUserError: action.error
      };
    case actionTypes.CLEAR_SET_USER_ERROR:
      return {
        ...state,
        setUserError: null
      };
    default:
      return state;
  }
};
