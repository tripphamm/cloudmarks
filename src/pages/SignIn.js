import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

import { logInUserViaGoogle } from "../state/asyncActionCreators";

class SignIn extends Component {
  render() {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={this.props.logInUserViaGoogle}
      >
        LOG IN GOOGLE
      </Button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logInUserViaGoogle
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
