import React from "react";
import { connect } from "react-redux";
import User from "./user";
function Leaderboard({ users }) {
  return (
    <div className="mainContainer">
      {users &&
        users.map((user) => (
          <User key={`leaderboard_${user.id}`} user={user} />
        ))}
    </div>
  );
}
const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      Object.keys(a.answers).length -
      a.questions.length
  ),
});
export default connect(mapStateToProps)(Leaderboard);
