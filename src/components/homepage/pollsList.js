import React from "react";
import PollHeader from "./pollHeader";

export default function PollsList({ polls }) {
  return (
    <div>
      {polls.map((pid) => (
        <PollHeader key={`homepage_${pid}`} pollID={pid} />
      ))}
    </div>
  );
}
