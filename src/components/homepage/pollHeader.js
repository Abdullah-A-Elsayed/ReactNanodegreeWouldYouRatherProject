import React from "react";
import { connect } from "react-redux";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";
function PollHeader({ authorName, authorAvatar, pollText, qid }) {
  const history = useHistory();
  const header = <div className="pollHeaderTitle">{`${authorName} asks:`}</div>;
  return (
    <Card className="pollHeader" header={header}>
      <>
        <div style={{ display: "flex" }}>
          <div
            className="center"
            style={{
              width: "30%",
              borderRight: "2px solid #eee",
              marginRight: "15px",
            }}
          >
            <img
              style={{ width: "100px", height: "100px", borderRadius: "100px" }}
              src={authorAvatar}
              alt={`${authorName} avatar`}
            />
          </div>
          <div
            style={{
              width: "70%",
            }}
          >
            <h4>Would you rather</h4>
            {pollText}...
            <div style={{ marginTop: "15px" }}>
              <Button
                label="View Poll"
                className="pollHeaderButton"
                onClick={() => history.push("/question/" + qid)}
              />
            </div>
          </div>
        </div>
      </>
    </Card>
  );
}
const mapStateToProps = ({ polls, users }, { pollID }) => {
  const poll = polls[pollID];
  const author = users[poll.author];
  return {
    authorName: author.name,
    authorAvatar: author.avatarURL,
    pollText: poll.optionOne.text,
    qid: pollID,
  };
};
export default connect(mapStateToProps)(PollHeader);