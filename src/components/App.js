import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import {
  handleInitialData,
  userAddsNewPoll,
  handleAddNewPoll,
} from "../actions/shared";
import { setAuthedUser, unSetAuthedUser } from "../actions/authedUser";

function App({ dispatch }) {
  useEffect(() => {
    const u = "tylermcginnis";
    dispatch(handleInitialData());
    dispatch(setAuthedUser(u));
  });

  return <div>Hello World</div>;
}
const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});
export default connect(mapStateToProps)(App);
