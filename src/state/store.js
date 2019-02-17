import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer from "./reducer";

const enhancers = composeWithDevTools(applyMiddleware(thunk));

let store = null;
export function getStore(initialState) {
  if (store === null) {
    store = createStore(reducer, initialState, enhancers);
  }

  return store;
}
