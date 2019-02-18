import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch } from "redux-react-hook";
import uuidv4 from "uuid/v4";

import { createAddBookmarkAsyncAction } from "../state/asyncActionCreators";

export default function AddBookmark(props) {
  const [url, setURL] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addBookmark = () =>
    dispatch(
      createAddBookmarkAsyncAction({
        id: uuidv4(),
        title,
        url
      })
    );

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          props.history.push("/");
        }}
      >
        Home
      </Button>
      <div>
        <TextField
          value={title}
          label="Title"
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          value={url}
          label="URL"
          onChange={e => setURL(e.target.value)}
        />
      </div>
      <Button variant="contained" color="primary" onClick={addBookmark}>
        Submit
      </Button>
    </div>
  );
}
