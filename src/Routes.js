import React, { useCallback } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./pages/Home";
import AddBookmark from "./pages/AddBookmark";
import SignIn from "./pages/SignIn";
import { useMappedState } from "redux-react-hook";

function Routes(props) {
  const mapState = useCallback(globalState => {
    return {
      user: globalState.user
    };
  }, []);

  const { user } = useMappedState(mapState);

  if (!user) {
    return (
      <Switch>
        <Route path="*" component={SignIn} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/addBookmark" component={AddBookmark} />
    </Switch>
  );
}

export default withRouter(Routes);
