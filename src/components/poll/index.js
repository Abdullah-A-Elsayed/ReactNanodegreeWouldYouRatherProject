import React from "react";
import Results from "./pollResults";
import Unanswered from "./unAnsweredPoll";
import { connect } from "react-redux";
import NotFoundComponent from "../NotFound";
function Question({ isAnswered, qid, notFound }) {
  if (notFound) return <NotFoundComponent />;
  return <>{isAnswered ? <Results qid={qid} /> : <Unanswered qid={qid} />}</>;
}
const mapStateToArgs = ({ authedUser, users, polls }, { match }) => {
  if (!polls[match.params.id]) return { notFound: true };
  let isAnswered =
    Object.keys(users[authedUser].answers).indexOf(match.params.id) > -1;
  return { isAnswered, qid: match.params.id };
};
export default connect(mapStateToArgs)(Question);
