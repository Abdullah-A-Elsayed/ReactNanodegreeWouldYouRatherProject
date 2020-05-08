import React from "react";
import Results from "./pollResults";
import Unanswered from "./unAnsweredPoll";
import { connect } from "react-redux";
function Question({ isAnswered, qid }) {
  return <>{isAnswered ? <Results qid={qid} /> : <Unanswered qid={qid} />}</>;
}
const mapStateToArgs = ({ authedUser, users }, { match }) => {
  let isAnswered =
    Object.keys(users[authedUser].answers).indexOf(match.params.id) > -1;
  return { isAnswered, qid: match.params.id };
};
export default connect(mapStateToArgs)(Question);
