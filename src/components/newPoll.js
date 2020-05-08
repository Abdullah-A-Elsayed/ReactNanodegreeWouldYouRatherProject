import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import { handleAddNewPoll } from "../actions/shared";
import { useHistory } from "react-router-dom";
function NewPoll({ dispatch, authedUser }) {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const history = useHistory();
  const onPollSubmit = () => {
    if (!optionOne || !optionTwo) return alert("Both Options are required");
    dispatch(
      handleAddNewPoll({
        author: authedUser,
        optionOneText: optionOne,
        optionTwoText: optionTwo,
      })
    );
    history.push("/");
  };
  return (
    <div className="mainContainer">
      <Card
        className="myCard"
        header={<div className="myCardTitle center">Create New Question</div>}
      >
        <p>Complete the question</p>
        <h3>Would you rather ...</h3>
        <span className="p-float-label">
          <InputText
            id="optionOne"
            value={optionOne}
            onChange={(e) => setOptionOne(e.target.value)}
            className="fullWidth"
          />
          <label htmlFor="optionOne">Option One</label>
        </span>
        <h3 className="center">OR</h3>
        <span className="p-float-label">
          <InputText
            id="optionTwo"
            value={optionTwo}
            onChange={(e) => setOptionTwo(e.target.value)}
            className="fullWidth"
          />
          <label htmlFor="optionTwo">Option Two</label>
        </span>
        <br />
        <Button
          className="fullWidth"
          style={{ backgroundColor: "#00b2ff" }}
          label="Submit"
          onClick={onPollSubmit}
        />
      </Card>
    </div>
  );
}

export default connect(({ authedUser }) => ({ authedUser }))(NewPoll);
