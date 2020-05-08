import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { unSetAuthedUser } from "../actions/authedUser";
import { useHistory } from "react-router-dom";
function Header({ dispatch, authedUser }) {
  const history = useHistory();
  const signOut = () => {
    dispatch(unSetAuthedUser());
    history.push("/");
  };
  return (
    <header>
      <div className="headerSide">
        <span className="flexItem">
          <NavLink to="/" exact className="navlink">
            <h3>Home</h3>
          </NavLink>
        </span>
        <span className="flexItem">
          <NavLink to="/addQuestion" className="navlink">
            <h3>Add Question</h3>
          </NavLink>
        </span>
        <span className="flexItem">
          <NavLink to="/leaderboard" className="navlink">
            <h3>Leader Board</h3>
          </NavLink>
        </span>
      </div>
      <div className="headerSide">
        <span className="flexItem">
          {/* <i className="pi pi-user"></i> */}
          <img src={`/${authedUser.avatarURL}`} className="headerAvatar" />
        </span>
        <span className="flexItem gold">
          <h3>{authedUser.name}</h3>
        </span>
        <span className="flexItem signout" onClick={signOut}>
          <h3>Sign Out</h3>
        </span>
      </div>
    </header>
  );
}

export default connect(({ users, authedUser }) => ({
  authedUser: users[authedUser],
}))(Header);
