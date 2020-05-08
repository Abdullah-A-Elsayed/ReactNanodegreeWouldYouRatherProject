import React from "react";
import { ProgressBar } from "primereact/progressbar";
export default function optionProgress({
  text,
  percentage,
  isSelected,
  nVotes,
  total,
}) {
  return (
    <div className={`resultsOption ${isSelected ? "activeOption" : ""}`}>
      {isSelected && (
        <div className="voteCircle">
          <b>Your</b>
          <b>Vote</b>
        </div>
      )}
      <h4>Would you rather {text}?</h4>
      <ProgressBar value={percentage} />
      <div className="center">
        <h4 style={{ color: "black" }}>
          {nVotes} of {total} votes
        </h4>
      </div>
    </div>
  );
}
