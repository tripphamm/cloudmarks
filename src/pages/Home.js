import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { logOutUser } from "../state/asyncActionCreators";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/addBookmark">New</Link>
        <div style={{ marginTop: 40 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.logOutUser}
          >
            Log out
          </Button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logOutUser
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Home);
