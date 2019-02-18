import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function AddBookmark(props) {
  const [url, setURL] = useState("");
  const [title, setTitle] = useState("");

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("submit");
        }}
      >
        Submit
      </Button>
    </div>
  );
}
