import React from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import Homepage from "./homepage/";
import AddQuestion from "./newPoll";
import Leaderboard from "./leaderboard";
import Question from "./poll/";
export default function AuthedContent() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/addQuestion" component={AddQuestion} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/question/:id" component={Question} />
    </>
  );
}
