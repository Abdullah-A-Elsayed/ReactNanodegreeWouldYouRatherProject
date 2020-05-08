import React from "react";
import Answered from "./answeredPoll";
import Unanswered from "./unAnsweredPoll";
import { connect } from "react-redux";
function Question({ isAnswered, qid }) {
  return <>{isAnswered ? <Answered qid={qid} /> : <Unanswered qid={qid} />}</>;
}
const mapStateToArgs = ({ authedUser, users }, { match }) => {
  let isAnswered =
    Object.keys(users[authedUser].answers).indexOf(match.params.id) > -1;
  return { isAnswered, qid: match.params.id };
};
export default connect(mapStateToArgs)(Question);
