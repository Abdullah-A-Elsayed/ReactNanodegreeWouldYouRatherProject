import React, { useState } from "react";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import { handleAnswerPoll } from "../../actions/shared";
// import { useHistory } from "react-router-dom";
function AnsweredPoll({
  dispatch,
  authedUser,
  optionOne,
  optionTwo,
  qid,
  authorName,
  authorAvatar,
}) {
  const [selectedOption, setSelectedOption] = useState("optionOne");
  // const history = useHistory();
  const onPollSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) return alert("Choosing an option is required");
    dispatch(handleAnswerPoll({ authedUser, qid, answer: selectedOption }));
    // history.push("/"); //keep him in the same route to see the results
  };
  return (
    <div className="mainContainer">
      <Card
        className="myCard"
        header={<div className="myCardTitle">{authorName} asks:</div>}
      >
        <div style={{ display: "flex" }}>
          <div className="mediumAvatarConatainer">
            <img
              src={authorAvatar}
              className="mediumUserAvatar"
              alt={authorName}
            />
          </div>
          <div style={{ width: "70%", padding: "20px" }}>
            <h3>Would You Rather ...</h3>
            <form>
              <div className="radioGroup">
                <RadioButton
                  value="optionOne"
                  name="optionOne"
                  onChange={(e) => setSelectedOption(e.value)}
                  checked={selectedOption === "optionOne"}
                  inputId="optOne"
                />
                <label htmlFor="optOne" style={{ marginLeft: "15px" }}>
                  {optionOne}
                </label>
              </div>
              <div className="radioGroup">
                <RadioButton
                  value="optionTwo"
                  name="optionTwo"
                  onChange={(e) => setSelectedOption(e.value)}
                  checked={selectedOption === "optionTwo"}
                  inputId="optTwo"
                />
                <label htmlFor="optTwo" style={{ marginLeft: "15px" }}>
                  {optionTwo}
                </label>
              </div>
              <Button
                className="fullWidth"
                type="submit"
                style={{ backgroundColor: "#00b2ff" }}
                label="Submit"
                onClick={(e) => onPollSubmit(e)}
              />
            </form>
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
    qid,
    optionOne: polls[qid].optionOne.text,
    optionTwo: polls[qid].optionTwo.text,
  };
};
export default connect(mapStateToProps)(AnsweredPoll);
