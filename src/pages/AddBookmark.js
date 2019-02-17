import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function AddBookmark() {
  const [url, setURL] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div>
      <Link to="/">Home</Link>
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
    </div>
  );
}
