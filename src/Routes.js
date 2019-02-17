import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./pages/Home";
import AddBookmark from "./pages/AddBookmark";
import SignIn from "./pages/SignIn";

class Routes extends Component {
  render() {
    if (!this.props.user) {
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
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Routes)
);
