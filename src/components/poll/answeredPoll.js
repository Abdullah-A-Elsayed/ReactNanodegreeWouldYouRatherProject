import React, { useState } from "react";
import { Card } from "primereact/card";
import { connect } from "react-redux";
function UnansweredPoll({
  dispatch,
  authedUser,
  optionOne,
  optionTwo,
  qid,
  authorName,
  authorAvatar,
}) {
  return (
    <div className="mainContainer">
      <Card
        className="myCard"
        header={<div className="myCardTitle">Asked by {authorName}:</div>}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{ width: "30%", borderRight: "2px solid #eee" }}
            className="center"
          >
            <img src={authorAvatar} className="mediumUserAvatar" />
          </div>
          <div style={{ width: "70%", padding: "20px" }}>
            <h3>Results:</h3>
          </div>
        </div>
      </Card>
    </div>
  );
}
const mapStateToProps = ({ authedUser, polls, users }, { qid }) => {
  return {
    authedUser,
    authorName: users[authedUser].name,
    authorAvatar: users[authedUser].avatarURL,
    qid,
    optionOne: polls[qid].optionOne.text,
    optionTwo: polls[qid].optionTwo.text,
  };
};
export default connect(mapStateToProps)(UnansweredPoll);
