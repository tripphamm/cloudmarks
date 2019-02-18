import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { observeAuthState } from "./state/asyncActionCreators";
import Routes from "./Routes";

class App extends Component {
  componentDidMount() {
    this.props.observeAuthState();
  }

  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      observeAuthState
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(App);
