import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
function App({ dispatch }) {
  return <div>Hello World</div>;
}
const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});
export default connect(mapStateToProps)(App);
