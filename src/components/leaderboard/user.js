import React from "react";
import { Card } from "primereact/card";
export default function user({ user }) {
  const nAns = Object.keys(user.answers).length;
  const nQuestions = user.questions.length;
  return (
    <Card className="myCard">
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "25%", borderRight: "2px solid #eee" }}
          className="center"
        >
          <img
            src={user.avatarURL}
            className="mediumUserAvatar"
            alt={user.id}
          />
        </div>
        <div
          style={{
            width: "50%",
            borderRight: "2px solid #eee",
            padding: "0 15px",
          }}
        >
          <h2>{user.name}</h2>
          <div
            style={{ borderBottom: "2px solid #eee", paddingBottom: "10px" }}
          >
            <span style={{ fontWeight: "600" }}>Answered questions</span>
            <span style={{ float: "right" }}>{nAns}</span>
          </div>
          <div style={{ paddingTop: "10px" }}>
            <span style={{ fontWeight: "600" }}>Created questions</span>
            <span style={{ float: "right" }}>{nQuestions}</span>
          </div>
        </div>
        <div className="center" style={{ width: "25%" }}>
          <Card
            className="myCard"
            style={{ width: "80%", display: "inline-block" }}
            header={<div className="myCardTitle">Score</div>}
          >
            <div className="scoreCircle">
              <h3>{nAns + nQuestions}</h3>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}
