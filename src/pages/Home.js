import React from "react";
import { Button } from "@material-ui/core";

import { logOutUser as createLogOutUserAsyncAction } from "../state/asyncActionCreators";
import { useDispatch } from "redux-react-hook";

export default function Home(props) {
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(createLogOutUserAsyncAction());
  };

  return (
    <div>
      <h1>Home</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          props.history.push("/addBookmark");
        }}
      >
        Add Bookmark
      </Button>
      <div style={{ marginTop: 40 }}>
        <Button variant="contained" color="primary" onClick={logOutUser}>
          Log out
        </Button>
      </div>
    </div>
  );
}
