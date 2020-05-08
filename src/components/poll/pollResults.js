import React from "react";
import { Card } from "primereact/card";
import { connect } from "react-redux";
import OptionProgress from "./optionProgress";
function pollResults({
  authedUser,
  optionOneData,
  optionTwoData,
  authorName,
  authorAvatar,
}) {
  const totalVotes = optionOneData.votes.length + optionTwoData.votes.length;
  const optionOnePercentage = Math.floor(
    (100 * optionOneData.votes.length) / totalVotes
  );
  const optionTwoPercentage = 100 - optionOnePercentage;
  return (
    <div className="mainContainer">
      <Card
        className="myCard"
        header={<div className="myCardTitle">Asked by {authorName}:</div>}
      >
        <div style={{ display: "flex" }}>
          <div className="mediumAvatarConatainer">
            <img src={authorAvatar} className="mediumUserAvatar" />
          </div>
          <div style={{ width: "70%", padding: "20px" }}>
            <h3>Results:</h3>
            <OptionProgress
              text={optionOneData.text}
              percentage={optionOnePercentage}
              isSelected={optionOneData.votes.indexOf(authedUser) > -1}
              nVotes={optionOneData.votes.length}
              total={totalVotes}
            />
            <OptionProgress
              text={optionTwoData.text}
              percentage={optionTwoPercentage}
              isSelected={optionTwoData.votes.indexOf(authedUser) > -1}
              nVotes={optionTwoData.votes.length}
              total={totalVotes}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
const mapStateToProps = ({ authedUser, polls, users }, { qid }) => {
  return {
    authedUser,
    authorName: users[polls[qid].author].name,
    authorAvatar: users[polls[qid].author].avatarURL,
    optionOneData: polls[qid].optionOne,
    optionTwoData: polls[qid].optionTwo,
  };
};
export default connect(mapStateToProps)(pollResults);
