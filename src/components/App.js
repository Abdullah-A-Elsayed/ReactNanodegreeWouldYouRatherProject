import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return <div>Hello World</div>;
}
const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});
export default connect(mapStateToProps)(App);
