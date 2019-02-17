import React, { useState } from "react";
import { TextField } from "@material-ui/core";

function App() {
  const [url, setURL] = useState("");
  return (
    <div>
      <TextField
        value={url}
        label="URL"
        onChange={e => setURL(e.target.value)}
      />
    </div>
  );
}

export default App;
