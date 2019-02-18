import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "redux-react-hook";

import {
  observeAuthState as createObserveAuthStateAsyncAction,
  unobserveAuthState as createUnobserveAuthStateAsyncAction
} from "./state/asyncActionCreators";
import Routes from "./Routes";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createObserveAuthStateAsyncAction());
    return () => dispatch(createUnobserveAuthStateAsyncAction());
  }, []);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
