import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./header";
import Homepage from "./homepage/";
import AddQuestion from "./newPoll";
import Leaderboard from "./leaderboard/leaderboard";
import Question from "./poll/";
import NotFound from "./NotFound";

export default function AuthedContent() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/add" component={AddQuestion} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/questions/:id" component={Question} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}
