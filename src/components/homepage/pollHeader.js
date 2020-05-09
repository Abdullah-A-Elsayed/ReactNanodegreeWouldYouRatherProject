import React from "react";
import { connect } from "react-redux";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";
function PollHeader({ authorName, authorAvatar, pollText, qid }) {
  const history = useHistory();
  const header = <div className="myCardTitle">{`${authorName} asks:`}</div>;
  return (
    <Card className="myCard" header={header}>
      <>
        <div style={{ display: "flex" }}>
          <div className="mediumAvatarConatainer">
            <img
              className="mediumUserAvatar"
              src={authorAvatar}
              alt={`${authorName} avatar`}
            />
          </div>
          <div
            style={{
              width: "70%",
              padding: "20px",
            }}
          >
            <h4>Would you rather</h4>
            {pollText}...
            <div style={{ marginTop: "15px" }}>
              <Button
                label="View Poll"
                className="pollHeaderButton"
                onClick={() => history.push("/questions/" + qid)}
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
