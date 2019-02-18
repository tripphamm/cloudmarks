import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "redux-react-hook";

import { logInUserViaGoogle as createLogInUserViaGoogleAsyncAction } from "../state/asyncActionCreators";

export default function SignIn() {
  const dispatch = useDispatch();

  const logInUserViaGoogle = () => {
    dispatch(createLogInUserViaGoogleAsyncAction());
  };

  return (
    <Button variant="contained" color="primary" onClick={logInUserViaGoogle}>
      LOG IN GOOGLE
    </Button>
  );
}
