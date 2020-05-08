import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Signin from "./signin";
import AuthedContent from "./AuthedContent";
function App({ dispatch, authedUser }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return <>{!authedUser ? <Signin /> : <AuthedContent />}</>;
}
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});
export default connect(mapStateToProps)(App);
